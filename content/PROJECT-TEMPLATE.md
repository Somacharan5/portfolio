# Project Case-Study Template — fill one block per project

**Purpose:** This is the exact format my portfolio site needs for each project. Hand this whole file to your writing LLM, paste your raw facts into the `RAW NOTES` area of each block, and have it return **one completed block per project** using the same field labels. Then I gather photos into `project-images/<slug>/` and push it all to the site.

**Workflow:** draft *all* projects here → pick a few to feature on the home page → push to site.

---

## 📋 INSTRUCTIONS FOR THE WRITING LLM (paste this at the top of your prompt)

> You are helping write case studies for a **Product Manager's** portfolio. For each project I give you, produce **one filled-in block** using the template below — keep every field label exactly as written, in order.
>
> **Voice:** first person, confident, specific. Use real PM vocabulary (discovery, jobs-to-be-done, activation, retention, roadmap, 0→1, GTM, experimentation). Concrete beats vague. No buzzword soup, no em-dash-fed fluff.
>
> **Rules:**
> - **Respect the character counts** — they're the length the design was built for. Going long breaks the layout.
> - **Never invent precise metrics.** Only use numbers I give you in RAW NOTES. If I gave no number, make a qualitative claim instead ("cut onboarding time sharply") — do not fabricate "3.2×" or "38%".
> - Plain text in every field. **Bold** (`**like this**`) is allowed *only* inside the four narrative sections.
> - No markdown headings inside field values. One block per project. Keep them in the priority order I ask for.
> - Fill `Prev/Next` nothing — I wire that automatically from the order.

---

## 🧩 THE TEMPLATE — copy this block once per project

```
=== PROJECT <n> ===

RAW NOTES (you write facts here; the LLM turns them into the fields below — delete after):
<dump everything you remember: what it was, your role, what you did, real numbers, tools, dates>

--- CARD FIELDS (used on the Work list + home "Curated Work") ---
slug:            <lowercase, one word, no spaces — becomes the folder + URL, e.g. "atlas">
name:            <short display name, 1 word ideal, e.g. "Atlas">
type:            <category, 1–3 words, e.g. "B2B SaaS" / "Consumer Fintech" / "AI Workflow" / "Platform">
date:            <quarter + year, e.g. "Q2 2026">
one_liner:       <the punchy header line, 50–70 chars — what it is + the outcome>
card_description:<1–2 sentences, 150–200 chars — what it is, your role, the headline result>
feature_bullets: <exactly 4 bullets, 60–90 chars each — the list card shows 3, the home card shows 4>
  - <bullet 1>
  - <bullet 2>
  - <bullet 3>
  - <bullet 4>
stack_tags:      <4–5 single-word tags, will render UPPERCASE, e.g. STRATEGY, DISCOVERY, ANALYTICS, ROADMAP, GTM>

--- DETAIL PAGE FIELDS (the full case study) ---
title:           <usually same as name>
lede:            <the summary paragraph under the title, 180–220 chars>
meta_role:       <your title on this project, e.g. "Senior Product Manager">
meta_built:      <e.g. "Q2 2026">
meta_updated:    <e.g. "Q3 2026" — or "—" if n/a>
meta_visit:      <short status label, e.g. "Live demo" / "Private (NDA)" / "Concept">
meta_team:       <team shape, e.g. "Solo Builder" / "2 squads · 11 people">
repo:            <GitHub URL — renders a "GitHub" button; omit if none>
live:            <live/Vercel URL — renders a "Live Site" button; omit if none>
toolkit:         <the REAL tech stack from the repo (6–12 tags), e.g. React, TypeScript, Vite, Tailwind CSS, shadcn/ui, Zod>

section_01_why:  <"Why I Built This" — the problem / context. 1–2 short paragraphs, ~250–450 chars total. **bold** the key insight.>
section_02_approach: <"The Approach" — discovery + process. 1–2 short paragraphs, ~250–450 chars.>
section_03_decisions: <"Key Decisions" — the tradeoffs you made and why. 1–2 short paragraphs, ~250–450 chars.>
section_04_learned: <"What I Learned" — the reflection / outcome. 1 short paragraph, ~200–350 chars.>

--- IMAGES (you supply the files; just list the filenames here) ---
cover:           project-images/<slug>/cover.jpg   <landscape hero, ~16:10>
shots:           <0–4 supporting images, list filenames or "none">
  - project-images/<slug>/01.jpg
  - project-images/<slug>/02.jpg
```

---

## ✅ WORKED EXAMPLE (this is the quality + shape to match — based on a real filled block)

