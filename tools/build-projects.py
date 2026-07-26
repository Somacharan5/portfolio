#!/usr/bin/env python3
"""
Generate the Work section from `All projects.md`.

Outputs:
  - projects.html                (the full case-study deck, one card per project)
  - project-<slug>.html          (one detail page per project)

Re-run any time the source .md changes. Image support (cover/shots) is added
in a later pass — for now each card uses the existing gradient + mock placeholder.
"""
import os, re, html

# build-projects.py lives in tools/ ; BASE is the repo root (one level up)
BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(BASE, "content", "All projects.md")

KEYS = {
    'slug','name','type','date','one_liner','card_description','feature_bullets',
    'stack_tags','title','lede','meta_role','meta_built','meta_updated','meta_visit',
    'meta_team','repo','live','toolkit','section_01_why','section_02_approach','section_03_decisions',
    'section_04_learned','cover','shots',
}

# ---------------- parse ----------------
def parse_block(block):
    data, cur, buf = {}, None, []
    def flush():
        if cur is not None:
            data[cur] = "\n".join(buf).strip("\n")
    for raw in block.split("\n"):
        line = raw.rstrip()
        s = line.strip()
        m = re.match(r'^([a-z0-9_]+):\s*$', s)
        if m and m.group(1) in KEYS:
            flush(); cur = m.group(1); buf = []; continue
        if re.match(r'^-{3,}$', s) or re.match(r'^---\s.*\s---$', s):
            flush(); cur = None; buf = []; continue
        if cur is not None:
            buf.append(line)
    flush()
    return {k: v.strip() for k, v in data.items()}

def load():
    md = open(SRC, encoding="utf-8").read()
    parts = md.split("=== PROJECT")
    projects = []
    for p in parts[1:]:
        d = parse_block(p)
        if d.get("slug") and d.get("name"):
            projects.append(d)
    return projects

# ---------------- text helpers ----------------
def esc(t):
    return html.escape(t, quote=False)

def bold(t):
    t = esc(t)
    return re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', t)

def render_text(text):
    return bold(" ".join(l.strip() for l in text.split("\n") if l.strip()))

def render_prose(text):
    out, para, bullets = [], [], []
    def fp():
        if para:
            out.append("<p>" + bold(" ".join(para)) + "</p>"); para.clear()
    def fb():
        if bullets:
            out.append("<ul>" + "".join("<li>" + bold(b) + "</li>" for b in bullets) + "</ul>")
            bullets.clear()
    for raw in text.split("\n"):
        s = raw.strip()
        if not s:
            fp(); continue  # blank line ends a paragraph but not a bullet run
        if s.startswith("•") or re.match(r'^-\s', s):
            fp(); bullets.append(s.lstrip("•-").strip())
        else:
            fb(); para.append(s)
    fp(); fb()
    return "\n        ".join(out)

def list_items(text):
    return [l.strip().lstrip("-").strip() for l in text.split("\n") if l.strip()]

