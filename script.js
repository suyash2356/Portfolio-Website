document.addEventListener("DOMContentLoaded", () => {

    /* --------------------------------------------------
       Preloader
    -------------------------------------------------- */
    const preloader = document.querySelector(".preloader");
    window.addEventListener("load", () => {
        preloader.classList.add("hidden");
    });

    /* --------------------------------------------------
       Theme Toggle (Dark / Light mode)
    -------------------------------------------------- */
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("light-mode");
        localStorage.setItem("theme", body.classList.contains("light-mode") ? "light" : "dark");
    });

    /* --------------------------------------------------
       Custom Cursor (disabled on mobile)
    -------------------------------------------------- */
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    if (!isMobile) {
        window.addEventListener("mousemove", (e) => {
            cursorDot.style.left = `${e.clientX}px`;
            cursorDot.style.top = `${e.clientY}px`;

            cursorOutline.animate(
                { left: `${e.clientX}px`, top: `${e.clientY}px` },
                { duration: 400, fill: "forwards" }
            );

            cursorDot.style.opacity = "1";
            cursorOutline.style.opacity = "1";
        });

        document.querySelectorAll("a, button, .theme-toggle, .portfolio-card").forEach((el) => {
            el.addEventListener("mouseover", () => cursorOutline.classList.add("hovered"));
            el.addEventListener("mouseleave", () => cursorOutline.classList.remove("hovered"));
        });
    } else {
        cursorDot.style.display = "none";
        cursorOutline.style.display = "none";
    }

    /* --------------------------------------------------
       Sticky Header
    -------------------------------------------------- */
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    /* --------------------------------------------------
       Mobile Menu
    -------------------------------------------------- */
    const menuIcon = document.getElementById("menu-icon");
    const navLinks = document.querySelector(".nav-links");

    menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((item) =>
        item.addEventListener("click", () => navLinks.classList.remove("active"))
    );

    /* --------------------------------------------------
       GSAP Animations
    -------------------------------------------------- */
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".hero-title", { y: 40, opacity: 0, duration: 1, delay: 0.3 });
    gsap.from(".hero-subtitle", { y: 40, opacity: 0, duration: 1, delay: 0.6 });
    gsap.from(".hero-buttons", { y: 40, opacity: 0, duration: 1, delay: 0.9 });
    gsap.from(".hero-image", { scale: 0.8, opacity: 0, duration: 1.3, delay: 0.5 });

    const sections = document.querySelectorAll("section");
    sections.forEach((sec) => {
        const elements = sec.querySelectorAll(
            ".section-title, p, .about-container > div, .portfolio-card, .skill-item, .education-container > div, .contact-container > div"
        );

        gsap.from(elements, {
            scrollTrigger: {
                trigger: sec,
                start: "top 80%",
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
        });
    });

    /* --------------------------------------------------
       Animated Counters
    -------------------------------------------------- */
    const statNumbers = document.querySelectorAll(".stat-number");

    statNumbers.forEach((num) => {
        const target = +num.dataset.target;
        const isFloat = target % 1 !== 0;

        gsap.from(num, {
            textContent: 0,
            duration: 2,
            ease: "power1.inOut",
            snap: { textContent: isFloat ? 0.01 : 1 },
            scrollTrigger: {
                trigger: num,
                start: "top 90%",
            },
        });
    });

    /* --------------------------------------------------
       3D Tilt Effect (Desktop only)
    -------------------------------------------------- */
    const tiltCards = document.querySelectorAll("[data-tilt]");

    if (!isMobile) {
        tiltCards.forEach((card) => {
            card.addEventListener("mousemove", (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const rotateX = (y / rect.height - 0.5) * -15;
                const rotateY = (x / rect.width - 0.5) * 15;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) scale(1)";
            });
        });
    }

    /* --------------------------------------------------
       Back to Top Button
    -------------------------------------------------- */
    const backToTop = document.querySelector(".back-to-top");

    window.addEventListener("scroll", () => {
        backToTop.classList.toggle("visible", window.scrollY > 300);
    });

    /* --------------------------------------------------
       Particle Background
    -------------------------------------------------- */
    const canvas = document.getElementById("particle-canvas");
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();

    let particles = [];

    class Particle {
        constructor() {
            this.size = Math.random() * 2 + 1;
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.dx = Math.random() * 0.6 - 0.3;
            this.dy = Math.random() * 0.6 - 0.3;
        }
        draw() {
            ctx.beginPath();
            ctx.fillStyle = getComputedStyle(document.documentElement)
                .getPropertyValue("--accent-color") + "33";
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
        update() {
            this.x += this.dx;
            this.y += this.dy;

            if (this.x < 0 || this.x > canvas.width) this.dx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.dy *= -1;

            this.draw();
        }
    }

    function initParticles() {
        const total = (canvas.width * canvas.height) / 9000;
        particles = [];
        for (let i = 0; i < total; i++) particles.push(new Particle());
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => p.update());
        requestAnimationFrame(animate);
    }

    initParticles();
    animate();

    window.addEventListener("resize", () => {
        resizeCanvas();
        initParticles();
    });

    /* --------------------------------------------------
       Contact Form AJAX
    -------------------------------------------------- */
    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: form.method,
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert("Message sent successfully!");
                    form.reset();
                } else {
                    alert("Oops! There was a problem submitting your form.");
                }
            } catch (error) {
                alert("Oops! There was a problem submitting your form.");
            }
        });
    }

    /* --------------------------------------------------
       Featured Projects (Dynamic Render & Modal System)
    -------------------------------------------------- */
    const featuredGrid = document.getElementById("featured-portfolio-grid");
    const featModal = document.getElementById("featured-project-modal");
    const closeFeatModalBtn = document.getElementById("closeFeaturedModal");
    const featModalBody = document.getElementById("featured-modal-body");

    function isVideoAsset(path) {
        if (!path) return false;
        const clean = path.split('?')[0].split('#')[0].toLowerCase();
        return /\.(mp4|webm|ogg|mov|mkv|avi|m4v)$/i.test(clean);
    }

    function renderFeaturedProjects() {
        if (!featuredGrid || typeof featuredProjects === "undefined" || !featuredProjects.length) return;

        featuredGrid.innerHTML = "";

        featuredProjects.forEach((proj) => {
            const mediaList = proj.media && proj.media.length > 0 ? proj.media : [{ url: proj.coverImage, type: "image" }];
            const firstMedia = mediaList[0];
            const isVid = firstMedia.type === "video" || isVideoAsset(firstMedia.url);

            const tagsHTML = (proj.tags || []).slice(0, 3).map((t) => `<span class="feat-card-tag">${t}</span>`).join("");
            
            const cardEl = document.createElement("div");
            cardEl.className = "featured-project-card";
            cardEl.setAttribute("data-id", proj.id);
            cardEl.setAttribute("data-tilt", "");

            cardEl.innerHTML = `
                <div class="feat-card-media-box">
                    ${isVid 
                        ? `<video src="${firstMedia.url}" autoplay loop muted playsinline></video>`
                        : `<img src="${proj.coverImage || firstMedia.url}" alt="${proj.title}" loading="lazy" />`
                    }
                    <div class="feat-badge-pill">${proj.badge || "Featured"}</div>
                    ${mediaList.length > 1 ? `<div class="feat-media-count">📁 ${mediaList.length} Media</div>` : ''}
                </div>
                <div class="feat-card-content">
                    <span class="feat-card-category">${proj.type || "Software & Web Platform"}</span>
                    <h3 class="feat-card-title">${proj.title}</h3>
                    <p class="feat-card-desc">${proj.subtitle || proj.overview.slice(0, 100) + '...'}</p>
                    <div class="feat-card-tags">${tagsHTML}</div>
                    <div class="feat-card-footer">
                        <button type="button" class="btn-feat-view">Explore Project <span class="arrow">&rarr;</span></button>
                    </div>
                </div>
            `;

            cardEl.addEventListener("click", () => openFeaturedModal(proj.id));
            featuredGrid.appendChild(cardEl);
        });

        // Attach 3D tilt to newly generated cards on desktop
        if (!isMobile) {
            document.querySelectorAll(".featured-project-card[data-tilt]").forEach((card) => {
                card.addEventListener("mousemove", (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const rotateX = (y / rect.height - 0.5) * -10;
                    const rotateY = (x / rect.width - 0.5) * 10;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
                });
                card.addEventListener("mouseleave", () => {
                    card.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
                });
            });
        }
    }

    function openFeaturedModal(projectId) {
        if (!featModal || !featModalBody) return;
        const project = featuredProjects.find((p) => p.id === projectId);
        if (!project) return;

        const mediaList = project.media && project.media.length > 0 ? project.media : [
            { type: "image", url: project.coverImage, caption: project.title }
        ];

        // Carousel Media Slides
        const slidesHTML = mediaList.map((m, idx) => {
            const isVid = m.type === "video" || isVideoAsset(m.url);
            return `
                <div class="feat-carousel-slide ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
                    ${isVid 
                        ? `<video src="${m.url}" controls playsinline preload="metadata"></video>`
                        : `<img src="${m.url}" alt="${project.title} slide ${idx + 1}" />`
                    }
                    ${m.caption ? `<div class="feat-slide-caption">${m.caption}</div>` : ''}
                </div>
            `;
        }).join('');

        // Navigation dots / arrows / counter
        const hasMultiple = mediaList.length > 1;
        const navControlsHTML = hasMultiple ? `
            <div class="feat-carousel-nav">
                <button type="button" class="feat-nav-btn prev" aria-label="Previous media">&#10094;</button>
                <div class="feat-dots-wrap">
                    ${mediaList.map((m, idx) => `
                        <button type="button" class="feat-dot ${idx === 0 ? 'active' : ''}" data-idx="${idx}" title="${(m.type === 'video' || isVideoAsset(m.url)) ? 'Video ' + (idx + 1) : 'Image ' + (idx + 1)}"></button>
                    `).join('')}
                </div>
                <button type="button" class="feat-nav-btn next" aria-label="Next media">&#10095;</button>
                <span class="feat-counter">1 / ${mediaList.length}</span>
            </div>
            <div class="feat-thumb-strip">
                ${mediaList.map((m, idx) => {
                    const isVid = m.type === "video" || isVideoAsset(m.url);
                    return `
                        <div class="feat-thumb ${idx === 0 ? 'active' : ''}" data-idx="${idx}">
                            ${isVid 
                                ? `<span class="thumb-vid-tag">▶ Video</span><video src="${m.url}#t=0.5" preload="metadata"></video>`
                                : `<img src="${m.url}" alt="thumb ${idx + 1}" />`
                            }
                        </div>
                    `;
                }).join('')}
            </div>
        ` : '';

        // Stats Key-Value Pills
        const statsHTML = (project.stats || []).map((s) => `
            <div class="feat-stat-pill">
                <span class="stat-pill-val">${s.value}</span>
                <span class="stat-pill-lbl">${s.label}</span>
            </div>
        `).join('');

        // Key Features / Highlights
        const highlightsHTML = (project.highlights || []).map((h) => `
            <li class="feat-highlight-item">${h}</li>
        `).join('');

        // Tech Stack
        const techStackHTML = (project.techStack || []).map((t) => `
            <div class="feat-tech-row">
                <span class="feat-tech-cat">${t.category}:</span>
                <span class="feat-tech-val">${t.tech}</span>
            </div>
        `).join('');

        // Tags
        const tagsHTML = (project.tags || []).map((t) => `<span class="feat-tag-bubble">${t}</span>`).join('');

        featModalBody.innerHTML = `
            <div class="feat-modal-header">
                <div class="feat-modal-kicker">
                    <span class="kicker-type">${project.type || "Software Application"}</span>
                    <span class="kicker-status status-${(project.badge || 'live').toLowerCase().replace(/\s+/g, '-')}">${project.badge || "Live"}</span>
                </div>
                <h2 class="feat-modal-title">${project.title}</h2>
                <p class="feat-modal-subtitle">${project.subtitle || ""}</p>
                <div class="feat-header-actions">
                    ${project.liveUrl && project.liveUrl !== '#' ? `
                        <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary feat-btn-action">
                            🚀 Live Application
                        </a>
                    ` : `
                        <button type="button" class="btn btn-secondary feat-btn-action disabled" disabled>
                            🚧 In Active Development
                        </button>
                    `}
                    ${project.githubUrl ? `
                        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary feat-btn-action">
                            💻 GitHub Repository
                        </a>
                    ` : ''}
                </div>
            </div>

            <!-- Media Carousel -->
            <div class="feat-carousel-container" id="featuredCarousel">
                <div class="feat-slides-stage">
                    ${slidesHTML}
                </div>
                ${navControlsHTML}
            </div>

            <!-- Impact Metrics -->
            ${statsHTML ? `
                <div class="feat-stats-container">
                    ${statsHTML}
                </div>
            ` : ''}

            <!-- Overview -->
            <div class="feat-detail-section">
                <h4>About The Project</h4>
                <p class="feat-overview-text">${project.overview || ""}</p>
            </div>

            <!-- Key Highlights -->
            ${highlightsHTML ? `
                <div class="feat-detail-section">
                    <h4>Core Features & Innovation</h4>
                    <ul class="feat-highlights-list">
                        ${highlightsHTML}
                    </ul>
                </div>
            ` : ''}

            <!-- Tech Stack Architecture -->
            ${techStackHTML ? `
                <div class="feat-detail-section">
                    <h4>Technology & Architecture Breakdown</h4>
                    <div class="feat-tech-box">
                        ${techStackHTML}
                    </div>
                </div>
            ` : ''}

            ${project.architecture || ''}

            <!-- Tags -->
            <div class="feat-tags-section">
                <h4>Technologies Used</h4>
                <div class="feat-tags-list">
                    ${tagsHTML}
                </div>
            </div>
        `;

        featModal.style.display = "block";
        document.body.style.overflow = "hidden";

        if (hasMultiple) {
            setupFeaturedCarousel();
        }
    }

    function setupFeaturedCarousel() {
        const carousel = document.getElementById("featuredCarousel");
        if (!carousel) return;

        const slides = carousel.querySelectorAll(".feat-carousel-slide");
        const dots = carousel.querySelectorAll(".feat-dot");
        const thumbs = carousel.querySelectorAll(".feat-thumb");
        const prevBtn = carousel.querySelector(".feat-nav-btn.prev");
        const nextBtn = carousel.querySelector(".feat-nav-btn.next");
        const counter = carousel.querySelector(".feat-counter");
        let activeIdx = 0;

        function updateSlide(idx) {
            // Pause any playing video on current slide
            const curVid = slides[activeIdx].querySelector("video");
            if (curVid && !curVid.paused) curVid.pause();

            activeIdx = (idx + slides.length) % slides.length;
            slides.forEach((s, i) => s.classList.toggle("active", i === activeIdx));
            dots.forEach((d, i) => d.classList.toggle("active", i === activeIdx));
            thumbs.forEach((t, i) => t.classList.toggle("active", i === activeIdx));

            if (counter) {
                counter.textContent = `${activeIdx + 1} / ${slides.length}`;
            }

            // Scroll thumb into view
            if (thumbs[activeIdx]) {
                thumbs[activeIdx].scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
            }

            // Autoplay new slide if video
            const newVid = slides[activeIdx].querySelector("video");
            if (newVid) {
                newVid.play().catch(() => {});
            }
        }

        if (prevBtn) prevBtn.addEventListener("click", () => updateSlide(activeIdx - 1));
        if (nextBtn) nextBtn.addEventListener("click", () => updateSlide(activeIdx + 1));

        dots.forEach((dot) => {
            dot.addEventListener("click", () => updateSlide(parseInt(dot.getAttribute("data-idx"), 10)));
        });

        thumbs.forEach((thumb) => {
            thumb.addEventListener("click", () => updateSlide(parseInt(thumb.getAttribute("data-idx"), 10)));
        });
    }

    function closeFeaturedModalWindow() {
        if (!featModal) return;
        const vids = featModal.querySelectorAll("video");
        vids.forEach((v) => v.pause());
        featModal.style.display = "none";
        document.body.style.overflow = "auto";
    }

    if (closeFeatModalBtn) {
        closeFeatModalBtn.addEventListener("click", closeFeaturedModalWindow);
    }

    window.addEventListener("click", (e) => {
        if (e.target === featModal) {
            closeFeaturedModalWindow();
        }
    });

    window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && featModal && featModal.style.display === "block") {
            closeFeaturedModalWindow();
        }
    });

    // Initialize Featured Projects on page load
    renderFeaturedProjects();
});
