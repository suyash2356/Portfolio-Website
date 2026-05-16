// projectsData.js
// This file holds all your project information with advanced metadata for filtering.

const myProjects = [
    {
        id: "ecommerce-eda",
        category: "eda", 
        title: "E-Commerce Sales Insights (EDA)",
        date: "2024-02-15", // Used for the contribution heatmap
        topic: "E-Commerce",
        algorithms: ["Statistical Analysis"],
        datasetSize: "50k+ records",
        images: [
            "eda_project.png" 
        ],
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
        summary: "A deep dive into customer purchasing behavior to uncover revenue-driving trends and seasonal patterns.",
        detailedReport: `
            <h4 class="report-subtitle">Dataset Overview</h4>
            <p>Analyzed 50,000+ transaction records containing customer demographics, product categories, and order timestamps over a 2-year period.</p>
            
            <h4 class="report-subtitle">Key Insights Extracted</h4>
            <ul class="report-list">
                <li><strong>Seasonality:</strong> Sales peak by 45% during the holiday season (Nov-Dec), primarily driven by electronics and apparel.</li>
                <li><strong>Customer Segmentation:</strong> 20% of top customers contribute to 65% of total revenue.</li>
                <li><strong>Cart Abandonment:</strong> Higher shipping costs directly correlate with a 30% drop-off rate in the final checkout step.</li>
            </ul>

            <h4 class="report-subtitle">Conclusions Drawn</h4>
            <p>The business should implement targeted marketing for the top 20% tier and consider threshold-based free shipping to reduce cart abandonment.</p>
        `,
        githubLink: "https://github.com/suyash2356/EDA-Project"
    },
    {
        id: "customer-churn-ml",
        category: "ml",
        title: "Customer Churn Prediction (ML)",
        date: "2024-04-10",
        topic: "Telecom",
        algorithms: ["XGBoost", "Random Forest", "Logistic Regression"],
        datasetSize: "10k+ records",
        images: [
            "ml_project.png"
        ],
        tags: ["Python", "Scikit-Learn", "XGBoost", "Imbalanced-Learn"],
        summary: "Predictive modeling to identify at-risk customers in a telecom dataset before they cancel their subscriptions.",
        detailedReport: `
            <h4 class="report-subtitle">Data Insights & Preprocessing</h4>
            <p>The dataset contained significant class imbalance (only 18% churned). Applied SMOTE to oversample the minority class and prevent model bias towards the majority class. Monthly charges and tenure were heavily correlated with churn.</p>

            <h4 class="report-subtitle">Model Selection & Rationale</h4>
            <p>Started with Logistic Regression as a baseline. Evaluated Random Forest and XGBoost. Chose <strong>XGBoost</strong> due to its superior handling of non-linear relationships and built-in regularization, which prevented overfitting on this structured dataset.</p>
            
            <h4 class="report-subtitle">Performance Metrics</h4>
            <ul class="report-list">
                <li><strong>Accuracy:</strong> 86.5%</li>
                <li><strong>Precision:</strong> 79.2% (Minimizing false positives for costly retention offers)</li>
                <li><strong>Recall:</strong> 82.1% (Crucial for identifying true churners)</li>
                <li><strong>F1-Score:</strong> 80.6%</li>
                <li><strong>AUC-ROC:</strong> 0.91</li>
            </ul>
        `,
        githubLink: "#"
    },
    {
        id: "dl-project-template",
        category: "dl",
        title: "Image Classification API (DL)",
        date: "2024-05-01",
        topic: "Healthcare",
        algorithms: ["CNN", "ResNet50"],
        datasetSize: "5GB Image Data",
        images: [
            "your_dl_image.png"
        ],
        tags: ["Python", "TensorFlow", "Keras"],
        summary: "Your Deep Learning project summary goes here.",
        detailedReport: `
            <h4 class="report-subtitle">Dataset Overview</h4>
            <p>Describe your dataset and preprocessing steps here.</p>
            
            <h4 class="report-subtitle">Model Architecture</h4>
            <p>Describe your Neural Network architecture (e.g. CNN, RNN) here.</p>
            
            <h4 class="report-subtitle">Results</h4>
            <ul class="report-list">
                <li><strong>Accuracy:</strong> 95%</li>
                <li><strong>Loss:</strong> 0.05</li>
            </ul>
        `,
        githubLink: "#"
    }
];
