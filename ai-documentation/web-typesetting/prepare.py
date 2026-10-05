"""Prepare a separate read-only typesetting edition; archives remain immutable."""
from pathlib import Path
import hashlib, json, re, shutil
from plugin_adapter import adapt_plugin

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
OUT = ROOT / 'output/ai-documentation-web'
WEB = ROOT / 'tmp/vivliostyle-compat/web'

def digest(p):
    return hashlib.sha256(p.read_bytes()).hexdigest()

def main():
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT/'pages').mkdir(exist_ok=True)
    catalog=[]; short_headers=[]
    def save_record(aid,title,p,lines,kind):
        record={'id':aid,'title':title,'transcript':str(p.relative_to(ROOT)),
                'sha256':digest(p),'kind':kind,'lines':lines}
        (OUT/f'{aid}.json').write_text(json.dumps(record,ensure_ascii=False))
        catalog.append({k:v for k,v in record.items() if k!='lines'}|{'canonical_lines':len(lines)})
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
                short_headers.append(line|{'text':header[3].title()})
        # Exclude generated archive prefaces, retaining immutable canonical IDs.
        # Structured chats begin at their first message; imported drafts/feedback
        # begin after their generated preface's first blank line.
        first_message=next((i for i,l in enumerate(lines) if l['message_start']),None)
        if first_message is not None:
            start=first_message
        else:
            assert lines[0]['text']=='AI COLLABORATION DOCUMENTATION - IMPORTED MATERIAL', aid
            start=next(i for i,l in enumerate(lines) if not l['text'].strip())+1
        save_record(aid,title,p,lines[start:],'communication_archive')
        catalog[-1]['omitted_archive_preface_lines']=start
    (OUT/'catalog.json').write_text(json.dumps(catalog,ensure_ascii=False,indent=2)+'\n')
    header_record={'id':'_message-headers','title':'Compact message headers',
                   'sha256':hashlib.sha256(json.dumps(short_headers,ensure_ascii=False).encode()).hexdigest(),
                   'lines':short_headers}
    (OUT/'_message-headers.json').write_text(json.dumps(header_record,ensure_ascii=False))
    for name in ['compose.html','compose.js','document.css','preview.html','preview.js','print.html']:
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