# ---------------- icons ----------------
EXACT = {
    'ai':'i-brain','product':'i-target','rag':'i-database','discovery':'i-search','strategy':'i-compass',
    'automation':'i-zap','social':'i-message-circle','workflow':'i-git-branch','hitl':'i-handshake',
    'intelligence':'i-lightbulb','market':'i-trending-up','pmo':'i-layers','jira':'i-layers',
    'portfolio':'i-folder','enterprise':'i-briefcase','marketplace':'i-globe','platform':'i-layers',
    'b2b':'i-briefcase','saas':'i-monitor','erp':'i-package','mobile':'i-smartphone','operations':'i-puzzle',
    'analytics':'i-bar-chart-3','voice':'i-phone','transcription':'i-file-text','insights':'i-lightbulb',
    'sales':'i-trending-up','crm':'i-users','leads':'i-users','email':'i-mail','productivity':'i-zap',
    'calendar':'i-calendar','multiagent':'i-users','whatsapp':'i-message-circle','commerce':'i-package',
    'hardware':'i-monitor','drones':'i-rocket','r&d':'i-flask-conical','knowledge':'i-book-open',
    'documentation':'i-file-text','governance':'i-scale','delivery':'i-package','executive':'i-briefcase',
    'scoring':'i-bar-chart-3','customer':'i-user','maps':'i-map-pin',
    # dev stack
    'react':'i-compass','next.js':'i-compass','typescript':'i-file-text','javascript':'i-file-text',
    'vite':'i-zap','tailwind css':'i-pen-line','shadcn ui':'i-layers','shadcn/ui':'i-layers',
    'tanstack query':'i-database','react hook form':'i-pen-line','zod':'i-shield','recharts':'i-bar-chart-3',
    'lucide':'i-sparkles','papaparse':'i-file-text','bun':'i-package','node.js':'i-package',
    'express.js':'i-zap','mongodb':'i-database','razorpay':'i-scale','turborepo':'i-layers','docker':'i-package',
}
KW = [
    (('openai','gpt','gemini','claude','anthropic','llm',' ml','model','sarvam'),'i-brain'),
    (('vector','pgvector','embedding','postgres','sql','database','knowledge base'),'i-database'),
    (('n8n','zapier','apps script','workflow'),'i-zap'),
    (('telegram','whatsapp','slack'),'i-message-circle'),
    (('gmail','mail'),'i-mail'),
    (('figma','ui/ux','ux','design'),'i-pen-line'),
    (('notion','confluence','sheets','workspace','docs'),'i-file-text'),
    (('jira',),'i-layers'),
    (('power bi','dashboard','analytics'),'i-bar-chart-3'),
    (('flutter','firebase','android'),'i-smartphone'),
    (('map',),'i-map-pin'),
    (('python',),'i-file-text'),
    (('apify','phantom','scraping','web'),'i-globe'),
    (('matching','decision','pricing'),'i-compass'),
    (('roadmap','portfolio','process','management'),'i-target'),
    (('electronics','supply','vendor','prototyp','flight','r&d'),'i-flask-conical'),
    (('react','next','nextjs'),'i-compass'),
    (('typescript','javascript','node'),'i-file-text'),
    (('tailwind','shadcn'),'i-pen-line'),
    (('vite','bun','turbo'),'i-zap'),
    (('query','mongo','prisma','drizzle','redis'),'i-database'),
    (('chart','recharts'),'i-bar-chart-3'),
    (('zod','valid','auth'),'i-shield'),
]
def icon_for(tag):
    t = tag.strip().lower()
    if t in EXACT: return EXACT[t]
    for keys, ic in KW:
        if any(k in t for k in keys): return ic
    return 'i-sparkles'

# tag → brand logo file in assets/icons/ (white monochrome SVGs; theme filter flips them in light mode)
BRAND = {
    'react':'react','typescript':'typescript','javascript':'javascript','vite':'vite',
    'tailwind css':'tailwindcss','tailwindcss':'tailwindcss','shadcn ui':'shadcnui','shadcn/ui':'shadcnui',
    'tanstack query':'tanstackquery','react query':'tanstackquery',
    'react hook form':'reacthookform','zod':'zod','lucide':'lucide','lucide react':'lucide',
    'next.js':'nextdotjs','nextjs':'nextdotjs','node.js':'nodedotjs','nodejs':'nodedotjs',
    'express.js':'express','express':'express','mongodb':'mongodb','bun':'bun','docker':'docker',
    'turborepo':'turborepo','redis':'redis','prisma':'prisma','drizzle orm':'drizzle','drizzle':'drizzle',
    'python':'python','anthropic claude':'anthropic','anthropic':'anthropic','claude':'anthropic',
    'vercel':'vercel','react router':'reactrouter','react router dom':'reactrouter',
    'razorpay':'razorpay','firebase':'firebase','framer':'framer','framer motion':'framer',
    'motion.dev':'framer','motion':'framer','greensock':'greensock','gsap':'greensock',
}
def tag_li(t):
    brand = BRAND.get(t.strip().lower())
    if brand and os.path.exists(os.path.join(BASE, f"assets/icons/{brand}.svg")):
        ic_html = f'<img class="tic" src="assets/icons/{brand}.svg" alt="" />'
    else:
        ic_html = f'<svg class="icon"><use href="#{icon_for(t)}"/></svg>'
    return f'<li><i>{ic_html}</i>{esc(t)}</li>'

def stack_ul(tags):
    return "".join(tag_li(t) for t in tags)

