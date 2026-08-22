import urllib.request
import re
import json

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode('utf-8', errors='ignore')

def get_text_blocks(html):
    # Remove scripts/styles
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
    # Get paragraphs
    paras = re.findall(r'<p[^>]*>(.*?)</p>', html, re.DOTALL)
    result = []
    for p in paras:
        text = re.sub(r'<[^>]+>', '', p).strip()
        text = re.sub(r'\s+', ' ', text)
        if len(text) > 30:
            result.append(text)
    return result

def get_links(html, base_url=''):
    links = re.findall(r'href=["\']([^"\'#?]+)["\'][^>]*>([^<]{3,80})<', html)
    result = []
    seen = set()
    for h, t in links:
        t = t.strip()
        if not h or h in seen:
            continue
        seen.add(h)
        if h.startswith('http') and 'mits.ac.in' in h:
            result.append({'title': t, 'href': h})
        elif h.startswith('/') and not h.startswith('//'):
            result.append({'title': t, 'href': 'https://mits.ac.in' + h})
    return result

urls = {
    'nss': 'https://mits.ac.in/nss',
    'ncc-army': 'https://mits.ac.in/ncc',
    'ncc-air': 'https://mits.ac.in/ncc-airwing',
    'ieee': 'https://mits.ac.in/ieee',
    'iste': 'https://mits.ac.in/iste',
    'iete': 'https://mits.ac.in/iete',
    'iei': 'https://mits.ac.in/iei',
    'csi': 'https://mits.ac.in/csi-content',
    'nasscom': 'https://mits.ac.in/nasscom-cell',
    'nep': 'https://mits.ac.in/nep-cell',
    'dts': 'https://mits.ac.in/dts',
    'cii': 'https://mits.ac.in/innovation-center',
    'ipfc': 'https://mits.ac.in/ipfc',
    'iiic': 'https://mits.ac.in/iiic',
    'edc': 'https://mits.ac.in/ed-cell',
    'ipr': 'https://mits.ac.in/ipr',
    'rd-cell': 'https://mits.ac.in/r&d-cell',
}

for key, url in urls.items():
    try:
        html = fetch(url)
        links = get_links(html)
        # Filter to only links that look like sub-pages (not nav/footer)
        sub_links = [l for l in links if any(kw in l['href'].lower() for kw in [key.replace('-',''), key, 'nss', 'ncc', 'ieee', 'iste', 'iete', 'iei', 'csi', 'nasscom', 'nep', 'dts', 'cii', 'ipfc', 'iiic', 'edc', 'ipr', 'rd'])]
        print(f"\n=== {key} ({url}) ===")
        print(f"Total links: {len(links)}, Sub-links: {len(sub_links)}")
        for l in sub_links[:10]:
            print(f"  {l['title']!r} -> {l['href']}")
        # Also show all pdf links
        pdfs = [l for l in links if l['href'].endswith('.pdf')]
        print(f"  PDFs: {len(pdfs)}")
        for p in pdfs[:5]:
            print(f"    {p['title']!r} -> {p['href']}")
    except Exception as e:
        print(f"\n=== {key}: ERROR {e} ===")
