"""Index demonstrable relations; do not infer adoption or exhaustive provenance."""
from pathlib import Path
import hashlib, json, re

ROOT=Path(__file__).resolve().parents[2]
OUT=ROOT/'output/ai-documentation-web'
def words(text): return re.findall(r'\w+',text.lower())
def norm(text): return ' '.join(words(text))
def sha(text): return hashlib.sha256(text.encode()).hexdigest()

def main():
    manuscript=json.loads((ROOT/'thesis/typesetting-compat/manuscript.json').read_text())
    aliases=json.loads((ROOT/'thesis/text/source/citation-aliases.json').read_text())
    old_path=ROOT/'ai-documentation/web-typesetting/section-provenance.json'
    old=json.loads(old_path.read_text()) if old_path.exists() else {'sections':[]}
    prior={s['title']:s['id'] for s in old['sections']}
    next_id=max((int(s['id'].split('-')[1]) for s in old['sections']),default=0)+1
    sections=[]
    for section in manuscript['sections']:
        paras=[p for p in manuscript['paragraphs'] if p['section_id']==section['id']]
        if not paras: continue
        sid=prior.get(section['title'])
        if not sid:
            sid=f'SEC-{next_id:03d}';next_id+=1
        keys=sorted({r['key'] for n in manuscript['notes'] if n['section_id']==section['id'] for r in n['references']})
        grams=set()
        for p in paras:
            tokens=words(re.sub(r'\(vgl\.[^()]*\)','',p['original']))
            grams.update(tuple(tokens[i:i+12]) for i in range(max(0,len(tokens)-11)))
        sections.append({'id':sid,'manuscript_section_id':section['id'],'title':section['title'],
                         'paragraph_ids':[p['id'] for p in paras], 'text_sha256':sha('\n'.join(p['original'] for p in paras)),
                         'source_keys':keys,'_grams':grams,'relations':[]})
    messages=[]
    for archive in json.loads((OUT/'catalog.json').read_text()):
        if archive.get('kind','communication_archive')!='communication_archive':continue
        payload=json.loads((OUT/(archive['id']+'.json')).read_text())
        grouped={}
        for line in payload['lines']:
            if 'preamble' in line['message_id']:continue
            grouped.setdefault(line['message_id'],[]).append(line)
        transcript=ROOT/archive['transcript']
        message_path=transcript.with_name(transcript.name.replace('-transcript.txt','-messages.jsonl'))
        if message_path.exists():
            records=[json.loads(l) for l in message_path.read_text().splitlines()]
            for i,record in enumerate(records,1):
                mid=f'{archive["id"]}-M{i:04d}';lines=grouped[mid]
                messages.append({'id':mid,'archive_id':archive['id'],'sequence':i,'role':record['role'],
                                 'phase':record.get('phase'), 'provider_message_id':record.get('message_id'),
                                 'text':record['text'], '_lines':lines, 'start_line':lines[0]['number'], 'end_line':lines[-1]['number']})
        else:
            body=[l for l in payload['lines'] if l['number']>=7]
            messages.append({'id':archive['id']+'-attachment','archive_id':archive['id'],'sequence':None,
                             'role':'supplied_material','text':'\n'.join(l['text'] for l in body),'_lines':body,
                             'start_line':body[0]['number'],'end_line':body[-1]['number']})
    key_labels={k:sorted({norm(a['label']) for a in aliases if a['key']==k}) for k in {k for s in sections for k in s['source_keys']}}
    for message in messages:
        normalized=norm(message['text']);tokens=words(message['text'])
        grams={tuple(tokens[i:i+12]) for i in range(max(0,len(tokens)-11))}
        matching_keys={key for key,labels in key_labels.items() if key.lower() in message['text'].lower() or any(label and label in normalized for label in labels)}
        for section in sections:
            common=section['_grams']&grams
            named=norm(section['title']) in normalized and section['title'] not in ['Einleitung','Schluss']
            cited=sorted(matching_keys & set(section['source_keys']))
            if not(common or named or cited):continue
            kinds=[]
            if common:kinds.append('textual_overlap')
            if named:kinds.append('explicit_section_mention')
            if cited:kinds.append('shared_scholarly_reference')
            excerpt=' '.join(sorted(common)[0]) if common else None
            needle=excerpt or (norm(section['title']) if named else key_labels[cited[0]][0])
            line_tokens=[];token_lines=[]
            for line in message['_lines']:
                tokens_on_line=words(line['text']);line_tokens.extend(tokens_on_line)
                token_lines.extend([line['number']]*len(tokens_on_line))
            needle_tokens=words(needle);match_line=None
            for i in range(len(line_tokens)-len(needle_tokens)+1):
                if line_tokens[i:i+len(needle_tokens)]==needle_tokens:
                    match_line=token_lines[i];break
            section['relations'].append({k:v for k,v in message.items() if k not in ['text','_lines']}|{
                'kinds':kinds,'source_keys':cited,'matching_excerpt':excerpt,'match_line':match_line,
                'preview':re.sub(r'\s+',' ',message['text'])[:260],
                'status':'located_evidence_pending_context_review',
                'target':f'{message["archive_id"]}-L{match_line or message["start_line"]:06d}'})
    for section in sections:
        section.pop('_grams')
        section['relations'].sort(key=lambda r:(-('textual_overlap' in r['kinds']),-('explicit_section_mention' in r['kinds']),r['archive_id'],r['start_line']))
    result={'scope':'initial subsection-level evidence index','manuscript_sha256':manuscript['source_pages_sha256'],
            'rules':['Stable section and canonical archive-line IDs; pagination is a separate generated lookup.',
                     'Literal twelve-word overlap, explicit section names and shared reference labels identify evidence candidates.',
                     'Candidates do not prove adoption, chronology or complete indirect conceptual influence.',
                     'Historical attachment/branch gaps remain; all relations require contextual review before thesis citation.'],
            'sections':sections}
    (OUT/'section-provenance.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    (ROOT/'ai-documentation/web-typesetting/section-provenance.json').write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n')
    print(json.dumps({s['title']:len(s['relations']) for s in sections},ensure_ascii=False))

if __name__=='__main__':main()
