/* ==========================================================
   studio-home.js : the journey (index.html)
   Needs studio-core.js loaded first.
   ========================================================== */
(() => {
    'use strict';
    const S = window.Studio;
    const { $, $$, root, reduceMotion, clamp, esc, src, isVideo, pad, stripTags, EXT, featured, all } = S;

    /* ==========================================================
       EDIT ME: things you will change over time
       ========================================================== */
    const CONFIG = {
        githubUser: 'suyash2356',
        formAction: 'https://formspree.io/f/mojjjpwg',
        portrait: 'Suyash.jpg',

        // Put certificate photos in a "certs" folder and paste the real verify link.
        credentials: [
            {
                title: 'Machine Learning Specialization',
                issuer: 'DeepLearning.AI and Stanford Online',
                platform: 'Coursera',
                instructor: 'Andrew Ng',
                image: 'certs/Coursera 9JAUVYG97QYH.pdf',
                link: 'https://coursera.org/share/194703259fa988949fffa7aa99f6a27e'
            },
            {
                title: 'Deep Learning Specialization',
                issuer: 'DeepLearning.AI',
                platform: 'Coursera',
                instructor: 'Andrew Ng',
                image: 'certs/neural network and deep learning.pdf',
                link: 'https://coursera.org/share/da185fe6918664b0210d9e320b946e69'
            }
        ]
    };


    // EDIT ME: your education, newest or planned first. Delete or change anything that is not true.
    const EDUCATION = [
        {
            years: '2024 to 2027', status: 'Final year, in progress',
            title: 'Bachelor of Computer Applications', focus: 'Full Stack Development', school: 'Ajeenkya DY Patil University',
            stats: [{ label: 'Current CGPA', value: '9.43' }],
            topics: ['Computer science fundamentals', 'Data structures', 'Java programming', 'Databases (SQL and NoSQL)', 'Web development']
        },
        {
            years: '2022 to 2024', status: 'Completed',
            title: 'Higher Secondary, Science', focus: 'Physics, Chemistry and Mathematics', school: 'HPT Arts and RYK Science',
            stats: [{ label: '12th, PCM', value: '72.33%', v: 0.7233 }],
            topics: []
        },
        {
            years: '2016 to 2022', status: 'Completed',
            title: 'Secondary School Certificate (10th)', focus: 'General Studies & Science', school: 'Shree Nityanand English Medium School',
            stats: [{ label: '10th', value: '90.00%', v: 0.9 }],
            topics: ['Communication', 'Science', 'Maths', 'History']
        }
    ];

    // Each tile: [symbol, name, keywords used to count your real projects]
    const BANDS = [
        {
            id: 'core', name: 'Foundations', blurb: 'Languages, data tools and the habits underneath everything.', items: [
                ['Py', 'Python', ['python']], ['Pd', 'Pandas', ['pandas']], ['Np', 'NumPy', ['numpy']], ['Mp', 'Matplotlib', ['matplotlib']],
                ['Sn', 'Seaborn', ['seaborn']], ['Sq', 'SQL', ['sql']], ['Mg', 'MongoDB', ['mongodb']], ['Jv', 'Java', ['java']], ['Gt', 'Git', ['git']]]
        },
        {
            id: 'ml', name: 'Machine learning', blurb: 'Classical models and honest evaluation.', items: [
                ['Sk', 'Scikit-learn', ['scikit']], ['Xg', 'XGBoost', ['xgboost']], ['Rf', 'Random forest', ['random forest']], ['Rg', 'Regression', ['regression']],
                ['Km', 'Clustering', ['clustering', 'k-means']], ['An', 'Anomaly detection', ['anomaly']], ['Rc', 'Recommenders', ['recommend']], ['Pc', 'PCA', ['pca']]]
        },
        {
            id: 'dl', name: 'Deep learning', blurb: 'Networks that see, read and remember.', items: [
                ['Pt', 'PyTorch', ['pytorch']], ['Tf', 'TensorFlow', ['tensorflow']], ['Ke', 'Keras', ['keras']], ['Cn', 'CNNs', ['cnn', 'convolutional']],
                ['Rn', 'RNN', ['rnn', 'lstm', 'gru', 'recurrent'], ['Vanilla RNN', 'LSTM (Long Short-Term Memory)', 'GRU (Gated Recurrent Unit)', 'Bidirectional RNNs', 'Hidden State & Cell Memory', 'Sequential Time-Series Modeling']],
                ['Tr', 'Transformer', ['transformer', 'attention', 'encoder', 'decoder'], ['Encoder Architecture', 'Decoder Architecture', 'Multi-Head Self-Attention', 'Cross-Attention Mechanism', 'Positional Encoding (Sinusoidal)', 'Masked Language & Causal Attention', 'BPE Tokenization (Byte-Pair)']],
                ['Tl', 'Transfer learning', ['transfer learning', 'efficientnet', 'resnet', 'vgg']], ['Yo', 'YOLO', ['yolo']],
                ['Em', 'Embeddings', ['glove', 'embedding']], ['Rl', 'Reinforcement learning', ['reinforcement', 'dqn']]]
        },
        {
            id: 'ship', name: 'Build and ship', blurb: 'Turning models into things people can use.', items: [
                ['St', 'Streamlit', ['streamlit']], ['Fl', 'Flask', ['flask']], ['Nx', 'Next.js', ['next.js']], ['Re', 'React', ['react']],
                ['Ts', 'TypeScript', ['typescript']], ['Fb', 'Firebase', ['firebase']], ['Sb', 'Supabase', ['supabase']], ['Cv', 'OpenCV', ['opencv']]]
        }
    ];

    const isLive = (p) => p.liveUrl && p.liveUrl !== '#';
    const hostOf = (u) => { try { return new URL(u).host; } catch (e) { return u; } };

    /* ==========================================================
       Intro and the "ready" signal that starts the hero animation
       ========================================================== */
    function ready() { root.classList.add('ready'); }

    function intro() {
        const el = $('#intro');
        if (!root.classList.contains('intro-on') || reduceMotion || !el) {
            root.classList.remove('intro-on');
            if (root.classList.contains('arrive')) setTimeout(ready, 750); else ready();
            return;
        }
        const bar = $('.intro-bar i', el), num = $('.intro-num', el);
        const t0 = performance.now(), dur = 1500;
        (function f(now) {
            const p = Math.min(1, (now - t0) / dur);
            const e = 1 - Math.pow(1 - p, 3);
            bar.style.transform = `scaleX(${e})`;
            num.textContent = String(Math.round(e * 100)).padStart(3, '0');
            if (p < 1) requestAnimationFrame(f);
            else {
                el.classList.add('open');
                setTimeout(() => {
                    root.classList.remove('intro-on');
                    try { sessionStorage.setItem('intro', '1'); } catch (e2) { }
                    ready();
                }, 800);
            }
        })(t0);
    }

    /* ==========================================================
       Hero: name letters, particle portrait, ticker
       ========================================================== */
    function splitName() {
        $$('[data-split]').forEach((el) => {
            const text = el.textContent.trim();
            el.setAttribute('aria-label', text);
            let n = 0;
            el.innerHTML = Array.from(text).map((c) => `<span class="ch" aria-hidden="true" style="--i:${n++ + (el.dataset.split === '2' ? 6 : 0)}">${c === ' ' ? '&nbsp;' : c}</span>`).join('');
        });
    }

    /* The portrait is rebuilt from thousands of data points. They assemble,
       bend away from the cursor, scatter when you click, and a light bar scans down. */
    function portrait() {
        const stage = $('#portrait');
        if (!stage) return;
        const cv = $('canvas', stage);
        if (!cv) return;
        const ctx = cv.getContext('2d');
        const TAU = Math.PI * 2;
        let W = 0, H = 0, N = 0, step = 6, base = 3, t0 = 0, raf = 0, running = false, ok = false;
        let hx, hy, px, py, vx, vy, lum, dl;
        const mouse = { x: -999, y: -999 };
        let cols = { faint: '#9DB1AE', ice: '#86E3DA', brass: '#D8A94E', ink: '#EEE7D4' };
        const readCols = () => {
            const cs = getComputedStyle(root);
            cols = { faint: cs.getPropertyValue('--ink2').trim(), ice: cs.getPropertyValue('--ice').trim(), brass: cs.getPropertyValue('--brass').trim(), ink: cs.getPropertyValue('--ink').trim() };
        };

        const img = new Image();
        const useFallback = () => { stage.classList.add('fallback'); running = false; cancelAnimationFrame(raf); };

        function build() {
            const rect = stage.getBoundingClientRect();
            W = Math.max(220, Math.round(stage.offsetWidth || rect.width));
            H = Math.max(270, Math.round(stage.offsetHeight || rect.height));
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            cv.width = W * dpr; cv.height = H * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            const off = document.createElement('canvas');
            off.width = W; off.height = H;
            const o = off.getContext('2d', { willReadFrequently: true });
            const iw = img.naturalWidth, ih = img.naturalHeight;
            const sc = Math.max(W / iw, H / ih), dw = iw * sc, dh = ih * sc;
            o.drawImage(img, (W - dw) / 2, (H - dh) * 0.18, dw, dh);

            let data;
            try { data = o.getImageData(0, 0, W, H).data; } catch (e) { useFallback(); return false; }

            step = Math.max(5, Math.round(Math.sqrt((W * H) / 7000)));
            base = step * 0.52;
            const cap = Math.ceil(W / step) * Math.ceil(H / step) + 8;
            hx = new Float32Array(cap); hy = new Float32Array(cap); px = new Float32Array(cap); py = new Float32Array(cap);
            vx = new Float32Array(cap); vy = new Float32Array(cap); lum = new Float32Array(cap); dl = new Float32Array(cap);
            let n = 0;
            for (let y = step / 2; y < H; y += step) {
                for (let x = step / 2; x < W; x += step) {
                    const i = ((y | 0) * W + (x | 0)) * 4;
                    if (data[i + 3] < 20) continue;
                    let l = (0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]) / 255;
                    l = Math.pow(clamp((l - 0.08) / 0.8, 0, 1), 0.85);
                    hx[n] = x; hy[n] = y; lum[n] = l;
                    const ang = Math.random() * TAU, dist = W * (0.25 + Math.random() * 0.7);
                    px[n] = reduceMotion ? x : x + Math.cos(ang) * dist;
                    py[n] = reduceMotion ? y : y + Math.sin(ang) * dist;
                    vx[n] = 0; vy[n] = 0;
                    dl[n] = reduceMotion ? 0 : (x / W) * 500 + Math.random() * 900;
                    n++;
                }
            }
            N = n;
            t0 = performance.now();
            ok = true;
            return true;
        }

        function draw(now) {
            ctx.clearRect(0, 0, W, H);
            const dark = root.dataset.theme === 'dark';
            const el = now - t0;
            const scanY = ((now % 7500) / 7500) * (H + 160) - 80;
            const P = [new Path2D(), new Path2D(), new Path2D(), new Path2D(), new Path2D()];
            const R = 110, R2 = R * R;
            for (let i = 0; i < N; i++) {
                let x = px[i], y = py[i];
                if (el >= dl[i] && !reduceMotion) {
                    let ax = (hx[i] - x) * 0.075, ay = (hy[i] - y) * 0.075;
                    const dx = x - mouse.x, dy = y - mouse.y, d2 = dx * dx + dy * dy;
                    if (d2 < R2) { const d = Math.sqrt(d2) || 1, f = 1 - d / R; ax += (dx / d) * f * f * 7; ay += (dy / d) * f * f * 7; }
                    vx[i] = (vx[i] + ax) * 0.82; vy[i] = (vy[i] + ay) * 0.82;
                    x += vx[i]; y += vy[i]; px[i] = x; py[i] = y;
                }
                const ink = dark ? lum[i] : 1 - lum[i];
                if (ink < 0.06) continue;
                const boost = reduceMotion ? 0 : Math.max(0, 1 - Math.abs(hy[i] - scanY) / 50);
                let r = base * (0.3 + 0.7 * ink) * (1 + boost * 0.9);
                if (el < dl[i]) r *= 0.5;
                const b = boost > 0.35 ? 4 : ink < 0.3 ? 0 : ink < 0.55 ? 1 : ink < 0.8 ? 2 : 3;
                P[b].moveTo(x + r, y);
                P[b].arc(x, y, r, 0, TAU);
            }
            const alphas = [0.38, 0.6, 0.88, 0.95, 1];
            const colors = [cols.faint, cols.ice, cols.brass, cols.ink, cols.brass];
            for (let b = 0; b < 5; b++) { ctx.globalAlpha = alphas[b]; ctx.fillStyle = colors[b]; ctx.fill(P[b]); }
            ctx.globalAlpha = 1;
        }

        function loop(now) {
            if (!running) return;
            draw(now);
            raf = requestAnimationFrame(loop);
        }

        function start() {
            if (reduceMotion) { draw(performance.now()); return; }
            new IntersectionObserver((e) => {
                const vis = e[0].isIntersecting;
                if (vis && !running && ok) { running = true; raf = requestAnimationFrame(loop); }
                if (!vis) { running = false; cancelAnimationFrame(raf); }
            }).observe(stage);
        }

        img.onload = () => { readCols(); if (build()) start(); };
        img.onerror = useFallback;
        img.src = CONFIG.portrait;

        cv.addEventListener('pointermove', (e) => { const r = cv.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
        cv.addEventListener('pointerleave', () => { mouse.x = mouse.y = -999; });
        cv.addEventListener('pointerdown', (e) => {
            const r = cv.getBoundingClientRect();
            const cx = e.clientX - r.left, cy = e.clientY - r.top;
            for (let i = 0; i < N; i++) {
                const dx = px[i] - cx, dy = py[i] - cy, d = Math.hypot(dx, dy) || 1;
                if (d < 260) { const f = (1 - d / 260) * 16; vx[i] += (dx / d) * f; vy[i] += (dy / d) * f; }
            }
            if (reduceMotion) draw(performance.now());
        });

        let rt;
        addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(() => { if (img.complete && img.naturalWidth && !stage.classList.contains('fallback')) { running = false; cancelAnimationFrame(raf); if (build()) { running = true; raf = requestAnimationFrame(loop); if (reduceMotion) draw(performance.now()); } } }, 250); });
        document.addEventListener('themechange', () => { readCols(); if (reduceMotion && ok) draw(performance.now()); });
    }

    function ticker() {
        const row = $('#ticker-row');
        if (!row) return;
        const live = featured.filter(isLive).length;
        const items = [
            `<b>${all.length}</b> experiments on record`,
            `<b>${featured.length}</b> products, ${live} live`,
            `<b>${CONFIG.credentials.length}</b> Coursera specializations`,
            `Current GitHub streak <b class="tk-streak">...</b> days`,
            'Self-taught: Python, maths, machine learning',
            'Learning now: sequence models and word embeddings'
        ];
        const html = items.map((i) => `<span>${i}</span>`).join('');
        row.innerHTML = html + html;
    }

    /* ==========================================================
       Signal rail: scroll progress drawn as a line with a pulse
       ========================================================== */
    function rail() {
        const el = $('#rail');
        if (!el) return;
        const secs = [['top', 'Start'], ['workshop', 'Workshop'], ['toolbox', 'Toolbox'], ['road', 'Road'], ['education', 'Education'], ['credentials', 'Credentials'], ['log', 'Studio log'], ['contact', 'Connect']]
            .filter(([id]) => $('#' + id));
        el.innerHTML = '<div class="rail-line"></div><div class="rail-fill"></div><div class="rail-pulse"></div>' +
            secs.map(([id, name]) => `<a class="rail-node" href="#${id}" data-id="${id}" aria-label="Go to ${name}"><span>${name}</span></a>`).join('');
        const nodes = $$('.rail-node', el);
        let fr = [];

        function layout() {
            const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
            fr = secs.map(([id]) => clamp(($('#' + id).getBoundingClientRect().top + scrollY) / max, 0, 1));
            nodes.forEach((n, i) => { n.style.top = (fr[i] * 100) + '%'; });
            update();
        }
        function update() {
            const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
            const p = clamp(scrollY / max, 0, 1);
            el.style.setProperty('--p', p.toFixed(4));
            let active = 0;
            nodes.forEach((n, i) => { n.classList.toggle('passed', fr[i] <= p + 0.002); if (fr[i] <= p + 0.002) active = i; });
            nodes.forEach((n, i) => n.classList.toggle('on', i === active));
        }
        addEventListener('scroll', update, { passive: true });
        addEventListener('resize', layout);
        addEventListener('load', layout);
        setTimeout(layout, 600);
        setTimeout(layout, 2500);
        layout();

        /* Header link highlighting */
        const links = $$('#nav a[href^="#"]');
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => { if (e.isIntersecting) links.forEach((a) => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)); });
        }, { rootMargin: '-45% 0px -50% 0px' });
        secs.forEach(([id]) => io.observe($('#' + id)));
    }

    /* ==========================================================
       Workshop: a pinned horizontal journey through the products
       ========================================================== */
    function productMedia(p) {
        return (p.media && p.media.length ? p.media : [{ type: 'image', url: p.coverImage, caption: p.title }]);
    }

    function renderWorkshop() {
        const sec = $('#workshop'), track = $('#ws-track');
        if (!sec || !track) return;
        if (!featured.length) {
            const errs = (window.__errs || []).filter((x) => /projectsData/i.test(x));
            track.innerHTML = `<div class="wrap" style="padding-top:190px"><p class="empty"><b>The products could not be read from projectsData.js.</b><br>${errs.length ? 'The browser says: <code>' + esc(errs[0]) + '</code>' : 'Press F12, open the Console tab, and look for the red message that names projectsData.js.'}</p></div>`;
            return;
        }
        const n = featured.length;

        track.innerHTML = featured.map((p, idx) => {
            const live = isLive(p);
            const media = productMedia(p);
            const slides = media.map((m, i) => {
                const vid = m.type === 'video' || isVideo(m.url);
                const contain = !vid && /logo/i.test(m.url) ? 'contain' : '';
                return `<div class="slide ${contain}">${vid
                    ? `<video data-src="${src(m.url)}" muted loop playsinline preload="none"></video>`
                    : `<img src="${src(m.url)}" alt="${esc(m.caption || p.title)}" ${i ? 'loading="lazy"' : ''} />`}</div>`;
            }).join('');
            const dots = media.length > 1 ? `<div class="dots">${media.map((m, i) => `<button type="button" class="dot ${i === 0 ? 'on' : ''}" data-i="${i}" aria-label="Show image ${i + 1}"></button>`).join('')}</div>` : '';
            const desc = stripTags(p.overview).split(/(?<=\.)\s/).slice(0, 2).join(' ');
            const stack = (p.tags || []).slice(0, 7).join(', ');
            const chipContent = `${live ? 'Open the app' : 'Read the story'}${EXT}`;
            const prevNextNav = media.length > 1
                ? `<button type="button" class="ex-nav-btn prev" data-slide-dir="-1" aria-label="Previous slide"></button><button type="button" class="ex-nav-btn next" data-slide-dir="1" aria-label="Next slide"></button><span class="ex-nav-hint prev" aria-hidden="true">‹</span><span class="ex-nav-hint next" aria-hidden="true">›</span>`
                : '';
            const stage = live
                ? `<div class="ex-stage">${slides}${prevNextNav}<a class="ex-chip" href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer" data-cursor="Open the app" aria-label="Open ${esc(p.title)} in a new tab">${chipContent}</a></div>`
                : `<div class="ex-stage">${slides}${prevNextNav}<button type="button" class="ex-chip" data-open="${esc(p.id)}" data-cursor="Read the story" aria-label="Read the story of ${esc(p.title)}">${chipContent}</button></div>`;

            return `<article class="h-panel" data-id="${esc(p.id)}">
                <div class="hp-num" aria-hidden="true">${String(idx + 1).padStart(2, '0')}</div>
                <div class="hp-meta">
                    <span class="status ${live ? 'live' : ''}"><i></i>${live ? 'Live now at ' + esc(hostOf(p.liveUrl)) : 'In active development'}</span>
                    <h3>${esc(p.title.split(' \u2013 ')[0].split(' - ')[0])}</h3>
                    <p class="hp-sub">${esc(p.subtitle || p.type || '')}</p>
                    <p class="hp-desc">${esc(desc)}</p>
                    <p class="hp-stack"><b>Built with</b> ${esc(stack)}</p>
                    <div class="hp-actions">
                        ${live
                    ? `<a class="btn btn-primary" href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer">Open the app${EXT}</a>`
                    : `<a class="btn btn-primary" href="#contact">Ask for early access</a>`}
                        <button type="button" class="link" data-open="${esc(p.id)}">Read the full story</button>
                    </div>
                </div>
                <div class="hp-media">
                    <div class="ex-frame">${stage}</div>
                    <div class="ex-under"><span class="ex-cap"></span>${dots}</div>
                </div>
            </article>`;
        }).join('');

        $('#ws-ticks').innerHTML = `<span id="ws-count">1 / ${n}</span>` +
            featured.map((p, i) => `<button type="button" class="pin-tick ${i === 0 ? 'on' : ''}" data-go="${i}" aria-label="Go to ${esc(p.title)}"></button>`).join('');

        const panels = $$('.h-panel', track);
        panels.forEach((el) => mountSlides(el, featured.find((p) => p.id === el.dataset.id)));
        $$('[data-open]', track).forEach((b) => b.addEventListener('click', () => openDrawer(b.dataset.open)));

        /* ----- the pinned scroll engine ----- */
        const ticks = $$('.pin-tick', sec), count = $('#ws-count');
        const stacked = () => innerWidth <= 960 || reduceMotion;
        let cur = 0, target = 0, near = false, raf = 0, activeIdx = -1;

        function layout() {
            if (stacked()) {
                sec.classList.add('stacked');
                sec.style.height = '';
                track.style.transform = '';
                panels.forEach((p) => { p.style.removeProperty('--off'); p.style.removeProperty('--abs'); });
            } else {
                sec.classList.remove('stacked');
                sec.style.height = (n * innerHeight) + 'px';
            }
            measure();
        }
        function measure() {
            if (stacked()) return;
            const r = sec.getBoundingClientRect();
            const total = Math.max(1, sec.offsetHeight - innerHeight);
            target = clamp(-r.top / total, 0, 1) * (n - 1);
        }
        function tick() {
            raf = 0;
            if (stacked()) return;
            cur += (target - cur) * 0.12;
            if (Math.abs(target - cur) < 0.0008) cur = target;
            track.style.transform = `translate3d(${(-cur * 100).toFixed(3)}%,0,0)`;
            panels.forEach((p, i) => {
                const off = i - cur;
                p.style.setProperty('--off', off.toFixed(3));
                p.style.setProperty('--abs', Math.min(1, Math.abs(off)).toFixed(3));
            });
            const idx = Math.round(cur);
            if (idx !== activeIdx) {
                activeIdx = idx;
                ticks.forEach((t, i) => t.classList.toggle('on', i === idx));
                if (count) count.textContent = `${idx + 1} / ${n}`;
            }
            if (near || cur !== target) raf = requestAnimationFrame(tick);
        }
        const kick = () => { measure(); if (!raf) raf = requestAnimationFrame(tick); };

        new IntersectionObserver((e) => { near = e[0].isIntersecting; kick(); }, { rootMargin: '30% 0px' }).observe(sec);
        addEventListener('scroll', kick, { passive: true });
        addEventListener('resize', () => { layout(); kick(); });
        ticks.forEach((t) => t.addEventListener('click', () => {
            const i = +t.dataset.go;
            if (stacked()) { panels[i].scrollIntoView({ behavior: 'smooth' }); return; }
            const total = sec.offsetHeight - innerHeight;
            const top = sec.getBoundingClientRect().top + scrollY + (n > 1 ? (i / (n - 1)) * total : 0);
            scrollTo({ top, behavior: 'smooth' });
        }));
        layout(); kick();
        setTimeout(() => { layout(); kick(); }, 800);
    }

    function mountSlides(el, p) {
        const media = productMedia(p);
        const slides = $$('.slide', el), dots = $$('.dot', el), cap = $('.ex-cap', el);
        let i = 0, timer = 0, visible = false, hover = false;
        const vidAt = (k) => media[k].type === 'video' || isVideo(media[k].url);
        function schedule() {
            clearTimeout(timer);
            if (slides.length < 2 || !visible || hover || reduceMotion) return;
            timer = setTimeout(() => show(i + 1), vidAt(i) ? 9000 : 4200);
        }
        function show(k) {
            i = (k + slides.length) % slides.length;
            slides.forEach((s, j) => {
                const on = j === i;
                s.classList.toggle('on', on);
                const v = $('video', s);
                if (v) { if (on) { if (!v.getAttribute('src')) v.src = v.dataset.src; v.play().catch(() => { }); } else v.pause(); }
            });
            dots.forEach((d, j) => d.classList.toggle('on', j === i));
            cap.textContent = media[i].caption || '';
            schedule();
        }
        dots.forEach((d) => d.addEventListener('click', () => show(+d.dataset.i)));
        $$('.ex-nav-btn', el).forEach((b) => b.addEventListener('click', (e) => {
            e.stopPropagation();
            show(i + (+b.dataset.slideDir || 1));
        }));
        el.addEventListener('mouseenter', () => { hover = true; clearTimeout(timer); });
        el.addEventListener('mouseleave', () => { hover = false; schedule(); });
        new IntersectionObserver((e) => { visible = e[0].isIntersecting; if (visible) schedule(); else clearTimeout(timer); }, { threshold: 0.3 }).observe(el);
        show(0);
    }

    /* ----- Product drawer: the full story ----- */
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
                ${S.carouselHTML(productMedia(p))}
                <div class="d-tabs" role="tablist">
                    ${panels.map(([name], i) => `<button type="button" class="tab" role="tab" aria-selected="${i === 0}" data-p="${i}">${name}</button>`).join('')}
                </div>
                <div class="d-body">${panels.map(([, html], i) => `<div class="d-panel" data-p="${i}" ${i ? 'hidden' : ''}>${html}</div>`).join('')}</div>
            </div>`;
        S.mountCarousel(sheet);
        $$('.d-tabs .tab', sheet).forEach((t) => t.addEventListener('click', () => {
            $$('.d-tabs .tab', sheet).forEach((x) => x.setAttribute('aria-selected', String(x === t)));
            $$('.d-panel', sheet).forEach((pn) => { pn.hidden = pn.dataset.p !== t.dataset.p; });
        }));
        sheet.scrollTop = 0;
        S.showOverlay($('#drawer'));
    }

    /* ==========================================================
       Toolbox: a periodic table of tools, counted from real work
       ========================================================== */
    function toolbox() {
        const box = $('#bands'), panel = $('#sk-panel');
        if (!box) return;
        const reOf = (k) => new RegExp('(^|[^a-z0-9])' + k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($|[^a-z0-9])');
        const works = all.map((p) => ({ title: p.title, hay: [p.title, p.topic, (p.tags || []).join(' '), (p.algorithms || []).join(' ')].join(' ').toLowerCase(), url: null }))
            .concat(featured.map((p) => ({ title: p.title.split(' \u2013 ')[0], hay: [p.title, (p.tags || []).join(' '), (p.techStack || []).map((t) => t.tech).join(' ')].join(' ').toLowerCase() })));

        const tiles = [];
        box.innerHTML = BANDS.map((b) => `
            <div class="band tone-${b.id} io" >
                <div><h3>${b.name}</h3><p>${b.blurb}</p></div>
                <div class="tiles">${b.items.map(([sym, name, kws, topics], i) => {
            const res = kws.map(reOf);
            const hits = works.filter((w) => res.some((r) => r.test(w.hay)));
            const idx = tiles.push({ sym, name, kws, topics, hits, band: b }) - 1;
            return `<button type="button" class="tile" data-k="${idx}" style="--i:${i}" aria-label="${name}, ${hits.length} projects"><em>${hits.length || '-'}</em><strong>${sym}</strong><span>${name}</span></button>`;
        }).join('')}</div>
            </div>`).join('');

        const idle = () => {
            panel.className = 'sk-panel';
            panel.innerHTML = `<p class="meta">Hover or tap a tile</p><h4>Every tile is counted from my real work.</h4><p class="sk-note">The number on each tile is how many of my projects use it. A dash means I have studied it but it is not in a project here yet.</p>`;
        };
        function show(k) {
            const t = tiles[k];
            const list = t.hits.slice(0, 5).map((h) => `<li>${esc(h.title)}</li>`).join('');
            const more = t.hits.length > 5 ? `<li class="none">and ${t.hits.length - 5} more</li>` : '';
            const topicsHTML = t.topics && t.topics.length ? `
                <div class="sk-topics">
                    <h5>Topics & concepts covered</h5>
                    <div class="sk-tags">${t.topics.map((tp) => `<span>${esc(tp)}</span>`).join('')}</div>
                </div>` : '';
            const projectsHTML = t.hits.length ? `
                <div class="sk-projects">
                    ${t.topics ? `<h5>Projects built with ${esc(t.name)}</h5>` : ''}
                    <ul>${list}${more}</ul>
                    <a class="btn btn-ghost" data-transition href="collection.html?q=${encodeURIComponent(t.kws[0])}">See them in the collection</a>
                </div>` : '<p class="none">I learned this through college and my own practice.</p>';

            panel.className = 'sk-panel pop tone-' + t.band.id;
            panel.innerHTML = `
                <div class="sym">${t.sym}</div>
                <h4>${esc(t.name)}</h4>
                <p class="meta">${t.hits.length ? `Used in ${t.hits.length} ${t.hits.length === 1 ? 'project' : 'projects'}` : 'Studied, not yet in a project here'}</p>
                ${topicsHTML}
                ${projectsHTML}`;
        }
        idle();
        $$('.tile', box).forEach((el) => {
            el.addEventListener('mouseenter', () => show(+el.dataset.k));
            el.addEventListener('focus', () => show(+el.dataset.k));
            el.addEventListener('click', () => { $$('.tile', box).forEach((x) => x.classList.toggle('sel', x === el)); show(+el.dataset.k); });
        });
        box.addEventListener('mouseleave', () => { if (!$('.tile.sel', box)) idle(); });
    }

    /* ==========================================================
       The road: a line that fills as you scroll
       ========================================================== */
    function road() {
        const box = $('#road-box');
        if (!box) return;
        const c = (k) => all.filter((p) => p.category === k).length;
        const live = featured.filter(isLive).length;
        const stages = [
            { h: 'Started on my own', p: 'Python, the maths behind machine learning, and data analysis, learned by building.', tag: 'Self-taught' },
            { h: 'Asked data questions', p: 'Exploratory analyses of real datasets, from road accidents to satellite crops.', tag: `${c('eda')} analyses` },
            { h: 'Classical machine learning', p: 'Regression, tree ensembles, XGBoost, clustering, anomaly detection and recommenders.', tag: `${c('ml')} projects` },
            { h: 'Deep learning', p: 'CNNs, transfer learning, LSTMs, YOLO and word embeddings.', tag: `${c('dl')} projects` },
            { h: 'Shipped products', p: `${live} live and ${featured.length - live} in active development, built end to end.`, tag: `${featured.length} products` },
            { h: 'Now, then next', p: 'Now: deep diving into Natural Language Processing (NLP) & Large Language Models (LLMs). Next: mastering MLOps to deploy, monitor, and scale models in production.', tag: 'Still building', now: true }
        ];
        box.innerHTML = '<div class="road-line"></div><div class="road-fill"></div><div class="road-probe"></div>' +
            stages.map((s, i) => `<div class="ms ${i % 2 ? 'down' : 'up'} ${s.now ? 'now' : ''}"><span class="ms-dot"></span><div class="ms-card"><h3>${esc(s.h)}</h3><p>${esc(s.p)}</p><span class="tag">${esc(s.tag)}</span></div></div>`).join('');
        const ms = $$('.ms', box);

        function update() {
            const r = box.getBoundingClientRect();
            const vh = innerHeight;
            const p = clamp((vh * 0.75 - r.top) / (vh * 0.3 + r.height), 0, 1);
            box.style.setProperty('--p', p.toFixed(4));
            ms.forEach((m, i) => m.classList.toggle('lit', p >= i / ms.length + 0.01));
        }
        addEventListener('scroll', update, { passive: true });
        addEventListener('resize', update);
        update();
    }

    /* ==========================================================
       Education
       ========================================================== */
    function education() {
        const box = $('#edu');
        if (!box) return;
        box.innerHTML = EDUCATION.map((e) => `
            <article class="edu-row io ${e.planned ? 'planned' : ''}">
                <div class="edu-years">${esc(e.years)}<small>${esc(e.status || '')}</small></div>
                <div class="edu-main">
                    <h3>${esc(e.title)}</h3>
                    ${e.school ? `<p class="school">${esc(e.school)}</p>` : ''}
                    ${e.focus ? `<p class="focus">${esc(e.focus)}</p>` : ''}
                </div>
                <div class="edu-side">
                    ${(e.stats || []).map((s) => `<div class="edu-stat"><strong>${esc(s.value)}</strong><span>${esc(s.label)}</span>${s.v ? `<div class="meter" style="--v:${s.v}"><i></i></div>` : ''}</div>`).join('')}
                    ${(e.topics && e.topics.length) ? `<ul class="edu-topics">${e.topics.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>` : ''}
                </div>
            </article>`).join('');
    }

    /* ==========================================================
       Credentials
       ========================================================== */
    function mockCert(title) {
        const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#0A2226'/><rect x='28' y='28' width='744' height='544' fill='none' stroke='#D8A94E' stroke-width='2'/><rect x='46' y='46' width='708' height='508' fill='none' stroke='#9DB1AE' stroke-width='1' stroke-dasharray='6 8'/><text x='400' y='230' text-anchor='middle' font-family='Georgia,serif' font-size='30' fill='#EEE7D4'>Certificate of completion</text><text x='400' y='300' text-anchor='middle' font-family='Georgia,serif' font-size='38' fill='#EEE7D4'>${title}</text><text x='400' y='380' text-anchor='middle' font-family='Arial,sans-serif' font-size='20' fill='#9DB1AE'>Your certificate photo goes here</text></svg>`;
        return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
    }
    function creds() {
        const box = $('#creds');
        if (!box) return;
        const certs = CONFIG.credentials.map((c) => {
            const pending = !c.link || c.link === '#';
            return `<article class="cred">
                <div class="cred-img" data-tilt><img src="${src(c.image)}" alt="Certificate: ${esc(c.title)}" loading="lazy" data-mock="${esc(c.title)}" /></div>
                <h3>${esc(c.title)}</h3>
                <p>${esc(c.issuer)} on ${esc(c.platform)}. Taught by ${esc(c.instructor)}.</p>
                <a class="link" href="${pending ? '#credentials' : esc(c.link)}" ${pending ? 'aria-disabled="true" title="Verification link coming soon"' : 'target="_blank" rel="noopener noreferrer"'}>Verify certificate${pending ? '' : EXT}</a>
            </article>`;
        }).join('');
        box.innerHTML = certs;
        $$('img[data-mock]', box).forEach((img) => img.addEventListener('error', () => { img.src = mockCert(img.dataset.mock); }, { once: true }));
        $$('a[aria-disabled="true"]', box).forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));
    }

    /* ==========================================================
       Studio log: live GitHub heatmap and streaks
       ========================================================== */
    async function github() {
        const heat = $('#heat');
        if (!heat) return;
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

            $('#gh-total').dataset.count = total;
            $('#gh-current').dataset.count = current;
            $('#gh-longest').dataset.count = longest;
            $$('.tk-streak').forEach((e) => { e.textContent = current; });

            const first = new Date(days[0].date + 'T00:00:00').getDay();
            const cells = [];
            for (let i = 0; i < first; i++) cells.push(`<i style="visibility:hidden"></i>`);
            days.forEach((d, i) => {
                const lvl = d.level != null ? d.level : (d.count === 0 ? 0 : d.count < 3 ? 1 : d.count < 6 ? 2 : d.count < 10 ? 3 : 4);
                const when = new Date(d.date + 'T00:00:00').toLocaleDateString('en', { day: 'numeric', month: 'short', year: 'numeric' });
                const col = Math.floor((first + i) / 7);
                cells.push(`<i data-l="${lvl}" style="--d:${col * 14}" title="${d.count} contribution${d.count === 1 ? '' : 's'} on ${when}"></i>`);
            });
            const weeks = Math.ceil(cells.length / 7);
            let lastMonth = -1;
            const months = Array.from({ length: weeks }, (_, w) => {
                const idx = Math.max(0, Math.min(days.length - 1, w * 7 - first));
                const m = new Date(days[idx].date + 'T00:00:00').getMonth();
                if (m !== lastMonth) { lastMonth = m; return `<span>${new Date(2000, m, 1).toLocaleString('en', { month: 'short' })}</span>`; }
                return '<span></span>';
            }).join('');
            heat.innerHTML = `<div class="heat-months" style="grid-template-columns:repeat(${weeks},1fr)">${months}</div><div class="heat-grid io" style="grid-template-columns:repeat(${weeks},1fr)">${cells.join('')}</div>`;
            S.fx($('#log'));
        } catch (e) {
            ['#gh-total', '#gh-current', '#gh-longest'].forEach((s) => { const el = $(s); if (el) el.textContent = '-'; });
            $$('.tk-streak').forEach((el) => { el.textContent = '-'; });
            heat.innerHTML = '<p class="heat-note">The live activity could not load right now. You can see it on GitHub instead.</p>';
        }
    }

    /* ==========================================================
       Contact form (Formspree, same endpoint as before)
       ========================================================== */
    function contact() {
        const form = $('#contact-form');
        if (!form) return;
        const status = $('#form-status'), btn = $('#form-btn');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            status.className = 'form-status';
            status.textContent = 'Sending...';
            btn.disabled = true;
            try {
                const r = await fetch(CONFIG.formAction, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
                if (!r.ok) throw new Error('bad status');
                status.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5 10 17.5 19 7"/></svg>Message sent. I will reply by email.';
                form.reset();
            } catch (err) {
                status.className = 'form-status err';
                status.textContent = 'That did not send. Check your connection and try again, or email me directly.';
            } finally { btn.disabled = false; }
        });
    }

    /* ==========================================================
       Start
       ========================================================== */
    splitName();
    ticker();
    renderWorkshop();
    toolbox();
    road();
    education();
    creds();
    contact();
    rail();
    portrait();
    github();
    S.fx();
    intro();

    const hc = $('#hero-count');
    if (hc) hc.textContent = `${all.length} experiments, ${featured.length} products`;
})();
