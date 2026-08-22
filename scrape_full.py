import urllib.request
import re
import json

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode('utf-8', errors='ignore')

def clean(s):
    s = re.sub(r'<br\s*/?>', '\n', s, flags=re.IGNORECASE)
    s = re.sub(r'<[^>]+>', '', s)
    s = re.sub(r'&nbsp;', ' ', s)
    s = re.sub(r'&amp;', '&', s)
    s = re.sub(r'&rsquo;|&#8217;|&#39;', "'", s)
    s = re.sub(r'&lsquo;|&#8216;', "'", s)
    s = re.sub(r'&ldquo;|&#8220;', '"', s)
    s = re.sub(r'&rdquo;|&#8221;', '"', s)
    s = re.sub(r'&ndash;|&#8211;', '–', s)
    s = re.sub(r'&mdash;|&#8212;', '—', s)
    s = re.sub(r'&bull;|&#8226;', '•', s)
    s = re.sub(r'&lt;', '<', s)
    s = re.sub(r'&gt;', '>', s)
    s = re.sub(r'&#160;', ' ', s)
    s = re.sub(r'&#\d+;', '', s)
    s = re.sub(r'&[a-z]+;', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

def extract_links(html_fragment):
    links = []
    seen = set()
    for m in re.finditer(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', html_fragment, re.DOTALL):
        href = m.group(1).strip()
        title = clean(m.group(2))
        if href in seen or not title or len(title) < 2:
            continue
        seen.add(href)
        if href.startswith('http') or href.startswith('/'):
            full = href if href.startswith('http') else 'https://mits.ac.in' + href
            links.append({'title': title, 'href': full})
    return links

def extract_list_items(html_fragment):
    items = []
    for m in re.finditer(r'<li[^>]*>(.*?)</li>', html_fragment, re.DOTALL):
        t = clean(m.group(1))
        if t and len(t) > 3:
            items.append(t)
    return items

def extract_table_rows(html_fragment):
    rows = []
    for table_m in re.finditer(r'<table[^>]*>(.*?)</table>', html_fragment, re.DOTALL):
        table_html = table_m.group(1)
        for row_m in re.finditer(r'<tr[^>]*>(.*?)</tr>', table_html, re.DOTALL):
            cells = [clean(c) for c in re.findall(r'<t[dh][^>]*>(.*?)</t[dh]>', row_m.group(1), re.DOTALL)]
            if cells and any(c for c in cells):
                rows.append(cells)
    return rows

def split_by_headings(html):
    """Split HTML into sections by h2/h3/h4 headings"""
    # Find all headings with positions
    heading_re = re.compile(r'<(h[2-5])[^>]*>(.*?)</\1>', re.DOTALL)
    matches = list(heading_re.finditer(html))
    
    sections = []
    for i, m in enumerate(matches):
        tag = m.group(1)
        title = clean(m.group(2))
        if not title or len(title) < 2:
            continue
        start = m.end()
        end = matches[i+1].start() if i+1 < len(matches) else len(html)
        content_html = html[start:end]
        
        # Extract paragraphs
        paras = [clean(p) for p in re.findall(r'<p[^>]*>(.*?)</p>', content_html, re.DOTALL)]
        paras = [p for p in paras if len(p) > 20]
        
        # Extract links
        links = extract_links(content_html)
        
        # Extract list items
        items = extract_list_items(content_html)
        
        # Extract table rows
        table_rows = extract_table_rows(content_html)
        
        sections.append({
            'tag': tag,
            'title': title,
            'paras': paras,
            'links': links,
            'items': items,
            'table_rows': table_rows,
        })
    return sections

SKIP_TITLES = {'reach us', 'departments', 'get in touch', 'quick links', 'copyright', 
               'madanapalle institute', 'email:', 'phone:', 'address:'}
SKIP_PREFIXES = ('madanapalle institute of technology', 'reach us', 'departments', 'get in touch')

def is_skip(title):
    t = title.lower().strip()
    if t in SKIP_TITLES:
        return True
    for p in SKIP_PREFIXES:
        if t.startswith(p):
            return True
    return False

pages = {
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
for key, url in pages.items():
    print(f'Processing {key}...')
    try:
        html = fetch(url)
        html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
        html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
        
        sections = split_by_headings(html)
        # Filter out boilerplate sections
        sections = [s for s in sections if not is_skip(s['title'])]
        
        print(f'  {len(sections)} sections: {[s["title"][:30] for s in sections[:8]]}')
        results[key] = {'url': url, 'sections': sections}
    except Exception as e:
        print(f'  ERROR: {e}')
        results[key] = {'url': url, 'sections': []}

with open('full_sections.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
print('\nSaved to full_sections.json')
