# Portfolio — Content Checklist & Format Guide

Everything on the site that is currently a **placeholder** and needs to become **real content**, page by page, with the exact format each field expects. Fill in the blanks, then hand it back (or update the files directly).

> **How to read the "Format" column**
> - *Char counts are guidance, not hard limits* — they're the length the current design was built around. Go over and it may wrap awkwardly.
> - `UPPERCASE` = the site renders it in caps automatically; type it normally.
> - "Tag" fields are short single words (skills / tools).
> - Anything marked 🔗 is a **link/URL**, 🖼️ is an **image/asset**, ⚙️ is a **config value / key**.

---

## 🔴 Start here — highest-impact, appears everywhere ✅ DONE

These are shared across **every page** (they live in `components.js` nav + footer, and are repeated in several pages). Fixed once here → fixed site-wide. **All wired in as of this pass:**

| # | Item | Where it shows | Value |
|---|------|----------------|-------|
| 1 | ✅ **Email address** | Hero, footer, contact, links, ⌘K palette | `iamsomacharan@gmail.com` |
| 2 | ✅ 🔗 **LinkedIn** | Nav "More", footer, about, contact, links, palette | `https://www.linkedin.com/in/somacharan/` |
| 3 | ✅ 🔗 **GitHub** | Nav, footer, contact, links, palette | `https://github.com/Somacharan5` |
| 4 | ✅ 🔗 **X / Twitter** | Nav, footer, about, contact, links, palette | `https://x.com/iamsomacharan` |
| 5 | ✅ ~~Telegram~~ | — | **removed** |
| 6 | ✅ ~~BlueSky~~ | — | **removed** |
| 7 | ✅ ⚙️ **Cal.com** | Contact booking embed | `cal.com/somacharan` |
| 8 | ✅ ⚙️ **Web3Forms key** | Contact form (now sends for real) | `f7296d9d-…-86214e41250c` |
| 9 | ✅ **Footer bio line** | Every page footer | "…turns ambiguous problems into products people love. Strategy that ships, craft that sticks." |
| 10 | ✅ **"Available for work" badge** | Footer | now a clickable link → opens Book-a-Call |

> All external social links open in a new tab (`target="_blank"`). GitHub was also added as a row on the Links page. **Test the contact form** once live to confirm the Web3Forms key delivers to your inbox.

---

## 🏠 Home (`index.html`)

### Hero
- [ ] **Announcement pill** — ~40–50 chars, one line. *Current:* "Atlas — analytics that founders actually read"
- [ ] **Headline** — 2 lines, the italic word + gradient line are styled. *Current:* "Products that *feel* intuitive. / Strategy that actually ships."
- [ ] **Intro line** — "Hello, I'm **[Name]** … a **[Role]**". *Current:* "Soma Charan … a Product Manager"
- [ ] 🖼️ **Avatar photo** → `avatar.jpg` (see Media table)

### Curated Work — 3 featured projects
Same 3 that lead the Projects page. For **each** project:

| Field | Format |
|-------|--------|
| Name | 1 word / short (e.g. "Atlas") |
| Visual one-liner | ~50–70 chars |
| Description | 1–2 sentences, ~150–200 chars |
| Feature bullets | **4 bullets**, ~60–90 chars each |
| Stack tags | **5 tags**, single words (STRATEGY, DISCOVERY…) |

> Currently: **Atlas** (B2B analytics), **Pulse** (fintech onboarding), **Nova** (AI support copilot). Replace names, copy, and metrics with your real work.

### "How I Work" bento cards
- [ ] **Toolkit icons** — which tools orbit the avatar (icons live in `/icons`; current set: Figma, Notion, Linear, Jira, Miro, Mixpanel, Google Analytics, Trello, Asana)
- [ ] **Timezone** label — *Current:* "IST · UTC+5:30 · REMOTE-FRIENDLY" and "Based in India, available globally."
- [ ] **Uses tiles** — 6 favorite tools (Notion, Figma, Linear, Mixpanel, Jira, Miro)

### Blog teasers — 3 cards
Per card: **cover title** (~2–4 words), **headline** (~50–70 chars), **read time** (e.g. "12 min read"). *(These also live on the Blog page — keep them in sync.)*

### About blurb
- [ ] **2 short paragraphs** — ~200–260 chars each. *Current:* "I'm Soma — a Product Manager who…" / "Off the roadmap I write product teardowns…"

### Testimonials — 6 quotes
Per testimonial:

| Field | Format |
|-------|--------|
| Quote | ~90–140 chars, in quotes |
| Name | "First L." |
| Role | short (VP Product, Founder, Eng Lead…) |
| Initials | 2 letters (auto-shown in colored avatar) |

