# Plan: IR Images + Library Redesign + Research Updates

Three independent workstreams, all preserving current design language, typography, spacing, and animations.

---

## 1. International Relations — Image Framing Fix

**Scope:** `src/pages/InternationalRelations.tsx`, `src/pages/StanfordInitiative.tsx`, and any image cards in IR sub-sections (About, MoUs, Internships, Fellowships, Global Immersion, Events, Workshops, Stanford).

**Changes:**
- Standardize every image container to a fixed **16:9 aspect ratio** (`aspect-video`) with uniform widths per grid.
- Replace excessive `object-cover` + zoom crops with a smarter default:
  - Use `object-cover` with tuned `object-position` (e.g. `object-top` for group photos with faces near the top, `object-center` for landscapes) per image.
  - Fall back to `object-contain` on a neutral `bg-muted` backdrop where subjects extend edge-to-edge and cropping would cut faces/logos.
- Remove any `h-*` values that fight the aspect ratio (no stretching).
- Add `loading="lazy"` where missing.
- Verify Stanford gallery, MoU cards, event cards, and hero backgrounds all follow the same rule.
- Test at desktop/tablet/mobile widths.

No layout, spacing, animation, or typography changes.

---

## 2. Central Library — Full Redesign

Rebuild `src/pages/Library.tsx` into a premium portal matching Research/NAAC/NIRF/IQAC/IR quality, using the attached Central Library Details document as source of truth.

**New data file:** `src/data/libraryData.ts`
- Statistics (titles: 10,507; volumes: 64,600; reference books: 10,507; e-books: 4,200; e-journals: 2,505; project reports: 5,009; bound volumes: 587; CD-ROMs: 2,002; digital systems: 30; newspapers: 15; periodicals: 136; magazines: 14)
- Digital resources (IEEE, Springer Nature, EBSCO, DELNET, NDL, INFLIBNET NLIST, Knimbus, SOUL 3.0)
- Memberships (DELNET IM-9078, INFLIBNET NLIST e-Shodh Sindhu, NDL, NDL Club INTGNC5MX4PHLSJ)
- Facilities, services, quick-access links, contact info

**New page sections (in order):**
1. Hero — institutional style with breadcrumb, dark overlay, title, subtitle
2. Overview — About, Mission, Objectives, Highlights
3. Statistics Dashboard — animated count-up cards (12 metrics)
4. Digital Resources — feature cards for 8 platforms
5. Collections — card grid (books, journals, magazines, newspapers, project reports, CD-ROMs, digital, research)
6. Memberships & Networks — badge/card layout
7. Library Facilities — modern feature cards
8. Digital Library Infrastructure — 30 systems, SOUL 3.0, remote access highlight
9. Research Support — audience cards (faculty, researchers, students, PhD scholars)
10. Library Services — service cards
11. Quick Access — download-style cards (like NAAC/IQAC)
12. Contact — location, hours, email, phone

**Reusable components:** may add small helpers (`StatCard`, `ResourceCard`) local to the page or under `src/components/library/` if needed. Use existing shadcn `Card`, framer-motion `ScrollReveal`, `SEO`, `Header`, `Footer`.

**Consistency:** identical hero pattern, sticky-nav-optional, animated stats, card shadows, breadcrumbs, and typography as Research/NAAC/IQAC.

---

## 3. Research Section — Content & Link Updates

Edit `src/pages/Research.tsx` and `src/data/researchData.ts`. No UI/UX/design changes; content and behavior only.

**3.1 Writing Tips for Projects**
- Remove external link to `mits.ac.in/tips`.
- Add inline expandable accordion inside Research Resources with the full writing-tips content recreated from the official page.

**3.2 Funding Agencies — fix URLs**
- SERB → `https://serb.gov.in/`
- UGC → `https://www.ugc.gov.in/`
- ISRO → `https://www.isro.gov.in/`
- ICAR → `https://www.icar.org.in/`
- DST → `https://dst.gov.in/`
- DBT → `https://dbt.gov.in/`
- DAE → `https://dae.gov.in/`
- DRDO → `https://www.drdo.gov.in/`
- All open in new tab (`target="_blank" rel="noopener noreferrer"`).

**3.3 Patents**
- Rename button to `View All Patents`.
- Link directly to the official patents PDF (fetched from `mits.ac.in/researchpatents`) rather than the webpage.
- Remove the "More details at mits.ac.in/researchpatents" caption.
- Store PDF URL as single constant for easy future updates.

**3.4 Policies**
- Remove "MITS Benefits".
- Replace broken Seed Grant page link with inline expandable section listing six direct PDF links (SEED Grant Policy + Annexures I–V), fetched from `mits.ac.in/seed-money-policy`.

**3.5 Academic**
- Remove "Research Scholars List" and "Research Centres" entries.

**3.6 IPR Cell — IPR Events**
- Remove external redirect.
- Recreate full IPR Events content inline (chronological), with each event's PDF pulled from `mits.ac.in/ipr-events` and linked as direct PDF download cards.

**3.7 Consultancy** — remove the entire section.

**3.8 Innovation** — remove "Innovation Portal" button.

**3.9 Research Centres** — remove "Resource Division".

**3.10 MDRF** — remove "Visit MDRF Portal" button.

**3.11 WWRC — redesign inline**
- Single continuous section (no sidebar, no new route).
- Subsections: About, Administrative Support, Research Areas, Projects table, Gallery, Documents/Downloads.
- Content sourced from `mits.ac.in/wwrc`; PDFs linked directly.

**3.12 General rule** — every previously-external internal MITS link is replaced with inline content or direct PDF; only third-party organizations open in a new tab.

**Data fetching step (during build):** scrape the referenced MITS pages once via web_search / fetch_website to collect real PDF URLs, event listings, WWRC content, and writing-tips text before writing the code.

---

## Technical Notes

- No route changes.
- No changes to Header/Footer navigation.
- All new inline expandables use existing shadcn `Accordion` / `Collapsible` for consistency.
- All external links: `target="_blank" rel="noopener noreferrer"`.
- Preserve framer-motion scroll reveals and existing card hover animations.
- Verify build with tsgo after each workstream.

## Suggested build order

1. IR image fixes (fastest, self-contained)
2. Research updates (content + link work; requires scraping official pages for PDFs)
3. Library redesign (largest scope)