# ---------------- visual placeholders ----------------
GRADS = [
    ("#ff2d78","#7a0f3c"), ("#3b4bdd","#0e1444"), ("#8b3bf5","#2c0f52"),
    ("#0e7490","#083344"), ("#16a34a","#052e16"), ("#ca8a04","#451a03"),
    ("#db2777","#450a0a"), ("#0891b2","#042f2e"),
]
MOCK_BROWSER = ('<div class="mock browser"><div class="mock-bar"><span></span><span></span><span></span></div>'
    '<div class="mock-body"><div class="mb-row"><div class="mb-kpi"></div><div class="mb-kpi"></div><div class="mb-kpi"></div></div>'
    '<div class="mb-chart"><i style="height:40%"></i><i style="height:70%"></i><i style="height:55%"></i><i style="height:90%"></i><i style="height:65%"></i><i style="height:80%"></i></div></div></div>')
MOCK_PHONE = ('<div class="mock phone"><div class="ph-notch"></div><div class="ph-body"><div class="ph-balance"></div>'
    '<div class="ph-row"></div><div class="ph-row"></div><div class="ph-row short"></div><div class="ph-cta"></div></div></div>')
MOCK_CHAT = ('<div class="mock browser"><div class="mock-bar"><span></span><span></span><span></span></div>'
    '<div class="mock-body chat"><div class="ch-line ai"></div><div class="ch-line ai short"></div><div class="ch-line me"></div>'
    '<div class="ch-suggest"><b></b><b></b></div></div></div>')
MOCKS = [MOCK_BROWSER, MOCK_PHONE, MOCK_CHAT]

ARROW = '<span class="pv-arrow"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg></span>'

# GitHub octocat mark (fill=currentColor so it adapts to theme)
GH_ICON = ('<svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 '
    '12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.62.07-.62 '
    '1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 '
    '0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.81c0 '
    '.27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>')

COVER_EXTS = ("jpg", "jpeg", "png", "webp")
def cover_src(slug):
    """Return the web path to a project's cover image if one exists, else None."""
    for ext in COVER_EXTS:
        rel = f"project-images/{slug}/cover.{ext}"
        if os.path.exists(os.path.join(BASE, rel)):
            return rel
    return None

HEAD = '''<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="assets/css/styles.css" />
  <script>document.documentElement.classList.add('mo');</script>
</head>'''
SCRIPTS = '''  <div id="footer"></div>
  <script src="assets/js/motion.umd.js"></script>
  <script src="assets/js/sprite.js"></script>
  <script src="assets/js/components.js"></script>
  <script src="assets/js/script.js"></script>
</body>
</html>'''

# ---------------- deck (projects.html) ----------------
def deck_card(i, p):
    g1, g2 = GRADS[i % len(GRADS)]
    cover = cover_src(p["slug"])
    visual = (f'<img class="pv-cover" src="{cover}" alt="{esc(p["name"])} interface" loading="lazy" />'
              if cover else MOCKS[i % len(MOCKS)])
    feats = list_items(p.get("feature_bullets", ""))[:3]
    tags = list_items(p.get("stack_tags", ""))
    feat_html = "".join(f"<li>{bold(f)}</li>" for f in feats)
    return f'''      <article class="deck-item">
        <div class="deck-head"><span class="num">{i+1:02d}</span><span class="rule"></span><span class="type">{esc(p["type"])}</span><h3>&nbsp;{esc(p["name"])}</h3><span class="when">{esc(p["date"])}</span></div>
        <div class="deck-card-wrap">
          <a class="project-visual" href="project-{p["slug"]}.html" style="--g1:{g1};--g2:{g2}">
            <div class="pv-head"><p>{render_text(p["one_liner"])}</p>
              {ARROW}</div>
            {visual}
          </a>
          <div class="project-info">
            <p class="project-desc">{render_text(p["card_description"])}</p>
            <ul class="feat">{feat_html}</ul>
            <ul class="stack">{stack_ul(tags)}</ul>
          </div>
        </div>
      </article>'''

def build_projects_html(projects):
    cards = "\n\n".join(deck_card(i, p) for i, p in enumerate(projects))
    body = f'''{HEAD.format(title="Projects — Soma Charan")}
<body class="subpage">
  <div class="rails" aria-hidden="true"></div>
  <div id="nav"></div>
  <main class="page-wrap">
    <section class="page-hero">
      <span class="eyebrow">Case Studies</span>
      <h1 class="page-title">Curated <span class="grad-pink ital">Work</span></h1>
    </section>
    <div class="page-body">

{cards}

    </div>
  </main>
{SCRIPTS}'''
    open(os.path.join(BASE, "projects.html"), "w", encoding="utf-8").write(body)

