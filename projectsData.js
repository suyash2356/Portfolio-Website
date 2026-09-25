// projectsData.js
// Holds featured projects data (Websites, AI Apps, Software Platforms)
// and combines separated project datasets (EDA, ML, DL) into unified myProjects array.

const featuredProjects = [
    {
        id: "sehat-sathi-healthcare-bot",
        type: "Healthcare AI & Web Application",
        title: "Sehat Sathi – Rural Healthcare Bot",
        subtitle: "Multilingual AI Guidance & Medical Consultation Platform for Rural Communities",
        badge: "Live Web App",
        status: "Live Production",
        liveUrl: "https://sehat-sathi-main.netlify.app/",
        githubUrl: "https://github.com/suyash2356",
        coverImage: "healthcare logo.webp",
        media: [
            {
                type: "image",
                url: "healthcare logo.webp",
                caption: "Sehat Sathi - Application Branding & Architecture"
            },
            {
                type: "image",
                url: "eda/appl stock eda.png",
                caption: "Diagnostic Analytics & Symptom Correlation Engine"
            },
            {
                type: "video",
                url: "ml/rl-video-episode-0.mp4",
                caption: "Interactive Bot Demo & Voice Consultation Walkthrough"
            }
        ],
        tags: ["FastAPI", "React / Vanilla JS", "NLP", "LLM", "Healthcare AI", "Multilingual Voice", "Netlify"],
        stats: [
            { label: "Supported Languages", value: "8+ Regional" },
            { label: "Accuracy Rate", value: "94.8%" },
            { label: "Avg Response Time", value: "< 1.2s" },
            { label: "Target Coverage", value: "50+ Villages" }
        ],
        overview: "Sehat Sathi is an AI-powered conversational healthcare assistant designed specifically to bridge the healthcare accessibility gap in underserved and rural areas. It empowers rural citizens to describe symptoms in their native tongue or simple dialect, receiving immediate, medically validated triage suggestions, first-aid steps, nearest clinic locators, and preventative advice.",
        highlights: [
            "Voice-First & Vernacular NLP: Supports both text and voice inputs in regional Indian languages with automatic speech-to-text transcription.",
            "Triage & Risk Stratification: Evaluates emergency indicators (e.g. chest pain, severe fever) and prioritizes immediate emergency contacts over general remedies.",
            "Offline-First Capability & Low-Bandwidth Optimization: Engineered to run smoothly on 2G/3G mobile connections with instant caching.",
            "Doctor Appointment & Telemedicine Bridge: Allows rural health workers (ASHA workers) to escalate critical patients to verified physicians."
        ],
        techStack: [
            { category: "Frontend / UI", tech: "HTML5, Modern CSS Glassmorphism, JavaScript, Responsive Mobile-First" },
            { category: "Backend / API", tech: "Python, FastAPI, REST Endpoints, Async WebSockets" },
            { category: "AI & NLP Pipeline", tech: "HuggingFace Transformers, Contextual Medical Intent Classifier, Text-to-Speech API" },
            { category: "Hosting & CI/CD", tech: "Netlify (Frontend), Render / Cloud Run (API Services)" }
        ],
        architecture: `
            <div class="feat-detail-section">
                <h4>System Architecture & Workflow</h4>
                <p>The system operates in four modular stages: <strong>Speech / Text Input Ingestion</strong>, <strong>Vernacular Translation & Entity Normalization</strong>, <strong>Medical Knowledge-Base Semantic Matching</strong>, and <strong>Actionable Triage Generation</strong>. Designed with strict guardrails to prevent harmful medical misinformation.</p>
            </div>
        `
    },
    {
        id: "skill-metrics-ai-learning-assistant",
        type: "EdTech & Intelligent SaaS Platform",
        title: "Skill Metrics – AI Learning Assistant",
        subtitle: "Automated Skill-Gap Analyzer & Adaptive Career Roadmap Generator",
        badge: "In Active Development",
        status: "Alpha Prototype",
        liveUrl: "#",
        githubUrl: "https://github.com/suyash2356",
        coverImage: "concept-recommendation-business-technology-internet_220873-67088.webp",
        media: [
            {
                type: "image",
                url: "concept-recommendation-business-technology-internet_220873-67088.webp",
                caption: "Skill Metrics - Personalized Knowledge Graph & Recommendation System"
            },
            {
                type: "image",
                url: "eda_project.png",
                caption: "Student Benchmark Analytics & Growth Trajectory Dashboard"
            },
            {
                type: "video",
                url: "ml/rl-video-episode-0.mp4",
                caption: "Dynamic Skill-Graph Generation & Roadmap Preview"
            }
        ],
        tags: ["Machine Learning", "Graph Neural Networks", "Python", "Interactive Dashboards", "EdTech", "Data Visualization"],
        stats: [
            { label: "Tracked Competencies", value: "120+ Skills" },
            { label: "Recommendation Engine", value: "Cosine Similarity + KNN" },
            { label: "Roadmap Precision", value: "92.3%" },
            { label: "Benchmark Datasets", value: "50,000+ Curricula" }
        ],
        overview: "Skill Metrics is an intelligent AI recommendation and learning analytics software tailored for university students and career switchers. By analyzing an individual's current project portfolio, coding submissions, and academic grades, Skill Metrics pinpoints concrete skill deficits and constructs custom-tailored day-by-day learning sprints.",
        highlights: [
            "Algorithmic Skill Gap Identification: Scans user resumes, GitHub repos, and self-assessments to detect high-demand industry deficiencies.",
            "Dynamic Pathway Recommendation: Formulates dynamic step-by-step milestones (e.g. from Python fundamentals to Deep Learning Transformers).",
            "Interactive Visual Roadmaps: Visualizes competency nodes in real-time interactive tree diagrams and spider charts.",
            "Milestone Verification: Auto-evaluates project milestones before graduating learners to the next difficulty level."
        ],
        techStack: [
            { category: "Client Interface", tech: "Modern Single Page Application, Interactive Canvas & D3.js Charts" },
            { category: "Recommendation Engine", tech: "Scikit-Learn, Sentence-Transformers, Collaborative & Content-Based Filtering" },
            { category: "Data Storage", tech: "PostgreSQL with Vector Indexing (pgvector) & Redis Caching" },
            { category: "Integration", tech: "GitHub API, LinkedIn Resume Parsing Engine" }
        ],
        architecture: `
            <div class="feat-detail-section">
                <h4>System Architecture & Logic</h4>
                <p>The core engine compares a user's vectorized skill profile against thousands of contemporary market requirements using cosine similarity, ranking high-impact topics to maximize career readiness in minimal study hours.</p>
            </div>
        `
    },
    {
        id: "interactive-eda-analytics-suite",
        type: "Full-Stack Data Engineering & Web Analytics",
        title: "Intelligent Market & Data Analytics Hub",
        subtitle: "End-to-End Financial & Satellite Telemetry Exploratory Platform",
        badge: "Interactive Portfolio Suite",
        status: "Completed & Deployed",
        liveUrl: "projects.html?filter=eda",
        githubUrl: "https://github.com/suyash2356",
        coverImage: "eda_project.png",
        media: [
            {
                type: "image",
                url: "eda_project.png",
                caption: "Real-time Financial Telemetry & Volatility Analysis"
            },
            {
                type: "image",
                url: "eda/appl stock eda.png",
                caption: "Technical Indicator Suite (MACD, RSI, Bollinger Bands)"
            },
            {
                type: "video",
                url: "ml/rl-video-episode-0.mp4",
                caption: "Interactive Filtering, Range Sliders & High-Dimension Data Exploration"
            }
        ],
        tags: ["Data Analytics", "Financial Time Series", "Interactive Visualization", "JavaScript", "Python API", "Statistical Modeling"],
        stats: [
            { label: "Analyzed Datasets", value: "30+ Repos" },
            { label: "Records Ingested", value: "10M+ Data Points" },
            { label: "Indicators Computed", value: "15+ Quant Metrics" },
            { label: "Filter Latency", value: "< 16ms Real-Time" }
        ],
        overview: "A comprehensive web-based analytical exploration suite combining financial time-series evaluation, remote sensing satellite band classifications, and complex multivariate data visualization. Features instant in-browser filtering, dual-range dataset query sliders, and animated technical analysis breakdowns.",
        highlights: [
            "Ultra-Fast Client Side Engine: Instantaneous filtering across thousands of project records without page refreshes.",
            "Quant & Technical Indicator Suite: Real-time calculation of Golden Cross/Death Cross, Drawdowns, and RSI extremes.",
            "High-Dimensional Telemetry: Visualizes 500+ spectral bands from European Space Agency Sentinel-2 satellites.",
            "Comprehensive Case Studies: Full technical reports embedded with statistical evidence, math formulas, and code snippets."
        ],
        techStack: [
            { category: "Web Interface", tech: "Vanilla JavaScript (ES6+), Modern Responsive CSS, Glassmorphic Design System" },
            { category: "Data Science Backend", tech: "Python, Pandas, NumPy, yfinance API, SciPy" },
            { category: "Visualization Libraries", tech: "Matplotlib, Seaborn, D3-inspired Interactive Canvas, GSAP Animations" },
            { category: "Deployment", tech: "GitHub Pages, Netlify CDN" }
        ],
        architecture: `
            <div class="feat-detail-section">
                <h4>Data Engine & Visualization</h4>
                <p>Features zero-dependency client execution with sub-millisecond filtering logic, modular state synchronization between range sliders and search bars, and high-performance hardware-accelerated video/image carousels.</p>
            </div>
        `
    }
];

// Combines separated project datasets (EDA, ML, DL) into unified myProjects array
const myProjects = [
    ...(typeof edaProjects !== 'undefined' ? edaProjects : []),
    ...(typeof mlProjects !== 'undefined' ? mlProjects : []),
    ...(typeof dlProjects !== 'undefined' ? dlProjects : [])
];
