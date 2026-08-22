import urllib.request
import re

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode('utf-8', errors='ignore')

def get_main_content(html):
    # Remove scripts/styles
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
    # Try to find main content div
    m = re.search(r'<div[^>]+class=["\'][^"\']*(?:main-content|content-area|page-content|inner-content)[^"\']*["\'][^>]*>(.*?)</div>', html, re.DOTALL)
    if m:
        return m.group(1)
    return html

pages = {
    'iste': 'https://mits.ac.in/iste',
    'iiic': 'https://mits.ac.in/iiic',
    'ncc': 'https://mits.ac.in/ncc',
    'ieee': 'https://mits.ac.in/ieee',
}

for name, url in pages.items():
    print(f'\n{"="*60}')
    print(f'PAGE: {name}')
    print('='*60)
    html = fetch(url)
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
    
    # Find all h2-h5 with surrounding context
    for m in re.finditer(r'<h([2-5])[^>]*>(.*?)</h\1>', html, re.DOTALL):
        txt = re.sub(r'<[^>]+>', '', m.group(2)).strip()
        if txt and len(txt) > 2:
            # Get 200 chars after heading
            after = html[m.end():m.end()+300]
            after_clean = re.sub(r'<[^>]+>', ' ', after)
            after_clean = re.sub(r'\s+', ' ', after_clean).strip()[:150]
            print(f'  H{m.group(1)}: {txt[:60]}')
            if after_clean:
                print(f'       -> {after_clean}')
