// projectsData.js
// Holds featured projects data (Websites, AI Apps, Software Platforms)
// and combines separated project datasets (EDA, ML, DL) into unified myProjects array.

const featuredProjects = [
    {
        id: "sehat-sathi-healthcare-platform",
        type: "Healthcare AI, ML & Web Application",
        title: "Sehat Sathi – Healthcare Assistance Platform",
        subtitle: "Multilingual AI Guidance, ML Screening & Doctor Consultation Platform",
        badge: "Live Web App",
        status: "Frontend Live / ML Backend Separate",
        liveUrl: "https://sehat-sathi-main.netlify.app/",
        githubUrl: "https://github.com/suyash2356",
        coverImage: "featured projects/sehat sathi/sehat sathi logo.png",

        media: [
            {
                type: "image",
                url: "featured projects/sehat sathi/sehat sathi logo.png",
                caption: "Sehat Sathi - Healthcare Assistance Platform"
            },
            {
                type: "image",
                url: "featured projects/sehat sathi/Screenshot 2026-01-17 160826.png",
                caption: "Landing Page"
            },
            // {
            //     type: "image",
            //     url: "ml/skin-cancer-screening.png",
            //     caption: "EfficientNet-B3 Skin Cancer Screening"
            // },
            // {
            //     type: "image",
            //     url: "doctor/face-verification.png",
            //     caption: "Doctor Face Verification & Liveness Checking"
            // },
            {
                type: "video",
                url: "featured projects/sehat sathi/Sehat Sathi.mp4",
                caption: "Sehat Sathi Application Walkthrough"
            }
        ],

        tags: [
            "Next.js",
            "React",
            "TypeScript",
            "Python",
            "Flask",
            "Machine Learning",
            "Computer Vision",
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
            "InsightFace",
            "Firebase",
            "Gemini",
            "WebRTC",
            "Healthcare AI"
        ],

        stats: [
            {
                label: "Supported Languages",
                value: "English, Hindi, Marathi"
            },
            {
                label: "ML / Vision Systems",
                value: "4"
            },
            {
                label: "Skin Cancer Classes",
                value: "7"
            },
            {
                label: "Skin Cancer Test Accuracy",
                value: "85.9%"
            },
            {
                label: "Skin Cancer Balanced Accuracy",
                value: "82.1%"
            },
            {
                label: "Symptom Features",
                value: "132"
            }
        ],

        overview: "Sehat Sathi is a multilingual healthcare assistance platform designed to connect health information, AI-based guidance, machine-learning screening, verified doctors, and digital consultation into one web application. The platform supports patients through health guidance and screening workflows while also providing a structured workflow for verified doctors, appointments, consultations, patient records, and prescriptions. The system is designed as an assistance and screening platform, not as a replacement for professional medical diagnosis.",

        highlights: [
            "Multilingual AI Health Assistant: Provides general health guidance in English, Hindi, and Marathi using Google Genkit and Gemini. Users can describe health concerns conversationally and receive guidance, with optional text-to-speech support.",

            "Symptom-Based Disease Prediction: Uses a multiclass Logistic Regression model trained on 132 symptom features. The model returns probability-ranked possible conditions rather than presenting a single result as a confirmed diagnosis.",

            "Skin Disease Screening: Provides image-based skin disease classification using a MobileNetV2-based TensorFlow/Keras model.",

            "Skin Cancer Screening: Uses an EfficientNet-B3 model with PyTorch/TorchVision for classification across 7 HAM10000 categories. The documented held-out test results are 85.9% raw accuracy, 82.1% balanced accuracy, and 0.791 macro F1.",

            "Doctor Face Verification & Liveness: Uses InsightFace for face embeddings and similarity-based verification, combined with head-movement checks to help verify that a live person is present during the doctor verification workflow.",

            "Verified Doctor Discovery: Patients can discover verified doctors and healthcare facilities using location and specialization-based search, with availability information and consultation options.",

            "Appointment & Consultation Workflow: Patients can request appointments with doctors and choose consultation modes including in-person, voice, or video consultation. Doctors can accept, reject, or reschedule requests.",

            "Real-Time Video & Voice Consultation: Uses WebRTC for peer-to-peer communication with Firebase/Firestore used for signaling and exchange of connection information.",

            "Patient Medical Records: Doctors can create and maintain patient profiles containing medical history, previous appointments, prescriptions, and follow-up information.",

            "Digital Prescriptions: Doctors can create structured prescriptions containing medicines, dosage, frequency, duration, instructions, and notes. Prescriptions can be accessed by patients through the platform with verification workflows.",

            "Healthcare Information & Support: Includes health education, government healthcare scheme discovery, hospital discovery, and insurance document management.",

            "Security & Access Control: Uses Firebase Authentication, Firestore and Storage rules, App Check/reCAPTCHA, doctor verification, face verification, liveness checking, and access-controlled consultation workflows."
        ],

        productView: {
            title: "Product View – What the User Can Do",

            description: "From the user's perspective, Sehat Sathi brings several healthcare workflows into one platform instead of treating AI, doctor discovery, appointments, and medical records as separate applications.",

            patientJourney: [
                "Create or access a patient account.",
                "Ask health-related questions through the multilingual AI assistant.",
                "Use symptom-based disease prediction for an initial screening signal.",
                "Upload a skin image for skin disease screening.",
                "Upload a lesion image for skin-cancer screening.",
                "Find verified doctors or healthcare facilities.",
                "Check doctor availability and request an appointment.",
                "Choose in-person, voice, or video consultation where available.",
                "Attend the consultation through the integrated communication workflow.",
                "View prescriptions and maintain healthcare-related information.",
                "Manage insurance documents and follow-up information."
            ],

            doctorJourney: [
                "Register as a doctor and complete professional onboarding.",
                "Submit required identity and professional documents.",
                "Complete face enrollment when applicable.",
                "Wait for administrator verification.",
                "Become publicly discoverable after approval.",
                "Create and manage doctor profile and availability.",
                "Receive and manage appointment requests.",
                "Conduct voice or video consultations.",
                "Create and maintain patient profiles.",
                "Review previous appointments and medical history.",
                "Create digital prescriptions and manage follow-ups."
            ]
        },

        mlView: {
            title: "Technical View – Machine Learning & AI",

            description: "The technical side of Sehat Sathi is built around multiple independent ML and AI components rather than one single model. Each model is connected to a specific application workflow and exposed to the web application through a unified backend.",

            models: [
                {
                    name: "1. Symptom-Based Disease Prediction",
                    task: "Multiclass classification",
                    model: "Logistic Regression",
                    framework: "Scikit-learn",
                    input: "132 symptom features",
                    output: "Probability-ranked possible conditions",
                    integration: "Next.js API route → Flask → model inference → frontend result"
                },

                {
                    name: "2. Skin Disease Screening",
                    task: "Image classification",
                    model: "MobileNetV2-based CNN",
                    framework: "TensorFlow / Keras",
                    input: "Skin image",
                    preprocessing: "Image resized to 224×224 RGB",
                    output: "Predicted skin-disease class",
                    integration: "Image upload → Next.js API route → Flask → Keras model"
                },

                {
                    name: "3. Skin Cancer Screening",
                    task: "Multi-class dermoscopic image classification",
                    model: "EfficientNet-B3",
                    framework: "PyTorch / TorchVision",
                    dataset: "HAM10000",
                    classes: "7 classes",
                    classesList: [
                        "Melanoma (MEL)",
                        "Melanocytic nevus (NV)",
                        "Basal cell carcinoma (BCC)",
                        "Actinic keratosis / intraepithelial carcinoma (AKIEC)",
                        "Benign keratosis (BKL)",
                        "Dermatofibroma (DF)",
                        "Vascular lesion (VASC)"
                    ],
                    evaluation: {
                        rawTestAccuracy: "85.9%",
                        balancedAccuracy: "82.1%",
                        macroF1: "0.791"
                    },
                    inference: "Uses four-view test-time augmentation and averages the resulting probabilities.",
                    integration: "Image upload → Next.js API route → Flask → EfficientNet-B3 inference → screening result"
                },

                {
                    name: "4. Doctor Face Verification",
                    task: "Face recognition and verification",
                    model: "InsightFace face embeddings",
                    framework: "InsightFace",
                    input: "Face images / live camera input",
                    method: "Face embedding comparison using cosine similarity",
                    liveness: "Head-movement based liveness checks using facial landmarks",
                    purpose: "Doctor identity verification during the doctor authentication workflow"
                }
            ],

            safetyLayer: "The medical screening services use a confidence threshold before returning a prediction. When the model confidence is below the configured threshold, the system can withhold the prediction and direct the user toward better input or professional medical consultation. Model confidence is not treated as clinical accuracy."
        },

        techStack: [
            {
                category: "Frontend / Application",
                tech: "Next.js 15, React 18, TypeScript, App Router, Tailwind CSS, shadcn/ui, Radix UI"
            },
            {
                category: "Forms / Validation",
                tech: "React Hook Form, Zod"
            },
            {
                category: "Authentication / Database",
                tech: "Firebase Authentication, Cloud Firestore, Firebase Storage, Firebase App Check"
            },
            {
                category: "Generative AI",
                tech: "Google Genkit, Gemini 2.5 Flash, text-to-speech"
            },
            {
                category: "Machine Learning",
                tech: "Scikit-learn, Logistic Regression, TensorFlow/Keras, MobileNetV2"
            },
            {
                category: "Computer Vision",
                tech: "PyTorch, TorchVision, EfficientNet-B3, HAM10000, InsightFace"
            },
            {
                category: "ML Backend",
                tech: "Python, Flask, unified ML inference backend"
            },
            {
                category: "Communication",
                tech: "WebRTC, Firebase/Firestore signaling"
            },
            {
                category: "Maps / Location",
                tech: "Google Maps, doctor and hospital discovery"
            }
        ],

        architecture: `
        <div class="feat-detail-section">
            <h4>Application Architecture</h4>

            <p>
                Sehat Sathi is divided into a web application layer, an AI layer,
                an ML inference layer, and a Firebase-based data and authentication layer.
                The frontend is built with Next.js and communicates with application APIs
                rather than directly exposing the Python ML service to the browser.
            </p>

            <p>
                For ML workflows, the general path is:
                <strong>Model → Evaluation → Python/Flask Service → REST API → Next.js API Route → Frontend Workflow</strong>.
            </p>

            <p>
                This separation allows the ML models to remain in Python while the main
                healthcare application continues to use the Next.js application architecture.
            </p>
        </div>

        <div class="feat-detail-section">
            <h4>Patient Screening Flow</h4>

            <p>
                Patient screening begins from the authenticated patient interface.
                Depending on the selected screening type, the frontend sends structured
                symptom data or an uploaded image to a Next.js API route. The API route
                forwards the request to the unified Flask backend, which performs model
                inference and returns the screening result to the application.
            </p>
        </div>

        <div class="feat-detail-section">
            <h4>Doctor Verification Flow</h4>

            <p>
                The doctor workflow separates professional registration from public
                discoverability. A doctor submits onboarding information and documents,
                remains unverified while the application is reviewed, and becomes
                publicly discoverable only after administrator approval.
            </p>

            <p>
                Face verification uses InsightFace embeddings, while liveness checking
                uses facial landmarks and required head movements to verify a live
                interaction during the verification process.
            </p>
        </div>

        <div class="feat-detail-section">
            <h4>Consultation Flow</h4>

            <p>
                Appointment requests are stored and updated through Firebase-backed
                workflows. Once a consultation is permitted, the video/voice system
                uses WebRTC for peer-to-peer communication, while Firestore handles
                signaling information such as SDP offers, answers, and ICE candidates.
            </p>
        </div>

        <div class="feat-detail-section">
            <h4>Medical Record Flow</h4>

            <p>
                Patient profiles allow doctors to maintain information across
                appointments. Previous appointments, medical history, prescriptions,
                and follow-up information can be accessed through the doctor and
                patient workflows.
            </p>
        </div>
    `,

        technicalFocus: [
            "Multiple ML models integrated into one real web application.",
            "Separate Python ML inference backend connected to a Next.js application.",
            "Different ML frameworks used according to the task: Scikit-learn, TensorFlow/Keras, PyTorch, and InsightFace.",
            "Image-based computer vision pipelines for skin disease and skin-cancer screening.",
            "Probability-based outputs and confidence gating for screening workflows.",
            "Face embedding comparison combined with liveness checks for doctor verification.",
            "Real-time WebRTC communication integrated into the healthcare workflow.",
            "Firebase used for authentication, data storage, real-time updates, signaling, and document storage."
        ],

        implementationStructure: [
            {
                layer: "Frontend",
                paths: [
                    "src/app/",
                    "src/components/",
                    "src/hooks/",
                    "src/lib/"
                ]
            },
            {
                layer: "AI",
                paths: [
                    "src/ai/"
                ]
            },
            {
                layer: "ML Models",
                paths: [
                    "ml-models/predict_disease/",
                    "ml-models/skin_disease/",
                    "ml-models/skin_cancer/"
                ]
            },
            {
                layer: "Unified ML Backend",
                paths: [
                    "unified_backend/app.py",
                    "unified_backend/config.py"
                ]
            },
            {
                layer: "Firebase / Server Functions",
                paths: [
                    "functions/"
                ]
            }
        ],

        disclaimer: "Sehat Sathi is an assistance and screening platform. Its AI and ML outputs are not confirmed medical diagnoses and should not replace a qualified healthcare professional, physical examination, laboratory testing, or emergency medical care."
    },











    {
        id: "skill-metrics-ai-learning-platform",
        type: "EdTech & Intelligent SaaS Platform",
        title: "Skill-Metric – AI-Powered Personalized Learning Platform",
        subtitle: "Personalized Learning Paths, Intelligent Recommendations & Collaborative Learning",
        badge: "In Active Development",
        status: "Alpha / Production-Oriented Prototype",
        liveUrl: "#",
        githubUrl: "https://github.com/suyash2356",

        coverImage: "featured projects/skill metrics/logo.jpg",

        media: [
            {
                type: "image",
                url: "featured projects/skill metrics/logo.jpg",
                caption: "Skill-Metric – Personalized Learning Platform"
            },
            {
                type: "image",
                url: "featured projects/skill metrics/Screenshot 2026-09-27 192736.png",
                url: "featured projects/skill metrics/Screenshot 2026-09-27 192800.png",
                caption: "Admin Section"
            },
            {
                type: "video",
                url: "featured projects/skill metrics/lv_0_20260927192215.mp4",
                caption: "Skill-Metric Platform Demo"
            }
        ],

        tags: [
            "Artificial Intelligence",
            "Machine Learning",
            "Recommendation Systems",
            "EdTech",
            "Personalization",
            "React",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Sentence Transformers",
            "Collaborative Filtering",
            "Content-Based Recommendation",
            "Community Learning"
        ],

        stats: [
            {
                label: "Learning Resources",
                value: "780+"
            },
            {
                label: "Tracked Interactions",
                value: "2,000+"
            },
            {
                label: "Recommendation Approach",
                value: "Hybrid AI Recommender"
            },
            {
                label: "Recommendation Models",
                value: "ALS + Semantic Embeddings"
            }
        ],

        overview: `
        <div class="feat-detail-section">

            <h4>What is Skill-Metric?</h4>

            <p>
                Skill-Metric is an AI-powered personalized learning platform designed
                to help people decide what to learn, where to learn it from, and what
                they should learn next.
            </p>

            <p>
                The core problem Skill-Metric addresses is not the lack of learning
                resources. Today, learners have access to thousands of courses,
                tutorials, videos, articles, documentation, and other educational
                resources. The real problem is information overload: learners often
                do not know which resource is relevant to their goals, what order
                they should follow, or what their next learning step should be.
            </p>

            <p>
                Skill-Metric brings personalized recommendations, AI-generated
                learning roadmaps, skill tracking, progress visualization, resource
                discovery, and community-based learning into one platform.
            </p>

            <p>
                Instead of simply showing a large library of content, the platform
                attempts to understand a learner's goals, skills, interests, learning
                activity, and interactions with resources, and then uses that
                information to create a more personalized learning experience.
            </p>

            <h4>The Problem</h4>

            <p>
                A learner who wants to become a machine learning engineer, for example,
                may find hundreds of videos, courses, books, articles, and tutorials.
                The difficult part is determining which concepts to learn first,
                which resources are worth their time, and what should come next after
                completing a particular topic.
            </p>

            <p>
                Skill-Metric is designed around this problem:
                <strong>reduce the amount of time learners spend searching and
                deciding, so they can spend more time actually learning.</strong>
            </p>

            <h4>The Vision</h4>

            <p>
                The long-term vision is to make Skill-Metric behave like a
                personalized learning GPS.
            </p>

            <p>
                The learner provides a destination — such as becoming a Data Scientist,
                learning Web Development, preparing for an examination, or improving
                a particular skill — and Skill-Metric helps determine the learning
                route, relevant resources, progress milestones, and potential next
                steps.
            </p>

            <p>
                The platform is therefore intended to evolve beyond simple
                content recommendation into a system that understands the learner's
                learning journey.
            </p>

        </div>
    `,

        highlights: [

            "Personalized AI Recommendations: Recommends learning resources based on a learner's interests, goals, skills, previous interactions, and resource characteristics.",

            "AI Learning Roadmap Generator: Creates structured learning paths that organize skills and resources into a logical progression rather than presenting isolated pieces of content.",

            "Learning Resource Discovery: Allows learners to explore educational resources across different domains, categories, skills, and difficulty levels.",

            "Skill Tracking & Progress Visualization: Helps users understand their current learning progress and visualize development across skills.",

            "Personalized Learning Experience: Uses user preferences and behavioral interaction data to gradually improve the relevance of recommendations.",

            "Home Learning Feed: Provides a social-style learning feed where users can share updates, resources, insights, learning progress, and educational content.",

            "Community Learning Spaces: Enables learners to participate in communities where they can collaborate, discuss topics, ask questions, share resources, and learn together.",

            "Smart User Profiles: Provides a profile experience where learners can showcase skills, achievements, learning milestones, progress, and current work.",

            "Explore Experience: Provides discovery-oriented access to trending, popular, highly rated, and eventually personalized learning resources.",

            "Secure Authentication: Provides authenticated access to personalized user experiences and protected platform functionality.",

            "Learning Interaction Tracking: Records meaningful learner-resource interactions such as views, likes, completions, and other interaction events so the recommendation system can learn from actual user behavior.",

            "Cold-Start Recommendation Support: Uses content-based semantic understanding to recommend relevant resources even when there is not yet enough historical interaction data for a new learner."
        ],

        userFlow: `
        <div class="feat-detail-section">

            <h4>How a Learner Uses Skill-Metric</h4>

            <p>
                <strong>1. Define a learning goal:</strong>
                The learner begins by identifying what they want to learn or achieve.
            </p>

            <p>
                <strong>2. Build a learner profile:</strong>
                Relevant interests, skills, preferences, and learning context become
                part of the learner's personalized experience.
            </p>

            <p>
                <strong>3. Discover a learning path:</strong>
                Skill-Metric can generate or present a structured roadmap that
                organizes the learning journey.
            </p>

            <p>
                <strong>4. Receive recommendations:</strong>
                The recommendation system ranks resources according to their
                relevance to the learner.
            </p>

            <p>
                <strong>5. Learn and interact:</strong>
                The learner views, likes, saves, completes, skips, or otherwise
                interacts with resources.
            </p>

            <p>
                <strong>6. Track progress:</strong>
                Learning activity contributes to the learner's progress and skill
                representation.
            </p>

            <p>
                <strong>7. Improve recommendations:</strong>
                New interaction signals can be used by the recommendation system
                to produce increasingly relevant results.
            </p>

            <p>
                <strong>8. Learn with others:</strong>
                The learner can participate in feeds and communities to share
                knowledge and collaborate with other learners.
            </p>

        </div>
    `,

        technicalApproach: `
        <div class="feat-detail-section">

            <h4>Technical & Engineering Approach</h4>

            <p>
                Skill-Metric is designed as a modern full-stack learning platform
                with a React-based frontend, Supabase-backed application infrastructure,
                PostgreSQL data storage, and an AI/recommendation layer responsible
                for personalization.
            </p>

            <h4>1. Frontend Architecture</h4>

            <p>
                The client application is built using Vite, React, and TypeScript.
                Tailwind CSS and shadcn/ui are used to create the interface and
                reusable UI components.
            </p>

            <p>
                React Hooks and Context API are used for application state and
                shared user experience state. The frontend communicates with
                Supabase-backed services to retrieve user data, resources,
                interactions, communities, and recommendation results.
            </p>

            <h4>2. Backend & Data Layer</h4>

            <p>
                Supabase provides the backend infrastructure, authentication,
                PostgreSQL database, real-time capabilities, and storage required
                by the application.
            </p>

            <p>
                PostgreSQL stores core entities such as users, resources,
                preferences, skills, learning activity, communities, posts,
                and recommendation-related data.
            </p>

            <p>
                The database architecture is designed not only for the current
                application but also to preserve behavioral data that can later
                be used for machine-learning-based personalization.
            </p>

            <h4>3. Interaction Data / Event Spine</h4>

            <p>
                A centralized interaction-event approach is used to capture
                learner behavior consistently.
            </p>

            <p>
                Instead of treating each page or feature as an isolated tracking
                system, interactions are represented using a common event model
                containing concepts such as the user, action, subject, session,
                and contextual information.
            </p>

            <p>
                Examples of useful learning signals include:
                viewing a resource, liking a resource, completing a resource,
                skipping a resource, impressions, ranking position, and dwell time.
            </p>

            <p>
                This creates the behavioral foundation required for future
                recommendation models and offline model training.
            </p>

            <h4>4. Recommendation System</h4>

            <p>
                The recommendation architecture is designed as a hybrid system
                rather than relying on a single recommendation technique.
            </p>

            <p>
                The current ML-oriented recommendation pipeline combines:
            </p>

            <ul>
                <li>Collaborative filtering using implicit user-resource interactions</li>
                <li>Content-based semantic similarity using sentence embeddings</li>
                <li>Resource quality signals</li>
                <li>Domain or skill matching</li>
                <li>Cold-start fallback for users with limited interaction history</li>
            </ul>

            <h4>5. Collaborative Filtering</h4>

            <p>
                Implicit ALS is used to learn relationships between users and
                learning resources from behavioral interactions.
            </p>

            <p>
                Instead of requiring users to explicitly rate every resource,
                the system can interpret actions as implicit preference signals.
                For example, viewing indicates interest, liking represents a
                stronger positive signal, and completing a resource represents
                an even stronger learning signal.
            </p>

            <p>
                A representative interaction weighting strategy currently uses:
            </p>

            <ul>
                <li>View = 1</li>
                <li>Like = 3</li>
                <li>Complete = 5</li>
                <li>Skip = -2 / negative filtering signal</li>
            </ul>

            <h4>6. Content-Based Semantic Recommendation</h4>

            <p>
                Resource text such as the title, description, and learning outcomes
                can be converted into semantic embeddings using a
                Sentence-Transformer model.
            </p>

            <p>
                The resulting vectors allow the system to measure semantic
                similarity between learning resources and a learner's interests
                or learned profile.
            </p>

            <p>
                This is particularly important for cold-start situations, where a
                new user has little or no interaction history. Instead of waiting
                for collaborative data, the system can still reason about the
                meaning and subject matter of resources.
            </p>

            <h4>7. Hybrid Ranking</h4>

            <p>
                The final recommendation score combines multiple signals rather
                than depending on only collaborative filtering or only semantic
                similarity.
            </p>

            <p>
                Conceptually, the ranking process combines:
            </p>

            <ul>
                <li>Collaborative recommendation score</li>
                <li>Semantic similarity to the learner's interests</li>
                <li>Resource quality / rating signals</li>
                <li>Domain or skill relevance</li>
            </ul>

            <p>
                The current documented hybrid architecture uses weighted normalized
                components to produce a final ranking score. This allows the system
                to balance behavioral similarity with semantic relevance and
                resource quality.
            </p>

            <h4>8. Recommendation Serving</h4>

            <p>
                The recommendation architecture is designed to serve predictions
                through a backend recommendation endpoint and log recommendation
                impressions for later analysis.
            </p>

            <p>
                This creates a feedback loop:
            </p>

            <p>
                <strong>
                    Recommendation → User Interaction → Event Logging →
                    Model Data → Improved Recommendation
                </strong>
            </p>

            <h4>9. Evaluation</h4>

            <p>
                The recommendation system is designed to be evaluated using
                ranking metrics such as Precision@K, Recall@K, NDCG@K, and
                recommendation coverage.
            </p>

            <p>
                These metrics allow different approaches — such as popularity
                baselines, collaborative filtering, content-based recommendation,
                and hybrid recommendation — to be compared objectively during
                development.
            </p>

            <h4>10. Learning Roadmap Architecture</h4>

            <p>
                The roadmap system represents the learning journey as a structured
                sequence of skills and resources rather than treating resources
                as independent recommendations.
            </p>

            <p>
                The long-term architecture is intended to evolve toward a
                sequential learning engine that can determine not only
                <strong>what resource is relevant</strong>, but also
                <strong>what the learner should learn next</strong>.
            </p>

            <p>
                This can eventually combine skill dependencies, learner progress,
                difficulty, previous learning behavior, and resource relevance
                to dynamically adapt the learning path.
            </p>

            <h4>11. Community & Social Learning</h4>

            <p>
                Skill-Metric is not designed only as a recommendation engine.
                Community functionality allows users to share learning updates,
                resources, posts, questions, and knowledge.
            </p>

            <p>
                Community interactions also create an additional source of
                behavioral context that can eventually contribute to personalized
                feed ranking and community recommendations.
            </p>

            <h4>12. Future Recommendation Architecture</h4>

            <p>
                The current recommendation foundation is intended to expand into
                multiple specialized recommendation systems:
            </p>

            <ul>
                <li>Learning resource recommendation</li>
                <li>Sequential next-skill prediction</li>
                <li>Personalized learning roadmap optimization</li>
                <li>Home-feed ranking</li>
                <li>Explore-page personalization</li>
                <li>Community recommendations</li>
            </ul>

            <p>
                The long-term goal is to create a unified learning intelligence
                layer that understands the learner's current state and continuously
                determines the most useful next learning action.
            </p>

        </div>
    `,

        techStack: [

            {
                category: "Frontend",
                tech: "Vite + React + TypeScript + Tailwind CSS + shadcn/ui"
            },

            {
                category: "Application State",
                tech: "React Hooks + Context API"
            },

            {
                category: "Backend Platform",
                tech: "Supabase"
            },

            {
                category: "Database",
                tech: "PostgreSQL"
            },

            {
                category: "Authentication",
                tech: "Supabase Authentication / OAuth / Email Authentication"
            },

            {
                category: "AI / Recommendation",
                tech: "Hybrid Recommendation System using Implicit ALS + Sentence-Transformer Embeddings + Ranking Signals"
            },

            {
                category: "Semantic Representation",
                tech: "Sentence-Transformers / all-MiniLM-L6-v2 embeddings"
            },

            {
                category: "Vector Search",
                tech: "FAISS / vector similarity infrastructure"
            },

            {
                category: "Recommendation Models",
                tech: "Collaborative Filtering + Content-Based Retrieval + Hybrid Re-Ranking"
            },

            {
                category: "ML Evaluation",
                tech: "Precision@K + Recall@K + NDCG@K + Coverage"
            },

            {
                category: "Data Pipeline",
                tech: "Supabase → Exported Interaction / Resource Data → ML Training & Evaluation → Recommendation Serving"
            },

            {
                category: "Deployment",
                tech: "Web application deployment with Supabase-backed services and serverless recommendation infrastructure"
            }
        ],

        architecture: `
        <div class="feat-detail-section">

            <h4>System Architecture & Logic</h4>

            <p>
                Skill-Metric follows a feedback-driven personalization architecture.
                The platform collects structured information about users, resources,
                skills, and learning interactions. That information feeds the
                recommendation layer, which ranks resources and returns personalized
                results to the application.
            </p>

            <pre>
User
  ↓
Profile + Goals + Skills
  ↓
Learning Activity
  ↓
Interaction Event System
  ↓
┌──────────────────────────────────────┐
│       Recommendation Engine          │
│                                      │
│  Collaborative Filtering (ALS)       │
│              +                       │
│  Semantic Content Embeddings         │
│              +                       │
│  Quality / Rating Signals             │
│              +                       │
│  Domain / Skill Matching              │
└──────────────────────────────────────┘
  ↓
Hybrid Ranking
  ↓
Personalized Resources
  ↓
User Interaction
  ↓
New Behavioral Data
  ↓
Continuous Recommendation Improvement
            </pre>

            <p>
                For a new learner, the system can rely more heavily on content
                understanding and profile information because collaborative
                interaction history may not yet exist.
            </p>

            <p>
                As the learner interacts with the platform, behavioral signals
                become available and collaborative filtering can contribute more
                strongly to personalization.
            </p>

            <p>
                The resulting architecture allows Skill-Metric to progressively
                transition from a static learning-resource platform into a
                data-driven personalized learning system.
            </p>

        </div>
    `,

        projectImpact: `
        <div class="feat-detail-section">

            <h4>Why This Project Matters</h4>

            <p>
                Skill-Metric focuses on a problem that becomes more important as
                the amount of online educational content continues to grow:
                choosing what to learn can become almost as difficult as learning
                the subject itself.
            </p>

            <p>
                The platform approaches this problem by combining personalized
                recommendation, structured learning paths, behavioral analytics,
                skill tracking, and community learning.
            </p>

            <p>
                Technically, the project also provides a foundation for studying
                real-world recommendation systems because the platform can collect
                actual user-resource interactions and use those interactions for
                model development, evaluation, and future personalization.
            </p>

        </div>
    `,

        futureRoadmap: [
            "Sequential learning model for predicting the next best skill or topic",
            "Dynamic roadmap adaptation based on learner progress",
            "Personalized home-feed ranking",
            "Personalized Explore recommendations",
            "Learning-session and dwell-time modeling",
            "Online recommendation evaluation and CTR analysis",
            "Learning-state modeling for individual users",
            "Advanced ranking / learning-to-rank models",
            "Skill dependency graph and next-skill prediction",
            "Improved cold-start personalization",
            "Continual improvement using real learner interaction data"
        ]
    },














    {
        id: "ml-flow-visual-machine-learning-engineering-platform",

        type: "AI/ML EdTech & Visual Engineering Platform",

        title: "ML Flow – Visual Machine Learning Engineering Platform",

        subtitle: "Learn, Design, Experiment & Build Machine Learning Systems Visually",

        badge: "In Active Development",

        status: "Alpha Prototype",

        liveUrl: "#",

        githubUrl: "https://github.com/suyash2356",

        coverImage: "featured projects/ml flow/logo.png",

        media: [
            {
                type: "image",
                url: "featured projects/ml flow/logo.png",
                caption: "ML Flow"
            },
            {
                type: "image",
                url: "featured projects/ml flow/Screenshot 2026-09-26 183606.png",
                caption: "ML Flow Dashboard – Personalized ML workspace, learning progress and professional community"
            },
            {
                type: "image",
                url: "featured projects/ml flow/Screenshot 2026-09-27 192129.png",
                caption: "Visual ML Workspace – Node-based environment for designing complete data and machine learning pipelines"
            },
            {
                type: "image",
                url: "featured projects/ml flow/Screenshot 2026-09-27 192305.png",
                caption: "Workspace"
            },
            {
                type: "image",
                url: "featured projects/ml flow/Screenshot 2026-09-27 192332.png",
                caption: "Dataset & Hub – Explore public datasets"
            },
            {
                type: "image",
                url: "featured projects/ml flow/Screenshot 2026-09-27 192354.png",
                caption: "Setting – Manage user privacy & different settings"
            }
        ],

        tags: [
            "Machine Learning",
            "Deep Learning",
            "Data Science",
            "Visual Programming",
            "No-Code ML",
            "EdTech",
            "AI Engineering",
            "Interactive Learning",
            "Data Visualization",
            "Python",
            "React",
            "Model Development"
        ],

        stats: [
            {
                label: "Core Learning Domains",
                value: "EDA + ML + DL"
            },
            {
                label: "Visual Workflow",
                value: "Node-Based Pipeline Builder"
            },
            {
                label: "ML Algorithms",
                value: "20+ Planned"
            },
            {
                label: "DL Components",
                value: "Layers + Architectures"
            },
            {
                label: "Primary Users",
                value: "Students → ML Professionals"
            }
        ],

        /*
        |--------------------------------------------------------------------------
        | 1. PRODUCT / USER EXPERIENCE
        |--------------------------------------------------------------------------
        */

        overview:
            "ML Flow is a visual machine learning engineering and learning platform designed to help students, beginners, developers, data scientists and ML professionals understand, experiment with and build machine learning systems without requiring them to write every component from scratch. Instead of separating education from implementation, ML Flow connects concepts directly to experimentation and real project development. Users can learn EDA, classical machine learning and deep learning concepts, understand why specific techniques are used, visually design workflows, experiment with models and parameters, evaluate results, and finally turn those experiments into complete reusable projects.",

        problem:
            "Traditional machine learning learning experiences are fragmented. Educational platforms explain algorithms but rarely provide a realistic engineering environment, while development tools provide powerful APIs but assume that users already understand what to use, why to use it and how different components affect a model. Beginners therefore struggle to move from theory to implementation, while experienced users often have to switch between notebooks, documentation, visualization tools and development environments. ML Flow aims to bridge this gap by combining learning, experimentation and visual engineering into one connected environment.",

        targetAudience: [
            "Students learning Data Science and Machine Learning",
            "Beginners building their first ML project",
            "Non-programmers who want to understand and experiment with ML",
            "Developers transitioning into Machine Learning",
            "Data Scientists prototyping models and workflows",
            "ML Engineers designing and comparing pipelines",
            "Researchers experimenting with model architectures",
            "Educators demonstrating ML concepts visually"
        ],

        highlights: [

            "Visual ML Engineering Workspace: Build complete data and machine learning pipelines through an interactive node-based canvas instead of manually connecting every step through code.",

            "Learn → Explore → Experiment → Build: Every major concept is connected to an interactive experience and eventually to the actual project workspace, allowing users to immediately apply what they learn.",

            "EDA Engineering Lab: Explore datasets through profiling, missing-value analysis, distributions, outliers, correlations, feature relationships and preprocessing techniques while learning why each operation matters.",

            "Machine Learning Lab: Explore classification, regression, clustering, dimensionality reduction and anomaly-detection algorithms while understanding their assumptions, strengths, limitations, hyperparameters and appropriate use cases.",

            "Deep Learning Architecture Lab: Visually understand neurons, layers, activations, tensor dimensions, forward propagation, backpropagation, optimization and complete neural-network architectures.",

            "Visual Model Design: Users can construct pipelines and neural-network architectures by connecting components and observing how data, features, tensors and model outputs move through the system.",

            "Engineering Decision Guidance: Instead of simply recommending an algorithm, ML Flow explains why an approach may be appropriate, what assumptions it makes, what can go wrong and what should be monitored.",

            "Interactive Experimentation: Users can change preprocessing techniques, algorithms, hyperparameters and architecture components and observe their effects on metrics, visualizations and model behavior.",

            "Model Evaluation & Diagnostics: Provide visual tools for confusion matrices, precision, recall, F1, ROC-AUC, regression metrics, residual analysis, feature importance, overfitting, underfitting and error analysis.",

            "Project-Based Learning: Users learn through realistic projects rather than isolated algorithm demonstrations. Templates and blueprints provide starting points for common ML and DL problems.",

            "Reusable Project Workspaces: Projects preserve datasets, pipelines, nodes, configurations, experiments and results so users can continue developing their work over time.",

            "Dataset Hub: Centralized dataset management allows users to upload, organize, inspect and reuse datasets across multiple projects.",

            "ML Community: A specialized professional community allows users to discuss concepts, ask technical questions, share resources, showcase projects and publish experiments.",

            "Show Your Flow: Users can share visual ML pipelines with the community so others can understand, reuse and extend complete workflows rather than only viewing screenshots or code snippets.",

            "Learning Progress: The platform tracks concepts explored, learning progress, project milestones and recommended next steps to create a continuous learning journey.",

            "Beginner-to-Expert Experience: The same platform progressively supports guided beginner workflows, advanced experimentation and professional engineering workflows without forcing users to switch tools.",

            "Visual Understanding of Model Architecture: ML Flow focuses not only on what model to use, but on how models are constructed, why individual components exist and how changes affect the final system."
        ],

        userExperienceFlow: [
            "Discover a concept through the EDA, ML or DL learning environment.",
            "Understand the underlying intuition, engineering purpose, assumptions and common mistakes.",
            "Open an interactive visualization or experiment to observe the concept in action.",
            "Modify parameters and compare different approaches.",
            "Add the selected component directly into a project.",
            "Connect it with datasets, preprocessing steps, models and evaluation nodes inside the visual workspace.",
            "Run the workflow and inspect metrics, visualizations and model behavior.",
            "Iterate on the design based on observed results.",
            "Save the complete project for future experimentation.",
            "Share the project or visual pipeline with the ML Flow community."
        ],

        learningPhilosophy:
            "ML Flow follows an engineering-first learning philosophy. Instead of teaching machine learning as a collection of algorithms to memorize, the platform teaches users how engineers actually reason about ML systems: define the problem, understand the data, select an appropriate approach, design the pipeline, train a baseline, evaluate the results, diagnose failures, improve the system and understand the trade-offs behind each decision.",

        coreModules: [

            {
                name: "Dashboard",
                purpose: "Personal ML command center and professional community",
                capabilities: [
                    "Recent activity",
                    "Project progress",
                    "Learning progress",
                    "Community discussions",
                    "Project showcases",
                    "Experiment sharing",
                    "Technical questions",
                    "Resource sharing",
                    "Global ML networking"
                ]
            },

            {
                name: "EDA Lab",
                purpose: "Understand and prepare datasets visually",
                capabilities: [
                    "Dataset profiling",
                    "Data-quality analysis",
                    "Missing-value analysis",
                    "Distribution analysis",
                    "Outlier detection",
                    "Correlation analysis",
                    "Feature relationships",
                    "Feature engineering",
                    "Interactive visualization"
                ]
            },

            {
                name: "Machine Learning Lab",
                purpose: "Understand, compare and engineer classical ML models",
                capabilities: [
                    "Algorithm explorer",
                    "Classification",
                    "Regression",
                    "Clustering",
                    "Dimensionality reduction",
                    "Anomaly detection",
                    "Hyperparameter exploration",
                    "Cross-validation",
                    "Model comparison",
                    "Evaluation and diagnostics"
                ]
            },

            {
                name: "Deep Learning Lab",
                purpose: "Understand and visually design neural-network architectures",
                capabilities: [
                    "Tensor fundamentals",
                    "Layer exploration",
                    "Activation functions",
                    "CNN architecture",
                    "MLP architecture",
                    "Sequence models",
                    "Attention",
                    "Transformers",
                    "Tensor-shape visualization",
                    "Architecture experimentation"
                ]
            },

            {
                name: "Visual Workspace",
                purpose: "Build complete ML and DL workflows",
                capabilities: [
                    "Infinite visual canvas",
                    "Node-based pipeline construction",
                    "Drag-and-drop components",
                    "Data connections",
                    "Model configuration",
                    "Parameter editing",
                    "Pipeline execution",
                    "Experiment management",
                    "Result inspection"
                ]
            },

            {
                name: "Projects",
                purpose: "Organize and manage complete ML workflows",
                capabilities: [
                    "Project creation",
                    "Project templates",
                    "Project status",
                    "Versioned experimentation",
                    "Pipeline management",
                    "Dataset association",
                    "Model association",
                    "Project sharing"
                ]
            },

            {
                name: "Datasets",
                purpose: "Centralized data management",
                capabilities: [
                    "Dataset upload",
                    "Dataset organization",
                    "Metadata",
                    "Data preview",
                    "Dataset statistics",
                    "Project association",
                    "Reusable datasets"
                ]
            }
        ],

        /*
        |--------------------------------------------------------------------------
        | 2. TECHNICAL / ENGINEERING APPROACH
        |--------------------------------------------------------------------------
        */

        technicalOverview:
            "ML Flow is designed as a modular visual computing platform where the user interface represents machine learning workflows as structured graphs while a dedicated execution layer translates those graphs into executable data-processing and ML operations. The architecture separates presentation, workflow definition, execution, visualization and persistent project state so that the visual interface can evolve independently from the underlying ML engines.",

        architecture: `
        <div class="feat-detail-section">

            <h4>System Architecture & Technical Approach</h4>

            <p>
                ML Flow uses a layered architecture that separates the visual application,
                workflow orchestration, machine-learning execution and persistent project state.
                This allows users to construct workflows visually while the underlying system
                executes the corresponding operations through specialized ML and data-processing
                engines.
            </p>

            <div class="architecture-flow">

                <div class="architecture-layer">
                    <strong>1. Presentation Layer</strong>
                    <p>
                        React-based application responsible for navigation, dashboards,
                        learning experiences, interactive visualizations, project management
                        and the visual workflow workspace.
                    </p>
                </div>

                <div class="architecture-layer">
                    <strong>2. Visual Workflow Layer</strong>
                    <p>
                        The workspace represents pipelines as directed graphs. Each node
                        represents an operation such as dataset loading, preprocessing,
                        feature engineering, model training or evaluation, while edges
                        represent data or control flow.
                    </p>
                </div>

                <div class="architecture-layer">
                    <strong>3. Workflow Definition Layer</strong>
                    <p>
                        Every visual project is represented as structured workflow metadata
                        containing nodes, connections, configurations, datasets, model
                        parameters and execution settings. This makes workflows serializable,
                        reusable and suitable for future versioning.
                    </p>
                </div>

                <div class="architecture-layer">
                    <strong>4. Execution Layer</strong>
                    <p>
                        The workflow definition is translated into executable operations.
                        Python-based data science and machine-learning engines perform
                        preprocessing, model training, evaluation and deep-learning workloads.
                    </p>
                </div>

                <div class="architecture-layer">
                    <strong>5. Experimentation Layer</strong>
                    <p>
                        Training configurations, metrics, predictions, visualizations and
                        experiment results are captured so users can compare different
                        approaches and understand how engineering decisions affect performance.
                    </p>
                </div>

                <div class="architecture-layer">
                    <strong>6. Persistence Layer</strong>
                    <p>
                        Projects, datasets, workflow definitions, user preferences, learning
                        progress and experiment metadata are stored separately from execution
                        artifacts, allowing the application to restore and continue complex
                        projects.
                    </p>
                </div>

            </div>

            <h4>Visual Pipeline Execution Model</h4>

            <p>
                A user may construct a workflow such as Dataset → Cleaning → Feature
                Engineering → Train/Test Split → Model → Evaluation. The frontend stores
                this as a graph definition. The execution service validates dependencies,
                resolves node configurations, executes operations in the correct order and
                returns structured outputs such as transformed datasets, trained models,
                metrics and visualizations.
            </p>

            <h4>Learning-to-Execution Connection</h4>

            <p>
                Educational concepts are designed to connect directly with executable
                components. For example, after learning Random Forest, a user can open an
                interactive experiment, modify parameters, observe model behavior and then
                add the Random Forest component directly to a project. This creates a
                continuous connection between educational content and real engineering work.
            </p>

            <h4>Engineering Decision Layer</h4>

            <p>
                ML Flow is designed to provide contextual explanations around model and
                pipeline decisions. Instead of only displaying an algorithm name, the system
                can associate each component with its intended use cases, assumptions,
                parameters, limitations, computational characteristics, common failure modes
                and evaluation considerations.
            </p>

            <h4>Deep Learning Shape Propagation</h4>

            <p>
                Deep-learning workflows maintain tensor-shape metadata between layers.
                When a user changes a layer, kernel, stride, padding, pooling operation or
                number of filters, the system can calculate and display the resulting tensor
                dimensions. This makes neural-network architecture design visually
                understandable rather than treating layers as opaque blocks.
            </p>

            <h4>Experiment Comparison</h4>

            <p>
                Multiple executions of the same project can be treated as experiments.
                Configurations and results can be compared across models, preprocessing
                strategies and hyperparameters, allowing users to understand not only which
                configuration performed better but also how the engineering changes affected
                the result.
            </p>

        </div>
    `,

        techStack: [

            {
                category: "Frontend",
                tech: "React + TypeScript, component-based UI architecture, responsive layouts and reusable design-system components"
            },

            {
                category: "Visual Workflow Engine",
                tech: "React Flow or equivalent graph/canvas framework for node-based ML pipelines, connections, zooming, panning and interactive workflow editing"
            },

            {
                category: "Data Visualization",
                tech: "D3.js / Recharts / Plotly-style visualization layer for distributions, correlations, model metrics, learning curves, confusion matrices and interactive analytical charts"
            },

            {
                category: "ML Execution",
                tech: "Python-based execution services using Pandas, NumPy, SciPy and Scikit-Learn for classical machine-learning and statistical workflows"
            },

            {
                category: "Deep Learning",
                tech: "PyTorch-based execution layer for neural-network construction, tensor operations, training, evaluation and architecture experimentation"
            },

            {
                category: "Data Processing",
                tech: "Pandas, NumPy and optimized dataframe/query tooling for dataset profiling, transformations, feature engineering and analytical workloads"
            },

            {
                category: "Backend API",
                tech: "Python FastAPI-style service layer for project management, workflow execution, dataset operations, ML execution requests and structured result delivery"
            },

            {
                category: "Workflow Orchestration",
                tech: "Directed acyclic graph execution model with dependency validation, node configuration resolution, execution ordering and structured node outputs"
            },

            {
                category: "Database",
                tech: "PostgreSQL for users, projects, datasets, workflow definitions, learning progress, community content and experiment metadata"
            },

            {
                category: "Caching & Real-Time State",
                tech: "Redis for caching, temporary execution state, job coordination and future real-time collaboration capabilities"
            },

            {
                category: "File & Dataset Storage",
                tech: "Object/file storage architecture for datasets, generated artifacts, model files, visualizations and project outputs"
            },

            {
                category: "Model Serialization",
                tech: "Structured model and workflow serialization with framework-specific model artifacts and portable project metadata"
            },

            {
                category: "Authentication",
                tech: "Token/session-based authentication architecture with user, project and resource-level authorization"
            },

            {
                category: "Real-Time Communication",
                tech: "WebSocket/event-driven communication for execution progress, training status, live experiment updates and future collaborative workspace features"
            },

            {
                category: "Deployment",
                tech: "Containerized frontend, API and ML execution services designed for independent scaling and reproducible environments"
            },

            {
                category: "Development",
                tech: "TypeScript + Python development workflow with modular components, API contracts, reusable ML operators and testable execution services"
            }
        ],

        technicalPrinciples: [

            "Separation of UI and ML execution: The frontend should never be responsible for heavy model training or data processing.",

            "Workflow-as-data: Every visual pipeline should be representable as a structured, serializable graph rather than being hardcoded into UI state.",

            "Reusable operators: Dataset operations, preprocessing techniques, ML algorithms, evaluation functions and DL layers should be implemented as reusable components.",

            "Deterministic execution: The same workflow configuration and dataset should produce reproducible execution metadata whenever the underlying algorithm permits deterministic behavior.",

            "Progressive complexity: Beginner users receive guided configuration while advanced users can expose deeper parameters and technical controls.",

            "Explainability by design: Every major ML component should provide context about its purpose, assumptions, parameters, limitations and expected behavior.",

            "Experiment-first architecture: Model configurations and execution results should be preserved so different experiments can be compared instead of overwritten.",

            "Modular execution: EDA, classical ML and deep learning engines should remain independently extensible so additional algorithms and frameworks can be introduced later.",

            "Project portability: Projects should be represented using structured metadata so workflows can eventually be exported, duplicated, shared and reopened.",

            "UI and execution independence: The visual editor should remain responsive even when long-running ML or DL jobs are executing."
        ],

        futureCapabilities: [

            "Automated model recommendations based on dataset characteristics",

            "AI-assisted pipeline generation",

            "Natural-language-to-pipeline creation",

            "Automatic experiment comparison",

            "Explainable model diagnostics",

            "AutoML-assisted baseline generation",

            "Collaborative real-time project editing",

            "Community-shared reusable workflows",

            "Dataset discovery and recommendation",

            "Model and experiment versioning",

            "Cloud-based distributed training",

            "GPU-backed deep-learning execution",

            "Deployment pipeline generation",

            "Model monitoring and drift analysis",

            "Research-paper-to-experiment workflows",

            "AI engineering assistant for debugging ML pipelines"
        ],

        differentiator:
            "The core differentiator of ML Flow is the connection between learning and engineering. Most learning platforms explain machine learning without providing a realistic environment for building systems, while most ML development tools provide powerful building blocks without teaching users how and why those blocks should be combined. ML Flow brings these two experiences together: users can learn a concept, visually understand it, experiment with it, apply it to a real project and share the resulting workflow with the community—all inside the same environment.",

        vision:
            "ML Flow aims to become a complete visual engineering environment for learning and building machine-learning systems. The long-term goal is not simply to remove code from ML development, but to make the underlying engineering process easier to understand, inspect, experiment with and communicate. A beginner should be able to build their first meaningful model without feeling overwhelmed, while an experienced ML practitioner should still have enough control, transparency and extensibility to design sophisticated workflows."
    }
];

// Combines separated project datasets (EDA, ML, DL) into unified myProjects array
const myProjects = [
    ...(typeof edaProjects !== 'undefined' ? edaProjects : []),
    ...(typeof mlProjects !== 'undefined' ? mlProjects : []),
    ...(typeof dlProjects !== 'undefined' ? dlProjects : [])
];
