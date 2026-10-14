/**
 * SUYASH ANIL BABAD — Dedicated Project Gallery & Archive Engine
 * Dynamic Topic & Skill Filters with Project Counts, Category Tabs,
 * Real-Time Search, Compact Bento Cards, and Holographic Inspector Modal.
 */

(() => {
    'use strict';

    /* ---------- Combine Projects Dataset ---------- */
    const rawProjects = []
        .concat(typeof dlProjects !== 'undefined' ? dlProjects : [])
        .concat(typeof mlProjects !== 'undefined' ? mlProjects : [])
        .concat(typeof edaProjects !== 'undefined' ? edaProjects : []);

    // Sort by date descending or ID
    const allProjects = rawProjects.map((p, idx) => {
        let timestamp = 0;
        if (p.date) {
            const m = String(p.date).match(/(\d{4})-(\d{2})/);
            if (m) timestamp = new Date(+m[1], +m[2] - 1, 15).getTime();
        }
        return {
            ...p,
            _timestamp: timestamp,
            _index: idx + 1
        };
    });

    const CATEGORY_LABELS = {
        all: 'All Categories',
        dl: 'Deep Learning',
        ml: 'Machine Learning',
        eda: 'Data Analysis / EDA'
    };

    /* ---------- State Management ---------- */
    const state = {
        category: 'all',
        topic: 'all',
        searchQuery: '',
        activeProjectModal: null,
        filteredList: []
    };

    const $ = (s, r = document) => r.querySelector(s);
    const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
    const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
    const isVideo = (p) => /\.(mp4|webm|ogg|mov|m4v)$/i.test(String(p || '').trim().split('?')[0]);

    /* ==========================================================
       1. THEME CONTROLLER
       ========================================================== */
    const root = document.documentElement;
    const themeBtn = $('#theme-toggle');

    function applyTheme(theme) {
        root.dataset.theme = theme;
        try { localStorage.setItem('theme', theme); } catch (e) { }
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
       2. TOPIC CLASSIFICATION & COUNT CALCULATION
       ========================================================== */
    // Helper to test if a project matches a topic filter
    function matchesTopic(p, topicKey) {
        if (topicKey === 'all') return true;
        const text = [
            p.topic || '',
            p.title || '',
            (p.tags || []).join(' '),
            (p.algorithms || []).join(' ')
        ].join(' ').toLowerCase();

        switch (topicKey) {
            case 'cv':
                return /computer vision|cnn|image|mnist|detection|recognition|face|cancer/i.test(text);
            case 'dl-arch':
                return /deep learning|neural network|sigmoid|backpropagation|activation|lstm|word vector/i.test(text);
            case 'trees':
                return /classification|tree|xgboost|random forest|decision tree|ensemble/i.test(text);
            case 'timeseries':
                return /time series|stock|aapl|financial|forecasting|indicator/i.test(text);
            case 'nlp':
                return /nlp|word vector|natural language|embedding|text/i.test(text);
            case 'regression':
                return /regression|linear|ridge|lasso|house price/i.test(text);
            case 'rl':
                return /reinforcement learning|cartpole|dqn|q-learning|agent/i.test(text);
            case 'recommender':
                return /recommendation|recommender|collaborative filtering/i.test(text);
            case 'remotesensing':
                return /remote sensing|sentinel|satellite|crop|pca/i.test(text);
            default:
                return true;
        }
    }

    const TOPIC_DEFINITIONS = [
        { key: 'all', name: 'All Skills & Topics' },
        { key: 'cv', name: 'Computer Vision & CNN' },
        { key: 'dl-arch', name: 'Deep Neural Networks' },
        { key: 'trees', name: 'Classification & Trees' },
        { key: 'timeseries', name: 'Time Series & Finance' },
        { key: 'nlp', name: 'NLP & Word Vectors' },
        { key: 'regression', name: 'Regression Models' },
        { key: 'rl', name: 'Reinforcement Learning' },
        { key: 'recommender', name: 'Recommendation Systems' },
        { key: 'remotesensing', name: 'Remote Sensing & PCA' }
    ];

    /* ==========================================================
       3. CONTROLLER BAR RENDERING (TABS, TOPICS, COUNTS)
       ========================================================== */
    function renderCategoryTabs() {
        const catRow = $('#category-pills-row');
        if (!catRow) return;

        const categories = [
            { key: 'all', label: 'All Projects' },
            { key: 'dl', label: 'Deep Learning' },
            { key: 'ml', label: 'Machine Learning' },
            { key: 'eda', label: 'Data Analysis' }
        ];

        catRow.innerHTML = categories.map(c => {
            const count = c.key === 'all'
                ? allProjects.length
                : allProjects.filter(p => p.category === c.key).length;
            const isActive = state.category === c.key;

            return `
                <button type="button" class="cat-btn ${isActive ? 'active' : ''}" data-cat="${c.key}">
                    ${c.label}
                    <span class="cat-count">${count}</span>
                </button>
            `;
        }).join('');

        $$('.cat-btn', catRow).forEach(btn => {
            btn.addEventListener('click', () => {
                state.category = btn.dataset.cat;
                renderCategoryTabs();
                renderTopicFilters();
                filterAndRenderProjects();
            });
        });
    }

    function renderTopicFilters() {
        const topicRow = $('#topic-filters-row');
        if (!topicRow) return;

        // Base project pool currently filtered by category
        const currentCategoryPool = state.category === 'all'
            ? allProjects
            : allProjects.filter(p => p.category === state.category);

        topicRow.innerHTML = TOPIC_DEFINITIONS.map(t => {
            const count = t.key === 'all'
                ? currentCategoryPool.length
                : currentCategoryPool.filter(p => matchesTopic(p, t.key)).length;

            // Only show topics that have projects in this category
            if (count === 0 && t.key !== 'all') return '';

            const isActive = state.topic === t.key;
            return `
                <button type="button" class="topic-filter-btn ${isActive ? 'active' : ''}" data-topic="${t.key}">
                    ${t.name}
                    <span class="topic-count-pill">${count}</span>
                </button>
            `;
        }).join('');

        $$('.topic-filter-btn', topicRow).forEach(btn => {
            btn.addEventListener('click', () => {
                state.topic = btn.dataset.topic;
                renderTopicFilters();
                filterAndRenderProjects();
            });
        });
    }

    /* ==========================================================
       4. FILTER AND RENDER PROJECT BENTO CARDS
       ========================================================== */
    function filterAndRenderProjects() {
        const query = state.searchQuery.trim().toLowerCase();

        state.filteredList = allProjects.filter(p => {
            // Category check
            if (state.category !== 'all' && p.category !== state.category) return false;

            // Topic check
            if (!matchesTopic(p, state.topic)) return false;

            // Search query check
            if (query) {
                const searchable = [
                    p.title || '',
                    p.summary || '',
                    p.topic || '',
                    (p.tags || []).join(' '),
                    (p.algorithms || []).join(' '),
                    p.datasetSize || ''
                ].join(' ').toLowerCase();

                if (!searchable.includes(query)) return false;
            }

            return true;
        });

        // Update active count badge in summary header
        const activeCountEl = $('#stat-filtered-count');
        if (activeCountEl) activeCountEl.textContent = state.filteredList.length;

        const grid = $('#gallery-projects-grid');
        if (!grid) return;

        if (state.filteredList.length === 0) {
            grid.innerHTML = `
                <div class="gallery-empty-state">
                    <div class="empty-icon">🔍</div>
                    <p class="empty-msg">No projects match the selected criteria.</p>
                    <p style="color:var(--text-muted);font-size:0.9rem;margin-top:8px;">Try clearing your search query or selecting a different skill filter.</p>
                </div>
            `;
            return;
        }

        grid.innerHTML = state.filteredList.map(p => {
            const images = p.images && p.images.length ? p.images : ['dl/minst_digit_recognition.png'];
            const firstMedia = images[0];
            const isVid = isVideo(firstMedia);

            const mediaHTML = isVid
                ? `<video src="${firstMedia}" muted loop playsinline></video>`
                : `<img src="${firstMedia}" alt="${esc(p.title)}" loading="lazy" />`;

            const catLabel = p.category ? p.category.toUpperCase() : 'ML';
            const catClass = p.category || 'ml';

            const algosHTML = (p.algorithms || []).slice(0, 3).map(a => `<span class="algo-tag-chip">${esc(a)}</span>`).join('');

            return `
            <article class="cyber-project-card" data-id="${esc(p.id)}">
                <div class="card-media-stage" id="card-media-${esc(p.id)}">
                    ${mediaHTML}
                    <div class="card-top-chips">
                        <span class="card-cat-badge ${catClass}">${catLabel}</span>
                        <span class="card-id-badge">PROJ #${esc(String(p._index).padStart(2, '0'))}</span>
                    </div>
                </div>

                <div class="card-body-content">
                    <div class="card-topic-row">
                        <span>${esc(p.topic || 'Machine Learning')}</span>
                        <span class="card-date-col">${esc(p.date ? p.date.split('-').slice(0, 2).join('/') : '')}</span>
                    </div>

                    <h3 class="card-project-title" title="${esc(p.title)}">${esc(p.title)}</h3>
                    <p class="card-project-summary">${esc(p.summary || '')}</p>

                    <div class="card-algo-tags">
                        ${algosHTML}
                    </div>

                    <div class="card-footer-actions">
                        <button type="button" class="inspect-card-btn open-modal-btn" data-id="${esc(p.id)}">
                            Inspect Architecture 🔍
                        </button>
                        ${p.githubLink ? `
                            <a href="${esc(p.githubLink)}" target="_blank" rel="noopener noreferrer" class="code-card-link" title="Open Notebook / Code">
                                Notebook ↗
                            </a>
                        ` : ''}
                    </div>
                </div>
            </article>
            `;
        }).join('');

        // Attach video hover preview
        $$('.cyber-project-card', grid).forEach(card => {
            const vid = $('video', card);
            if (vid) {
                card.addEventListener('mouseenter', () => vid.play().catch(() => {}));
                card.addEventListener('mouseleave', () => vid.pause());
            }
        });

        // Attach modal openers
        $$('.open-modal-btn', grid).forEach(btn => {
            btn.addEventListener('click', () => openProjectModal(btn.dataset.id));
        });
    }

    /* ==========================================================
       5. INTERACTIVE PROJECT INSPECTOR MODAL
       ========================================================== */
    function openProjectModal(id) {
        const project = allProjects.find(p => p.id === id);
        if (!project) return;

        state.activeProjectModal = project;
        const overlay = $('#project-modal-overlay');
        const sheet = $('#project-modal-sheet');
        if (!overlay || !sheet) return;

        const images = project.images && project.images.length ? project.images : [];
        const firstMedia = images[0] || '';
        const isVid = isVideo(firstMedia);

        const mediaCarouselHTML = firstMedia ? `
            <div class="modal-carousel-stage">
                ${isVid
                    ? `<video src="${firstMedia}" controls playsinline></video>`
                    : `<img src="${firstMedia}" alt="${esc(project.title)}" />`
                }
            </div>
        ` : '';

        const catLabel = project.category ? project.category.toUpperCase() : 'ML';
        const catClass = project.category || 'ml';

        sheet.innerHTML = `
            <button type="button" class="close-modal-btn" id="close-project-modal-btn" aria-label="Close modal">&times;</button>
            <div class="modal-head-meta">
                <div class="modal-tags-row">
                    <span class="card-cat-badge ${catClass}">${catLabel}</span>
                    <span class="card-id-badge">PROJECT NO. ${esc(String(project._index).padStart(3, '0'))}</span>
                </div>
                <h2 class="modal-title">${esc(project.title)}</h2>
                <p class="modal-subtitle">${esc(project.topic || '')}</p>
            </div>

            ${mediaCarouselHTML}

            <div class="modal-meta-grid">
                <div class="modal-meta-item">
                    <dt>Category</dt>
                    <dd>${esc(CATEGORY_LABELS[project.category] || 'Machine Learning')}</dd>
                </div>
                <div class="modal-meta-item">
                    <dt>Completed</dt>
                    <dd>${esc(project.date || 'Recorded')}</dd>
                </div>
                <div class="modal-meta-item">
                    <dt>Dataset Scale</dt>
                    <dd>${esc(project.datasetSize || 'Standard Benchmark')}</dd>
                </div>
                <div class="modal-meta-item">
                    <dt>Primary Stack</dt>
                    <dd>${esc((project.tags || []).slice(0, 3).join(', ') || 'Python, ML')}</dd>
                </div>
            </div>

            <div class="modal-report-body">
                <h4>Project Abstract & Summary</h4>
                <p>${esc(project.summary || '')}</p>

                ${project.detailedReport || ''}
            </div>

            <div class="modal-footer-nav">
                ${project.githubLink ? `
                    <a href="${esc(project.githubLink)}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        Open GitHub Notebook / Source Code ↗
                    </a>
                ` : '<div></div>'}

                <div style="display:flex;gap:10px;">
                    <button type="button" class="btn btn-secondary" id="modal-prev-btn" title="Previous Project">← Previous</button>
                    <button type="button" class="btn btn-secondary" id="modal-next-btn" title="Next Project">Next →</button>
                </div>
            </div>
        `;

        overlay.classList.add('open');
        document.body.classList.add('locked');

        $('#close-project-modal-btn', sheet).addEventListener('click', closeProjectModal);

        $('#modal-prev-btn', sheet).addEventListener('click', () => stepModal(-1));
        $('#modal-next-btn', sheet).addEventListener('click', () => stepModal(1));
    }

    function stepModal(dir) {
        if (!state.activeProjectModal) return;
        const currentIdx = state.filteredList.findIndex(p => p.id === state.activeProjectModal.id);
        if (currentIdx === -1) return;

        const nextIdx = (currentIdx + dir + state.filteredList.length) % state.filteredList.length;
        openProjectModal(state.filteredList[nextIdx].id);
    }

    function closeProjectModal() {
        const overlay = $('#project-modal-overlay');
        if (overlay) {
            overlay.classList.remove('open');
            document.body.classList.remove('locked');
            const v = $('video', overlay);
            if (v) v.pause();
        }
    }

    const modalOverlay = $('#project-modal-overlay');
    if (modalOverlay) {
        modalOverlay.addEventListener('mousedown', (e) => {
            if (e.target === modalOverlay) closeProjectModal();
        });
        document.addEventListener('keydown', (e) => {
            if (!modalOverlay.classList.contains('open')) return;
            if (e.key === 'Escape') closeProjectModal();
            if (e.key === 'ArrowLeft') stepModal(-1);
            if (e.key === 'ArrowRight') stepModal(1);
        });
    }

    /* ==========================================================
       6. SEARCH INPUT CONTROLLER
       ========================================================== */
    const searchInput = $('#gallery-search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.searchQuery = e.target.value;
            filterAndRenderProjects();
        });
    }

    /* ==========================================================
       7. STATS STRIP INITIALIZATION
       ========================================================== */
    function initStatsStrip() {
        const totalEl = $('#stat-total-projects');
        const dlEl = $('#stat-dl-projects');
        const mlEl = $('#stat-ml-projects');
        const edaEl = $('#stat-eda-projects');

        const dlCount = allProjects.filter(p => p.category === 'dl').length;
        const mlCount = allProjects.filter(p => p.category === 'ml').length;
        const edaCount = allProjects.filter(p => p.category === 'eda').length;

        if (totalEl) totalEl.textContent = allProjects.length;
        if (dlEl) dlEl.textContent = dlCount;
        if (mlEl) mlEl.textContent = mlCount;
        if (edaEl) edaEl.textContent = edaCount;
    }

    /* ==========================================================
       8. BOOTSTRAP GALLERY
       ========================================================== */
    initStatsStrip();
    renderCategoryTabs();
    renderTopicFilters();
    filterAndRenderProjects();

})();
