// projectsData.js
// This file holds all your project information with advanced metadata for filtering.

const myProjects = [
    {
        id: "ai-companies-eda",
        category: "eda",
        title: "AI Companies & Model Performance Analysis",
        date: "2025-01-12",
        topic: "Artificial Intelligence",
        algorithms: ["Statistical Analysis", "Trend Analysis"],
        datasetSize: "150+ AI models",
        images: [
            "E:\Portfolio\SuyashBabad\eda\ai companies 2.png"
        ],
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
        summary: "An exploratory analysis of AI companies and their models to uncover trends in model performance, popularity of AI domains, and technological progress over time.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The dataset contains information about 100 AI companies and 150 AI models, including model type, development year, and performance metrics such as accuracy and F1-score.</p>

        <h4 class="report-subtitle">Analysis Performed</h4>
        <ul class="report-list">
            <li>Cleaned the dataset by removing duplicate entries and handling missing values.</li>
            <li>Performed exploratory data analysis (EDA) to study the distribution of AI model types.</li>
            <li>Created bar charts and scatter plots to visualize performance trends over time.</li>
            <li>Calculated average performance metrics for each AI model category.</li>
        </ul>

        <h4 class="report-subtitle">Key Insights Extracted</h4>
        <ul class="report-list">
            <li><strong>NLP Dominance:</strong> Natural Language Processing (NLP) emerged as the most common AI model category, followed by Computer Vision.</li>
            <li><strong>Performance Growth:</strong> NLP models showed a strong increase in accuracy and F1-score over the years.</li>
            <li><strong>Computer Vision Trends:</strong> Computer Vision models improved steadily, though at a slower pace than NLP systems.</li>
            <li><strong>Top Performing Companies:</strong> Companies like OpenAI, Google, and Anthropic consistently developed high-performing models.</li>
            <li><strong>Innovation Impact:</strong> A positive correlation was observed between development year and model performance, indicating newer models perform better.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The analysis highlights the rapid growth of NLP technologies and the importance of continuous innovation in AI development. Companies consistently producing high-performing models are likely to maintain a competitive advantage in the AI industry.</p>
    `,
        githubLink: "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(AI%20Companies%20and%20there%20models).ipynb"
    },


    {
        id: "heart-stroke-analysis",
        category: "eda",
        title: "Heart Stroke Risk Analysis",
        date: "2025-01-18",
        topic: "Healthcare",
        algorithms: ["Statistical Analysis", "Correlation Analysis"],
        datasetSize: "5000+ records",
        images: [
            "E:\Portfolio\SuyashBabad\eda\heart stroke.png"
        ],
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Healthcare"],
        summary: "A healthcare data analysis project focused on identifying major risk factors associated with stroke occurrence using demographic and medical attributes.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The dataset contains 5,110 healthcare records with 12 features including age, hypertension, heart disease, BMI, glucose level, smoking status, and stroke occurrence.</p>

        <h4 class="report-subtitle">Analysis Performed</h4>
        <ul class="report-list">
            <li>Removed duplicate records and handled missing values using statistical imputation techniques.</li>
            <li>Conducted exploratory data analysis (EDA) to study relationships between medical factors and stroke occurrence.</li>
            <li>Used histograms, box plots, and correlation heatmaps for visualization and pattern discovery.</li>
        </ul>

        <h4 class="report-subtitle">Key Insights Extracted</h4>
        <ul class="report-list">
            <li><strong>Age Factor:</strong> Older individuals were found to have a significantly higher stroke risk.</li>
            <li><strong>Medical Conditions:</strong> Hypertension and heart disease showed strong correlation with stroke occurrence.</li>
            <li><strong>Lifestyle Impact:</strong> Smoking status and glucose levels also contributed to increased stroke risk.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The analysis identified age, hypertension, heart disease, smoking habits, and glucose levels as key indicators of stroke risk. These insights can support preventive healthcare strategies and future predictive modeling applications.</p>
    `,
        githubLink: "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(Heart%20Stroke%20Rate).ipynb"
    },


    {
        id: "house-price-analysis",
        category: "eda",
        title: "House Price Analysis & Visualization",
        date: "2025-01-22",
        topic: "Real Estate",
        algorithms: ["Statistical Analysis"],
        datasetSize: "1000 house listings",
        images: [
            "E:\Portfolio\SuyashBabad\eda\house price.png"
        ],
        tags: ["Python", "Pandas", "Matplotlib", "EDA", "Visualization"],
        summary: "An exploratory analysis of housing market data to identify how area, location, and furnishing type influence property prices.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The dataset contains information about house prices, including carpet area, super area, furnishing type, and location details for 1,000 property listings.</p>

        <h4 class="report-subtitle">Analysis Performed</h4>
        <ul class="report-list">
            <li>Loaded and cleaned the dataset from an Excel source.</li>
            <li>Processed area-related columns by extracting numeric values and converting them into integer format.</li>
            <li>Handled missing values and standardized column names for consistency.</li>
        </ul>

        <h4 class="report-subtitle">Key Insights Extracted</h4>
        <ul class="report-list">
            <li><strong>Area vs Price:</strong> Larger carpet and super areas generally correspond to higher property prices.</li>
            <li><strong>Location Impact:</strong> Different locations showed significant variation in price ranges.</li>
            <li><strong>Furnishing Influence:</strong> Furnished properties tended to have higher average prices compared to unfurnished homes.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The analysis demonstrates that property size, location, and furnishing type are major contributors to house pricing. These insights can help buyers, sellers, and real estate analysts better understand market behavior.</p>
    `,
        githubLink: "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(House%20Pricing%20and%20Analysis).ipynb"
    },


    {
        id: "cricket-performance-analysis",
        category: "eda",
        title: "Cricket Player Performance Analysis",
        date: "2025-02-02",
        topic: "Sports Analytics",
        algorithms: ["Statistical Analysis", "Performance Analysis"],
        datasetSize: "1000 player records",
        images: [
            "E:\Portfolio\SuyashBabad\eda\ipl players 2.png"
        ],
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Sports Analytics"],
        summary: "A sports analytics project analyzing cricket player performance metrics such as runs, wickets, batting average, and strike rate.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The dataset contains performance statistics of cricket players including runs scored, wickets taken, batting average, and strike rate across 1,000 records.</p>

        <h4 class="report-subtitle">Analysis Performed</h4>
        <ul class="report-list">
            <li>Performed data cleaning and handled missing values.</li>
            <li>Created histograms, box plots, scatter plots, bar charts, and pair plots for performance analysis.</li>
            <li>Analyzed relationships between batting and bowling performance metrics.</li>
        </ul>

        <h4 class="report-subtitle">Key Insights Extracted</h4>
        <ul class="report-list">
            <li><strong>Runs Distribution:</strong> Runs scored followed a right-skewed distribution where few players scored exceptionally high.</li>
            <li><strong>Wicket Outliers:</strong> Certain players showed significantly higher wicket counts compared to others.</li>
            <li><strong>Strike Rate Correlation:</strong> Players scoring more runs generally maintained higher strike rates.</li>
            <li><strong>Top Performers:</strong> The analysis identified the highest run-scorers and best overall performers.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The project provided valuable insights into player consistency, batting efficiency, and overall cricket performance trends, helping support sports analytics and selection strategies.</p>
    `,
        githubLink: "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(IPL%20Players%20Performance%20Analysis).ipynb"
    },


    {
        id: "india-rape-case-analysis",
        category: "eda",
        title: "India Rape Case Data Analysis",
        date: "2025-02-10",
        topic: "Social Analytics",
        algorithms: ["Statistical Analysis", "Trend Analysis"],
        datasetSize: "16k+ reported cases",
        images: [
            "E:\Portfolio\SuyashBabad\eda\india rape cases.png"
        ],
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis"],
        summary: "A social data analysis project exploring demographic and geographic trends in reported rape cases across different states in India.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The dataset contains approximately 16,000 reported rape cases across multiple Indian states, including demographic and regional information about victims.</p>

        <h4 class="report-subtitle">Analysis Performed</h4>
        <ul class="report-list">
            <li>Analyzed victim demographics and age-group distribution.</li>
            <li>Studied state-wise trends and geographic concentration of reported cases.</li>
            <li>Identified patterns related to vulnerable age groups and special case categories.</li>
        </ul>

        <h4 class="report-subtitle">Key Insights Extracted</h4>
        <ul class="report-list">
            <li><strong>High-Risk Age Group:</strong> Women aged 18–30 represented nearly 50% of reported cases.</li>
            <li><strong>Teenage Vulnerability:</strong> Victims aged 14–18 accounted for approximately 25% of cases.</li>
            <li><strong>State-Wise Concentration:</strong> Madhya Pradesh, Uttar Pradesh, and Maharashtra recorded the highest case counts.</li>
            <li><strong>Incest Cases:</strong> Madhya Pradesh showed a comparatively higher number of reported incest rape cases.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The analysis highlights concerning national trends in sexual violence and emphasizes the need for stronger preventive measures, awareness programs, and victim support systems across vulnerable demographics and high-risk regions.</p>
    `,
        githubLink: "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(Rape%20case%20in%20India).ipynb"
    },


    {
        id: "retail-sales-analysis",
        category: "eda",
        title: "Retail Store Sales Analysis (2020)",
        date: "2025-02-18",
        topic: "Retail Analytics",
        algorithms: ["Statistical Analysis", "Trend Analysis"],
        datasetSize: "1000 transactions",
        images: [
            "E:\Portfolio\SuyashBabad\eda\tel customer churn.png"
        ],
        tags: ["Python", "Pandas", "Matplotlib", "EDA", "Business Analytics"],
        summary: "A retail analytics project analyzing product sales, category performance, and seasonal trends in customer purchasing behavior during 2020.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The dataset contains 1,000 retail store transactions from January 2020 to December 2020, including product, category, quantity sold, and total sales information.</p>

        <h4 class="report-subtitle">Analysis Performed</h4>
        <ul class="report-list">
            <li>Cleaned the dataset by removing duplicates and handling missing values.</li>
            <li>Performed EDA to understand category-wise and product-wise sales distribution.</li>
            <li>Created bar charts and line graphs to visualize monthly and seasonal sales trends.</li>
            <li>Calculated total sales metrics for products and categories.</li>
        </ul>

        <h4 class="report-subtitle">Key Insights Extracted</h4>
        <ul class="report-list">
            <li><strong>Top Product:</strong> Product A generated the highest overall sales revenue.</li>
            <li><strong>Best Category:</strong> Electronics emerged as the highest-selling category.</li>
            <li><strong>Seasonal Trend:</strong> Sales increased significantly during November and December due to holiday demand.</li>
            <li><strong>Transaction Metrics:</strong> Average quantity sold per transaction was 3 items with an average sale value of $150.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The analysis revealed strong seasonal purchasing behavior and identified high-performing products and categories. These insights can support inventory planning, marketing strategies, and sales optimization in retail businesses.</p>
    `,
        githubLink: "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(Tel%20Customer%20churn).ipynb"
    },


    {
        id: "titanic-data-analysis",
        category: "eda",
        title: "Titanic Survival Data Analysis",
        date: "2025-02-25",
        topic: "Historical Data Analysis",
        algorithms: ["Statistical Analysis", "Correlation Analysis"],
        datasetSize: "891 passenger records",
        images: [
            "E:\Portfolio\SuyashBabad\eda\titanic survival.png"
        ],
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
        summary: "An exploratory analysis of Titanic passenger data to identify demographic and socioeconomic factors influencing survival rates.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The Titanic dataset contains information about 891 passengers, including age, gender, passenger class, fare, and survival status.</p>

        <h4 class="report-subtitle">Analysis Performed</h4>
        <ul class="report-list">
            <li>Conducted data inspection and preprocessing.</li>
            <li>Handled missing values and removed duplicate entries.</li>
            <li>Created visualizations to analyze survival patterns across age, gender, and passenger classes.</li>
        </ul>

        <h4 class="report-subtitle">Key Insights Extracted</h4>
        <ul class="report-list">
            <li><strong>Age Distribution:</strong> Most passengers were in their 20s and 30s.</li>
            <li><strong>Fare Relationship:</strong> Older passengers generally paid higher fares.</li>
            <li><strong>Gender Impact:</strong> Women and children had significantly higher survival rates.</li>
            <li><strong>Class Difference:</strong> Third-class male passengers experienced the highest mortality rates.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The analysis demonstrates that demographic and socioeconomic factors strongly influenced survival outcomes during the Titanic disaster. Passenger class, gender, and age were among the most significant determinants of survival probability.</p>
    `,
        githubLink: "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(Titanic%20Survival%20Analysis).ipynb"
    },

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
