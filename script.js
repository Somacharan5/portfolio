/* ============================================================
   Motion engine (Motion One) + page behaviors.
   Real values extracted from the original site's bundle:
     reveal: opacity 0→1, y 26→0, scale .965→1, blur 5→0
     ease [.32,.72,0,1] · stagger 0.05–0.08 · spring 300/25
   ============================================================ */
(function () {
  const M = window.Motion;
  const root = document.documentElement;

  if (!M) {
    root.classList.remove('mo');
    document.querySelectorAll('.reveal, .fade-up').forEach((e) => e.classList.add('in'));
    init(null, null);
    return;
  }
  const EASE = [0.32, 0.72, 0, 1];
  const SPRING = M.spring({ stiffness: 300, damping: 25 });

  document.querySelectorAll('.fade-up').forEach((el, i) => {
    M.animate(el, { opacity: [0, 1], y: [20, 0] }, { duration: 0.5, easing: 'ease-out', delay: 0.06 * i })
      .finished.then(() => { el.classList.add('in'); el.style.transform = ''; });
  });

  document.querySelectorAll('.reveal').forEach((el) => {
    const group = el.closest('[data-stagger]');
    let delay = 0;
    if (group) {
      const sibs = [...group.querySelectorAll(':scope > .reveal')];
      delay = 0.08 * Math.max(0, sibs.indexOf(el));
    }
    let stop = M.inView(el, () => {
      M.animate(el,
        { opacity: [0, 1], y: [26, 0], scale: [0.965, 1], filter: ['blur(5px)', 'blur(0px)'] },
        { duration: 0.6, easing: EASE, delay }
      ).finished.then(() => { el.classList.add('in'); el.style.transform = ''; el.style.filter = ''; });
      if (stop) stop();
    }, { amount: 0.15 });
  });

  function springHover(sel, up) {
    document.querySelectorAll(sel).forEach((el) => {
      el.addEventListener('pointerenter', () => M.animate(el, { y: -up }, { easing: SPRING }));
      el.addEventListener('pointerleave', () => M.animate(el, { y: 0 }, { easing: SPRING }));
    });
  }
  springHover('.project-visual', 6);
  springHover('.blog-card', 6);
  springHover('.stat', 4);

  /* ---- Step 2 proof: Curated Work — scroll-linked device parallax ----
     Each project's device mockup drifts as the card transits the viewport,
     so the section responds to the reader's scroll. */
  const workSec = document.getElementById('work');
  if (workSec && M.scroll) {
    workSec.querySelectorAll('.project .mock').forEach((mock) => {
      M.scroll(
        M.animate(mock, { transform: ['translateY(42px)', 'translateY(-42px)'] }, { easing: 'linear' }),
        { target: mock.closest('.project'), offset: ['start end', 'end start'] }
      );
    });
  }

  init(M, SPRING);

  /* ---------------- page behaviors (all guarded, run everywhere) ---------------- */
  function init(M, SPRING) {
    const $ = (s) => document.querySelector(s);
    const $$ = (s) => [...document.querySelectorAll(s)];

    // toast
    let tT;
    window.showToast = (msg) => {
      const t = document.getElementById('toast'); if (!t) return;
      t.textContent = msg; t.classList.add('show');
      clearTimeout(tT); tT = setTimeout(() => t.classList.remove('show'), 2000);
    };

    // copy email / copy url
    $$('.copy-email').forEach((el) => el.addEventListener('click', (e) => {
      e.preventDefault();
      const email = el.dataset.email || '';
      navigator.clipboard?.writeText(email).then(() => showToast('Copied! ' + email));
    }));
    $$('.copy-url').forEach((el) => el.addEventListener('click', () => {
      navigator.clipboard?.writeText(location.href).then(() => showToast('URL copied ✓'));
    }));

    const REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ============================================================
       F. Testimonials — paged carousel (Embla + hand-rolled fallback)
       ============================================================ */
    const viewport = document.getElementById('testiViewport');
    const track = document.getElementById('testiTrack');
    if (viewport && track) {
      const toggleBtn = document.getElementById('testiToggle');
      const dotsWrap = document.getElementById('testiDots');
      const slides = [...track.children];
      let paused = false, hovering = false, current = 0, timer = null;
      let embla = null, scrollTo, snapCount;

      if (window.EmblaCarousel) {
        embla = window.EmblaCarousel(viewport, { loop: true, align: 'start', skipSnaps: false });
        snapCount = embla.scrollSnapList().length;
        scrollTo = (i) => embla.scrollTo(i);
        embla.on('select', () => { current = embla.selectedScrollSnap(); paint(); });
        embla.on('pointerDown', () => { viewport.classList.add('dragging'); startTimer(); });
        embla.on('pointerUp', () => viewport.classList.remove('dragging'));
      } else {
        // fallback: native scroll-snap + pointer drag via overflow
        viewport.classList.add('no-embla');
        snapCount = slides.length;
        const step = () => slides[0].getBoundingClientRect().width + 16;
        scrollTo = (i) => viewport.scrollTo({ left: i * step(), behavior: REDUCED ? 'auto' : 'smooth' });
        let sT;
        viewport.addEventListener('scroll', () => {
          clearTimeout(sT);
          sT = setTimeout(() => {
            current = Math.max(0, Math.min(snapCount - 1, Math.round(viewport.scrollLeft / step())));
            paint();
          }, 80);
        }, { passive: true });
      }

      const dots = [];
      for (let i = 0; i < snapCount; i++) {
        const d = document.createElement('button');
        d.className = 'testi-dot';
        d.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
        d.addEventListener('click', () => { scrollTo(i); startTimer(); });
        dotsWrap.appendChild(d);
        dots.push(d);
      }
      function paint() { dots.forEach((d, i) => d.classList.toggle('active', i === current)); }

      const next = () => {
        if (embla) embla.scrollNext();
        else { current = (current + 1) % snapCount; scrollTo(current); }
      };
      function startTimer() {
        clearInterval(timer);
        if (REDUCED) return;
        timer = setInterval(() => { if (!paused && !hovering) next(); }, 5000);
      }
      viewport.addEventListener('mouseenter', () => { hovering = true; });
      viewport.addEventListener('mouseleave', () => { hovering = false; });
      toggleBtn?.addEventListener('click', () => {
        paused = !paused;
        toggleBtn.classList.toggle('paused', paused);
        toggleBtn.setAttribute('aria-label', paused ? 'Play autoplay' : 'Pause autoplay');
      });
      paint();
      startTimer();
    }

    /* ============================================================
       D. Bento globe — hand-rolled dotted canvas globe
       (fibonacci sphere · orthographic projection · rAF rotation)
       ============================================================ */
    const globe = document.getElementById('globeCanvas');
    if (globe && globe.getContext) {
      const ctx = globe.getContext('2d');
      if (ctx) {
        const DPR = Math.min(window.devicePixelRatio || 1, 2);
        const N = 750;
        const GA = Math.PI * (3 - Math.sqrt(5)); // golden angle
        const dots = [];
        for (let i = 0; i < N; i++) {
          const y = 1 - (i / (N - 1)) * 2;
          const r = Math.sqrt(Math.max(0, 1 - y * y));
          const th = GA * i;
          dots.push({ x: Math.cos(th) * r, y, z: Math.sin(th) * r });
        }
        // India accent dot: lat 20.6°N, lon 79°E
        const LAT = (20.6 * Math.PI) / 180, LON = (79 * Math.PI) / 180;
        const india = { x: Math.cos(LAT) * Math.cos(LON), y: Math.sin(LAT), z: Math.cos(LAT) * Math.sin(LON) };
        let rot = 0, raf = null;

        function size() {
          const w = globe.clientWidth || 300, h = globe.clientHeight || 260;
          globe.width = Math.round(w * DPR);
          globe.height = Math.round(h * DPR);
        }
        function frame() {
          const w = globe.width, h = globe.height;
          if (!w || !h) return;
          const R = Math.min(w, h) * 0.5;
          const cx = w / 2, cy = h / 2;
          const light = root.getAttribute('data-theme') === 'light';
          ctx.clearRect(0, 0, w, h);
          // soft back glow
          const glow = ctx.createRadialGradient(cx, cy, R * 0.2, cx, cy, R * 1.15);
          glow.addColorStop(0, light ? 'rgba(59,75,221,.10)' : 'rgba(90,106,239,.14)');
          glow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = glow;
          ctx.fillRect(0, 0, w, h);

          const cos = Math.cos(rot), sin = Math.sin(rot);
          for (let i = 0; i < N; i++) {
            const d = dots[i];
            const x = d.x * cos + d.z * sin;
            const z = -d.x * sin + d.z * cos;
            const front = z > 0;
            const a = front ? 0.14 + 0.5 * z : 0.05;
            ctx.fillStyle = light ? `rgba(20,22,34,${a})` : `rgba(255,255,255,${a})`;
            ctx.beginPath();
            ctx.arc(cx + x * R, cy - d.y * R, (front ? 1.25 : 0.9) * DPR, 0, 6.2832);
            ctx.fill();
          }
          // India — pink accent with glow, visible while on the front half
          const ix = india.x * cos + india.z * sin;
          const iz = -india.x * sin + india.z * cos;
          if (iz > -0.05) {
            const sx = cx + ix * R, sy = cy - india.y * R;
            ctx.save();
            ctx.shadowColor = '#ff2d78';
            ctx.shadowBlur = 14 * DPR;
            ctx.fillStyle = '#ff2d78';
            ctx.beginPath();
            ctx.arc(sx, sy, 2.6 * DPR, 0, 6.2832);
            ctx.fill();
            ctx.restore();
          }
        }
        function loop() {
          rot += 0.005;
          frame();
          raf = requestAnimationFrame(loop);
        }
        size();
        if (REDUCED) {
          frame(); // static frame
          window.addEventListener('resize', () => { size(); frame(); }, { passive: true });
        } else {
          // animate only while on screen
          const io = 'IntersectionObserver' in window
            ? new IntersectionObserver((entries) => {
                entries.forEach((en) => {
                  if (en.isIntersecting) { if (!raf) loop(); }
                  else { cancelAnimationFrame(raf); raf = null; }
                });
              }, { threshold: 0.05 })
            : null;
          if (io) io.observe(globe); else loop();
          window.addEventListener('resize', () => { size(); frame(); }, { passive: true });
          frame();
        }
      }
    }

    // contact tabs
    $$('.ct-tab').forEach((tab) => tab.addEventListener('click', () => {
      $$('.ct-tab').forEach((t) => t.classList.remove('active'));
      $$('.ct-panel').forEach((p) => p.classList.remove('active'));
      tab.classList.add('active');
      $('#' + tab.dataset.panel)?.classList.add('active');
    }));
    // deep-link: contact.html#panelMsg opens the message tab
    if (location.hash === '#panelMsg') $('.ct-tab[data-panel="panelMsg"]')?.click();

    // blog filter tabs (visual only for now)
    $$('.blog-tab').forEach((tab) => tab.addEventListener('click', () => {
      $$('.blog-tab').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
    }));

    // guestbook sign-in modal
    const modal = document.getElementById('gbModal');
    if (modal) {
      $$('.gb-write').forEach((b) => b.addEventListener('click', () => modal.classList.add('open')));
      modal.querySelectorAll('[data-close]').forEach((el) => el.addEventListener('click', () => modal.classList.remove('open')));
      modal.querySelectorAll('.oauth-btn').forEach((b) => b.addEventListener('click', () => {
        modal.classList.remove('open'); showToast('Demo — auth gets wired later');
      }));
    }

    // reading progress (blog post)
    const prog = $('.progress-bar');
    if (prog) window.addEventListener('scroll', () => {
      const h = document.body.scrollHeight - innerHeight;
      prog.style.width = (h > 0 ? (scrollY / h) * 100 : 0) + '%';
    }, { passive: true });

    // contribution graph (about)
    const gh = document.getElementById('ghGrid');
    if (gh) {
      let cells = '';
      for (let i = 0; i < 371; i++) {
        const r = Math.random();
        const l = r > 0.82 ? 4 : r > 0.62 ? 3 : r > 0.45 ? 2 : r > 0.28 ? 1 : 0;
        cells += `<span class="gh-cell" data-l="${l}"></span>`;
      }
      gh.innerHTML = cells;
    }

    // count-up numbers
    $$('[data-count]').forEach((el) => {
      const target = parseInt(el.dataset.count, 10);
      const render = (v) => { el.textContent = Math.round(v).toLocaleString(); };
      render(0);
      const run = () => {
        if (M) M.animate((p) => render(p * target), { duration: 1.4, easing: [0.22, 1, 0.36, 1] });
        else render(target);
      };
      if (M) { let stop = M.inView(el, () => { run(); if (stop) stop(); }); } else run();
    });

    // photo stack drag (about)
    const stack = document.getElementById('photoStack');
    if (stack) {
      const caption = document.getElementById('stackCaption');
      const order = () => [...stack.querySelectorAll('.stack-card')].sort((a, b) => a.dataset.pos - b.dataset.pos);
      let drag = null;
      stack.addEventListener('pointerdown', (e) => {
        const top = order()[0];
        if (!top.contains(e.target) && e.target !== top) return;
        drag = { el: top, x0: e.clientX, y0: e.clientY, dx: 0, dy: 0 };
        top.setPointerCapture(e.pointerId);
      });
      stack.addEventListener('pointermove', (e) => {
        if (!drag) return;
        drag.dx = e.clientX - drag.x0; drag.dy = e.clientY - drag.y0;
        drag.el.style.transform = `translate(${drag.dx}px, ${drag.dy}px) rotate(${drag.dx * 0.06}deg)`;
      });
      const release = () => {
        if (!drag) return;
        const { el, dx, dy } = drag; drag = null;
        if (Math.hypot(dx, dy) > 110) {
          const fly = dx >= 0 ? 480 : -480;
          const done = () => {
            const cards = order();
            cards.forEach((c) => c.dataset.pos = (parseInt(c.dataset.pos) + cards.length - 1) % cards.length);
            el.style.transform = ''; el.style.opacity = '';
            if (caption) caption.textContent = order()[0].dataset.caption;
          };
          if (M) M.animate(el, { x: fly, opacity: 0 }, { duration: 0.3, easing: 'ease-in' }).finished.then(done);
          else done();
        } else if (M) {
          M.animate(el, { x: 0, y: 0, rotate: 0 }, { easing: SPRING }).finished.then(() => el.style.transform = '');
        } else el.style.transform = '';
      };
      stack.addEventListener('pointerup', release);
      stack.addEventListener('pointercancel', release);
      if (caption) caption.textContent = order()[0].dataset.caption;
    }
  }
})();
