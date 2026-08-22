import urllib.request
import re

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode('utf-8', errors='ignore')

def clean(s):
    s = re.sub(r'<[^>]+>', ' ', s)
    s = re.sub(r'&[a-z]+;', ' ', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

pages = {
    'nss': 'https://mits.ac.in/nss',
    'ncc': 'https://mits.ac.in/ncc',
    'ieee': 'https://mits.ac.in/ieee',
    'iste': 'https://mits.ac.in/iste',
    'cii': 'https://mits.ac.in/innovation-center',
    'edc': 'https://mits.ac.in/ed-cell',
    'iiic': 'https://mits.ac.in/iiic',
}

for name, url in pages.items():
    print(f'\n{"="*60}')
    print(f'PAGE: {name} ({url})')
    print('='*60)
    html = fetch(url)
    
    # Remove scripts/styles
    html2 = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    html2 = re.sub(r'<style[^>]*>.*?</style>', '', html2, flags=re.DOTALL)
    
    # Find nav tabs
    nav_tabs = re.findall(r'<(?:a|li)[^>]+(?:data-toggle|data-bs-toggle)=["\']tab["\'][^>]*>(.*?)</(?:a|li)>', html2, re.DOTALL)
    if nav_tabs:
        print('NAV TABS:', [clean(t) for t in nav_tabs])
    
    # Find tab pane divs
    tab_panes = re.findall(r'<div[^>]+class=["\'][^"\']*tab-pane[^"\']*["\'][^>]*id=["\']([^"\']+)["\']', html2)
    if not tab_panes:
        tab_panes = re.findall(r'<div[^>]+id=["\']([^"\']+)["\'][^>]*class=["\'][^"\']*tab-pane[^"\']*["\']', html2)
    if tab_panes:
        print('TAB PANE IDs:', tab_panes)
    
    # Find section headings
    headings = re.findall(r'<h[2-5][^>]*>(.*?)</h[2-5]>', html2, re.DOTALL)
    cleaned_h = [clean(h) for h in headings if len(clean(h)) > 3]
    print('HEADINGS:', cleaned_h[:20])
    
    # Find any data-tab or accordion structures
    accordions = re.findall(r'class=["\'][^"\']*(?:accordion|collapse|panel)[^"\']*["\']', html2)
    if accordions:
        print('ACCORDION/COLLAPSE found:', len(accordions))
    
    # Find main content area
    main = re.findall(r'<(?:main|article|section)[^>]*>(.*?)</(?:main|article|section)>', html2, re.DOTALL)
    if main:
        print('MAIN CONTENT length:', len(main[0]))
