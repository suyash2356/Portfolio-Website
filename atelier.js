(() => {
    'use strict';

    /* ==========================================================
       EDIT ME: the things you will change over time
       ========================================================== */
    const CONFIG = {
        githubUser: 'suyash2356',

        // Put certificate photos in a "certs" folder, keep the file names below
        // (or change them), and paste the real verify link in `link`.
        credentials: [
            {
                title: 'Machine Learning Specialization',
                issuer: 'DeepLearning.AI and Stanford Online',
                platform: 'Coursera',
                instructor: 'Andrew Ng',
                image: 'certs/machine-learning-specialization.jpg',
                link: '#'
            },
            {
                title: 'Deep Learning Specialization',
                issuer: 'DeepLearning.AI',
                platform: 'Coursera',
                instructor: 'Andrew Ng',
                image: 'certs/deep-learning-specialization.jpg',
                link: '#'
            }
        ],

        degree: {
            title: 'Bachelor of Computer Applications',
            focus: 'Full Stack Development',
            school: 'Ajeenkya DY Patil University',
            years: '2024 to 2027',
            note: 'Current CGPA 9.45'
        }
    };

    /* ==========================================================
       Helpers
       ========================================================== */
    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
    const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const src = (p) => encodeURI(String(p || '').trim());
    const isVideo = (p) => /\.(mp4|webm|ogg|mov|m4v)$/i.test(String(p || '').trim().split('?')[0]);
    const pad = (n) => String(n).padStart(3, '0');
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const EXT = '<svg class="ico" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3h8v8M13 3 4 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    const featured = typeof featuredProjects !== 'undefined' ? featuredProjects : [];
    const MEDIUM = { dl: 'Deep learning', ml: 'Machine learning', eda: 'Data analysis' };

    function parseDate(s) {
        const m = String(s || '').match(/(\d{4})-(\d{2})/);
        if (!m) return { t: 0, label: '' };
        const d = new Date(+m[1], +m[2] - 1, 15);
        return { t: d.getTime(), label: d.toLocaleString('en', { month: 'short', year: 'numeric' }) };
    }

    const stripTags = (h) => String(h || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();

    /* ==========================================================
       Theme
       ========================================================== */
    const root = document.documentElement;
    const themeBtn = $('#theme-btn');
    function syncThemeLabel() {
        const dark = root.dataset.theme === 'dark';
        themeBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    }
    themeBtn.addEventListener('click', () => {
        root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem('theme', root.dataset.theme); } catch (e) { }
        syncThemeLabel();
        document.dispatchEvent(new Event('themechange'));
    });
    syncThemeLabel();

    /* ==========================================================
       Header, mobile menu, active link
       ========================================================== */
    const header = $('#site-header');
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    const nav = $('#nav');
    const menuBtn = $('#menu-btn');
    function setMenu(open) {
        nav.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        document.body.classList.toggle('locked', open);
    }
    menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
    $$('a', nav).forEach((a) => a.addEventListener('click', () => setMenu(false)));

    const navLinks = $$('a', nav);
    const secObserver = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                navLinks.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
            }
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach((s) => secObserver.observe(s));

    $('#year').textContent = new Date().getFullYear();

    /* ==========================================================
       Hero: a flow field drawn like a developing cyanotype print.
       The lines bend around the cursor.
       ========================================================== */
    (function hero() {
        const cv = $('#hero-canvas');
        const ctx = cv.getContext('2d');
        let w = 0, h = 0, parts = [], t = 0, raf = 0, running = false;
        const mouse = { x: -9999, y: -9999 };
        let inkColor = '#E3EEF3', accentColor = '#FF8DA1';

        const readColors = () => {
            const cs = getComputedStyle(root);
            inkColor = cs.getPropertyValue('--ink').trim() || inkColor;
            accentColor = cs.getPropertyValue('--accent').trim() || accentColor;
        };

        const angle = (x, y) =>
            (Math.sin(x * 0.0021 + t * 0.004) + Math.cos(y * 0.0027 - t * 0.003) + Math.sin((x + y) * 0.0014 + t * 0.002)) * 1.25;

        function spawn(p) {
            p.x = Math.random() * w;
            p.y = Math.random() * h;
            p.life = 80 + Math.random() * 220;
            p.accent = Math.random() < 0.07;
            return p;
        }

        function resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = cv.clientWidth;
            h = cv.clientHeight;
            cv.width = w * dpr;
            cv.height = h * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const count = Math.max(120, Math.min(520, Math.floor((w * h) / 3600)));
            parts = Array.from({ length: count }, () => spawn({}));
            ctx.clearRect(0, 0, w, h);
        }

        function step(fade) {
            if (fade) {
                ctx.globalCompositeOperation = 'destination-out';
                ctx.fillStyle = 'rgba(0,0,0,0.045)';
                ctx.fillRect(0, 0, w, h);
                ctx.globalCompositeOperation = 'source-over';
            }
            ctx.lineWidth = 1.1;
            for (const p of parts) {
                const a = angle(p.x, p.y);
                let vx = Math.cos(a) * 1.15;
                let vy = Math.sin(a) * 1.15;
                const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
                if (d2 < 20000) {
                    const d = Math.sqrt(d2) || 1;
                    const f = (1 - d2 / 20000) * 2.6;
                    vx += (dx / d) * f;
                    vy += (dy / d) * f;
                }
                ctx.globalAlpha = p.accent ? 0.9 : 0.42;
                ctx.strokeStyle = p.accent ? accentColor : inkColor;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                p.x += vx;
                p.y += vy;
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
                if (--p.life <= 0 || p.x < -10 || p.x > w + 10 || p.y < -10 || p.y > h + 10) spawn(p);
            }
            ctx.globalAlpha = 1;
        }

        function loop() {
            if (!running) return;
            t += 1;
            step(true);
            raf = requestAnimationFrame(loop);
        }

        readColors();
        resize();

        if (reduceMotion) {
            for (let i = 0; i < 500; i++) { t += 1; step(false); }
        } else {
            new IntersectionObserver((e) => {
                const vis = e[0].isIntersecting;
                if (vis && !running) { running = true; loop(); }
                if (!vis) { running = false; cancelAnimationFrame(raf); }
            }).observe(cv);

            const hero = cv.parentElement;
            hero.addEventListener('pointermove', (e) => {
                const r = cv.getBoundingClientRect();
                mouse.x = e.clientX - r.left;
                mouse.y = e.clientY - r.top;
            });
            hero.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
        }

        let rt;
        window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(resize, 200); });
        document.addEventListener('themechange', () => { readColors(); ctx.clearRect(0, 0, w, h); });
    })();

    /* ==========================================================
       Overlays (shared open/close, focus, escape)
       ========================================================== */
    let lastFocus = null;
    let openOverlay = null;

    function showOverlay(el) {
        lastFocus = document.activeElement;
        openOverlay = el;
        el.classList.add('open');
        document.body.classList.add('locked');
        const c = $('.close', el);
        if (c) c.focus({ preventScroll: true });
    }
    function hideOverlay(el) {
        el.classList.remove('open');
        $$('video', el).forEach((v) => v.pause());
        if (openOverlay === el) openOverlay = null;
        if (!nav.classList.contains('open')) document.body.classList.remove('locked');
        if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
    }
    [$('#drawer'), $('#plate-modal')].forEach((ov) => {
        ov.addEventListener('mousedown', (e) => { if (e.target === ov) hideOverlay(ov); });
        ov.addEventListener('click', (e) => { if (e.target.closest('[data-close]')) hideOverlay(ov); });
    });
    document.addEventListener('keydown', (e) => {
        if (!openOverlay) return;
        if (e.key === 'Escape') { hideOverlay(openOverlay); return; }
        if (e.key === 'Tab') {
            const f = $$('a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])', openOverlay).filter((x) => x.offsetParent !== null);
            if (!f.length) return;
            const first = f[0], last = f[f.length - 1];
            if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
            else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
        }
        if (openOverlay.id === 'plate-modal') {
            if (e.key === 'ArrowRight') stepPlate(1);
            if (e.key === 'ArrowLeft') stepPlate(-1);
        }
    });

    /* ----- Carousel used inside both overlays ----- */
    function carouselHTML(items) {
        const many = items.length > 1;
        const slides = items.map((m, i) => {
            const vid = m.type === 'video' || isVideo(m.url);
            return `<div class="car-slide ${i === 0 ? 'on' : ''}">${vid
                ? `<video src="${src(m.url)}" controls playsinline preload="metadata"></video>`
                : `<img src="${src(m.url)}" alt="${esc(m.caption || 'Project image ' + (i + 1))}" ${i ? 'loading="lazy"' : ''} onerror="this.closest('.car-slide').innerHTML='<p style=&quot;padding:24px;color:#9DB8CB&quot;>Image not found</p>'" />`}
                ${m.caption ? `<div class="car-cap">${esc(m.caption)}</div>` : ''}</div>`;
        }).join('');
        const thumbs = many ? `<div class="thumbs">${items.map((m, i) => {
            const vid = m.type === 'video' || isVideo(m.url);
            return `<button type="button" class="thumb ${i === 0 ? 'on' : ''}" data-i="${i}" aria-label="Show media ${i + 1}">${vid ? `<video src="${src(m.url)}#t=0.5" preload="metadata" muted></video>` : `<img src="${src(m.url)}" alt="" loading="lazy" />`}</button>`;
        }).join('')}</div>` : '';
        const navBar = many ? `<div class="car-nav"><span class="car-count">1 of ${items.length}</span><div class="car-btns">
            <button type="button" class="icon-btn" data-dir="-1" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5-7 7 7 7"/></svg></button>
            <button type="button" class="icon-btn" data-dir="1" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button></div></div>` : '';
        return `<div class="car"><div class="car-stage">${slides}</div>${navBar}${thumbs}</div>`;
    }
    function mountCarousel(scope) {
        const car = $('.car', scope);
        if (!car) return;
        const slides = $$('.car-slide', car), thumbs = $$('.thumb', car), count = $('.car-count', car);
        let i = 0;
        const go = (n) => {
            if (slides.length < 2) return;
            const v = $('video', slides[i]); if (v) v.pause();
            i = (n + slides.length) % slides.length;
            slides.forEach((s, k) => s.classList.toggle('on', k === i));
            thumbs.forEach((t, k) => t.classList.toggle('on', k === i));
            if (count) count.textContent = `${i + 1} of ${slides.length}`;
        };
        $$('[data-dir]', car).forEach((b) => b.addEventListener('click', () => go(i + +b.dataset.dir)));
        thumbs.forEach((t) => t.addEventListener('click', () => go(+t.dataset.i)));
    }

    /* ==========================================================
       Products
       ========================================================== */
    const isLive = (p) => p.liveUrl && p.liveUrl !== '#';
    const hostOf = (u) => { try { return new URL(u).host; } catch (e) { return u; } };

    function renderProducts() {
        const box = $('#exhibits');
        if (!featured.length) { box.innerHTML = '<p class="empty">Products are loading.</p>'; return; }

        box.innerHTML = featured.map((p, idx) => {
            const live = isLive(p);
            const media = (p.media && p.media.length ? p.media : [{ type: 'image', url: p.coverImage, caption: p.title }]);
            const slides = media.map((m, i) => {
                const vid = m.type === 'video' || isVideo(m.url);
                const contain = !vid && /logo/i.test(m.url) ? 'contain' : '';
                return `<div class="slide ${contain}" data-i="${i}">${vid
                    ? `<video data-src="${src(m.url)}" muted loop playsinline preload="none"></video>`
                    : `<img src="${src(m.url)}" alt="${esc(m.caption || p.title)}" ${i ? 'loading="lazy"' : ''} />`}</div>`;
            }).join('');
            const dots = media.length > 1 ? `<div class="dots">${media.map((m, i) => `<button type="button" class="dot ${i === 0 ? 'on' : ''}" data-i="${i}" aria-label="Show image ${i + 1}"></button>`).join('')}</div>` : '';
            const desc = stripTags(p.overview).split(/(?<=\.)\s/).slice(0, 2).join(' ');
            const stack = (p.tags || []).slice(0, 6).join(', ');
            const stageInner = `${slides}<span class="ex-chip">${live ? 'Open the app' : 'Read the story'}${EXT}</span>`;
            const stage = live
                ? `<a class="ex-stage" href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer" data-cursor="Open the app" aria-label="Open ${esc(p.title)} in a new tab">${stageInner}</a>`
                : `<button type="button" class="ex-stage" data-open="${esc(p.id)}" data-cursor="Read the story" aria-label="Read the story of ${esc(p.title)}">${stageInner}</button>`;

            return `<article class="exhibit ${idx % 2 ? 'flip' : ''}" data-id="${esc(p.id)}">
                <div class="ex-meta">
                    <span class="status ${live ? 'live' : ''}"><i></i>${live ? 'Live now' : 'In active development'}</span>
                    <h3>${esc(p.title.split(' \u2013 ')[0].split(' - ')[0])}</h3>
                    <p class="ex-sub">${esc(p.subtitle || p.type || '')}</p>
                    <p class="ex-desc">${esc(desc)}</p>
                    <p class="ex-stack"><b>Built with</b> ${esc(stack)}</p>
                    <div class="ex-actions">
                        ${live
                    ? `<a class="btn btn-primary" href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer">Open the app${EXT}</a>`
                    : `<a class="btn btn-primary" href="#contact">Ask for early access</a>`}
                        <button type="button" class="link" data-open="${esc(p.id)}">Read the full story</button>
                    </div>
                </div>
                <div class="ex-frame-wrap">
                    <div class="ex-frame">${stage}</div>
                    <div class="ex-under"><span class="ex-cap"></span>${dots}</div>
                </div>
            </article>`;
        }).join('');

        $$('.exhibit', box).forEach((el) => mountExhibit(el, featured.find((p) => p.id === el.dataset.id)));
        $$('[data-open]', box).forEach((b) => b.addEventListener('click', () => openDrawer(b.dataset.open)));
    }

    function mountExhibit(el, p) {
        const media = (p.media && p.media.length ? p.media : [{ type: 'image', url: p.coverImage, caption: p.title }]);
        const slides = $$('.slide', el), dots = $$('.dot', el), cap = $('.ex-cap', el);
        let i = 0, timer = 0, visible = false, hover = false;

        const vidAt = (n) => media[n].type === 'video' || isVideo(media[n].url);
        function schedule() {
            clearTimeout(timer);
            if (slides.length < 2 || !visible || hover || reduceMotion) return;
            timer = setTimeout(() => show(i + 1), vidAt(i) ? 9000 : 4200);
        }
        function show(n) {
            i = (n + slides.length) % slides.length;
            slides.forEach((s, k) => {
                const on = k === i;
                s.classList.toggle('on', on);
                const v = $('video', s);
                if (v) {
                    if (on) { if (!v.getAttribute('src')) v.src = v.dataset.src; v.play().catch(() => { }); }
                    else v.pause();
                }
            });
            dots.forEach((d, k) => d.classList.toggle('on', k === i));
            cap.textContent = media[i].caption || '';
            schedule();
        }
        dots.forEach((d) => d.addEventListener('click', () => show(+d.dataset.i)));
        el.addEventListener('mouseenter', () => { hover = true; clearTimeout(timer); });
        el.addEventListener('mouseleave', () => { hover = false; schedule(); });
        new IntersectionObserver((e) => { visible = e[0].isIntersecting; visible ? schedule() : clearTimeout(timer); }, { threshold: 0.25 }).observe(el);
        show(0);
    }

    /* ----- Product drawer ----- */
    const humanize = (k) => k.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase());
    const val = (v) => Array.isArray(v) ? v.join(', ')
        : (v && typeof v === 'object') ? Object.entries(v).map(([k, x]) => `${humanize(k)}: ${x}`).join(', ') : v;
    const para = (t) => !t ? '' : (/<\w+[^>]*>/.test(t) ? t : `<p>${t}</p>`);
    const sect = (title, body) => body ? `<h4>${title}</h4>${body}` : '';
    const ul = (a) => a && a.length ? `<ul>${a.map((x) => `<li>${x}</li>`).join('')}</ul>` : '';
    const ol = (a) => a && a.length ? `<ol>${a.map((x) => `<li>${x}</li>`).join('')}</ol>` : '';
    const hl = (h) => { const m = String(h).match(/^([^:]{3,70}):\s*([\s\S]+)$/); return m ? `<li><b>${m[1]}</b>${m[2]}</li>` : `<li>${h}</li>`; };

    function drawerPanels(p) {
        const stats = p.stats && p.stats.length ? `<div class="d-stats">${p.stats.map((s) => `<div><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span></div>`).join('')}</div>` : '';

        const story = [
            para(p.overview),
            sect('The problem', para(p.problem)),
            sect('How a person uses it', para(p.userFlow)),
            sect('Why it matters', para(p.projectImpact)),
            sect('What makes it different', para(p.differentiator)),
            sect('How I think about learning', para(p.learningPhilosophy)),
            sect('Where it is going', para(p.vision)),
            p.disclaimer ? `<h4>A note on medical use</h4><p class="disclaimer">${p.disclaimer}</p>` : ''
        ].join('');

        const pv = p.productView;
        const features = [
            stats,
            p.highlights && p.highlights.length ? sect('What it does', `<ul class="plain">${p.highlights.map(hl).join('')}</ul>`) : '',
            pv ? sect(pv.title || 'What people can do', para(pv.description) + `<div class="d-two"><div><h5>As a patient</h5>${ol(pv.patientJourney)}</div><div><h5>As a doctor</h5>${ol(pv.doctorJourney)}</div></div>`) : '',
            p.coreModules ? sect('Inside the app', `<ul class="plain">${p.coreModules.map((m) => `<li><b>${m.name}</b>${m.purpose}. ${(m.capabilities || []).join(', ')}.</li>`).join('')}</ul>`) : '',
            p.targetAudience ? sect('Who it is for', ul(p.targetAudience)) : '',
            p.userExperienceFlow ? sect('A typical session', ol(p.userExperienceFlow)) : ''
        ].join('');

        const models = p.mlView && p.mlView.models ? p.mlView.models.map((m) =>
            `<dl class="kv"><dt class="kv-title">${m.name}</dt>${Object.entries(m).filter(([k]) => k !== 'name').map(([k, v]) => `<dt>${humanize(k)}</dt><dd>${val(v)}</dd>`).join('')}</dl>`).join('') : '';
        const tech = [
            p.techStack ? sect('Tech stack', `<dl>${p.techStack.map((t) => `<div class="kv"><dt>${t.category}</dt><dd>${t.tech}</dd></div>`).join('')}</dl>`) : '',
            p.mlView ? sect(p.mlView.title || 'Machine learning', para(p.mlView.description) + models + para(p.mlView.safetyLayer)) : '',
            p.technicalOverview ? sect('Technical overview', para(p.technicalOverview)) : '',
            p.architecture || '',
            p.technicalApproach || '',
            p.technicalPrinciples ? sect('Engineering principles', ul(p.technicalPrinciples)) : '',
            p.technicalFocus ? sect('Technical focus', ul(p.technicalFocus)) : '',
            p.futureRoadmap ? sect('Roadmap', ul(p.futureRoadmap)) : '',
            p.futureCapabilities ? sect('Planned capabilities', ul(p.futureCapabilities)) : ''
        ].join('');

        return [['Story', story], ['What it does', features], ['How it is built', tech]].filter(([, h]) => h.trim());
    }

    function openDrawer(id) {
        const p = featured.find((x) => x.id === id);
        if (!p) return;
        const live = isLive(p);
        const media = (p.media && p.media.length ? p.media : [{ type: 'image', url: p.coverImage, caption: p.title }]);
        const panels = drawerPanels(p);
        const sheet = $('#drawer-sheet');

        sheet.innerHTML = `
            <button class="close" type="button" data-close aria-label="Close">&times;</button>
            <div class="sheet-pad">
                <div class="d-head">
                    <span class="status ${live ? 'live' : ''}"><i></i>${live ? 'Live now' : 'In active development'}</span>
                    <h2>${esc(p.title)}</h2>
                    <p class="sub">${esc(p.subtitle || '')}</p>
                    <div class="d-actions">
                        ${live ? `<a class="btn btn-primary" href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer">Open the app${EXT}</a>`
                : `<a class="btn btn-primary" href="#contact" data-close>Ask for early access</a>`}
                        ${p.githubUrl ? `<a class="link" href="${esc(p.githubUrl)}" target="_blank" rel="noopener noreferrer">GitHub${EXT}</a>` : ''}
                    </div>
                </div>
                ${carouselHTML(media)}
                <div class="d-tabs" role="tablist">
                    ${panels.map(([name], i) => `<button type="button" class="tab" role="tab" aria-selected="${i === 0}" data-p="${i}">${name}</button>`).join('')}
                </div>
                <div class="d-body">${panels.map(([, html], i) => `<div class="d-panel" data-p="${i}" ${i ? 'hidden' : ''}>${html}</div>`).join('')}</div>
            </div>`;

        mountCarousel(sheet);
        $$('.d-tabs .tab', sheet).forEach((t) => t.addEventListener('click', () => {
            $$('.d-tabs .tab', sheet).forEach((x) => x.setAttribute('aria-selected', String(x === t)));
            $$('.d-panel', sheet).forEach((pn) => { pn.hidden = pn.dataset.p !== t.dataset.p; });
        }));
        sheet.scrollTop = 0;
        showOverlay($('#drawer'));
    }

    /* ==========================================================
       Collection
       ========================================================== */
    const all = []
        .concat(typeof edaProjects !== 'undefined' ? edaProjects : [])
        .concat(typeof mlProjects !== 'undefined' ? mlProjects : [])
        .concat(typeof dlProjects !== 'undefined' ? dlProjects : [])
        .map((p) => Object.assign({}, p, { _d: parseDate(p.date) }));
    all.sort((a, b) => a._d.t - b._d.t);
    all.forEach((p, i) => { p._no = i + 1; });

    const state = { cat: 'all', q: '' };
    let shown = [];

    function renderTabs() {
        const tabs = [['all', 'Everything'], ['dl', 'Deep learning'], ['ml', 'Machine learning'], ['eda', 'Data analysis']];
        $('#tabs').innerHTML = tabs.map(([k, name]) => {
            const n = k === 'all' ? all.length : all.filter((p) => p.category === k).length;
            return `<button class="tab" type="button" role="tab" aria-selected="${state.cat === k}" data-cat="${k}">${name}<small>${n}</small></button>`;
        }).join('');
        $$('#tabs .tab').forEach((b) => b.addEventListener('click', () => { state.cat = b.dataset.cat; renderTabs(); renderPlates(); }));
    }

    function renderPlates() {
        const q = state.q.trim().toLowerCase();
        shown = all.filter((p) => {
            if (state.cat !== 'all' && p.category !== state.cat) return false;
            if (!q) return true;
            return [p.title, p.summary, p.topic, (p.tags || []).join(' '), (p.algorithms || []).join(' ')].join(' ').toLowerCase().includes(q);
        }).sort((a, b) => b._d.t - a._d.t || b._no - a._no);

        const box = $('#plates');
        if (!shown.length) { box.innerHTML = '<p class="empty">Nothing matches that search. Try a tool name like PyTorch, or a topic like recommendation.</p>'; return; }

        box.innerHTML = shown.map((p) => {
            const first = String((p.images || [])[0] || '').trim();
            const vid = isVideo(first);
            const media = !first ? '' : vid
                ? `<video src="${src(first)}" muted loop playsinline preload="metadata"></video>`
                : `<img src="${src(first)}" alt="${esc(p.title)}" loading="lazy" onerror="this.closest('.plate-img').classList.add('noimg');this.remove()" />`;
            const method = (p.algorithms || []).slice(0, 3).join(', ');
            return `<button type="button" class="plate" data-id="${esc(p.id)}" data-cursor="Open plate">
                <span class="plate-img ${first ? '' : 'noimg'}"><span class="plate-no">No. ${pad(p._no)}</span>${media}</span>
                <h3>${esc(p.title)}</h3>
                <dl class="label">
                    <dt>Made</dt><dd>${esc(p._d.label || 'Date not set')}, ${MEDIUM[p.category] || ''}</dd>
                    <dt>Method</dt><dd>${esc(method)}</dd>
                    <dt>Data</dt><dd>${esc(p.datasetSize || '')}</dd>
                </dl>
            </button>`;
        }).join('');

        $$('.plate', box).forEach((b) => {
            b.addEventListener('click', () => openPlate(b.dataset.id));
            const v = $('video', b);
            if (v) { b.addEventListener('mouseenter', () => v.play().catch(() => { })); b.addEventListener('mouseleave', () => v.pause()); }
        });
    }

    $('#search').addEventListener('input', (e) => { state.q = e.target.value; renderPlates(); });

    /* ----- Plate viewer ----- */
    let plateIndex = 0;
    let plateList = [];

    function openPlate(id) {
        plateList = shown.slice();
        plateIndex = Math.max(0, plateList.findIndex((p) => p.id === id));
        drawPlate();
        showOverlay($('#plate-modal'));
    }
    function stepPlate(d) {
        if (!plateList.length) return;
        plateIndex = (plateIndex + d + plateList.length) % plateList.length;
        drawPlate();
    }
    function drawPlate() {
        const p = plateList[plateIndex];
        const sheet = $('#plate-sheet');
        const media = (p.images || []).map((u) => String(u).trim()).filter(Boolean).map((u) => ({ url: u, caption: '' }));
        const cta = p.githubLink
            ? `<a class="btn btn-primary" href="${esc(p.githubLink)}" target="_blank" rel="noopener noreferrer">${/\/tree\//.test(p.githubLink) ? 'View the code' : 'Open the notebook'}${EXT}</a>` : '<span></span>';
        const prev = plateList[(plateIndex - 1 + plateList.length) % plateList.length];
        const next = plateList[(plateIndex + 1) % plateList.length];

        sheet.innerHTML = `
            <button class="close" type="button" data-close aria-label="Close">&times;</button>
            <div class="sheet-pad">
                <div class="pm-head">
                    <p class="sub">Plate ${pad(p._no)}, ${MEDIUM[p.category] || ''}</p>
                    <h2>${esc(p.title)}</h2>
                </div>
                ${media.length ? carouselHTML(media) : ''}
                <dl class="pm-meta">
                    <div><dt>Made</dt><dd>${esc(p._d.label || 'Date not set')}</dd></div>
                    <div><dt>Topic</dt><dd>${esc(p.topic || '')}</dd></div>
                    <div><dt>Methods</dt><dd>${esc((p.algorithms || []).join(', '))}</dd></div>
                    <div><dt>Data</dt><dd>${esc(p.datasetSize || '')}</dd></div>
                </dl>
                <p class="pm-summary">${esc(p.summary || '')}</p>
                <div class="report">${p.detailedReport || ''}</div>
                <div class="pm-foot">
                    ${cta}
                    <div class="pm-step">
                        <button type="button" class="icon-btn" id="pm-prev" aria-label="Previous plate: ${esc(prev.title)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5-7 7 7 7"/></svg></button>
                        <button type="button" class="icon-btn" id="pm-next" aria-label="Next plate: ${esc(next.title)}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button>
                    </div>
                </div>
            </div>`;
        mountCarousel(sheet);
        $('#pm-prev', sheet).addEventListener('click', () => stepPlate(-1));
        $('#pm-next', sheet).addEventListener('click', () => stepPlate(1));
        $$('.report a', sheet).forEach((a) => { a.target = '_blank'; a.rel = 'noopener noreferrer'; });
        sheet.scrollTop = 0;
    }

    /* ==========================================================
       Credentials
       ========================================================== */
    function mockCert(title) {
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#0E3358'/><rect x='28' y='28' width='744' height='544' fill='none' stroke='#9DB8CB' stroke-width='2'/><rect x='46' y='46' width='708' height='508' fill='none' stroke='#9DB8CB' stroke-width='1' stroke-dasharray='6 8'/><text x='400' y='230' text-anchor='middle' font-family='Georgia,serif' font-size='30' fill='#E3EEF3'>Certificate of completion</text><text x='400' y='300' text-anchor='middle' font-family='Georgia,serif' font-size='38' fill='#E3EEF3'>${title}</text><text x='400' y='380' text-anchor='middle' font-family='Arial,sans-serif' font-size='20' fill='#9DB8CB'>Your certificate photo goes here</text></svg>`;
        return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }

    function renderCreds() {
        const d = CONFIG.degree;
        const degree = `<article class="cred cred-degree">
            <p class="big">BCA</p>
            <h3>${esc(d.title)}</h3>
            <p>${esc(d.focus)}<br>${esc(d.school)}<br>${esc(d.years)}</p>
            <p>${esc(d.note)}</p>
        </article>`;
        const certs = CONFIG.credentials.map((c) => {
            const pending = !c.link || c.link === '#';
            return `<article class="cred">
                <div class="cred-img"><img src="${src(c.image)}" alt="Certificate: ${esc(c.title)}" loading="lazy" data-mock="${esc(c.title)}" /></div>
                <h3>${esc(c.title)}</h3>
                <p>${esc(c.issuer)} on ${esc(c.platform)}. Taught by ${esc(c.instructor)}.</p>
                <a class="link" href="${pending ? '#credentials' : esc(c.link)}" ${pending ? 'aria-disabled="true" title="Verification link coming soon"' : 'target="_blank" rel="noopener noreferrer"'}>Verify certificate${pending ? '' : EXT}</a>
            </article>`;
        }).join('');
        const box = $('#creds');
        box.innerHTML = certs + degree;
        $$('img[data-mock]', box).forEach((img) => {
            img.addEventListener('error', () => { img.src = mockCert(img.dataset.mock); }, { once: true });
        });
        $$('a[aria-disabled="true"]', box).forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));
    }

    /* ==========================================================
       GitHub studio log: live contribution heatmap and streaks
       ========================================================== */
    async function loadGithub() {
        const heat = $('#heat');
        try {
            const r = await fetch(`https://github-contributions-api.jogruber.de/v4/${CONFIG.githubUser}?y=last`);
            if (!r.ok) throw new Error('bad status');
            const j = await r.json();
            const days = (j.contributions || []).slice().sort((a, b) => a.date.localeCompare(b.date));
            if (!days.length) throw new Error('no data');

            const total = days.reduce((s, d) => s + d.count, 0);
            let longest = 0, run = 0;
            days.forEach((d) => { run = d.count > 0 ? run + 1 : 0; if (run > longest) longest = run; });
            let k = days.length - 1, current = 0;
            if (days[k].count === 0) k--;
            while (k >= 0 && days[k].count > 0) { current++; k--; }

            $('#gh-total').textContent = total.toLocaleString();
            $('#gh-current').textContent = current;
            $('#gh-longest').textContent = longest;

            const first = new Date(days[0].date + 'T00:00:00').getDay();
            const cells = Array(first).fill('<i style="visibility:hidden"></i>');
            days.forEach((d) => {
                const lvl = d.level != null ? d.level : (d.count === 0 ? 0 : d.count < 3 ? 1 : d.count < 6 ? 2 : d.count < 10 ? 3 : 4);
                const when = new Date(d.date + 'T00:00:00').toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' });
                cells.push(`<i data-l="${lvl}" title="${d.count} contribution${d.count === 1 ? '' : 's'} on ${when}"></i>`);
            });
            const weeks = Math.ceil(cells.length / 7);

            let lastMonth = -1;
            const months = Array.from({ length: weeks }, (_, w) => {
                const idx = w * 7 - first;
                const day = days[Math.max(0, Math.min(days.length - 1, idx < 0 ? 0 : idx))];
                const m = new Date(day.date + 'T00:00:00').getMonth();
                if (m !== lastMonth) { lastMonth = m; return `<span>${new Date(2000, m, 1).toLocaleString('en', { month: 'short' })}</span>`; }
                return '<span></span>';
            }).join('');

            heat.innerHTML = `<div class="heat-months" style="grid-template-columns:repeat(${weeks},1fr)">${months}</div><div class="heat-grid" style="grid-template-columns:repeat(${weeks},1fr)">${cells.join('')}</div>`;
        } catch (e) {
            ['#gh-total', '#gh-current', '#gh-longest'].forEach((s) => { $(s).textContent = '-'; });
            heat.innerHTML = '<p class="heat-note">The live activity could not load right now. You can see it on GitHub instead.</p>';
        }
    }

    /* ==========================================================
       Contact form (Formspree, same endpoint as before)
       ========================================================== */
    (function contact() {
        const form = $('#contact-form'), status = $('#form-status'), btn = $('#form-btn');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            status.className = 'form-status';
            status.textContent = 'Sending...';
            btn.disabled = true;
            try {
                const r = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
                if (!r.ok) throw new Error('bad status');
                status.textContent = 'Message sent. I will reply by email.';
                form.reset();
            } catch (err) {
                status.className = 'form-status err';
                status.textContent = 'That did not send. Check your connection and try again, or email me directly.';
            } finally {
                btn.disabled = false;
            }
        });
    })();

    /* ==========================================================
       Cursor label (only on devices with a mouse)
       ========================================================== */
    if (finePointer && !reduceMotion) {
        const cur = $('#cursor');
        let x = 0, y = 0, tx = 0, ty = 0, active = false;
        document.addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; });
        document.addEventListener('mouseover', (e) => {
            const t = e.target.closest('[data-cursor]');
            if (t && !openOverlay) { cur.textContent = t.dataset.cursor; cur.classList.add('on'); active = true; }
            else { cur.classList.remove('on'); }
        });
        (function tick() {
            x += (tx - x) * 0.2; y += (ty - y) * 0.2;
            cur.style.left = x + 'px'; cur.style.top = y + 'px';
            requestAnimationFrame(tick);
        })();
    }

    /* ==========================================================
       Start
       ========================================================== */
    renderProducts();
    renderTabs();
    renderPlates();
    renderCreds();
    loadGithub();

    $('#hero-count').textContent =
        `${featured.length} products, ${all.length} experiments and ${CONFIG.credentials.length} certifications`;
})();
