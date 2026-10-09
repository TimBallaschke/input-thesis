"""Add destinations for empty rows and canonical aliases omitted by Chromium."""
from pathlib import Path
import json
import os

from pypdf import PdfReader, PdfWriter
from pypdf.generic import ArrayObject, DictionaryObject, FloatObject, NameObject, NumberObject, TextStringObject

ROOT = Path(__file__).resolve().parents[2]
PDF = ROOT / 'output/pdf/input-ki-dokumentation.pdf'
MM = 72 / 25.4


def finalize():
    edition = json.loads((ROOT / 'output/ai-documentation-web/edition.json').read_text())
    reader = PdfReader(PDF)
    assert len(reader.pages) == len(edition['pages'])
    original_destinations = reader.named_destinations
    writer = PdfWriter(clone_from=reader)
    # Chromium uses the legacy catalog /Dests dictionary. A PDF reader would
    # otherwise prefer that incomplete dictionary over the new name tree.
    writer._root_object.pop('/Dests', None)
    names = ArrayObject()
    for anchor, target in sorted(edition['targets'].items()):
        page = writer.pages[target['page'] - 1]
        left_mm = (30 if target['page'] % 2 else 8) + (target.get('column', 1) - 1) * 88.5
        top = float(page.mediabox.height) - (8 + (target.get('physical_row', 1) - 1) * 281 / 102) * MM
        destination = ArrayObject([page.indirect_reference, NameObject('/XYZ'), FloatObject(left_mm * MM), FloatObject(top), NumberObject(0)])
        names.extend([TextStringObject('/' + anchor), destination])
    catalog_names = writer._root_object.get('/Names', DictionaryObject()).get_object()
    catalog_names[NameObject('/Dests')] = writer._add_object(DictionaryObject({NameObject('/Names'): names}))
    writer._root_object[NameObject('/Names')] = catalog_names
    writer.add_metadata({'/Title': 'Input - KI-Dokumentation', '/Author': 'Tim Ballaschke', '/Subject': 'Aktuelle HTML-Satzfassung; A4; Duplex an der langen Kante'})
    temporary = PDF.with_suffix('.pending.pdf')
    with temporary.open('wb') as handle:
        writer.write(handle)
    os.replace(temporary, PDF)
    print(json.dumps({'pdf_destinations': len(edition['targets']), 'additional_destinations': len(edition['targets']) - len(original_destinations)}))


if __name__ == '__main__':
    finalize()
