/* ==========================================================
   studio-collection.js : the collection page (collection.html)
   Needs studio-core.js loaded first.
   ========================================================== */
(() => {
    'use strict';
    const S = window.Studio;
    const { $, $$, esc, src, isVideo, pad, clamp, all, KIND, topicCounts, topicName, EXT } = S;

    const PER_PAGE = 15;
    const state = { topic: 'all', kind: 'all', q: '', sort: 'new', view: 'index', page: 1, sel: null };

    /* ---------- Read the address so links like ?topic=vision or ?q=PyTorch work ---------- */
    const qs = new URLSearchParams(location.search);
    if (topicCounts.some((t) => t.id === qs.get('topic'))) state.topic = qs.get('topic');
    if (['eda', 'ml', 'dl'].includes(qs.get('kind'))) state.kind = qs.get('kind');
    if (qs.get('q')) state.q = qs.get('q');
    try { state.view = localStorage.getItem('colView') === 'wall' ? 'wall' : 'index'; } catch (e) { }

    function writeURL() {
        const p = new URLSearchParams();
        if (state.topic !== 'all') p.set('topic', state.topic);
        if (state.kind !== 'all') p.set('kind', state.kind);
        if (state.q.trim()) p.set('q', state.q.trim());
        const s = p.toString();
        history.replaceState(null, '', location.pathname + (s ? '?' + s : ''));
    }

    const hayOf = (p) => [p.title, p.summary, p.topic, (p.tags || []).join(' '), (p.algorithms || []).join(' '), p._topics.map(topicName).join(' ')].join(' ').toLowerCase();
    all.forEach((p) => { p._hay = hayOf(p); });

    function filtered() {
        const q = state.q.trim().toLowerCase();
        const l = all.filter((p) =>
            (state.topic === 'all' || p._topics.includes(state.topic)) &&
            (state.kind === 'all' || p.category === state.kind) &&
            (!q || p._hay.includes(q)));
        if (state.sort === 'new') l.sort((a, b) => b._d.t - a._d.t || a._no - b._no);
        if (state.sort === 'old') l.sort((a, b) => a._d.t - b._d.t || b._no - a._no);
        if (state.sort === 'az') l.sort((a, b) => a.title.localeCompare(b.title));
        return l;
    }

    /* ---------- Controls ---------- */
    function renderChips() {
        const max = Math.max(...topicCounts.map((t) => t.count), 1);
        const chips = [{ id: 'all', name: 'Everything', count: all.length }].concat(topicCounts.slice().sort((a, b) => b.count - a.count));
        $('#topics').innerHTML = chips.map((t) =>
            `<button type="button" class="chip" data-t="${t.id}" aria-pressed="${state.topic === t.id}" style="--w:${(t.count / max).toFixed(3)}">${esc(t.name)}<b>${t.count}</b></button>`).join('');
        $$('#topics .chip').forEach((b) => b.addEventListener('click', () => { state.topic = b.dataset.t; state.page = 1; state.sel = null; render(); }));
    }

    function renderSegs() {
        const kinds = [['all', 'All kinds'], ['eda', 'Data analysis'], ['ml', 'Machine learning'], ['dl', 'Deep learning']];
        $('#kinds').innerHTML = kinds.map(([k, n]) => `<button type="button" data-k="${k}" aria-pressed="${state.kind === k}">${n}</button>`).join('');
        $$('#kinds button').forEach((b) => b.addEventListener('click', () => { state.kind = b.dataset.k; state.page = 1; state.sel = null; render(); }));

        $('#views').innerHTML = [['index', 'Index'], ['wall', 'Wall']].map(([k, n]) => `<button type="button" data-v="${k}" aria-pressed="${state.view === k}">${n}</button>`).join('');
        $$('#views button').forEach((b) => b.addEventListener('click', () => {
            state.view = b.dataset.v;
            try { localStorage.setItem('colView', state.view); } catch (e) { }
            render();
        }));
    }

    $('#sort').addEventListener('change', (e) => { state.sort = e.target.value; state.page = 1; render(); });
    const search = $('#search');
    search.value = state.q;
    let st;
    search.addEventListener('input', () => { clearTimeout(st); st = setTimeout(() => { state.q = search.value; state.page = 1; state.sel = null; render(); }, 120); });
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName) && !S.isOverlayOpen()) { e.preventDefault(); search.focus(); }
    });

    /* ---------- Views ---------- */
    const mediaTag = (p, cls) => {
        const first = p.images[0];
        if (!first) return '';
        return isVideo(first)
            ? `<video src="${src(first)}" muted loop autoplay playsinline preload="metadata"></video>`
            : `<img src="${src(first)}" alt="${esc(p.title)}" ${cls || ''} onerror="this.parentElement.classList.add('noimg');this.remove()" />`;
    };

    function renderIndex(list) {
        const box = $('#ix-list');
        if (!list.find((p) => p.id === state.sel)) state.sel = list[0] ? list[0].id : null;
        box.scrollTop = 0;
        box.innerHTML = list.map((p, i) => `
            <li><button type="button" class="ix-row ${p.id === state.sel ? 'sel' : ''}" data-id="${esc(p.id)}" style="--i:${i}">
                <span class="ix-no">${pad(p._no)}</span>
                <span><span class="ix-title">${esc(p.title)}</span><span class="ix-sub" style="display:block">${esc(p._topics.slice(0, 2).map(topicName).join(', '))}</span></span>
                <span class="ix-kind">${esc(KIND[p.category] || '')}<small>${esc(p._d.label)}</small></span>
            </button></li>`).join('');
        renderPreview(list.find((p) => p.id === state.sel), list);

        $$('.ix-row', box).forEach((b) => {
            b.addEventListener('pointerenter', (e) => { if (e.pointerType === 'mouse') select(b.dataset.id, list, false); });
            b.addEventListener('focus', () => select(b.dataset.id, list, false));
            b.addEventListener('click', () => S.openPlate(b.dataset.id, list));
        });
    }

    function select(id, list, scroll) {
        if (state.sel === id) return;
        state.sel = id;
        $$('#ix-list .ix-row').forEach((r) => r.classList.toggle('sel', r.dataset.id === id));
        renderPreview(list.find((p) => p.id === id), list);
        if (scroll) { const r = $(`#ix-list .ix-row[data-id="${CSS.escape(id)}"]`); if (r) { r.scrollIntoView({ block: 'nearest' }); r.focus({ preventScroll: true }); } }
    }

    function renderPreview(p, list) {
        const box = $('#ix-preview');
        if (!p) { box.innerHTML = ''; return; }
        const link = p.githubLink ? `<a class="link" href="${esc(p.githubLink)}" target="_blank" rel="noopener noreferrer">${/\/tree\//.test(p.githubLink) ? 'View the code' : 'Open the notebook'}${EXT}</a>` : '';
        const imgs = p.images && p.images.length ? p.images : [];
        const hasImgs = imgs.length > 0;
        const many = imgs.length > 1;
        const slides = hasImgs ? imgs.map((u, i) => {
            const vid = isVideo(u);
            return `<div class="slide ${i === 0 ? 'on' : ''}">${vid
                ? `<video src="${src(u)}" muted loop playsinline preload="metadata"></video>`
                : `<img src="${src(u)}" alt="${esc(p.title)}" ${i ? 'loading="lazy"' : ''} onerror="this.parentElement.classList.add('noimg');this.remove()" />`}</div>`;
        }).join('') : '';
        const prevNextNav = many
            ? `<button type="button" class="ex-nav-btn prev" data-dir="-1" aria-label="Previous image"></button><button type="button" class="ex-nav-btn next" data-dir="1" aria-label="Next image"></button><span class="ex-nav-hint prev" aria-hidden="true">‹</span><span class="ex-nav-hint next" aria-hidden="true">›</span>`
            : '';
        box.innerHTML = `
            <div class="pv-media ${hasImgs ? '' : 'noimg'}" id="pv-media"><span class="pv-no">No. ${pad(p._no)}</span>${slides}${prevNextNav}</div>
            <div class="pv-body">
                <h2>${esc(p.title)}</h2>
                <p>${esc(p.summary || '')}</p>
                <dl class="pv-facts">
                    <div><dt>Made</dt><dd>${esc(p._d.label || 'Date not set')}</dd></div>
                    <div><dt>Data</dt><dd>${esc(p.datasetSize || '')}</dd></div>
                    <div><dt>Methods</dt><dd>${esc((p.algorithms || []).slice(0, 3).join(', '))}</dd></div>
                </dl>
                <div class="pv-topics">${p._topics.map((t) => `<span>${esc(topicName(t))}</span>`).join('')}</div>
                <div class="pv-actions">
                    <button type="button" class="btn btn-primary" id="pv-open">Read the full report</button>
                    ${link}
                </div>
            </div>`;
        $('#pv-open', box).addEventListener('click', () => S.openPlate(p.id, list));
        const m = $('#pv-media', box);
        m.addEventListener('pointermove', (e) => {
            const r = m.getBoundingClientRect();
            m.style.setProperty('--sx', ((e.clientX - r.left) / r.width * 100).toFixed(1) + '%');
            m.style.setProperty('--sy', ((e.clientY - r.top) / r.height * 100).toFixed(1) + '%');
        });
        if (many) {
            const pvSlides = $$('.slide', m);
            let cur = 0;
            const showPv = (n) => {
                cur = (n + pvSlides.length) % pvSlides.length;
                pvSlides.forEach((s, idx) => {
                    const on = idx === cur;
                    s.classList.toggle('on', on);
                    const v = $('video', s);
                    if (v) { if (on) v.play().catch(() => {}); else v.pause(); }
                });
            };
            $$('.ex-nav-btn', m).forEach((b) => b.addEventListener('click', (e) => {
                e.stopPropagation();
                showPv(cur + +b.dataset.dir);
            }));
        }
    }

    function renderWall(list) {
        const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
        state.page = clamp(state.page, 1, pages);
        const slice = list.slice((state.page - 1) * PER_PAGE, state.page * PER_PAGE);
        $('#wall').innerHTML = slice.map((p, i) => `
            <button type="button" class="wall-item" data-id="${esc(p.id)}" style="--i:${i}" data-cursor="Open plate">
                <span class="wall-img ${p.images[0] ? '' : 'noimg'}"><b>No. ${pad(p._no)}</b>${mediaTag(p)}</span>
                <span class="wall-cap"><h3>${esc(p.title)}</h3><p>${esc(p._d.label)}, ${esc(KIND[p.category] || '')}</p></span>
            </button>`).join('');
        $$('#wall .wall-item').forEach((b) => b.addEventListener('click', () => S.openPlate(b.dataset.id, list)));

        const nav = $('#pager');
        if (pages < 2) { nav.innerHTML = ''; return; }
        const nums = [];
        for (let i = 1; i <= pages; i++) if (i === 1 || i === pages || Math.abs(i - state.page) <= 1) nums.push(i);
        let out = `<button type="button" data-p="${state.page - 1}" ${state.page === 1 ? 'disabled' : ''} aria-label="Previous page">Prev</button>`;
        let prev = 0;
        nums.forEach((n) => { if (n - prev > 1) out += '<span>...</span>'; out += `<button type="button" data-p="${n}" ${n === state.page ? 'aria-current="page"' : ''}>${n}</button>`; prev = n; });
        out += `<button type="button" data-p="${state.page + 1}" ${state.page === pages ? 'disabled' : ''} aria-label="Next page">Next</button>`;
        nav.innerHTML = out;
        $$('#pager button').forEach((b) => b.addEventListener('click', () => {
            state.page = +b.dataset.p; renderWall(list);
            $('#results').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }));
    }

    /* ---------- Orchestrate ---------- */
    function render() {
        renderChips();
        renderSegs();
        const list = filtered();
        S.countUp($('#f-num'), list.length);
        $('#f-total').textContent = all.length;
        const empty = $('#empty');
        const ix = $('#view-index'), wall = $('#view-wall');
        if (!list.length) {
            ix.hidden = true; wall.hidden = true; empty.hidden = false;
        } else {
            empty.hidden = true;
            ix.hidden = state.view !== 'index';
            wall.hidden = state.view !== 'wall';
            if (state.view === 'index') renderIndex(list); else renderWall(list);
        }
        writeURL();
        lastList = list;
    }
    let lastList = [];

    $('#clear').addEventListener('click', () => {
        state.topic = 'all'; state.kind = 'all'; state.q = ''; state.page = 1; search.value = ''; render();
    });

    /* List keyboard control: arrow keys move through the index */
    $('#ix-list').addEventListener('keydown', (e) => {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
        e.preventDefault();
        const i = lastList.findIndex((p) => p.id === state.sel);
        const n = clamp(i + (e.key === 'ArrowDown' ? 1 : -1), 0, lastList.length - 1);
        select(lastList[n].id, lastList, true);
    });

    /* Header numbers */
    const ct = $('#col-total'); if (ct) ct.dataset.count = all.length;
    const cp = $('#col-topics'); if (cp) cp.dataset.count = topicCounts.length;

    render();
    S.fx();

    /* Deep link: collection.html?open=<project id> */
    const open = qs.get('open');
    if (open && all.some((p) => p.id === open)) {
        setTimeout(() => S.openPlate(open, lastList.some((p) => p.id === open) ? lastList : all), 900);
    }
})();
