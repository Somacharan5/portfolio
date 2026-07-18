/* ============================================================
   Shared components: nav (+ More mega-dropdown), footer,
   ⌘K palette (search + reach views), booking sheet,
   page transitions.
   Injected on every page so there is ONE source of truth.
   ============================================================ */
(function () {
  const page = location.pathname.split('/').pop() || 'index.html';
  const M = window.Motion;
  const EASE = [0.32, 0.72, 0, 1];
  const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const toast = (msg) => window.showToast && window.showToast(msg);
  const ic = (n) => `<svg class="icon"><use href="#i-${n}"/></svg>`;

  const NAV = `
  <header class="nav-wrap">
    <nav class="nav">
      <span class="nav-greet"><span id="greetEmoji">${ic('sun')}</span> <span id="greetText">Good Afternoon</span></span>
      <ul class="nav-links">
        <li><a href="index.html" data-page="index.html">Home</a></li>
        <li><a href="about.html" data-page="about.html">About</a></li>
        <li><a href="projects.html" data-page="projects.html">Work</a></li>
        <li><a href="blog.html" data-page="blog.html">Blog</a></li>
        <li class="nav-more">
          <button class="more-btn has-caret" aria-expanded="false" aria-haspopup="true">More
            <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M6 9l6 6 6-6"/></svg>
          </button>
          <div class="more-panel">
            <div class="more-grid">
              <a class="more-photo" href="guestbook.html" style="background:
                  radial-gradient(120% 90% at 85% -10%, rgba(139,59,245,.55), transparent 60%),
                  linear-gradient(160deg, #ff2d78 0%, #7c1e4b 55%, #131315 100%);">
                <span class="mp-emoji" aria-hidden="true">${ic('pen-line')}</span>
                <span class="mp-text"><b>Guestbook</b><small>Let me know you were here</small></span>
              </a>
              <a class="more-photo" href="bucket-list.html" style="background:
                  radial-gradient(120% 90% at 15% -10%, rgba(14,116,144,.60), transparent 60%),
                  linear-gradient(200deg, #3b4bdd 0%, #232a7a 55%, #131315 100%);">
                <span class="mp-emoji" aria-hidden="true">${ic('target')}</span>
                <span class="mp-text"><b>Bucket List</b><small>Dreams with a deadline</small></span>
              </a>
              <div class="more-rows">
                <a class="more-row" href="links.html">
                  <span class="mr-ic" aria-hidden="true">${ic('link-2')}</span>
                  <span class="mr-t"><b>Links</b><small>All my links in one place</small></span>
                </a>
                <a class="more-row" href="uses.html">
                  <span class="mr-ic" aria-hidden="true">${ic('monitor')}</span>
                  <span class="mr-t"><b>Uses</b><small>A peek into my digital setup</small></span>
                </a>
                <a class="more-row" href="attribution.html">
                  <span class="mr-ic" aria-hidden="true">${ic('sparkles')}</span>
                  <span class="mr-t"><b>Attribution</b><small>The journey behind this site</small></span>
                </a>
              </div>
            </div>
            <div class="more-foot">
              <button class="more-pill" data-book-call>${ic('calendar')} Book a Call</button>
              <a class="more-pill" href="contact.html#panelMsg">${ic('message-circle')} Send Message</a>
              <span class="more-icons">
                <a href="mailto:soma.charan@email.com" aria-label="Email">${ic('mail')}</a>
                <a href="#" aria-label="LinkedIn">${ic('briefcase')}</a>
                <a href="#" aria-label="GitHub">${ic('git-branch')}</a>
                <a href="#" aria-label="X">${ic('send')}</a>
              </span>
            </div>
          </div>
        </li>
      </ul>
      <a href="contact.html" class="nav-cta" data-book-call>Book a Call</a>
      <button class="nav-search" id="openPalette" aria-label="Search">
        <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      </button>
    </nav>
  </header>`;

  const FOOTER = `
  <footer class="footer">
    <div class="footer-inner">
      <div class="footer-brand">
        <span class="ab-badge small">Soma</span>
        <p>I'm Soma — a product manager, builder &amp; problem solver. Thanks for checking out my site!</p>
        <span class="footer-avail"><span class="badge-dot"></span> Available for work</span>
      </div>
      <div class="footer-cols">
        <div class="footer-col"><h4>General</h4>
          <a href="index.html">Home</a><a href="about.html">About</a><a href="projects.html">Projects</a><a href="blog.html">Blog</a></div>
        <div class="footer-col"><h4>Specifics</h4>
          <a href="guestbook.html">Guest Book</a><a href="bucket-list.html">Bucket List</a><a href="uses.html">Uses</a><a href="attribution.html">Attribution</a></div>
        <div class="footer-col"><h4>More</h4>
          <a href="contact.html" data-book-call>Book a call</a><a href="links.html">Links</a><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a></div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Soma Charan</span>
      <span class="footer-built">Design inspired by aayushbharti.in · rebuilt from scratch</span>
    </div>
  </footer>
  <div class="toast" id="toast">Copied ✓</div>`;

  const PALETTE = `
  <div class="palette" id="palette" role="dialog" aria-modal="true" aria-label="Command palette">
    <div class="palette-bg" data-close></div>
    <div class="palette-panel">
      <div class="palette-top">
        <label class="palette-input">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          <input id="palInput" type="text" placeholder="Search pages, posts, projects..." autocomplete="off" />
        </label>
        <div class="reach-head-bar">
          <button class="pal-back" id="palBack" aria-label="Back to search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 6l-6 6 6 6"/></svg>
          </button>
          <span class="reach-title">Reach out</span>
        </div>
        <button class="pal-btn pal-search-btn" id="palSearchBtn" aria-label="Search">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        </button>
        <button class="pal-btn" id="palTheme" aria-label="Toggle theme">
          <svg class="icon-sun" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
          <svg class="icon-moon" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
        </button>
        <button class="pal-btn" data-close aria-label="Close">${ic('x')}</button>
      </div>
      <div class="palette-list" id="palList">
        <div class="pal-group">Pages</div>
        <div class="pal-grid">
          <a class="pal-item" href="index.html"><span class="pi-ic">${ic('home')}</span>Home</a>
          <a class="pal-item" href="about.html"><span class="pi-ic">${ic('user')}</span>About</a>
          <a class="pal-item" href="projects.html"><span class="pi-ic">${ic('folder')}</span>Projects</a>
          <a class="pal-item" href="blog.html"><span class="pi-ic">${ic('file-text')}</span>Blog</a>
          <a class="pal-item" href="guestbook.html"><span class="pi-ic">${ic('book-open')}</span>Guestbook</a>
          <a class="pal-item" href="bucket-list.html"><span class="pi-ic">${ic('target')}</span>Bucket List</a>
          <a class="pal-item" href="contact.html" data-book-call><span class="pi-ic">${ic('calendar')}</span>Book a call</a>
          <a class="pal-item" href="uses.html"><span class="pi-ic">${ic('monitor')}</span>Uses</a>
          <a class="pal-item" href="attribution.html"><span class="pi-ic">${ic('award')}</span>Attribution</a>
          <a class="pal-item" href="links.html"><span class="pi-ic">${ic('link-2')}</span>Links</a>
        </div>
        <div class="pal-group">Connect</div>
        <div class="pal-grid">
          <a class="pal-item" href="#"><span class="pi-ic">${ic('git-branch')}</span>GitHub</a>
          <a class="pal-item" href="#"><span class="pi-ic">${ic('briefcase')}</span>LinkedIn</a>
          <a class="pal-item" href="#"><span class="pi-ic">${ic('send')}</span>X (Twitter)</a>
        </div>
        <div class="pal-group">Legal</div>
        <div class="pal-grid">
          <a class="pal-item" href="privacy.html"><span class="pi-ic">${ic('shield')}</span>Privacy Policy</a>
          <a class="pal-item" href="terms.html"><span class="pi-ic">${ic('scale')}</span>Terms of Use</a>
        </div>
      </div>
      <div class="palette-reach" id="palReach">
        <div class="reach-composer">
          <div class="rc-head">
            <span class="avatar-pill"><span class="avatar-face">${ic('compass')}</span></span>
            <span class="rc-t"><b>Send Soma a message</b><small>I read every one</small></span>
          </div>
          <textarea class="rc-input" id="reachInput" rows="3" placeholder="Hey Soma, I have a project idea..."></textarea>
          <div class="rc-foot">
            <span class="rc-hint"><span class="kbd">⏎</span> to continue &nbsp;·&nbsp; <span class="kbd">⇧⏎</span> new line</span>
            <button class="btn btn-pill rc-send" id="reachContinue">Continue →</button>
          </div>
        </div>
        <div class="reach-sqs">
          <button class="reach-sq" id="reachBook" data-book-call>
            <span class="rs-circles">
              <span class="rs-c rs-me"><span>${ic('compass')}</span></span>
              <span class="rs-plus">+</span>
              <span class="rs-c rs-you">You</span>
            </span>
            <b>Book a call</b><small>30 min · no strings</small>
          </button>
          <button class="reach-sq" id="reachEmail">
            <span class="rs-mail" aria-hidden="true">${ic('mail')}</span>
            <b>Email me</b><small class="rs-mono">soma.charan@email.com</small>
          </button>
        </div>
        <div class="reach-pills">
          <a class="reach-pill" href="#">LinkedIn</a>
          <a class="reach-pill" href="#">X / Twitter</a>
          <a class="reach-pill" href="#">GitHub</a>
        </div>
      </div>
    </div>
  </div>`;

  const SHEET = `
  <div class="sheet" id="bookSheet" role="dialog" aria-modal="true" aria-label="Book a call">
    <div class="sheet-bg" data-sheet-close></div>
    <div class="sheet-panel">
      <button class="sheet-handle" aria-label="Drag down to close"><span></span></button>
      <button class="sheet-close" data-sheet-close aria-label="Close booking sheet">${ic('x')}</button>
      <div class="sheet-body">
        <div class="cal-card">
          <div class="cal-side">
            <span class="av" style="--c1:#1e2b78;--c2:#5a6aef">S</span>
            <small>Soma Charan</small>
            <h3>30 Min Meeting</h3>
            <ul>
              <li>${ic('check')} Requires confirmation</li>
              <li>${ic('clock')} 30m</li>
              <li>${ic('video')} Google Meet</li>
              <li>${ic('globe')} Asia/Kolkata</li>
            </ul>
          </div>
          <div class="cal-main">
            <div class="cal-head"><b>July <em>2026</em></b>
              <div class="cal-nav"><button>‹</button><button>›</button></div></div>
            <div class="cal-grid">
              <span class="dow">Sun</span><span class="dow">Mon</span><span class="dow">Tue</span><span class="dow">Wed</span><span class="dow">Thu</span><span class="dow">Fri</span><span class="dow">Sat</span>
              <span></span><span></span><span></span>
              <span class="cal-day">1</span><span class="cal-day">2</span><span class="cal-day">3</span><span class="cal-day">4</span>
              <span class="cal-day">5</span><span class="cal-day">6</span><span class="cal-day">7</span><span class="cal-day">8</span><span class="cal-day">9</span><span class="cal-day today">10</span><span class="cal-day on">11</span>
              <span class="cal-day">12</span><span class="cal-day on">13</span><span class="cal-day on">14</span><span class="cal-day on">15</span><span class="cal-day on">16</span><span class="cal-day on">17</span><span class="cal-day on">18</span>
              <span class="cal-day">19</span><span class="cal-day on">20</span><span class="cal-day on">21</span><span class="cal-day on">22</span><span class="cal-day on">23</span><span class="cal-day on">24</span><span class="cal-day on">25</span>
              <span class="cal-day">26</span><span class="cal-day on">27</span><span class="cal-day on">28</span><span class="cal-day on">29</span><span class="cal-day on">30</span><span class="cal-day on">31</span>
            </div>
          </div>
        </div>
        <p class="sheet-note">Demo calendar — real scheduling (Cal.com) wired later.</p>
      </div>
    </div>
  </div>`;

  // ---------------- mount ----------------
  const navMount = document.getElementById('nav');
  const footMount = document.getElementById('footer');
  if (navMount) navMount.outerHTML = NAV;
  if (footMount) footMount.outerHTML = FOOTER;
  document.body.insertAdjacentHTML('beforeend', PALETTE);
  document.body.insertAdjacentHTML('beforeend', SHEET);

  // active link
  document.querySelectorAll('.nav-links a[data-page]').forEach((a) => {
    if (a.dataset.page === page) a.classList.add('active');
  });

  // time-based greeting
  const h = new Date().getHours();
  const [gIcon, text] = h < 12 ? ['sun', 'Good Morning'] : h < 17 ? ['sun', 'Good Afternoon'] : ['moon', 'Good Evening'];
  document.getElementById('greetEmoji').innerHTML = ic(gIcon);
  document.getElementById('greetText').textContent = text;
  const nav = document.querySelector('.nav');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 420 && y > lastY) nav.classList.add('greeting');
    else if (y < 200 || y < lastY - 8) nav.classList.remove('greeting');
    lastY = y;
  }, { passive: true });

  /* ============================================================
     A. More mega-dropdown — hover + click, Esc/outside close
     ============================================================ */
  const moreLi = document.querySelector('.nav-more');
  const moreBtn = moreLi.querySelector('.more-btn');
  let moreOpen = false;
  let moreT;
  function setMore(open) {
    moreOpen = open;
    moreLi.classList.toggle('open', open);
    moreBtn.setAttribute('aria-expanded', String(open));
  }
  moreLi.addEventListener('mouseenter', () => { clearTimeout(moreT); setMore(true); });
  moreLi.addEventListener('mouseleave', () => { moreT = setTimeout(() => setMore(false), 120); });
  moreBtn.addEventListener('click', () => setMore(!moreOpen));
  document.addEventListener('click', (e) => {
    if (moreOpen && !moreLi.contains(e.target)) setMore(false);
  });

  /* ============================================================
     B. ⌘K palette — search + reach views
     ============================================================ */
  const palette = document.getElementById('palette');
  const palInput = document.getElementById('palInput');
  const reachInput = document.getElementById('reachInput');
  let palTrigger = null;

  function setView(view) {
    palette.classList.toggle('view-reach', view === 'reach');
    setTimeout(() => (view === 'reach' ? reachInput : palInput).focus(), 60);
  }
  function openPal(view, trigger) {
    palTrigger = trigger || document.activeElement;
    palette.classList.add('open');
    setView(view || 'search');
  }
  function closePal(restoreFocus = true) {
    if (!palette.classList.contains('open')) return;
    palette.classList.remove('open');
    palInput.value = '';
    filterPal('');
    if (restoreFocus && palTrigger && document.contains(palTrigger)) palTrigger.focus();
    palTrigger = null;
  }
  document.getElementById('openPalette').addEventListener('click', (e) => openPal('search', e.currentTarget));
  document.getElementById('palBack').addEventListener('click', () => setView('search'));
  document.getElementById('palSearchBtn').addEventListener('click', () => setView('search'));
  palette.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', () => closePal()));

  function filterPal(q) {
    q = q.toLowerCase();
    palette.querySelectorAll('.pal-group').forEach((group) => {
      const grid = group.nextElementSibling;
      if (!grid) return;
      let anyVisible = false;
      grid.querySelectorAll('.pal-item').forEach((it) => {
        const show = it.textContent.toLowerCase().includes(q);
        it.style.display = show ? '' : 'none';
        if (show) anyVisible = true;
      });
      group.style.display = anyVisible ? '' : 'none';
      grid.style.display = anyVisible ? '' : 'none';
    });
  }
  palInput.addEventListener('input', () => filterPal(palInput.value));

  // reach view behaviors
  const demoToast = () => toast('Demo — sending gets wired later');
  document.getElementById('reachContinue').addEventListener('click', demoToast);
  reachInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); demoToast(); }
  });
  document.getElementById('reachEmail').addEventListener('click', () => {
    const email = 'soma.charan@email.com';
    const done = () => toast('Copied! ' + email);
    if (navigator.clipboard) navigator.clipboard.writeText(email).then(done, done);
    else done();
  });

  // entry points: [data-reach] anywhere (hero avatar, Let's Connect)
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-reach]');
    if (!t) return;
    e.preventDefault();
    openPal('reach', t);
  });
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches && e.target.matches('[data-reach][role="button"]')) {
      e.preventDefault();
      openPal('reach', e.target);
    }
  });

  /* ============================================================
     C. Booking sheet — glass bottom drawer, shared site-wide
     ============================================================ */
  const sheet = document.getElementById('bookSheet');
  const sheetBg = sheet.querySelector('.sheet-bg');
  const sheetPanel = sheet.querySelector('.sheet-panel');
  const sheetHandle = sheet.querySelector('.sheet-handle');
  const sheetCloseBtn = sheet.querySelector('.sheet-close');
  let sheetTrigger = null;
  let sheetOpen = false;
  let sheetBusy = false;

  function openSheet(trigger) {
    if (sheetOpen) return;
    sheetOpen = true;
    sheetTrigger = trigger || document.activeElement;
    sheet.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (M && !REDUCED) {
      M.animate(sheetBg, { opacity: [0, 1] }, { duration: 0.2, easing: 'ease-out' });
      M.animate(sheetPanel, { y: ['100%', '0%'] }, { easing: M.spring({ stiffness: 300, damping: 30 }) })
        .finished.then(() => { sheetPanel.style.transform = ''; });
    }
    setTimeout(() => sheetCloseBtn.focus(), 50);
  }
  function closeSheet() {
    if (!sheetOpen || sheetBusy) return;
    sheetBusy = true;
    const done = () => {
      sheet.classList.remove('open');
      sheetPanel.style.transform = '';
      sheetBg.style.opacity = '';
      document.body.style.overflow = '';
      sheetOpen = false;
      sheetBusy = false;
      if (sheetTrigger && document.contains(sheetTrigger)) sheetTrigger.focus();
      sheetTrigger = null;
    };
    if (M && !REDUCED) {
      M.animate(sheetBg, { opacity: 0 }, { duration: 0.2, easing: 'ease-out' });
      M.animate(sheetPanel, { y: '110%' }, { duration: 0.3, easing: EASE }).finished.then(done);
    } else done();
  }
  sheet.querySelectorAll('[data-sheet-close]').forEach((el) => el.addEventListener('click', closeSheet));

  // drag-to-close on the handle
  let dragY0 = null;
  sheetHandle.addEventListener('pointerdown', (e) => {
    dragY0 = e.clientY;
    sheetHandle.setPointerCapture(e.pointerId);
  });
  sheetHandle.addEventListener('pointermove', (e) => {
    if (dragY0 === null) return;
    const dy = Math.max(0, e.clientY - dragY0);
    sheetPanel.style.transform = `translateY(${dy}px)`;
  });
  function endDrag(e) {
    if (dragY0 === null) return;
    const dy = Math.max(0, e.clientY - dragY0);
    dragY0 = null;
    if (dy > 120) closeSheet();
    else if (M && !REDUCED) {
      M.animate(sheetPanel, { y: 0 }, { easing: M.spring({ stiffness: 300, damping: 30 }) })
        .finished.then(() => { if (sheetOpen) sheetPanel.style.transform = ''; });
    } else sheetPanel.style.transform = '';
  }
  sheetHandle.addEventListener('pointerup', endDrag);
  sheetHandle.addEventListener('pointercancel', endDrag);

  // all Book-a-Call triggers site-wide
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-book-call]');
    if (!t) return;
    e.preventDefault();
    if (palette.classList.contains('open')) closePal(false);
    setMore(false);
    openSheet(t);
  });

  /* ---------------- Esc: layered close (sheet > more > palette) ---------------- */
  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (sheetOpen) { closeSheet(); return; } // never stack the palette under the sheet
      palette.classList.contains('open') ? closePal() : openPal('search');
    }
    if (e.key === 'Escape') {
      if (sheetOpen) closeSheet();
      else if (moreOpen) setMore(false);
      else closePal();
    }
  });

  /* ============================================================
     G. Page transitions — exit fade on same-origin *.html links
     ============================================================ */
  let navigating = false;
  document.addEventListener('click', (e) => {
    if (navigating) { e.preventDefault(); return; }
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a[href]');
    if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
    if (a.hasAttribute('data-book-call') || a.hasAttribute('data-reach')) return;
    const href = a.getAttribute('href');
    // relative, same-origin *.html links only (no protocol, no leading slash)
    if (!href || !/^[^:/\\#?][^:#?]*\.html(?:[#?].*)?$/.test(href)) return;
    // link to the page we're already on → clean no-op (no fade, no reload)
    const dest = new URL(a.href, location.href);
    if (dest.pathname === location.pathname && !dest.hash) { e.preventDefault(); return; }
    if (REDUCED || !M) return; // plain navigation
    e.preventDefault();
    navigating = true;
    const targets = [document.querySelector('main'), document.querySelector('.nav-wrap')].filter(Boolean);
    M.animate(targets, { opacity: 0, y: -8 }, { duration: 0.18, easing: 'ease-out' })
      .finished.then(() => { location.href = a.href; });
    // safety: never leave the page stuck if navigation is blocked
    setTimeout(() => { navigating = false; }, 1200);
  });
  window.addEventListener('pageshow', (e) => {
    if (!e.persisted) return;
    navigating = false;
    document.body.style.overflow = '';
    [document.querySelector('main'), document.querySelector('.nav-wrap')].forEach((el) => {
      if (el) { el.style.opacity = ''; el.style.transform = ''; }
    });
  });

  /* ---------------- theme (shared across pages via localStorage) ---------------- */
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved) root.setAttribute('data-theme', saved);
  document.getElementById('palTheme').addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
})();
