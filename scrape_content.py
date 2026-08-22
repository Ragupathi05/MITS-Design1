import urllib.request
import re
import json

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode('utf-8', errors='ignore')

def clean_text(html):
    html = re.sub(r'<[^>]+>', ' ', html)
    html = re.sub(r'&nbsp;', ' ', html)
    html = re.sub(r'&amp;', '&', html)
    html = re.sub(r'&lt;', '<', html)
    html = re.sub(r'&gt;', '>', html)
    html = re.sub(r'&#\d+;', '', html)
    html = re.sub(r'\s+', ' ', html)
    return html.strip()

def extract_main_content(html):
    # Remove header/footer/nav/script/style
    html = re.sub(r'<header[^>]*>.*?</header>', '', html, flags=re.DOTALL)
    html = re.sub(r'<footer[^>]*>.*?</footer>', '', html, flags=re.DOTALL)
    html = re.sub(r'<nav[^>]*>.*?</nav>', '', html, flags=re.DOTALL)
    html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
    html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
    return html

def get_tabs(html):
    """Find tab navigation items"""
    # Look for tab-pane divs or nav-tabs
    tabs = re.findall(r'<(?:div|section)[^>]+id=["\']([^"\']+)["\'][^>]*class=["\'][^"\']*(?:tab-pane|tab-content)[^"\']*["\'][^>]*>(.*?)</(?:div|section)>', html, re.DOTALL)
    return tabs

def get_about_text(html):
    main = extract_main_content(html)
    paras = re.findall(r'<p[^>]*>(.*?)</p>', main, re.DOTALL)
    result = []
    for p in paras:
        text = clean_text(p)
        if len(text) > 40 and text not in result:
            result.append(text)
    return result[:15]

def get_all_pdf_links(html):
    """Get all PDF/document links from the page"""
    main = extract_main_content(html)
    links = re.findall(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>([^<]{2,120})</a>', main)
    result = []
    seen = set()
    for href, title in links:
        title = clean_text(title)
        if not title or href in seen:
            continue
        seen.add(href)
        # Include PDFs and document links
        if (href.endswith('.pdf') or href.endswith('.xlsx') or href.endswith('.docx') or 
            href.endswith('.doc') or href.endswith('.pptx') or href.endswith('.rar') or
            href.endswith('.png') or href.endswith('.jpg')):
            if 'mits.ac.in' in href or href.startswith('/'):
                full_href = href if href.startswith('http') else 'https://mits.ac.in' + href
                result.append({'title': title, 'href': full_href})
    return result

def get_members_table(html):
    """Extract table data"""
    main = extract_main_content(html)
    tables = re.findall(r'<table[^>]*>(.*?)</table>', main, re.DOTALL)
    all_rows = []
    for table in tables:
        rows = re.findall(r'<tr[^>]*>(.*?)</tr>', table, re.DOTALL)
        for row in rows:
            cells = re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', row, re.DOTALL)
            cell_texts = [clean_text(c) for c in cells]
            if any(len(t) > 2 for t in cell_texts):
                all_rows.append(cell_texts)
    return all_rows

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

results = {}
for key, url in urls.items():
    try:
        html = fetch(url)
        about = get_about_text(html)
        docs = get_all_pdf_links(html)
        members = get_members_table(html)
        results[key] = {
            'url': url,
            'about': about,
            'docs': docs,
            'members': members[:30],
        }
        print(f"{key}: about={len(about)}, docs={len(docs)}, members={len(members)}")
    except Exception as e:
        print(f"{key}: ERROR {e}")
        results[key] = {'url': url, 'about': [], 'docs': [], 'members': []}

with open('scraped_cells.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
print("\nSaved to scraped_cells.json")
