"""Show the composed test pages locally; authoring happens through prompts."""
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse
import json
import shutil
import subprocess

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
WEB = ROOT / 'tmp/vivliostyle-compat/web'


def prepare():
    if not (WEB / 'frozen.html').exists():
        raise SystemExit('Zuerst den Satzversuch mit check_browser.mjs frozen erzeugen.')
    for name in ['preview.html', 'preview.js']:
        shutil.copy2(HERE / name, WEB / name)
    core = ROOT / 'tmp/vivliostyle-compat/runtime/node_modules/@vivliostyle/core/lib/vivliostyle.js'
    esbuild = ROOT.parent / 'web-to-print/node_modules/.bin/esbuild'
    if not core.exists() or not esbuild.exists():
        raise SystemExit('Lokale Vivliostyle- oder Web-to-Print-Laufzeit fehlt.')
    entry = WEB / 'core-entry.js'
    entry.write_text(f'export {{ CoreViewer }} from {json.dumps(str(core))};\n')
    subprocess.run([str(esbuild), str(entry), '--bundle', '--format=esm', '--platform=browser',
                    f'--outfile={WEB / "vivliostyle-core.js"}'], check=True)
    viewer_link = WEB / 'viewer'
    if not viewer_link.exists():
        viewer_link.symlink_to('../runtime/node_modules/@vivliostyle/viewer/lib', target_is_directory=True)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--port', type=int, default=8768)
    args = parser.parse_args()
    prepare()
    handler = lambda *a, **kw: SimpleHTTPRequestHandler(*a, directory=str(WEB), **kw)
    print(f'Satzvorschau: http://127.0.0.1:{args.port}/preview.html', flush=True)
    ThreadingHTTPServer(('127.0.0.1', args.port), handler).serve_forever()