> All 6 are currently fictional (Marcus T., Lauren K., Daniel R., James L., Sofia M., Ryan H.). **Replace with real, attributed quotes** or remove until you have them.

### Final CTA
- [ ] Display headline — *Current:* "FROM CONCEPT TO **CREATION** / LET'S MAKE IT **HAPPEN!**"
- [ ] "OPEN TO WORK" badge text (on/off)
- [ ] Availability note — *Current:* "I'm available for full-time roles & product consulting."

---

## 👤 About (`about.html`)

- [ ] **Hero heading** — *Current:* "I'm Soma, a creative *product manager*"
- [ ] **Bio — 3 paragraphs** (~250 / ~120 / ~60 chars)
- [ ] **Photo-stack captions** — 3 words/phrases. *Current:* "I Explore", "I Read", "I Build"
- [ ] 🖼️ *(optional)* replace the 3 colored stack cards with real photos

### Work Experience timeline ✅ DONE
Built from the real CV — 7 roles now live: **Hike** (Founders' Office, current) · **Bharatsemi** · **Natural H2O Mineral** · **NewAgeWear Distributors** · **Drivolo** · **Successthinks** · **Gyankamao**. Kept CV order (can reorder to strict most-recent-first if you prefer). Real metrics preserved.

### "Shipping Proof" stats (animated counters) — ⚠️ still placeholder
- [ ] Total for the year — *Current:* `1767` ("2026 total")
- [ ] Experiments run — `355` · Features shipped — `86` · User interviews — `619`

*(Decorative counters with invented numbers. Now that the CV is in, swap these for real figures + labels — e.g. "6+ years", "₹1.4Cr+ revenue driven", "400k+ learners trained", "7 products shipped".)*

---

## 💼 Projects — ✅ BUILT (18 real case studies, generated)

The whole Work section is now **generated from `content/All projects.md`** by `tools/build-projects.py`:
- `projects.html` — the full deck, **18 cards** (ProdSense AI, Founder AI, Competitive Intelligence, PMO Workbench, AutomateAI, Drivolo, Call Intelligence, LeadForge AI, MailPilot AI, Calendar Concierge, Commerce AI, Project Garuda, Xads, Product Repository, JiraOps, Executive Command Center, AI CRM, Lead Intelligence Engine).
- `project-<slug>.html` — one full detail page per project (crumbs, lede, meta, toolkit, 4 narrative sections, prev/next).

**To edit a project:** change `content/All projects.md`, then run `python3 tools/build-projects.py` — do **not** hand-edit the generated `project-*.html` / `projects.html` (a re-run overwrites them).

**Covers, repo & live links** — ✅ wired into the generator. Per project: drop `project-images/<slug>/cover.jpg` (auto-optimized screenshot) and add `repo:` / `live:` in the source → the card shows the real screenshot and the detail page gets a hero image + **Live Site** / **GitHub** buttons. Tech tags come from the repo's real stack.
- ✅ **ProdSense AI** — first real one done (cover, React/TS/Vite/shadcn tags, live + repo).
- [ ] Remaining 17 projects — awaiting screenshots + repos (dropping them in one at a time).

**Still to do on Work:**
- [ ] **Feature on Home** — pick ~3 projects for the "Curated Work" section on `index.html` (still shows the old Atlas/Pulse/Nova placeholders).
- [ ] **Brand tag icons** (optional polish) — dev-stack tags (React, TS, Tailwind…) currently use generic sprite icons; can add real brand logos to match the reference design.

---

## ⌨️ Uses (`uses.html`)

- [ ] **Hardware** — main machine + 2 more. *Current:* "MacBook Air M4 (16GB/512GB, Sky Blue)", "27" 4K Monitor", "USB Mic" (last two say "Placeholder")
- [ ] **Product stack** — 6 rows, each **tool name + one-line description**. *Current:* Figma, Linear, Notion, Amplitude, Mixpanel, Miro
- [ ] **Daily apps** — 4 rows. *Current:* Arc, Raycast, Slack, Superhuman

Format per row: `**Tool** — short description (~30–40 chars)`.

---

## ✍️ Blog (`blog.html`) + posts (`blog-post.html`)

### Blog index
- [ ] **Category tabs** — *Current:* All Posts, Strategy, Discovery, Growth, AI, Career
- [ ] **Featured article** — cover title, headline, "N min read · date", **summary** (~180–220 chars), tag pills
- [ ] **Latest articles** — 3 cards (cover title, headline, "N min read · Month YYYY")

### Blog post — ⚠️ template note
One post exists (`blog-post.html`) and every card links to it. **Duplicate per post.** Each post needs:
- [ ] Title, "N min read · date", tag pills
- [ ] Body prose — currently every paragraph starts "Placeholder…"; includes sample **H2 headings, a callout, a code block, and a table** you can keep or delete
- [ ] Prev / Next links

---

## 🎯 Bucket List (`bucket-list.html`)

3 groups (**Build**, **Grind**, **Wander**). Every item currently says "Placeholder". Per item:

| Field | Format |
|-------|--------|
| Done? | ✓ checked or empty |
| Title | short goal, ~30–45 chars |
| Note | 1 line, ~50–80 chars |
| Date | "Q2 2026" / "Mar 2026" / "—" if unmet |

You can rename the 3 group headings and their sub-labels too.

---

## 📖 Guestbook (`guestbook.html`) — 8 messages

These read as real signed notes (Kalyan M., Yash G., Atharva S., …). Per note: **message** (~20–90 chars), **name**, **date**, initials/color.

> ⚠️ These are **fictional**. Either replace with **real** messages you've received (with permission) or start the wall empty — leaving invented names reads as fake social proof.

The "Sign in with GitHub / Google" buttons are **demo-only** — no backend is wired. Note if you want real sign-in later.

---

## 🔗 Links (`links.html`)

- [ ] Profile card: **name**, **tags** (Product Manager, Builder), **location** — email ✅ done
- ✅ Link rows now live: LinkedIn, GitHub, Twitter/X (Telegram + BlueSky removed). Handles/URLs wired from the Global table above.

---

## 📇 Contact (`contact.html`)

- [ ] ⚙️ **Cal.com handle** (Global #7) — the booking calendar embed
- [ ] ⚙️ **Web3Forms key** (Global #8) — until added, the form shows "add your Web3Forms key" and won't send
- [ ] **Topic dropdown** options — *Current:* Full-time role · Product consulting · Just saying hi · Something else

---

## 🏆 Attribution (`attribution.html`)

- [ ] **Origin story** — 3 paragraphs (keeps the "replica / tribute" framing — see note below)
- [ ] **Muses** — 4 links. #01 is Aayush Bharti (real, keep the credit); #02–04 are "Placeholder Muse" → your real inspirations + URLs
- [ ] **Skills toolkit** — 3 groups (Strategy & Data / Design & Research / Delivery) of tag pills — adjust to your actual skills
- [ ] **Signature** + availability line

---

## ⚖️ Legal (`privacy.html`, `terms.html`)

Both are short and clearly marked "Placeholder". Update the copy to reflect what you actually collect (contact form + Cal.com now send data to third parties, so the privacy note should say so) and change **"Last updated: July 2026"** when you edit.

---

## 🖼️ Media & assets to supply

| Asset | File | Spec | Notes |
|-------|------|------|-------|
| Avatar photo | `avatar.jpg` | square, ~400×400+, face centered | hero pill + reach card |
| Hero background video | `hero-bg.mp4` | short loop, muted, compressed (<1–2 MB ideal) | autoplays behind hero |
| Hero poster | `hero-poster.jpg` | matches video 1st frame | shown before video loads |
| Tool logos | `icons/*.svg` | mono SVG | add any tool not already there |
| Favicon | *(none referenced yet)* | 32×32 / .ico + .png | ⚠️ pages don't link a favicon — add one |
| Case-study images *(optional)* | — | — | cards currently use CSS mockups, not screenshots |

> **Housekeeping:** the repo root still has large working files — `rec1.mov` (160 MB), `rec2.mov` (1.1 GB), `Hero trial.MOV` (28 MB). These aren't used by the site; move or delete them before deploying.

---

## ✅ Suggested order

1. **Global block** (email + social URLs + Cal.com + Web3Forms) — unblocks contact & every link.
2. **Home** hero + real projects + real/removed testimonials.
3. **About** experience timeline (remove "Placeholder Company").
4. **Guestbook** — real or empty (avoid fake names).
5. Projects, Uses, Blog, Bucket List, Attribution.
6. Legal + favicon + delete the big `.mov` files.

## ⚠️ Credibility flags (don't ship as-is)
- Fictional **testimonials** and **guestbook** names read as fake social proof.
- **"Placeholder Company One/Two/Three"** in work history.
- Metrics (3.2× activation, 12 logos, 38% faster, counter numbers) — keep only what's true.
- Attribution page already credits **aayushbharti.in** as the design source — keep that credit intact.
