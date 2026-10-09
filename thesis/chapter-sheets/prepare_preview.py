"""Copy the separate A6 template into the existing local thesis preview."""
from pathlib import Path
import shutil

HERE = Path(__file__).resolve().parent
ROOT = HERE.parents[1]
DESTINATION = ROOT / 'tmp/vivliostyle-compat/web/chapter-sheets'
FONT = ROOT / 'website/assets/fonts/Arketa.otf'


def prepare():
    if not FONT.is_file():
        raise SystemExit(f'Arketa-Schrift fehlt: {FONT}')
    DESTINATION.mkdir(parents=True, exist_ok=True)
    shutil.copy2(HERE / 'template.html', DESTINATION / 'template.html')
    shutil.copy2(FONT, DESTINATION / 'Arketa.otf')
    css = (HERE / 'chapter-sheets.css').read_text(encoding='utf-8')
    css = css.replace("url('../../website/assets/fonts/Arketa.otf')", "url('./Arketa.otf')")
    (DESTINATION / 'chapter-sheets.css').write_text(css, encoding='utf-8')
    print('http://127.0.0.1:8768/chapter-sheets/template.html')


if __name__ == '__main__':
    prepare()
