"""Render the canonical A6 HTML leaves onto A4 sheets with vector crop marks.

Every leaf occupies a front/back pair. Only the title reverse has content;
the other reverses are blank. Print at 100%, duplex on the long edge.
"""
from pathlib import Path
import json
import os
import re
import shutil
import signal
import subprocess
import tempfile
import time

from pypdf import PdfReader, PdfWriter, Transformation
from pypdf.generic import ContentStream, DecodedStreamObject, RectangleObject

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
OUTPUT = ROOT / 'output/pdf/input-a6-schnittmarken.pdf'
SCRATCH = ROOT / 'tmp/pdfs/chapter-sheets'
MM = 72 / 25.4
TRIM_LEFT, TRIM_TOP = 52.5, 74.5
TRIM_WIDTH, TRIM_HEIGHT = 105, 148


def crop_marks():
    lines = ['q', '0.25 w', '0 G']
    for x in (TRIM_LEFT, TRIM_LEFT + TRIM_WIDTH):
        for y in (TRIM_TOP, TRIM_TOP + TRIM_HEIGHT):
            dx = -1 if x == TRIM_LEFT else 1
            dy = -1 if y == TRIM_TOP else 1
            lines.append(f'{(x + dx * 2) * MM:.8f} {(297 - y) * MM:.8f} m '
                         f'{(x + dx * 7) * MM:.8f} {(297 - y) * MM:.8f} l S')
            lines.append(f'{x * MM:.8f} {(297 - y - dy * 2) * MM:.8f} m '
                         f'{x * MM:.8f} {(297 - y - dy * 7) * MM:.8f} l S')
    return ('\n'.join([*lines, 'Q']) + '\n').encode('ascii')


def export():
    source = (HERE / 'template.html').read_text(encoding='utf-8')
    articles = re.findall(r'<article\b[^>]*>.*?</article>', source, re.S)
    if len(articles) != 9 or 'reverse-sheet' not in articles[1]:
        raise ValueError('Expected eight leaf fronts and the title reverse.')
    fronts = [articles[0], *articles[2:]]
    blank_back = '<article class="sheet reverse-sheet" aria-label="Blank reverse"></article>'
    faces = []
    for index, front in enumerate(fronts):
        faces.extend((front, articles[1] if index == 0 else blank_back))
    css = f'''
      @page {{ size: 210mm 297mm; margin: 0; }}
      html, body {{ width: 210mm; margin: 0; padding: 0; background: #fff; }}
      .export-page {{ position: relative; width: 210mm; height: 297mm;
                      break-inside: avoid; break-after: page; overflow: hidden; }}
      .export-page:last-child {{ break-after: auto; }}
      .export-page .sheet {{ position: absolute; left: {TRIM_LEFT}mm;
                            top: {TRIM_TOP}mm; background: transparent;
                            box-shadow: none; }}
      .hole {{ display: none; }}
      .crop-marks {{ position: absolute; left: 0; top: 0;
                     width: 210mm; height: 297mm; }}
    '''
    html = ('<!doctype html><html lang="de"><head><meta charset="utf-8">'
            '<title>Input - A6 title and chapter leaves with crop marks</title>'
            f'<link rel="stylesheet" href="{(HERE / "chapter-sheets.css").as_uri()}">'
            f'<style>{css}</style></head><body>'
            + ''.join(f'<section class="export-page">{face}</section>'
                      for face in faces) + '</body></html>')
    SCRATCH.mkdir(parents=True, exist_ok=True)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    html_path = SCRATCH / 'print.html'
    html_path.write_text(html, encoding='utf-8')
    raw_path = SCRATCH / 'rendered.pdf'
    raw_path.unlink(missing_ok=True)
    chrome = Path('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
    if not chrome.is_file():
        found = shutil.which('chromium') or shutil.which('google-chrome')
        if not found:
            raise RuntimeError('A Chrome/Chromium file renderer is required.')
        chrome = Path(found)
    # A private headless process converts only this local file. It does not
    # attach to, automate, or alter the user's browser or browser profile.
    with tempfile.TemporaryDirectory(prefix='pdf-render-', dir=SCRATCH) as profile:
        command = [
            str(chrome), '--headless', '--disable-gpu', '--disable-extensions',
            '--disable-sync', '--no-first-run', '--no-default-browser-check',
            f'--user-data-dir={profile}', '--allow-file-access-from-files',
            '--no-pdf-header-footer', f'--print-to-pdf={raw_path}',
            html_path.as_uri(),
        ]
        log_path = SCRATCH / 'render.log'
        with log_path.open('w') as log:
            process = subprocess.Popen(command, stdout=log, stderr=log,
                                       start_new_session=True)
            try:
                deadline = time.monotonic() + 45
                while time.monotonic() < deadline:
                    if (raw_path.is_file()
                            and raw_path.read_bytes().rstrip().endswith(b'%%EOF')):
                        break
                    if process.poll() is not None:
                        raise RuntimeError(log_path.read_text()[-2000:])
                    time.sleep(0.1)
                else:
                    raise TimeoutError('Local PDF renderer did not complete.')
            finally:
                # Some macOS Chrome builds remain alive after writing the PDF.
                # Stop only the isolated renderer process group.
                if process.poll() is None:
                    os.killpg(process.pid, signal.SIGTERM)
                    try:
                        process.wait(timeout=5)
                    except subprocess.TimeoutExpired:
                        os.killpg(process.pid, signal.SIGKILL)
                        process.wait(timeout=5)
    reader = PdfReader(raw_path)
    if len(reader.pages) != 16:
        raise ValueError(f'Expected 16 page faces, got {len(reader.pages)}.')
    writer = PdfWriter()
    trim = [TRIM_LEFT * MM, TRIM_TOP * MM,
            (TRIM_LEFT + TRIM_WIDTH) * MM, (TRIM_TOP + TRIM_HEIGHT) * MM]
    for page in reader.pages:
        # Chromium rounds its paper dimensions. Normalize the carrier box
        # to exact A4 while retaining CSS coordinates measured from the top.
        height = 297 * MM
        page.add_transformation(Transformation().translate(
            ty=height - float(page.mediabox.height)))
        page.mediabox = RectangleObject([0, 0, 210 * MM, height])
        page.cropbox = RectangleObject([0, 0, 210 * MM, height])
        page.trimbox = RectangleObject(trim)
        page.bleedbox = RectangleObject(trim)
        exported_page = writer.add_page(page)
        # Add marks in PDF point coordinates after normalizing the carrier.
        # This retains a real 0.25 pt stroke on every printer resolution.
        content = ContentStream(exported_page.get_contents(), writer)
        marks = DecodedStreamObject()
        marks.set_data(crop_marks())
        content.operations.extend(ContentStream(marks, writer).operations)
        exported_page.replace_contents(content)
    writer.add_metadata({
        '/Title': 'Input - A6 title and chapter leaves with crop marks',
        '/Author': 'Tim Ballaschke',
        '/Subject': 'A4 carrier; A6 trim; 100%; duplex on the long edge',
    })
    with OUTPUT.open('wb') as handle:
        writer.write(handle)
    print(json.dumps({'pdf': str(OUTPUT), 'pages': 16, 'leaves': 8,
                      'carrierMm': [210, 297], 'trimMm': [105, 148]}))


if __name__ == '__main__':
    export()