```
=== PROJECT 1 ===

--- CARD FIELDS ---
slug:            atlas
name:            Atlas
type:            B2B SaaS
date:            Q2 2026
one_liner:       Analytics that founders actually read — clarity over dashboards
card_description:A B2B analytics platform. I owned the roadmap, defined the metrics layer, and shipped an MVP that landed the first 12 enterprise logos in two quarters.
feature_bullets:
  - Discovery from 30+ customer interviews to find the real job-to-be-done.
  - A metrics framework the whole org aligned on — one source of truth.
  - 0 → 1 MVP scoped tight, shipped in 9 weeks, iterated weekly.
  - GTM partnership with sales that converted 12 enterprise logos.
stack_tags:      STRATEGY, DISCOVERY, ANALYTICS, ROADMAP, GTM

--- DETAIL PAGE FIELDS ---
title:           Atlas
lede:            A B2B analytics platform that founders actually read. I owned the roadmap, defined the metrics layer, and shipped an MVP that landed the first 12 enterprise logos — built to make data feel obvious.
meta_role:       Senior Product Manager
meta_built:      Q2 2026
meta_updated:    Q3 2026
meta_visit:      atlas.example.com
meta_team:       2 squads · 11 people
toolkit:         STRATEGY, DISCOVERY, AMPLITUDE, LINEAR, FIGMA, SQL, NOTION, GTM

section_01_why:  Every analytics tool we evaluated got the basics right and stopped there — dashboards were feature-complete but **nobody opened them twice**. Founders wanted answers, not charts. The bet: strip reporting to the five numbers that actually move a business, and make every one traceable to the raw events underneath.
section_02_approach: Thirty discovery interviews in three weeks. We coded transcripts into jobs-to-be-done and found the same pattern everywhere: **trust breaks at the metric-definition layer**. So the MVP shipped with a metrics dictionary as a first-class feature — one definition, one owner, one source of truth, embedded next to every chart.
section_03_decisions: Scoped tight: no custom dashboards in v1, a deliberately opinionated default view instead. Controversial internally, validated externally within two weeks of beta. Priced on seats, not events, so usage anxiety never throttled adoption.
section_04_learned: Opinionated defaults are a feature. The discovery debt you skip in week one you repay with interest in month three. And **sales is your fastest research channel** if you sit in on the calls.

--- IMAGES ---
cover:           project-images/atlas/cover.jpg
shots:
  - project-images/atlas/01.jpg
  - project-images/atlas/02.jpg
```

---

## 🖼️ IMAGE SPEC & FOLDER STRUCTURE

Create a top-level folder `project-images/` with **one sub-folder per project, named after its `slug`**:

```
project-images/
├── atlas/
│   ├── cover.jpg      ← required: landscape hero (card + detail top)
│   ├── 01.jpg         ← optional supporting shot
│   └── 02.jpg
├── pulse/
│   ├── cover.jpg
│   └── 01.jpg
└── ...
```

| File | Required? | Aspect | Min size | Notes |
|------|-----------|--------|----------|-------|
| `cover.jpg` | ✅ yes | ~16:10 landscape | 1200×750 px | Product screenshot, mockup, or clean hero. Replaces the placeholder CSS "browser/phone" graphic on both the card and the detail page. |
| `01.jpg`, `02.jpg`… | optional | any (landscape reads best) | ~1000 px wide | 0–4 shots placed inside the case-study narrative. Screens, whiteboards, diagrams, before/afters. |

- **Format:** `.jpg`, `.png`, or `.webp`. **Compress** each to under ~500 KB (TinyPNG/Squoosh) so pages stay fast.
- **No confidential data** in screenshots — blur real customer names/numbers if under NDA.
- Filenames **must match** what the LLM wrote in the `cover:` / `shots:` fields.

---

## 📤 HOW TO SEND IT BACK TO ME

1. **The text:** one completed block per project (delete the `RAW NOTES` lines), in the order you want them to appear. A single `.md` or `.txt` file, or pasted straight into chat — either works.
2. **The images:** the `project-images/` folder with the sub-folders + files named as above.
3. Tell me **which projects to feature** on the home "Curated Work" section (pick ~3), or say "you choose" and I'll pick the strongest.

I'll then wire the cards, build each detail page, swap in your cover images, and set the prev/next links automatically.

---

### Quick reference — where each field lands on the site
| Field group | Appears on |
|-------------|-----------|
| CARD FIELDS | `projects.html` (full Work list) + `index.html` "Curated Work" (featured subset) |
| DETAIL PAGE FIELDS | one `project-<slug>.html` case-study page each |
| `cover.jpg` | the card visual **and** the detail-page hero |
| `shots` | inside the case-study narrative sections |
