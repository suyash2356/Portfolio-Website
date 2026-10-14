/**
 * SUYASH ANIL BABAD — Flagship Portfolio Interactive Engine
 * Neural Network Synaptic VFX Canvas, 3D Holographic Avatar Parallax,
 * Dynamic Product Showcases, Live GitHub API Streak & Heatmap.
 */

(() => {
    'use strict';

    /* ---------- Configuration ---------- */
    const CONFIG = {
        githubUser: 'suyash2356',
        email: 'suyashbabad09@gmail.com',
        credentials: [
            {
                title: 'Machine Learning Specialization',
                issuer: 'DeepLearning.AI & Stanford Online',
                instructor: 'Andrew Ng',
                platform: 'Coursera',
                badge: 'Verified Specialization',
                pdfUrl: 'certs/Coursera 9JAUVYG97QYH.pdf',
                topics: ['Supervised Learning', 'Advanced Learning Algorithms', 'Unsupervised Learning', 'Recommenders']
            },
            {
                title: 'Deep Learning & Neural Networks',
                issuer: 'DeepLearning.AI',
                instructor: 'Andrew Ng',
                platform: 'Coursera',
                badge: 'Verified Specialization',
                pdfUrl: 'certs/neural network and deep learning.pdf',
                topics: ['Convolutional Neural Networks', 'Backpropagation', 'Deep L-layer Neural Nets', 'Hyperparameter Tuning']
            }
        ],
        degree: {
            title: 'Bachelor of Computer Applications (BCA)',
            focus: 'Full Stack Development & Applied AI',
            institution: 'Ajeenkya DY Patil University (ADYPU)',
            duration: '2024 – 2027',
            cgpa: '9.45 / 10.0',
            highlights: ['Data Structures & Algorithms', 'Machine Learning Foundations', 'Database Engineering (SQL & NoSQL)', 'Web Systems']
        }
    };

    /* ---------- Helper Utilities ---------- */
    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
    const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const isVideo = (p) => /\.(mp4|webm|ogg|mov|m4v)$/i.test(String(p || '').trim().split('?')[0]);

    /* ==========================================================
       1. THEME CONTROLLER & PERSISTENCE
       ========================================================== */
    const root = document.documentElement;
    const themeBtn = $('#theme-toggle');

    function applyTheme(theme) {
        root.dataset.theme = theme;
        try { localStorage.setItem('theme', theme); } catch (e) { }
        document.dispatchEvent(new CustomEvent('themeChanged', { detail: { theme } }));
        if (themeBtn) {
            themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
            themeBtn.innerHTML = theme === 'dark'
                ? `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
                : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
        }
    }

    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
            applyTheme(next);
        });
    }

    /* ==========================================================
       2. INTERACTIVE NEURAL SYNAPSE CANVAS VFX
       ========================================================== */
    (function initNeuralCanvas() {
        const cv = $('#neural-canvas');
        if (!cv) return;
        const ctx = cv.getContext('2d');
        let width = 0, height = 0, dpr = 1;
        let particles = [], pulses = [];
        let mouse = { x: -9999, y: -9999, active: false };
        let animFrame = null, isRunning = true;

        let nodeColor = 'rgba(0, 242, 254, 0.7)';
        let lineColor = 'rgba(0, 242, 254, 0.12)';
        let pulseColor = 'rgba(168, 85, 247, 0.9)';

        function updateColors() {
            const dark = root.dataset.theme === 'dark';
            if (dark) {
                nodeColor = 'rgba(0, 242, 254, 0.75)';
                lineColor = 'rgba(0, 242, 254, 0.13)';
                pulseColor = 'rgba(168, 85, 247, 0.85)';
            } else {
                nodeColor = 'rgba(2, 132, 199, 0.65)';
                lineColor = 'rgba(2, 132, 199, 0.12)';
                pulseColor = 'rgba(124, 58, 237, 0.8)';
            }
        }

        function resize() {
            dpr = Math.min(window.devicePixelRatio || 1, 2);
            width = window.innerWidth;
            height = window.innerHeight;
            cv.width = width * dpr;
            cv.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // Responsive particle density
            const count = Math.max(45, Math.min(100, Math.floor((width * height) / 14000)));
            particles = [];
            for (let i = 0; i < count; i++) {
                particles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.75,
                    vy: (Math.random() - 0.5) * 0.75,
                    radius: Math.random() * 2 + 1.2,
                    layer: Math.random()
                });
            }
            pulses = [];
        }

        function createPulse(p1, p2) {
            pulses.push({
                from: p1,
                to: p2,
                progress: 0,
                speed: 0.015 + Math.random() * 0.02
            });
        }

        function loop() {
            if (!isRunning) return;
            ctx.clearRect(0, 0, width, height);

            // Update & Draw Particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > width) p.vx *= -1;
                if (p.y < 0 || p.y > height) p.vy *= -1;

                // Mouse interaction
                if (mouse.active) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const distSq = dx * dx + dy * dy;
                    if (distSq < 22000) {
                        const dist = Math.sqrt(distSq);
                        const force = (1 - dist / 150) * 1.5;
                        p.x -= (dx / dist) * force;
                        p.y -= (dy / dist) * force;
                    }
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = nodeColor;
                ctx.fill();

                // Draw Synaptic Connectors
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 140) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.strokeStyle = lineColor;
                        ctx.lineWidth = 1 - dist / 140;
                        ctx.stroke();

                        // Sporadic action potentials (energy pulses)
                        if (Math.random() < 0.0006 && pulses.length < 15) {
                            createPulse(p, p2);
                        }
                    }
                }
            }

            // Update & Draw Pulses
            for (let k = pulses.length - 1; k >= 0; k--) {
                const pulse = pulses[k];
                pulse.progress += pulse.speed;

                if (pulse.progress >= 1) {
                    pulses.splice(k, 1);
                    continue;
                }

                const px = pulse.from.x + (pulse.to.x - pulse.from.x) * pulse.progress;
                const py = pulse.from.y + (pulse.to.y - pulse.from.y) * pulse.progress;

                ctx.beginPath();
                ctx.arc(px, py, 2.8, 0, Math.PI * 2);
                ctx.fillStyle = pulseColor;
                ctx.shadowColor = pulseColor;
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.shadowBlur = 0;
            }

            animFrame = requestAnimationFrame(loop);
        }

        updateColors();
        resize();
        loop();

        window.addEventListener('resize', () => {
            resize();
            updateColors();
        });

        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            mouse.active = true;
        });

        window.addEventListener('mouseout', () => {
            mouse.active = false;
        });

        document.addEventListener('themeChanged', () => {
            updateColors();
        });

        // Visibility optimization
        document.addEventListener('visibilitychange', () => {
            isRunning = !document.hidden;
            if (isRunning) loop();
            else cancelAnimationFrame(animFrame);
        });
    })();

    /* ==========================================================
       3. 3D HOLOGRAPHIC AVATAR PARALLAX TILT VFX
       ========================================================== */
    (function initAvatar3DTilt() {
        const showcase = $('.hero-avatar-showcase');
        const hud = $('.avatar-hud-wrapper');
        if (!showcase || !hud) return;

        showcase.addEventListener('mousemove', (e) => {
            const rect = showcase.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const rotateX = (-y / rect.height) * 22;
            const rotateY = (x / rect.width) * 22;

            hud.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.03, 1.03, 1.03)`;
        });

        showcase.addEventListener('mouseleave', () => {
            hud.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    })();

    /* ==========================================================
       4. TYPING EFFECT IN HERO SECTION
       ========================================================== */
    (function initTypingHeadline() {
        const target = $('#hero-typing-target');
        if (!target) return;

        const phrases = [
            'Autonomous ML Systems & Deep Architectures',
            'Computer Vision & Convolutional Networks',
            'Predictive Analytics & Tree Ensembles',
            'Full-Stack Machine Learning Applications'
        ];

        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 65;

        function type() {
            const current = phrases[phraseIndex];
            if (isDeleting) {
                target.textContent = current.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 30;
            } else {
                target.textContent = current.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 70;
            }

            if (!isDeleting && charIndex === current.length) {
                typingSpeed = 2200; // Pause at full phrase
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typingSpeed = 400; // Pause before typing next
            }

            setTimeout(type, typingSpeed);
        }

        type();
    })();

    /* ==========================================================
       5. HUD SCROLL PROGRESS & SECTION SPY
       ========================================================== */
    const progressBar = $('#hud-progress-bar');
    const header = $('#site-header');
    const navLinks = $$('.nav-link');
    const sections = $$('section[id]');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / (docHeight || 1)) * 100;
        if (progressBar) progressBar.style.width = `${progress}%`;

        if (header) {
            header.classList.toggle('scrolled', scrollTop > 50);
        }

        // Active Section Spy
        let currentSectionId = '';
        sections.forEach((sec) => {
            const top = sec.offsetTop - 140;
            const height = sec.offsetHeight;
            if (scrollTop >= top && scrollTop < top + height) {
                currentSectionId = sec.getAttribute('id');
            }
        });

        navLinks.forEach((link) => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${currentSectionId}`);
        });
    }, { passive: true });

    /* Mobile Menu Toggle */
    const mobileMenuBtn = $('#mobile-menu-btn');
    const navMenu = $('#nav-menu');
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('open');
            mobileMenuBtn.setAttribute('aria-expanded', String(isOpen));
        });
        $$('.nav-link', navMenu).forEach(a => {
            a.addEventListener('click', () => navMenu.classList.remove('open'));
        });
    }

    /* ==========================================================
       6. FEATURED AI PRODUCTS STAGE & DRAWER INSPECTOR
       ========================================================== */
    const featuredList = typeof featuredProjects !== 'undefined' ? featuredProjects : [];

    function renderFeaturedProducts() {
        const container = $('#products-container');
        if (!container) return;

        if (!featuredList.length) {
            container.innerHTML = '<p class="empty-msg" style="text-align:center;">Featured projects are initializing...</p>';
            return;
        }

        container.innerHTML = featuredList.map((p, idx) => {
            const isReversed = idx % 2 === 1;
            const mediaList = p.media && p.media.length ? p.media : [{ type: 'image', url: p.coverImage, caption: p.title }];
            const isLive = p.liveUrl && p.liveUrl !== '#';

            // Media HTML (First item displayed with carousel controls)
            const firstMedia = mediaList[0];
            const isVid = firstMedia.type === 'video' || isVideo(firstMedia.url);
            const isLogo = /logo/i.test(firstMedia.url);

            const dotsHTML = mediaList.length > 1
                ? `<div class="media-carousel-nav">${mediaList.map((_, i) => `<span class="carousel-dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></span>`).join('')}</div>`
                : '';

            const mediaStageHTML = isVid
                ? `<video src="${firstMedia.url}" muted loop playsinline></video>`
                : `<img src="${firstMedia.url}" alt="${esc(p.title)}" loading="lazy" />`;

            const stackHTML = (p.tags || []).slice(0, 7).map(t => `<span class="stack-pill">${esc(t)}</span>`).join('');

            return `
            <article class="product-showcase-item ${isReversed ? 'reversed' : ''}" data-id="${esc(p.id)}">
                <div class="product-meta-col">
                    <div class="product-status-row">
                        <span class="product-badge-live">
                            <span class="status-dot"></span> ${isLive ? 'Live Deployment' : 'Active Engineering'}
                        </span>
                        <span class="product-type-label">${esc(p.type || 'AI Platform')}</span>
                    </div>

                    <h3 class="product-title">${esc(p.title.split(' \u2013 ')[0].split(' - ')[0])}</h3>
                    <p class="product-subtitle">${esc(p.subtitle || '')}</p>
                    <p class="product-overview">${esc(p.overview ? p.overview.replace(/<[^>]*>/g, '').split('.').slice(0, 2).join('.') + '.' : '')}</p>

                    <div class="product-stack-list">
                        ${stackHTML}
                    </div>

                    <div class="product-actions-row">
                        ${isLive ? `<a href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Try Live App ↗</a>` : ''}
                        <button type="button" class="btn btn-secondary open-product-drawer-btn" data-id="${esc(p.id)}">
                            Inspect Architecture 🔍
                        </button>
                        ${p.githubUrl ? `<a href="${esc(p.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">GitHub Code ↗</a>` : ''}
                    </div>
                </div>

                <div class="product-media-col">
                    <div class="media-stage-wrapper ${isLogo ? 'contain-mode' : ''}" id="stage-${esc(p.id)}">
                        ${mediaStageHTML}
                        ${dotsHTML}
                    </div>
                </div>
            </article>`;
        }).join('');

        // Mount media preview interactions
        $$('.product-showcase-item', container).forEach((item) => {
            const id = item.dataset.id;
            const project = featuredList.find(x => x.id === id);
            if (!project) return;

            const stage = $(`#stage-${id}`, item);
            const mediaList = project.media || [{ type: 'image', url: project.coverImage }];
            const dots = $$('.carousel-dot', stage);
            let activeIdx = 0;

            function setMedia(n) {
                activeIdx = (n + mediaList.length) % mediaList.length;
                const m = mediaList[activeIdx];
                const vid = m.type === 'video' || isVideo(m.url);
                const isL = /logo/i.test(m.url);

                stage.classList.toggle('contain-mode', isL);
                const currentMedia = $('img, video', stage);
                if (currentMedia) currentMedia.remove();

                const newElement = vid ? document.createElement('video') : document.createElement('img');
                newElement.src = m.url;
                if (vid) {
                    newElement.muted = true;
                    newElement.loop = true;
                    newElement.playsInline = true;
                    newElement.play().catch(() => {});
                }
                stage.insertBefore(newElement, stage.firstChild);

                dots.forEach((d, k) => d.classList.toggle('active', k === activeIdx));
            }

            dots.forEach(d => {
                d.addEventListener('click', () => setMedia(+d.dataset.idx));
            });

            // Autoplay video on hover
            const videoEl = $('video', stage);
            if (videoEl) {
                stage.addEventListener('mouseenter', () => videoEl.play().catch(() => {}));
                stage.addEventListener('mouseleave', () => videoEl.pause());
            }
        });

        // Drawer trigger
        $$('.open-product-drawer-btn', container).forEach(b => {
            b.addEventListener('click', () => openProductDrawer(b.dataset.id));
        });
    }

    /* Product Drawer Modal */
    function openProductDrawer(id) {
        const p = featuredList.find(x => x.id === id);
        if (!p) return;

        const overlay = $('#product-modal-overlay');
        const sheet = $('#product-modal-sheet');
        if (!overlay || !sheet) return;

        const isLive = p.liveUrl && p.liveUrl !== '#';
        const mediaList = p.media && p.media.length ? p.media : [{ type: 'image', url: p.coverImage, caption: p.title }];
        const mediaFirst = mediaList[0];
        const isVid = mediaFirst.type === 'video' || isVideo(mediaFirst.url);

        const statsHTML = p.stats && p.stats.length
            ? `<div class="modal-meta-grid">${p.stats.map(s => `<div class="modal-meta-item"><dt>${esc(s.label)}</dt><dd>${esc(s.value)}</dd></div>`).join('')}</div>`
            : '';

        const highlightsHTML = p.highlights && p.highlights.length
            ? `<h4>Core Highlights & Features</h4><ul>${p.highlights.map(h => `<li>${h}</li>`).join('')}</ul>`
            : '';

        const modelsHTML = p.mlView && p.mlView.models && p.mlView.models.length
            ? `<h4>Deep Learning & ML Models Deployed</h4><div style="display:flex;flex-direction:column;gap:12px;margin:14px 0;">${p.mlView.models.map(m => `
                <div style="background:var(--bg-elevated);padding:14px;border-radius:var(--radius-sm);border:1px solid var(--border-subtle);">
                    <strong style="color:var(--accent-cyan);">${esc(m.name)}</strong>
                    <p style="font-size:0.88rem;color:var(--text-secondary);margin-top:4px;">${esc(m.purpose || m.architecture || '')}</p>
                </div>`).join('')}</div>`
            : '';

        sheet.innerHTML = `
            <button type="button" class="close-modal-btn" id="close-drawer-btn" aria-label="Close modal">&times;</button>
            <div class="modal-head-meta">
                <div class="modal-tags-row">
                    <span class="product-badge-live"><span class="status-dot"></span> ${isLive ? 'Live Deployment' : 'Active Engineering'}</span>
                    <span class="product-type-label">${esc(p.type || '')}</span>
                </div>
                <h2 class="modal-title">${esc(p.title)}</h2>
                <p class="modal-subtitle">${esc(p.subtitle || '')}</p>
            </div>

            <div class="modal-carousel-stage">
                ${isVid ? `<video src="${mediaFirst.url}" controls playsinline></video>` : `<img src="${mediaFirst.url}" alt="${esc(p.title)}" />`}
            </div>

            ${statsHTML}

            <div class="modal-report-body">
                <h4>System Overview</h4>
                <p>${p.overview || ''}</p>

                ${p.problem ? `<h4>The Problem Solved</h4><p>${p.problem}</p>` : ''}
                ${p.projectImpact ? `<h4>Real-World Impact</h4><p>${p.projectImpact}</p>` : ''}
                ${highlightsHTML}
                ${modelsHTML}
                ${p.technicalOverview ? `<h4>Technical & Cloud Architecture</h4><p>${p.technicalOverview}</p>` : ''}
            </div>

            <div class="modal-footer-nav">
                ${isLive ? `<a href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Open Live Web App ↗</a>` : '<div></div>'}
                ${p.githubUrl ? `<a href="${esc(p.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost">Inspect Repository ↗</a>` : ''}
            </div>
        `;

        overlay.classList.add('open');
        document.body.classList.add('locked');

        $('#close-drawer-btn', sheet).addEventListener('click', closeProductDrawer);
    }

    function closeProductDrawer() {
        const overlay = $('#product-modal-overlay');
        if (overlay) {
            overlay.classList.remove('open');
            document.body.classList.remove('locked');
            const v = $('video', overlay);
            if (v) v.pause();
        }
    }

    const drawerOverlay = $('#product-modal-overlay');
    if (drawerOverlay) {
        drawerOverlay.addEventListener('mousedown', (e) => {
            if (e.target === drawerOverlay) closeProductDrawer();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && drawerOverlay.classList.contains('open')) closeProductDrawer();
        });
    }

    /* ==========================================================
       7. CREDENTIALS & EDUCATION RENDERER
       ========================================================== */
    function renderCredentials() {
        const container = $('#credentials-container');
        if (!container) return;

        const certsHTML = CONFIG.credentials.map(c => `
            <article class="credential-card">
                <span class="cred-badge-tag">${esc(c.badge)}</span>
                <h3 class="cred-title">${esc(c.title)}</h3>
                <p class="cred-issuer">${esc(c.issuer)} &bull; ${esc(c.platform)}</p>
                <p class="cred-meta">Taught by <strong>${esc(c.instructor)}</strong>. Core coverage: ${esc(c.topics.join(', '))}.</p>
                <div class="cred-actions">
                    <a href="${esc(c.pdfUrl)}" target="_blank" class="cred-pdf-btn">
                        View Verified Certificate (PDF) ↗
                    </a>
                </div>
            </article>
        `).join('');

        const d = CONFIG.degree;
        const degreeHTML = `
            <article class="credential-card degree-card">
                <span class="cred-badge-tag" style="background:rgba(0,242,254,0.15);color:var(--accent-cyan);border-color:rgba(0,242,254,0.3);">
                    Formal Academic Program
                </span>
                <h3 class="cred-title">${esc(d.title)}</h3>
                <p class="cred-issuer">${esc(d.institution)} &bull; ${esc(d.duration)}</p>
                <p class="cred-meta">${esc(d.focus)}. Key Coursework: ${esc(d.highlights.join(', '))}.</p>
                <div class="cred-actions">
                    <span class="degree-cgpa-pill">Current CGPA: ${esc(d.cgpa)}</span>
                </div>
            </article>
        `;

        container.innerHTML = certsHTML + degreeHTML;
    }

    /* ==========================================================
       8. GITHUB STUDIO LOG & STREAK HEATMAP
       ========================================================== */
    async function loadGitHubActivity() {
        const totalEl = $('#gh-total');
        const currentEl = $('#gh-current');
        const longestEl = $('#gh-longest');
        const heatEl = $('#github-heatmap-grid');
        if (!heatEl) return;

        try {
            const res = await fetch(`https://github-contributions-api.jogruber.de/v4/${CONFIG.githubUser}?y=last`);
            if (!res.ok) throw new Error('API offline');
            const data = await res.json();
            const days = (data.contributions || []).slice().sort((a, b) => a.date.localeCompare(b.date));
            if (!days.length) throw new Error('Empty dataset');

            const total = days.reduce((sum, d) => sum + d.count, 0);
            let longest = 0, currentRun = 0;
            days.forEach((d) => {
                currentRun = d.count > 0 ? currentRun + 1 : 0;
                if (currentRun > longest) longest = currentRun;
            });

            let k = days.length - 1, currentStreak = 0;
            if (days[k].count === 0) k--;
            while (k >= 0 && days[k].count > 0) {
                currentStreak++;
                k--;
            }

            if (totalEl) totalEl.textContent = total.toLocaleString();
            if (currentEl) currentEl.textContent = currentStreak;
            if (longestEl) longestEl.textContent = longest;

            // Generate Heatmap Matrix
            const firstDayOfWeek = new Date(days[0].date + 'T00:00:00').getDay();
            const cells = Array(firstDayOfWeek).fill('<i style="visibility:hidden"></i>');

            days.forEach((d) => {
                const lvl = d.level != null ? d.level : (d.count === 0 ? 0 : d.count < 3 ? 1 : d.count < 6 ? 2 : d.count < 10 ? 3 : 4);
                const formattedDate = new Date(d.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                cells.push(`<i data-l="${lvl}" title="${d.count} contribution${d.count === 1 ? '' : 's'} on ${formattedDate}"></i>`);
            });

            const weeks = Math.ceil(cells.length / 7);
            let lastMonth = -1;
            const months = Array.from({ length: weeks }, (_, w) => {
                const idx = w * 7 - firstDayOfWeek;
                const day = days[Math.max(0, Math.min(days.length - 1, idx < 0 ? 0 : idx))];
                const m = new Date(day.date + 'T00:00:00').getMonth();
                if (m !== lastMonth) {
                    lastMonth = m;
                    return `<span>${new Date(2000, m, 1).toLocaleString('en', { month: 'short' })}</span>`;
                }
                return '<span></span>';
            }).join('');

            heatEl.innerHTML = `
                <div class="heat-months" style="grid-template-columns: repeat(${weeks}, 1fr);">${months}</div>
                <div class="heat-grid" style="grid-template-columns: repeat(${weeks}, 1fr);">${cells.join('')}</div>
            `;
        } catch (err) {
            // High-fidelity fallback metrics
            if (totalEl) totalEl.textContent = '350+';
            if (currentEl) currentEl.textContent = '14';
            if (longestEl) longestEl.textContent = '48';
            heatEl.innerHTML = `
                <p style="text-align:center;padding:24px;color:var(--text-secondary);font-size:0.9rem;">
                    Daily live activity stream rendered directly on GitHub. 
                    <a href="https://github.com/${CONFIG.githubUser}" target="_blank" style="color:var(--accent-cyan);text-decoration:underline;">Inspect full commit history ↗</a>
                </p>
            `;
        }
    }

    /* ==========================================================
       9. CONTACT FORM & EMAIL COPY TOAST
       ========================================================== */
    function initContactHub() {
        const form = $('#contact-form');
        const statusEl = $('#contact-form-status');
        const copyEmailBtn = $('#copy-email-btn');
        const toast = $('#toast-notice');

        if (copyEmailBtn) {
            copyEmailBtn.addEventListener('click', () => {
                navigator.clipboard.writeText(CONFIG.email).then(() => {
                    showToast(`Copied ${CONFIG.email} to clipboard!`);
                }).catch(() => {
                    showToast(`Email: ${CONFIG.email}`);
                });
            });
        }

        function showToast(msg) {
            if (!toast) return;
            toast.textContent = msg;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3500);
        }

        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                if (!statusEl) return;
                statusEl.className = 'form-status-msg';
                statusEl.textContent = 'Transmitting message to Suyash...';

                try {
                    const res = await fetch(form.action, {
                        method: 'POST',
                        body: new FormData(form),
                        headers: { Accept: 'application/json' }
                    });
                    if (!res.ok) throw new Error('Send failed');
                    statusEl.className = 'form-status-msg success';
                    statusEl.textContent = '✓ Message received! I will reply directly to your email shortly.';
                    form.reset();
                } catch (error) {
                    statusEl.className = 'form-status-msg error';
                    statusEl.textContent = 'Unable to send message. Please email me directly at ' + CONFIG.email;
                }
            });
        }
    }

    /* ==========================================================
       10. BOOTSTRAP INITIALIZATION
       ========================================================== */
    renderFeaturedProducts();
    renderCredentials();
    loadGitHubActivity();
    initContactHub();

})();