# ---------------- detail page ----------------
SECTIONS = [
    ("01", "Why I Built This", "section_01_why"),
    ("02", "The Approach", "section_02_approach"),
    ("03", "Key Decisions", "section_03_decisions"),
    ("04", "What I Learned", "section_04_learned"),
]
def detail_html(p, prev, nxt):
    toolkit = list_items(p.get("toolkit", ""))
    sec_html = ""
    for num, label, key in SECTIONS:
        if not p.get(key): continue
        sec_html += f'''    <section class="split">
      <div class="split-label reveal"><span class="num">{num}</span><h2>{label}</h2></div>
      <div class="prose reveal">
        {render_prose(p[key])}
      </div>
    </section>
'''
    actions = ""
    if p.get("live"):
        actions += (f'<a class="pd-btn" href="{esc(p["live"])}" target="_blank" rel="noopener">'
                    f'<svg class="icon"><use href="#i-globe"/></svg> Live Site '
                    f'<svg class="icon icon-sm"><use href="#i-arrow-up-right"/></svg></a>')
    if p.get("repo"):
        actions += (f'<a class="pd-btn" href="{esc(p["repo"])}" target="_blank" rel="noopener">'
                    f'{GH_ICON} GitHub</a>')
    actions += '<button class="copy-url"><svg class="icon"><use href="#i-link-2"/></svg> Copy URL</button>'
    cover = cover_src(p["slug"])
    cover_html = (f'    <img class="pd-cover reveal" src="{cover}" alt="{esc(p["name"])} interface" loading="lazy" />\n'
                  if cover else "")
    return f'''{HEAD.format(title=esc(p["name"]) + " — Case Study — Soma Charan")}
<body class="subpage">
  <div class="rails" aria-hidden="true"></div>
  <div id="nav"></div>
  <main class="page-wrap">
    <nav class="crumbs"><a href="index.html">Home</a> › <a href="projects.html">Projects</a> › <span style="color:var(--fg)">{esc(p["name"])}</span></nav>
    <header class="pd-head reveal">
      <h1>{esc(p.get("title", p["name"]))}</h1>
      <p class="lede">{render_text(p["lede"])}</p>
      <div class="pd-actions">{actions}</div>
    </header>
{cover_html}    <div class="split" style="border-top:none">
      <div class="reveal">
        <dl class="pd-meta">
          <div><dt>Type</dt><dd>{esc(p["type"])}</dd></div>
          <div><dt>Role</dt><dd>{esc(p.get("meta_role","—"))}</dd></div>
          <div><dt>Built</dt><dd>{esc(p.get("meta_built","—"))}</dd></div>
          <div><dt>Updated</dt><dd>{esc(p.get("meta_updated","—"))}</dd></div>
          <div><dt>Status</dt><dd>{esc(p.get("meta_visit","—"))}</dd></div>
          <div><dt>Team</dt><dd>{esc(p.get("meta_team","—"))}</dd></div>
        </dl>
      </div>
      <div class="reveal">
        <span class="tk-label">Toolkit</span>
        <ul class="stack" style="margin-bottom:1.4rem">{stack_ul(toolkit)}</ul>
      </div>
    </div>
{sec_html}    <div class="next-projects">
      <a class="muse reveal" href="project-{prev["slug"]}.html"><span class="num">← Previous</span><b>{esc(prev["name"])}</b><small>{render_text(prev["one_liner"])}</small></a>
      <a class="muse reveal" href="project-{nxt["slug"]}.html" style="text-align:right"><span class="num">Next →</span><b>{esc(nxt["name"])}</b><small>{render_text(nxt["one_liner"])}</small></a>
    </div>
  </main>
{SCRIPTS}'''

def build_details(projects):
    n = len(projects)
    for i, p in enumerate(projects):
        prev = projects[(i - 1) % n]
        nxt = projects[(i + 1) % n]
        out = detail_html(p, prev, nxt)
        open(os.path.join(BASE, f'project-{p["slug"]}.html'), "w", encoding="utf-8").write(out)

# ---------------- run ----------------
if __name__ == "__main__":
    projects = load()
    build_projects_html(projects)
    build_details(projects)
    print(f"Built projects.html + {len(projects)} detail pages:")
    for i, p in enumerate(projects):
        print(f'  {i+1:02d}  project-{p["slug"]}.html  —  {p["name"]}')
