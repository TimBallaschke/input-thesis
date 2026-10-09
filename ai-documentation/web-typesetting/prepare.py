"""Prepare a separate read-only typesetting edition; archives remain immutable."""
from pathlib import Path
import hashlib, json, re, shutil
from plugin_adapter import adapt_plugin

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
OUT = ROOT / 'output/ai-documentation-web'
WEB = ROOT / 'tmp/vivliostyle-compat/web'
ROLE_LABELS = {'user': 'User', 'assistant': 'System'}

def digest(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT/'pages').mkdir(exist_ok=True)
    catalog=[]; short_headers=[]
    imported_roles=json.loads((HERE/'imported-message-roles.json').read_text())['archives']
    exclusions=json.loads((HERE/'display-exclusions.json').read_text())['messages']
    mapping=json.loads((ROOT/'ai-documentation/zuordnung/unterkapitel-ki-zuordnung.json').read_text())
    applied_exclusions=set()
    def save_record(aid,title,p,lines,kind,omitted):
        record={'id':aid,'title':title,'transcript':str(p.relative_to(ROOT)),
                'sha256':digest(p),'kind':kind,'lines':lines}
        if omitted:
            record['display_exclusions']=omitted
        (OUT/f'{aid}.json').write_text(json.dumps(record,ensure_ascii=False))
        catalog.append({k:v for k,v in record.items() if k!='lines'}|{
            'canonical_lines':sum(not line.get('display_only') for line in lines),
            'display_only_lines':sum(bool(line.get('display_only')) for line in lines)})
    source=(ROOT/'ai-documentation/documentation.tex').read_text()
    for title, aid, rel in re.findall(r'\\archivefile\{([^}]+)\}\{([^}]+)\}\{([^}]+)\}',source):
        p=ROOT/'ai-documentation'/rel
        lines=[]; message='preamble'; message_role=None
        for raw in p.read_text().splitlines():
            m=re.fullmatch(r'(\d+) \| ?(.*)',raw)
            assert m, (p,raw)
            n,text=int(m[1]),m[2]
            mh=re.match(r'MESSAGE (\d+) \|',text)
            if mh:
                message=f'M{int(mh[1]):04d}'
                header=re.fullmatch(r'MESSAGE (\d+) \| (\S+) \| (USER|ASSISTANT) \| (\w+)',text)
                assert header, (aid,n,text)
                message_role=header[3].lower()
            line={'number':n,'text':text,'id':f'{aid}-L{n:06d}',
                  'message_id':f'{aid}-{message}','message_start':bool(mh),'message_role':message_role}
            lines.append(line)
            if mh:
                header=re.fullmatch(r'MESSAGE (\d+) \| (\S+) \| (USER|ASSISTANT) \| (\w+)',text)
                assert header, (aid,n,text)
                short_headers.append(line|{'text':ROLE_LABELS[message_role]})
        # Exclude generated archive prefaces, retaining immutable canonical IDs.
        # Structured chats begin at their first message; imported drafts/feedback
        # begin after their generated preface's first blank line.
        first_message=next((i for i,l in enumerate(lines) if l['message_start']),None)
        if first_message is not None:
            start=first_message
        else:
            assert lines[0]['text']=='AI COLLABORATION DOCUMENTATION - IMPORTED MATERIAL', aid
            start=next(i for i,l in enumerate(lines) if not l['text'].strip())+1
        retained=lines[start:]
        if aid in imported_roles:
            annotation=imported_roles[aid]
            assert first_message is None and digest(p)==annotation['transcript_sha256'], aid
            boundaries={item['start_line']:item for item in annotation['boundaries']}
            annotated=[]; current_role=None; current_message=None
            for line in retained:
                if line['number'] in boundaries:
                    boundary=boundaries[line['number']]
                    assert line['text'].startswith(boundary['starts_with']), (aid,line)
                    current_role=boundary['role']
                    current_message=f'{aid}-imported-L{line["number"]:06d}'
                    if annotated and annotated[-1]['text'].strip():
                        annotated.append(line|{'id':f'{aid}-G{line["number"]:06d}', 'number':None,
                            'text':'', 'display_only':True, 'message_role':None})
                    display_header=line|{'id':f'{aid}-H{line["number"]:06d}', 'number':None,
                        'text':ROLE_LABELS[current_role], 'message_id':current_message,
                        'message_role':current_role, 'message_start':True, 'display_only':True,
                        'role_provenance':'editorial_annotation_of_supplied_text'}
                    annotated.append(display_header);short_headers.append(display_header)
                annotated.append(line|{'message_role':current_role,'message_id':current_message,
                    'role_provenance':'editorial_annotation_of_supplied_text'})
            assert current_role is not None and all(any(l['number']==n for l in retained) for n in boundaries), aid
            retained=annotated
        omitted=[item for item in exclusions if item['archive_id']==aid]
        for item in omitted:
            assert digest(p)==item['archive_sha256'], 'Excluded message archive changed: '+aid
            message_lines=[line for line in retained if line['message_id']==item['message_id']]
            assert message_lines and all(line['message_role']==item['role'] for line in message_lines)
            numbered=[line['number'] for line in message_lines if not line.get('display_only')]
            assert min(numbered)==item['canonical_start_line'] and max(numbered)==item['canonical_end_line']
            overlaps=[ref['id'] for ref in mapping['references'] if ref['archive_id']==aid
                and ref['canonical_start_line']<=item['canonical_end_line']
                and ref['canonical_end_line']>=item['canonical_start_line']]
            assert not overlaps, 'Excluded message is cited: '+str(overlaps)
            retained=[line for line in retained if line['message_id']!=item['message_id']]
            applied_exclusions.add(item['message_id'])
        # A generated separator before the new first message has no neighbour.
        while omitted and retained and retained[0].get('display_only') and not retained[0]['text'].strip():
            retained.pop(0)
        retained_headers={line['id'] for line in retained if line['message_start']}
        short_headers=[line for line in short_headers if not line['id'].startswith(aid+'-')
                       or line['id'] in retained_headers]
        save_record(aid,title,p,retained,'communication_archive',omitted)
        catalog[-1]['omitted_archive_preface_lines']=start
        if omitted:
            catalog[-1]['display_exclusions']=omitted
    assert applied_exclusions=={item['message_id'] for item in exclusions}
    (OUT/'catalog.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n')
    header_record={'id':'_message-headers','title':'Compact message headers',
                   'sha256':hashlib.sha256(json.dumps(short_headers,ensure_ascii=False).encode()).hexdigest(),
                   'lines':short_headers}
    (OUT/'_message-headers.json').write_text(json.dumps(header_record,ensure_ascii=False))
    for name in ['compose.html','compose.js','document.css','duplex.css','preview.html','preview.js','print.html']:
        shutil.copy2(HERE/name, OUT/name)
    shutil.copy2(ROOT/'website/assets/fonts/Arketa.otf', OUT/'arketa.otf')
    original_plugin=ROOT.parent/'web-to-print/public/auto-typeset.js'
    (OUT/'arketa-auto-typeset.js').write_text(adapt_plugin(original_plugin.read_bytes()))
    link=OUT/'auto-typeset.js'
    if not link.exists(): link.symlink_to(ROOT.parent/'web-to-print/public/auto-typeset.js')
    link=WEB/'ai-documentation'
    if not link.exists(): link.symlink_to(OUT, target_is_directory=True)
    print(json.dumps({'document_blocks':len(catalog),'communication_archives':sum(a['kind']=='communication_archive' for a in catalog),'canonical_lines':sum(a['canonical_lines'] for a in catalog)},ensure_ascii=False))

if __name__=='__main__': main()
