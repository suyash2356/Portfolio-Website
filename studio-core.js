/* ==========================================================
   studio-core.js : shared by index.html and collection.html
   ========================================================== */
(() => {
    'use strict';

    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
    const root = document.documentElement;
    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
    const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
    const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const src = (p) => encodeURI(String(p || '').trim());
    const isVideo = (p) => /\.(mp4|webm|ogg|mov|m4v)$/i.test(String(p || '').trim().split('?')[0]);
    const pad = (n) => String(n).padStart(3, '0');
    const stripTags = (h) => String(h || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    const EXT = '<svg class="ico" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3h8v8M13 3 4 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    /* ----------------------------------------------------------
       Data: featured products and the whole collection
       ---------------------------------------------------------- */
    const featured = typeof featuredProjects !== 'undefined' ? featuredProjects : [];
    const KIND = { dl: 'Deep learning', ml: 'Machine learning', eda: 'Data analysis' };

    function parseDate(s) {
        const m = String(s || '').match(/(\d{4})-(\d{2})/);
        if (!m) return { t: 0, label: '', year: '' };
        const d = new Date(+m[1], +m[2] - 1, 15);
        return { t: d.getTime(), label: d.toLocaleString('en', { month: 'short', year: 'numeric' }), year: String(d.getFullYear()) };
    }

    const all = []
        .concat(typeof edaProjects !== 'undefined' ? edaProjects : [])
        .concat(typeof mlProjects !== 'undefined' ? mlProjects : [])
        .concat(typeof dlProjects !== 'undefined' ? dlProjects : [])
        .map((p) => Object.assign({}, p, {
            _d: parseDate(p.date),
            images: (p.images || []).map((s) => String(s).trim()).filter(Boolean)
        }));
    all.sort((a, b) => b._d.t - a._d.t);
    all.forEach((p, i) => { p._no = i + 1; });

    /* Topics are worked out from each project's own title, topic, tags and methods */
    const TOPICS = [
        { id: 'vision', name: 'Computer vision', test: (p, h) => /computer vision|\bcnn\b|resnet|yolo|efficientnet|vgg|\bimages?\b|opencv|segmentation|face recognition/.test(h) },
        { id: 'language', name: 'Language and text', test: (p, h) => /\bnlp\b|glove|embedding|tf-idf|sentence transformer|word vector/.test(h) },
        { id: 'recsys', name: 'Recommenders', test: (p, h) => /recommend|collaborative filtering/.test(h) },
        { id: 'markets', name: 'Markets and time series', test: (p, h) => /stock|aapl|time series|trading/.test(h) },
        { id: 'health', name: 'Health', test: (p, h) => /health|stroke|skin|cancer|covid|depression|medical/.test(h) },
        { id: 'earth', name: 'Earth and agriculture', test: (p, h) => /remote sensing|sentinel|crop|plant|agricultur|satellite/.test(h) },
        { id: 'anomaly', name: 'Anomaly and fraud', test: (p, h) => /anomaly|fraud/.test(h) },
        { id: 'prediction', name: 'Regression and prediction', test: (p, h) => /regression|predict|forecast|severity/.test(h) },
        { id: 'rl', name: 'Reinforcement learning', test: (p, h) => /reinforcement|q-learning|dqn|cartpole/.test(h) },
        { id: 'basics', name: 'Fundamentals', test: (p, h) => /sigmoid|from scratch|fundamental|mnist|hand sign|gradient descent/.test(h) },
        { id: 'eda', name: 'Data analysis', test: (p) => p.category === 'eda' }
    ];
    all.forEach((p) => {
        const h = [p.title, p.topic, (p.tags || []).join(' '), (p.algorithms || []).join(' ')].join(' ').toLowerCase();
        p._topics = TOPICS.filter((t) => t.test(p, h)).map((t) => t.id);
    });
    const topicCounts = TOPICS.map((t) => ({ id: t.id, name: t.name, count: all.filter((p) => p._topics.includes(t.id)).length }))
        .filter((t) => t.count > 0);
    const topicName = (id) => (TOPICS.find((t) => t.id === id) || {}).name || id;

    /* ----------------------------------------------------------
       Theme
       ---------------------------------------------------------- */
    const themeBtn = $('#theme-btn');
    function syncTheme() {
        if (themeBtn) themeBtn.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
            try { localStorage.setItem('theme', root.dataset.theme); } catch (e) { }
            syncTheme();
            document.dispatchEvent(new Event('themechange'));
        });
        syncTheme();
    }

    /* ----------------------------------------------------------
       Header + mobile menu
       ---------------------------------------------------------- */
    const header = $('#site-header');
    if (header) {
        const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
        addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }
    const nav = $('#nav'), menuBtn = $('#menu-btn');
    function setMenu(open) {
        if (!nav || !menuBtn) return;
        nav.classList.toggle('open', open);
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        document.body.classList.toggle('locked', open);
    }
    if (menuBtn) {
        menuBtn.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
        $$('a', nav).forEach((a) => a.addEventListener('click', () => setMenu(false)));
    }

    /* ----------------------------------------------------------
       Ambient spotlight: the dot grid lights up under the cursor
       ---------------------------------------------------------- */
    if (finePointer) {
        addEventListener('pointermove', (e) => {
            root.style.setProperty('--mx', e.clientX + 'px');
            root.style.setProperty('--my', e.clientY + 'px');
        }, { passive: true });
    }

    /* ----------------------------------------------------------
       Cursor: a dot that grows into a label over interactive things
       ---------------------------------------------------------- */
    if (finePointer && !reduceMotion) {
        const cur = document.createElement('div');
        cur.className = 'cursor';
        cur.innerHTML = '<span class="cursor-label"></span>';
        document.body.appendChild(cur);
        const label = $('.cursor-label', cur);
        let x = 0, y = 0, tx = 0, ty = 0;
        addEventListener('pointermove', (e) => { tx = e.clientX; ty = e.clientY; cur.classList.add('vis'); }, { passive: true });
        document.addEventListener('mouseleave', () => cur.classList.remove('vis'));
        document.addEventListener('pointerover', (e) => {
            const t = e.target.closest ? e.target.closest('[data-cursor]') : null;
            if (t) { label.textContent = t.dataset.cursor; cur.classList.add('label'); } else cur.classList.remove('label');
            cur.classList.toggle('link', !!(e.target.closest && e.target.closest('a, button, input, textarea, select, summary')));
        });
        (function tick() {
            x += (tx - x) * 0.24; y += (ty - y) * 0.24;
            cur.style.transform = `translate(${x}px, ${y}px)`;
            requestAnimationFrame(tick);
        })();
    }

    /* ----------------------------------------------------------
       Page transitions: a brass curtain wipes between pages
       ---------------------------------------------------------- */
    const curtain = $('#curtain');
    const EASE_IO = 'cubic-bezier(.7,0,.2,1)';
    if (curtain) {
        if (root.classList.contains('arrive')) {
            if (reduceMotion) root.classList.remove('arrive');
            else {
                const a = curtain.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }],
                    { duration: 850, easing: EASE_IO, fill: 'forwards', delay: 150 });
                a.onfinish = () => { root.classList.remove('arrive'); a.cancel(); };
            }
        }
        document.addEventListener('click', (e) => {
            const a = e.target.closest ? e.target.closest('a[data-transition]') : null;
            if (!a || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0 || a.target === '_blank') return;
            e.preventDefault();
            const url = a.href;
            try { sessionStorage.setItem('nav', '1'); } catch (err) { }
            if (reduceMotion) { location.href = url; return; }
            const w = curtain.animate([{ transform: 'translateY(100%)' }, { transform: 'translateY(0)' }],
                { duration: 650, easing: EASE_IO, fill: 'forwards' });
            w.onfinish = () => { location.href = url; };
        });
        addEventListener('pageshow', (e) => {
            if (e.persisted) { curtain.getAnimations().forEach((a) => a.cancel()); root.classList.remove('arrive'); }
        });
    }

    /* ----------------------------------------------------------
       FX helpers: decode text, count up, magnet, tilt, reveal
       ---------------------------------------------------------- */
    function decode(el) {
        const final = el.textContent;
        el.setAttribute('aria-label', final);
        if (reduceMotion || final.length > 30) return;
        const glyphs = '01<>/+*#%&=';
        const letters = Array.from(final);
        const t0 = performance.now(), dur = 900;
        (function f(now) {
            const p = (now - t0) / dur;
            el.textContent = letters.map((c, i) => c === ' ' ? ' ' : (p * 1.25 > i / letters.length + 0.15 ? c : glyphs[(Math.random() * glyphs.length) | 0])).join('');
            if (p < 1.4) requestAnimationFrame(f); else el.textContent = final;
        })(t0);
    }
    function countUp(el, to) {
        const target = to != null ? to : parseFloat(el.dataset.count);
        if (isNaN(target)) return;
        const suffix = el.dataset.suffix || '';
        if (reduceMotion) { el.textContent = target.toLocaleString() + suffix; return; }
        const t0 = performance.now(), dur = 1300;
        (function f(now) {
            const p = clamp((now - t0) / dur, 0, 1);
            const e = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * e).toLocaleString() + suffix;
            if (p < 1) requestAnimationFrame(f);
        })(t0);
    }
    const fxIO = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target;
            fxIO.unobserve(el);
            if (el.hasAttribute('data-decode')) decode(el);
            if (el.hasAttribute('data-count')) countUp(el);
            if (el.classList.contains('io')) el.classList.add('in');
        });
    }, { threshold: 0.2 });

    const magnets = [];
    function fx(scope = document) {
        $$('[data-decode], [data-count], .io', scope).forEach((el) => { if (!el._fx) { el._fx = 1; fxIO.observe(el); } });
        if (finePointer) {
            $$('[data-magnet]', scope).forEach((el) => { if (!el._mg) { el._mg = 1; magnets.push(el); } });
            $$('[data-tilt]', scope).forEach((el) => {
                if (el._tl) return; el._tl = 1;
                el.addEventListener('pointermove', (e) => {
                    const r = el.getBoundingClientRect();
                    const px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
                    el.style.setProperty('--rx', ((py - 0.5) * -7).toFixed(2) + 'deg');
                    el.style.setProperty('--ry', ((px - 0.5) * 9).toFixed(2) + 'deg');
                    el.style.setProperty('--sx', (px * 100).toFixed(1) + '%');
                    el.style.setProperty('--sy', (py * 100).toFixed(1) + '%');
                });
                el.addEventListener('pointerleave', () => { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
            });
        }
    }
    if (finePointer) {
        addEventListener('pointermove', (e) => {
            magnets.forEach((m) => {
                const r = m.getBoundingClientRect();
                const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
                m.style.transform = Math.hypot(dx, dy) < r.width * 0.85 ? `translate(${dx * 0.22}px, ${dy * 0.3}px)` : '';
            });
        }, { passive: true });
    }

    /* ----------------------------------------------------------
       Overlays (drawer and plate viewer)
       ---------------------------------------------------------- */
    let lastFocus = null, openOverlay = null, plateList = [], plateIndex = 0;

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
        if (!(nav && nav.classList.contains('open'))) document.body.classList.remove('locked');
        if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
        document.dispatchEvent(new CustomEvent('overlayclosed', { detail: el.id }));
    }
    $$('.overlay').forEach((ov) => {
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

    /* Carousel used by both overlays */
    function carouselHTML(items) {
        const many = items.length > 1;
        const slides = items.map((m, i) => {
            const vid = m.type === 'video' || isVideo(m.url);
            return `<div class="car-slide ${i === 0 ? 'on' : ''}">${vid
                ? `<video src="${src(m.url)}" controls playsinline preload="metadata"></video>`
                : `<img src="${src(m.url)}" alt="${esc(m.caption || 'Project image ' + (i + 1))}" ${i ? 'loading="lazy"' : ''} onerror="this.closest('.car-slide').innerHTML='<p style=&quot;padding:24px;color:#9DB1AE&quot;>Image not found</p>'" />`}
                ${m.caption ? `<div class="car-cap">${esc(m.caption)}</div>` : ''}</div>`;
        }).join('');
        const prevNextNav = many
            ? `<button type="button" class="ex-nav-btn prev" data-dir="-1" aria-label="Previous slide"></button><button type="button" class="ex-nav-btn next" data-dir="1" aria-label="Next slide"></button><span class="ex-nav-hint prev" aria-hidden="true">‹</span><span class="ex-nav-hint next" aria-hidden="true">›</span>`
            : '';
        const thumbs = many ? `<div class="thumbs">${items.map((m, i) => {
            const vid = m.type === 'video' || isVideo(m.url);
            return `<button type="button" class="thumb ${i === 0 ? 'on' : ''}" data-i="${i}" aria-label="Show media ${i + 1}">${vid ? `<video src="${src(m.url)}#t=0.5" preload="metadata" muted></video>` : `<img src="${src(m.url)}" alt="" loading="lazy" />`}</button>`;
        }).join('')}</div>` : '';
        const navBar = many ? `<div class="car-nav"><span class="car-count">1 of ${items.length}</span><div class="car-btns">
            <button type="button" class="icon-btn" data-dir="-1" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5-7 7 7 7"/></svg></button>
            <button type="button" class="icon-btn" data-dir="1" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m9 5 7 7-7 7"/></svg></button></div></div>` : '';
        return `<div class="car"><div class="car-stage">${slides}${prevNextNav}</div>${navBar}${thumbs}</div>`;
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
        $$('[data-dir]', car).forEach((b) => b.addEventListener('click', (e) => {
            e.stopPropagation();
            go(i + +b.dataset.dir);
        }));
        thumbs.forEach((t) => t.addEventListener('click', () => go(+t.dataset.i)));
    }

    /* Plate viewer (full project report) */
    function openPlate(id, list) {
        plateList = (list && list.length ? list : all).slice();
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
        const media = p.images.map((u) => ({ url: u, caption: '' }));
        const cta = p.githubLink
            ? `<a class="btn btn-primary" href="${esc(p.githubLink)}" target="_blank" rel="noopener noreferrer">${/\/tree\//.test(p.githubLink) ? 'View the code' : 'Open the notebook'}${EXT}</a>` : '<span></span>';
        const prev = plateList[(plateIndex - 1 + plateList.length) % plateList.length];
        const next = plateList[(plateIndex + 1) % plateList.length];
        sheet.innerHTML = `
            <button class="close" type="button" data-close aria-label="Close">&times;</button>
            <div class="sheet-pad">
                <div class="pm-head">
                    <p class="sub">Plate ${pad(p._no)}, ${KIND[p.category] || ''}</p>
                    <h2>${esc(p.title)}</h2>
                </div>
                ${media.length ? carouselHTML(media) : ''}
                <dl class="pm-meta">
                    <div><dt>Made</dt><dd>${esc(p._d.label || 'Date not set')}</dd></div>
                    <div><dt>Topic</dt><dd>${esc(p.topic || '')}</dd></div>
                    <div><dt>Methods</dt><dd>${esc((p.algorithms || []).join(', '))}</dd></div>
                    <div><dt>Data</dt><dd>${esc(p.datasetSize || '')}</dd></div>
                </dl>
                <div class="pm-topics">${p._topics.map((t) => `<span>${esc(topicName(t))}</span>`).join('')}</div>
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

    const yr = $('#year');
    if (yr) yr.textContent = new Date().getFullYear();

    window.Studio = {
        $, $$, root, reduceMotion, finePointer, clamp, esc, src, isVideo, pad, stripTags, EXT,
        featured, all, KIND, TOPICS, topicCounts, topicName,
        fx, countUp, decode, showOverlay, hideOverlay, carouselHTML, mountCarousel, openPlate,
        isOverlayOpen: () => !!openOverlay
    };
})();
