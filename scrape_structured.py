import urllib.request
import re
import json

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urllib.request.urlopen(req, timeout=20) as r:
        return r.read().decode('utf-8', errors='ignore')

def clean_html(s):
    s = re.sub(r'<br\s*/?>', '\n', s)
    s = re.sub(r'<[^>]+>', '', s)
    s = re.sub(r'&nbsp;', ' ', s)
    s = re.sub(r'&amp;', '&', s)
    s = re.sub(r'&rsquo;|&#8217;', "'", s)
    s = re.sub(r'&lsquo;|&#8216;', "'", s)
    s = re.sub(r'&ldquo;|&#8220;', '"', s)
    s = re.sub(r'&rdquo;|&#8221;', '"', s)
    s = re.sub(r'&ndash;|&#8211;', '–', s)
    s = re.sub(r'&mdash;|&#8212;', '—', s)
    s = re.sub(r'&bull;|&#8226;', '•', s)
    s = re.sub(r'&lt;', '<', s)
    s = re.sub(r'&gt;', '>', s)
    s = re.sub(r'&#\d+;', '', s)
    s = re.sub(r'&[a-z]+;', '', s)
    s = re.sub(r'\s+', ' ', s)
    return s.strip()

def extract_links(html_fragment):
    links = []
    seen = set()
    for m in re.finditer(r'<a[^>]+href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', html_fragment, re.DOTALL):
        href = m.group(1).strip()
        title = clean_html(m.group(2))
        if href in seen or not title or len(title) < 2:
            continue
        seen.add(href)
        if href.startswith('http') or href.startswith('/'):
            full = href if href.startswith('http') else 'https://mits.ac.in' + href
            links.append({'title': title, 'href': full})
    return links

def extract_section_content(html, heading_text):
    """Extract content after a heading until the next heading"""
    # Find the heading
    pattern = re.compile(r'<h[2-5][^>]*>[^<]*' + re.escape(heading_text) + r'[^<]*</h[2-5]>', re.IGNORECASE)
    m = pattern.search(html)
    if not m:
        return ''
    start = m.end()
    # Find next heading
    next_h = re.search(r'<h[2-5][^>]*>', html[start:])
    end = start + next_h.start() if next_h else start + 5000
    return html[start:end]

def get_year_sections(html):
    """Extract year-wise accordion sections"""
    sections = {}
    # Find year headings like 2025-26, 2024-25 etc
    year_pattern = re.compile(r'<h[2-6][^>]*>\s*(20\d\d-\d\d)\s*</h[2-6]>', re.IGNORECASE)
    matches = list(year_pattern.finditer(html))
    for i, m in enumerate(matches):
        year = m.group(1)
        start = m.end()
        end = matches[i+1].start() if i+1 < len(matches) else start + 10000
        content = html[start:end]
        links = extract_links(content)
        if links:
            sections[year] = links
    return sections

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
    print(f'Fetching {key}...')
    try:
        html = fetch(url)
        # Remove scripts/styles/header/footer/nav
        html = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
        html = re.sub(r'<style[^>]*>.*?</style>', '', html, flags=re.DOTALL)
        
        # Get all headings
        headings = [(m.group(1), m.group(2), m.start()) for m in re.finditer(r'<(h[2-5])[^>]*>(.*?)</\1>', html, re.DOTALL)]
        headings_clean = [(tag, clean_html(txt), pos) for tag, txt, pos in headings]
        
        # Get year sections
        year_sections = get_year_sections(html)
        
        # Get all paragraphs in main content
        paras = re.findall(r'<p[^>]*>(.*?)</p>', html, re.DOTALL)
        about_paras = []
        for p in paras:
            t = clean_html(p)
            if len(t) > 40 and t not in about_paras:
                # Skip boilerplate
                if not any(skip in t for skip in ['Get in touch', 'Reach Us', 'Departments', 'Quick Links', 'Copyright']):
                    about_paras.append(t)
        
        # Get all links
        all_links = extract_links(html)
        doc_links = [l for l in all_links if any(l['href'].endswith(ext) for ext in ['.pdf', '.xlsx', '.docx', '.doc', '.pptx', '.rar', '.png', '.jpg'])]
        
        results[key] = {
            'url': url,
            'headings': [(tag, txt) for tag, txt, pos in headings_clean if len(txt) > 2][:30],
            'year_sections': year_sections,
            'about_paras': about_paras[:15],
            'doc_links': doc_links,
        }
        print(f'  headings={len(results[key]["headings"])}, years={list(year_sections.keys())[:5]}, paras={len(about_paras)}, docs={len(doc_links)}')
    except Exception as e:
        print(f'  ERROR: {e}')
        results[key] = {'url': url, 'headings': [], 'year_sections': {}, 'about_paras': [], 'doc_links': []}

with open('structured_cells.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)
print('\nSaved to structured_cells.json')
