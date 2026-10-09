"""Reuse the same contour-based plugin adapter as the thesis sources."""
from pathlib import Path
from runpy import run_path

ADAPTER = Path(__file__).resolve().parents[2] / 'thesis/typesetting-compat/source_plugin_adapter.py'
adapt_plugin = run_path(str(ADAPTER))['adapt_plugin']
