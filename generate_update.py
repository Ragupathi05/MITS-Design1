import json, re

with open('scraped_cells.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

def clean(s):
    # Clean HTML entities
    s = re.sub(r'&rsquo;', "'", s)
    s = re.sub(r'&lsquo;', "'", s)
    s = re.sub(r'&ldquo;', '"', s)
    s = re.sub(r'&rdquo;', '"', s)
    s = re.sub(r'&ndash;', '–', s)
    s = re.sub(r'&mdash;', '—', s)
    s = re.sub(r'&amp;', '&', s)
    s = re.sub(r'&bull;', '•', s)
    s = re.sub(r'&nbsp;', ' ', s)
    s = re.sub(r'&lt;', '<', s)
    s = re.sub(r'&gt;', '>', s)
    s = re.sub(r'&#\d+;', '', s)
    s = re.sub(r'-->', '', s)
    s = re.sub(r'\s+', ' ', s).strip()
    return s

# Map scraped keys to cellsDetailData keys
key_map = {
    'nss': 'nss',
    'ncc-army': 'ncc-army',
    'ncc-air': 'ncc-air',
    'ieee': 'ieee',
    'iste': 'iste',
    'iete': 'iete',
    'iei': 'iei',
    'csi': 'csi',
    'nasscom': 'nasscom',
    'nep': 'nep',
    'dts': 'dts',
    'cii': 'cii',
    'ipfc': 'ipfc',
    'iiic': 'iiic',
    'edc': 'edc',
    'ipr': 'ipr',
    'rd-cell': 'rd-cell',
}

# Cell names
names = {
    'nss': 'National Service Scheme',
    'ncc-army': 'National Cadet Corps (Army)',
    'ncc-air': 'National Cadet Corps (Air Wing)',
    'ieee': 'IEEE Student Branch',
    'iste': 'ISTE Student Chapter',
    'iete': 'IETE Student Chapter',
    'iei': 'Institution of Engineers (India) - IEI',
    'csi': 'Computer Society of India - CSI',
    'nasscom': 'NASSCOM Cell',
    'nep': 'National Education Policy Cell',
    'dts': 'Design Thinking Studio',
    'cii': 'Centre of Innovation & Incubation',
    'ipfc': 'Intellectual Property Facilitation Centre',
    'iiic': 'Industry-Institute Interaction Cell',
    'edc': 'Entrepreneurship Development Cell',
    'ipr': 'Intellectual Property Rights Cell',
    'rd-cell': 'R & D Cell',
}

# Contacts from original data (we'll keep these)
contacts = {
    'nss': [{"name": "NSS Programme Officer", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-9100069516; 8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'ncc-army': [{"name": "NCC Officer", "designation": "Coordinator - NCC Army Wing", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'ncc-air': [{"name": "NCC Officer", "designation": "Coordinator - NCC Air Wing", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'ieee': [{"name": "IEEE Student Branch Counsellor", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'iste': [{"name": "ISTE Chapter Coordinator", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'iete': [{"name": "IETE Chapter Coordinator", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'iei': [{"name": "IEI Chapter Coordinator", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'csi': [{"name": "CSI Chapter Coordinator", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'nasscom': [{"name": "Dr. E. Sandhya", "designation": "NASSCOM SPOC & Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'nep': [{"name": "NEP Cell Coordinator", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'dts': [{"name": "DTS Coordinator", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'cii': [{"name": "IIC Coordinator", "designation": "Coordinator - Centre of Innovation & Incubation", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'ipfc': [{"name": "Dr. R. Thulasiram Naidu", "designation": "IPFC In-charge", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'iiic': [{"name": "IIIC Coordinator", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'edc': [{"name": "EDC Coordinator", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'ipr': [{"name": "IPR Cell Coordinator", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
    'rd-cell': [{"name": "R&D Cell Coordinator", "designation": "Coordinator", "email": "", "phone": "Phone :\n+91-8571-280255; 280706\n", "address": "Madanapalle Institute of Technology & Science"}],
}

# Build members from table data
def build_members(rows):
    if not rows:
        return []
    members = []
    # Check if first row is a header
    if not rows:
        return []
    header = rows[0] if rows else []
    # Try to detect if it's a standard S.No/Name/Designation/Position/Email table
    if len(header) >= 4 and any('name' in h.lower() for h in header):
        for row in rows[1:]:
            if len(row) >= 4:
                m = {
                    'sno': row[0] if len(row) > 0 else '',
                    'name': row[1] if len(row) > 1 else '',
                    'designation': row[2] if len(row) > 2 else '',
                    'position': row[3] if len(row) > 3 else '',
                    'email': row[4] if len(row) > 4 else '',
                }
                members.append(m)
    return members

# Build output
output = {}
for scraped_key, cell_key in key_map.items():
    cell = data.get(scraped_key, {})
    about = [clean(t) for t in cell.get('about', []) if len(clean(t)) > 30]
    # Filter out boilerplate
    about = [t for t in about if not t.startswith('Address :') and not t.startswith('Madanapalle Institute') and not t.startswith('Phone :') and 'International Women' not in t and 'Post Box No' not in t]
    
    docs = []
    for d in cell.get('docs', []):
        title = clean(d.get('title', ''))
        href = d.get('href', '')
        if title and href:
            docs.append({'title': title, 'href': href})
    
    # Build members from table
    raw_members = cell.get('members', [])
    members = build_members(raw_members)
    
    output[cell_key] = {
        'id': cell_key,
        'name': names[cell_key],
        'url': cell.get('url', ''),
        'about': about[:10],
        'docs': docs,
        'members': members,
        'contacts': contacts.get(cell_key, []),
    }

with open('cells_update.json', 'w', encoding='utf-8') as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print("Generated cells_update.json")
for k, v in output.items():
    print(f"  {k}: about={len(v['about'])}, docs={len(v['docs'])}, members={len(v['members'])}")
