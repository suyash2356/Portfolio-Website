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
});
