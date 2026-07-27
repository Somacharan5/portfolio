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
  // real brand logos (fill=currentColor so they adapt to theme; .icon can't be used — it forces fill:none)
  const LI_ICON = `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3s-2.3 1.57-2.3 3.2V21H9z"/></svg>`;
  const GH_ICON = `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.81c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>`;
  const X_ICON = `<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5-6.6L5.4 22H2.3l8-9.2L1.5 2h6.9l4.5 6 5.9-6zm-2.4 18h1.7L7.6 3.8H5.8L16.5 20z"/></svg>`;

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
                <img class="mp-img" src="assets/media/guestbook.jpg" alt="" loading="lazy" />
                <span class="mp-text"><b>Guestbook</b><small>Let me know you were here</small></span>
              </a>
              <a class="more-photo" href="bucket-list.html" style="background:
                  radial-gradient(120% 90% at 15% -10%, rgba(14,116,144,.60), transparent 60%),
                  linear-gradient(200deg, #3b4bdd 0%, #232a7a 55%, #131315 100%);">
                <img class="mp-img" src="assets/media/bucketlist.jpg" alt="" loading="lazy" />
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
                <a href="mailto:iamsomacharan@gmail.com" aria-label="Email">${ic('mail')}</a>
                <a href="https://www.linkedin.com/in/somacharan/" target="_blank" rel="noopener" aria-label="LinkedIn">${LI_ICON}</a>
                <a href="https://github.com/Somacharan5" target="_blank" rel="noopener" aria-label="GitHub">${GH_ICON}</a>
                <a href="https://x.com/iamsomacharan" target="_blank" rel="noopener" aria-label="X">${X_ICON}</a>
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
        <p>I'm Soma — a product manager who turns ambiguous problems into products people love. Strategy that ships, craft that sticks.</p>
        <a class="footer-avail" href="contact.html" data-book-call><span class="badge-dot"></span> Available for work — let's talk</a>
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
          <a class="pal-item" href="https://github.com/Somacharan5" target="_blank" rel="noopener"><span class="pi-ic">${GH_ICON}</span>GitHub</a>
          <a class="pal-item" href="https://www.linkedin.com/in/somacharan/" target="_blank" rel="noopener"><span class="pi-ic">${LI_ICON}</span>LinkedIn</a>
          <a class="pal-item" href="https://x.com/iamsomacharan" target="_blank" rel="noopener"><span class="pi-ic">${X_ICON}</span>X (Twitter)</a>
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
            <b>Email me</b><small class="rs-mono">iamsomacharan@gmail.com</small>
          </button>
        </div>
        <div class="reach-pills">
          <a class="reach-pill" href="https://www.linkedin.com/in/somacharan/" target="_blank" rel="noopener">LinkedIn</a>
          <a class="reach-pill" href="https://x.com/iamsomacharan" target="_blank" rel="noopener">X / Twitter</a>
          <a class="reach-pill" href="https://github.com/Somacharan5" target="_blank" rel="noopener">GitHub</a>
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
        <div id="cal-sheet" class="cal-embed"></div>
        <p class="sheet-note">Scheduling by Cal.com · <a href="contact.html">Open the contact page →</a></p>
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
    const email = 'iamsomacharan@gmail.com';
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

  let calReady = false;
  function initCal() {
    if (calReady) return;
    calReady = true;
    (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
    window.Cal("init", { origin: "https://cal.com" });
    window.Cal("inline", { elementOrSelector: "#cal-sheet", calLink: "somacharan", layout: "month_view" });
    window.Cal("ui", { theme: document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark', styles: { branding: { brandColor: "#ff2d78" } }, hideEventTypeDetails: false, layout: "month_view" });
  }
  function openSheet(trigger) {
    if (sheetOpen) return;
    sheetOpen = true;
    sheetTrigger = trigger || document.activeElement;
    sheet.classList.add('open');
    initCal();
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
