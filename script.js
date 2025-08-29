document.addEventListener('DOMContentLoaded', () => {
    
    // --- Preloader ---
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('hidden');
    });

    // --- Theme Toggle ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        // Save theme preference to localStorage
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });

    // --- Custom Cursor ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });

        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });

    document.querySelectorAll('a, button, .theme-toggle, .portfolio-card').forEach(el => {
        el.addEventListener('mouseover', () => cursorOutline.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursorOutline.classList.remove('hovered'));
    });


    // --- Sticky Header on Scroll ---
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu ---
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.querySelector('.nav-links');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });


    // --- GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    gsap.from('.hero-title', { duration: 1, y: 50, opacity: 0, delay: 0.5, ease: 'power3.out' });
    gsap.from('.hero-subtitle', { duration: 1, y: 50, opacity: 0, delay: 0.8, ease: 'power3.out' });
    gsap.from('.hero-buttons', { duration: 1, y: 50, opacity: 0, delay: 1.1, ease: 'power3.out' });
    gsap.from('.hero-image', { duration: 1.5, scale: 0.8, opacity: 0, delay: 1, ease: 'elastic.out(1, 0.5)' });

    // Staggered fade-in for section content
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const elements = section.querySelectorAll('.section-title, p, .about-container > div, .portfolio-card, .skill-item, .contact-container > div');
        gsap.from(elements, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none',
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    });

    // Animated Counters
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(number => {
        const target = +number.getAttribute('data-target');
        gsap.from(number, {
            textContent: 0,
            duration: 2,
            ease: "power1.inOut",
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: number,
                start: "top 90%",
            }
        });
    });

    // --- 3D Tilt Effect for Portfolio Cards ---
    const tiltCards = document.querySelectorAll('[data-tilt]');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const { width, height } = rect;
            
            const rotateX = (y / height - 0.5) * -20; // Max rotation 10deg
            const rotateY = (x / width - 0.5) * 20;   // Max rotation 10deg
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // --- Back to Top Button ---
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    // --- Particle Background ---
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particlesArray;

    const mouse = { x: null, y: null, radius: (canvas.height / 100) * (canvas.width / 100) };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    class Particle {
        constructor(x, y, directionX, directionY, size, color) {
            this.x = x;
            this.y = y;
            this.directionX = directionX;
            this.directionY = directionY;
            this.size = size;
            this.color = color;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--accent-color') + '33'; // Add alpha
            ctx.fill();
        }

        update() {
            if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
            if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;
            this.x += this.directionX;
            this.y += this.directionY;
            this.draw();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
            let size = (Math.random() * 2) + 1;
            let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
            let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
            let directionX = (Math.random() * .4) - .2;
            let directionY = (Math.random() * .4) - .2;
            let color = '#fff';
            particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
        }
    }

    init();
    animate();

    window.addEventListener('resize', () => {
        canvas.width = innerWidth;
        canvas.height = innerHeight;
        mouse.radius = ((canvas.height / 80) * (canvas.height / 80));
        init();
    });
});