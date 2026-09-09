// projectsData.js
// This file holds all your project information with advanced metadata for filtering.

const myProjects = [
    {
        id: "sentinel2-crop-classification-eda",
        category: "eda",
        title: "Sentinel-2 Crop Classification Dataset Analysis",
        date: "2025-06-10",
        topic: "Remote Sensing",
        algorithms: ["Statistical Analysis", "Principal Component Analysis (PCA)"],
        datasetSize: "122k+ samples, 585 features",
        images: [
            "eda/brizecrop eda.png"
        ],
        tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA", "Remote Sensing", "Sentinel-2"],
        summary: "A comprehensive exploratory data analysis of a large-scale Sentinel-2 satellite dataset to understand crop distributions, spectral signatures, temporal trends, and feature relationships before machine learning model development.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The dataset contains <strong>122,614 satellite observations</strong> with <strong>585 features</strong> representing 45 observation timestamps across 13 Sentinel-2 spectral bands. The objective is multiclass crop classification across nine crop categories using multi-temporal remote sensing data.</p>

        <h4 class="report-subtitle">Data Quality Assessment</h4>
        <ul class="report-list">
            <li><strong>Missing Values:</strong> None detected.</li>
            <li><strong>Duplicate Records:</strong> None detected.</li>
            <li><strong>Data Type:</strong> float32</li>
            <li><strong>Memory Usage:</strong> Approximately 273.6 MB.</li>
            <li>The dataset required no additional cleaning and was ready for model development.</li>
        </ul>

        <h4 class="report-subtitle">Exploratory Data Analysis</h4>
        <ul class="report-list">
            <li>Analyzed feature statistics and value distributions across all Sentinel-2 bands.</li>
            <li>Studied class distribution and identified severe class imbalance.</li>
            <li>Examined spectral reflectance across all 13 satellite bands.</li>
            <li>Investigated temporal changes over 45 observation dates.</li>
            <li>Performed correlation analysis to understand temporal feature relationships.</li>
            <li>Applied Principal Component Analysis (PCA) for low-dimensional visualization.</li>
            <li>Analyzed feature variance and outlier behavior.</li>
            <li>Compared spectral signatures among crop classes.</li>
        </ul>

        <h4 class="report-subtitle">Key Insights Extracted</h4>
        <ul class="report-list">
            <li><strong>Class Imbalance:</strong> Classes 3, 7, and 8 dominate the dataset, whereas classes 4, 5, and 6 contain very few samples, presenting a significant classification challenge.</li>
            <li><strong>Spectral Information:</strong> Different Sentinel-2 bands capture distinct vegetation, soil, and moisture characteristics, indicating varying predictive importance across bands.</li>
            <li><strong>Temporal Dynamics:</strong> Reflectance values change noticeably across the 45 observation dates, successfully capturing seasonal crop growth patterns.</li>
            <li><strong>Stable Feature Distribution:</strong> Most features exhibit consistent distributions with only a small number of genuine satellite outliers.</li>
            <li><strong>Feature Correlation:</strong> Measurements from nearby observation dates show stronger correlations than distant timestamps, demonstrating meaningful temporal evolution.</li>
            <li><strong>PCA Analysis:</strong> Considerable overlap between crop classes indicates that simple linear separation is insufficient and machine learning models are required.</li>
            <li><strong>Spectral Signatures:</strong> Individual crop types display distinct temporal spectral responses, providing strong discriminative information for classification.</li>
        </ul>

        <h4 class="report-subtitle">Conclusions Drawn</h4>
        <p>The exploratory analysis confirms that the Sentinel-2 dataset is clean, information-rich, and highly suitable for crop classification tasks. Multi-temporal satellite observations combined with multiple spectral bands provide valuable information describing crop growth throughout the season. Although the dataset presents a significant class imbalance challenge, the observed temporal patterns and unique spectral signatures suggest that tree-based machine learning models such as Random Forest can effectively learn meaningful crop classification patterns from the available features.</p>
    `,
        githubLink: "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(BreizhCrops%20Data).ipynb"
    },
    {
        id: "us-accidents-eda",
        category: "eda",
        title: "US Accidents Exploratory Data Analysis",
        date: "2026-05-21",
        topic: "Road Safety & Traffic Analysis",
        algorithms: [
            "Exploratory Data Analysis",
            "Statistical Analysis",
            "Correlation Analysis",
            "Trend Analysis"
        ],
        datasetSize: "7,728,394 accident records",
        images: [
            "eda/us accidents.jpeg"
        ],
        tags: [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "EDA",
            "Data Cleaning",
            "Feature Engineering"
        ],
        summary: "Performed a complete exploratory data analysis on a large-scale US Accidents dataset to identify accident hotspots, weather impacts, traffic patterns, severity factors, and time-based accident trends using statistical analysis and visual storytelling.",

        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The dataset contains over 7.7 million US accident records with information related to weather conditions, traffic infrastructure, location, time, visibility, and accident severity.</p>

        <h4 class="report-subtitle">Analysis Performed</h4>
        <ul class="report-list">
            <li>Performed data cleaning by handling missing values, duplicate records, datatype corrections, and outlier treatment.</li>
            <li>Conducted univariate, bivariate, and multivariate analysis to understand accident trends and feature relationships.</li>
            <li>Created visualizations for accident hotspots, weather conditions, severity distribution, traffic patterns, and time-based trends.</li>
            <li>Performed correlation analysis on weather-related numerical features.</li>
            <li>Applied feature engineering on datetime and weather-related features for improved analysis.</li>
        </ul>

        <h4 class="report-subtitle">Key Insights Extracted</h4>
        <ul class="report-list">
            <li><strong>Accident Hotspots:</strong> California recorded the highest number of accidents, followed by Florida and Texas.</li>
            <li><strong>Rush Hour Impact:</strong> Accident frequency peaked during morning and evening office rush hours.</li>
            <li><strong>Weather Influence:</strong> Most accidents occurred during fair and cloudy weather conditions.</li>
            <li><strong>Road Infrastructure:</strong> Traffic signals and crossings were the most common road features involved in accidents.</li>
            <li><strong>Seasonal Trends:</strong> Winter months showed increased accident occurrences compared to summer months.</li>
            <li><strong>Severity Analysis:</strong> Severity level 2 accidents dominated the dataset.</li>
            <li><strong>Visibility & Humidity:</strong> Higher humidity was associated with lower visibility conditions.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The analysis revealed that accident occurrence and severity are strongly influenced by traffic congestion, weather conditions, road infrastructure, and time-based driving patterns. The project provides valuable insights for accident hotspot detection and forms a strong foundation for future machine learning-based accident severity prediction systems.</p>
    `,

        githubLink: "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(US%20Accidents%20Analysis).ipynb"
    },
    {
        id: "ai-companies-eda",
        category: "eda",
        title: "AI Companies & Model Performance Analysis",
        date: "2025-01-12",
        topic: "Artificial Intelligence",
        algorithms: ["Statistical Analysis", "Trend Analysis"],
        datasetSize: "150+ AI models",
        images: [
            "eda/IMG-20260519-WA0003.jpg"
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
            "eda/IMG-20260519-WA0000.jpg"
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
            "eda/IMG-20260519-WA0006.jpg"
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
            "eda/IMG-20260519-WA0005.jpg"
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
            "eda/IMG-20260519-WA0001.jpg"
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
        id: "telco-customer-churn-analysis",
        category: "eda",
        title: "Telco Customer Churn Analysis (2020)",
        date: "2025-02-18",
        topic: "Telecom Analytics",
        algorithms: ["Statistical Analysis", "Trend Analysis"],
        datasetSize: "1000 transactions",
        images: [
            "eda/IMG-20260519-WA0002.jpg"
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
            "eda/IMG-20260519-WA0004.jpg"
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




    //ML Projects
    {
        id: "house-price-prediction-ml",
        category: "ml",
        title: "House Price Prediction using Regression Models",
        date: "2025-03-05",
        topic: "Real Estate",
        algorithms: ["Linear Regression", "Ridge Regression", "Lasso Regression"],
        datasetSize: "1460 records, 81 features",
        images: [
            "ml/house price prediction.jpeg"
        ],
        tags: ["Python", "Scikit-Learn", "Regression", "Feature Engineering", "Hyperparameter Tuning"],
        summary: "A machine learning regression project focused on predicting house prices using advanced preprocessing, regularization techniques, and hyperparameter optimization.",
        detailedReport: `
        <h4 class="report-subtitle">Data Preprocessing & Feature Engineering</h4>
        <p>The project utilized the Kaggle House Prices dataset containing 1,460 records and 81 features related to residential properties. The dataset was cleaned by handling missing values, encoding categorical variables, and scaling numerical features to improve model performance and stability.</p>

        <h4 class="report-subtitle">Model Development</h4>
        <p>Started with a baseline Linear Regression model and later experimented with <strong>Ridge Regression</strong> and <strong>Lasso Regression</strong> to reduce overfitting and improve generalization. Hyperparameter tuning was performed to identify the optimal regularization strength for the final model.</p>

        <h4 class="report-subtitle">Final Model Selection</h4>
        <p><strong>Lasso Regression</strong> was selected as the final model due to its strong predictive performance and ability to reduce feature redundancy through regularization and feature selection.</p>

        <h4 class="report-subtitle">Performance Metrics</h4>
        <ul class="report-list">
            <li><strong>Test R² Score:</strong> 0.8926</li>
            <li><strong>Cross-Validation R²:</strong> 0.8643</li>
            <li><strong>Mean Absolute Error (MAE):</strong> ~16,762</li>
            <li><strong>Average Prediction Error:</strong> Approximately 9%</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The project demonstrates the effectiveness of regularized regression techniques in predicting real estate prices. Lasso Regression provided strong generalization performance while reducing model complexity, making it suitable for structured housing datasets with high-dimensional features.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Linear%20Regression/House_Price_Prediction_Linear_Regression.ipynb"
    },
    {
        id: "cartpole-reinforcement-learning",
        category: "ml",
        title: "CartPole Balancing using Reinforcement Learning",
        date: "2025-03-12",
        topic: "Reinforcement Learning",
        algorithms: ["Q-Learning", "Deep Q-Network (DQN)"],
        datasetSize: "OpenAI Gym Environment",
        images: [
            "ml/rl-video-episode-0.mp4"
        ],
        tags: ["Python", "PyTorch", "OpenAI Gym", "Reinforcement Learning", "Deep Learning"],
        summary: "A reinforcement learning project focused on training intelligent agents to balance the CartPole environment using Q-Learning and Deep Q-Network (DQN) techniques.",
        detailedReport: `
        <h4 class="report-subtitle">Project Overview</h4>
        <p>The project focuses on solving the CartPole balancing problem using reinforcement learning algorithms. Multiple agents were developed and evaluated to compare performance improvements from random actions to deep reinforcement learning techniques.</p>

        <h4 class="report-subtitle">Implementation Workflow</h4>
        <ul class="report-list">
            <li>Imported essential reinforcement learning and deep learning libraries.</li>
            <li>Created and configured the OpenAI Gym CartPole environment.</li>
            <li>Implemented a baseline random agent for initial performance benchmarking.</li>
            <li>Developed a Q-Learning agent with discretized state space representation.</li>
            <li>Implemented a Deep Q-Network (DQN) agent using neural networks for policy learning.</li>
            <li>Trained, evaluated, and saved the final DQN model.</li>
        </ul>

        <h4 class="report-subtitle">Model Comparison & Performance</h4>
        <ul class="report-list">
            <li><strong>Base Random Agent:</strong> Average reward of 20.5 over 100 episodes.</li>
            <li><strong>Q-Learning Agent:</strong> Average reward improved to 50.3 over 100 episodes.</li>
            <li><strong>DQN Agent:</strong> Achieved an average reward of 195.7 over 100 episodes, nearly solving the environment.</li>
        </ul>

        <h4 class="report-subtitle">Key Insights</h4>
        <p>The transition from traditional Q-Learning to Deep Q-Networks significantly improved the agent’s ability to learn optimal balancing strategies. The DQN agent demonstrated stable and near-optimal performance compared to the baseline and tabular approaches.</p>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The project demonstrates the effectiveness of deep reinforcement learning in solving dynamic control problems. By combining neural networks with Q-Learning principles, the DQN agent achieved strong performance and successfully learned to balance the CartPole environment efficiently.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Reinforcement%20Learning/CartPole%20using%20reinforcement%20learning.ipynb"
    },
    {
        id: "movie-recommendation-system",
        category: "ml",
        title: "Movie Recommendation System using Collaborative Filtering",
        date: "2025-03-18",
        topic: "Recommendation Systems",
        algorithms: ["Collaborative Filtering", "Singular Value Decomposition (SVD)"],
        datasetSize: "10000+ ratings, 9k+ movies",
        images: [
            "ml/Screenshot 2026-05-25 123057.png"
        ],
        tags: ["Python", "Pandas", "Scikit-Learn", "Recommendation System", "SVD"],
        summary: "A machine learning recommendation system designed to suggest movies to users using collaborative filtering and matrix factorization techniques based on historical rating patterns.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The project utilized two datasets containing movie information and user ratings. The movies dataset consisted of 9,742 movie records, while the ratings dataset contained over 100,000 user ratings.</p>

        <h4 class="report-subtitle">Data Preprocessing</h4>
        <ul class="report-list">
            <li>Merged the movies and ratings datasets using the <strong>movieId</strong> column.</li>
            <li>Handled missing values by imputing average movie ratings.</li>
            <li>Encoded categorical features such as genres using one-hot encoding techniques.</li>
            <li>Prepared the dataset for collaborative filtering and matrix factorization modeling.</li>
        </ul>

        <h4 class="report-subtitle">Model Development</h4>
        <p>A collaborative filtering recommendation system was developed using <strong>Singular Value Decomposition (SVD)</strong>. The dataset was split into training and testing sets, and the model was trained to learn hidden user-movie interaction patterns for personalized recommendations.</p>

        <h4 class="report-subtitle">Evaluation & Recommendations</h4>
        <p>The model performance was evaluated using <strong>Root Mean Squared Error (RMSE)</strong> on the test dataset to measure prediction accuracy.</p>

        <ul class="report-list">
            <li><strong>Top Recommended Movies:</strong></li>
            <li>Gintama: The Movie (2010)</li>
            <li>anohana: The Flower We Saw That Day - The Movie</li>
            <li>Silver Spoon (2014)</li>
            <li>Love Live! The School Idol Movie (2015)</li>
            <li>No Game No Life: Zero (2017)</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The recommendation system successfully identified user preference patterns and generated relevant movie suggestions using collaborative filtering techniques. The project demonstrates how matrix factorization methods like SVD can be applied effectively in personalized recommendation systems.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Recommended%20System/movies_recommendation_model.ipynb"
    },
    {
        id: "apple-stock-trend-predictor",
        category: "ml",
        title: "AAPL Stock Trend Predictor using Regression Analysis",
        date: "2025-03-25",
        topic: "Financial Analytics",
        algorithms: ["Linear Regression", "Ridge Regression", "Lasso Regression"],
        datasetSize: "2520 records, 10 features",
        images: [
            "ml/appl_stock_trend_predictor.png"
        ],
        tags: ["Python", "Pandas", "Scikit-Learn", "Time Series Analysis", "Regression"],
        summary: "A financial machine learning project focused on predicting AAPL stock trends using regression models, feature engineering, and time-series-based evaluation techniques.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The project utilized historical AAPL stock market data consisting of 2,520 records and 10 financial features including OHLC prices and engineered indicators.</p>

        <h4 class="report-subtitle">Data Analysis & Preprocessing</h4>
        <ul class="report-list">
            <li>Performed data cleaning and preprocessing to ensure consistency and quality.</li>
            <li>Conducted univariate, bivariate, and multivariate analysis to study stock behavior and feature relationships.</li>
            <li>Applied feature engineering techniques to improve predictive capability.</li>
            <li>Used time-series splitting to maintain chronological integrity during training and evaluation.</li>
        </ul>

        <h4 class="report-subtitle">Model Development</h4>
        <p>Developed and compared multiple regression models including <strong>Linear Regression</strong>, <strong>Ridge Regression</strong>, and <strong>Lasso Regression</strong>. Regularization techniques were explored to handle multicollinearity and reduce overfitting.</p>

        <h4 class="report-subtitle">Final Model Selection</h4>
        <p><strong>Lasso Regression</strong> with alpha = 0.001 was selected as the final model due to its ability to reduce noisy and redundant features while maintaining stable performance.</p>

        <h4 class="report-subtitle">Performance Metrics</h4>
        <ul class="report-list">
            <li><strong>MAE:</strong> 0.0118</li>
            <li><strong>RMSE:</strong> 0.0173</li>
            <li><strong>R² Score:</strong> -0.0005</li>
        </ul>

        <h4 class="report-subtitle">Key Insights Extracted</h4>
        <ul class="report-list">
            <li><strong>Market Noise:</strong> Stock returns were highly noisy and difficult to predict using simple linear models.</li>
            <li><strong>Feature Correlation:</strong> Strong multicollinearity existed among OHLC price features.</li>
            <li><strong>Regularization Impact:</strong> Ridge Regression improved model stability and generalization.</li>
            <li><strong>Lasso Advantage:</strong> Lasso Regression performed best by removing redundant and noisy features.</li>
            <li><strong>Market Complexity:</strong> Financial markets demonstrated nonlinear and stochastic behavior beyond simple linear assumptions.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The project highlights the challenges of stock market prediction using linear models and demonstrates the importance of regularization techniques in financial machine learning. While prediction accuracy remained limited due to market randomness, the analysis provided valuable insights into feature relationships and model behavior in time-series forecasting.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Linear%20Regression/aapl_stock_trend_predictor.ipynb"
    },
    {
        id: "us-accident-severity-prediction",
        category: "ml",
        title: "US Accident Severity Prediction using Random Forest",
        date: "2025-04-02",
        topic: "Transportation Analytics",
        algorithms: ["Logistic Regression", "Decision Tree", "Random Forest"],
        datasetSize: "700000 records, 46 features",
        images: [
            "ml/us_accident_severity_prediction.png"
        ],
        tags: ["Python", "Scikit-Learn", "Random Forest", "Feature Engineering", "EDA"],
        summary: "A large-scale machine learning project focused on predicting accident severity levels in the United States using classification models, feature engineering, and ensemble learning techniques.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The project utilized a large-scale US accident dataset containing over 7.7 million records and 46 features related to road conditions, weather, location, and accident severity.</p>

        <h4 class="report-subtitle">Data Processing & Feature Engineering</h4>
        <ul class="report-list">
            <li>Performed extensive data cleaning and preprocessing on large-scale structured data.</li>
            <li>Conducted exploratory data analysis (EDA) to identify accident trends and feature relationships.</li>
            <li>Applied feature engineering and feature selection techniques to improve model efficiency and performance.</li>
            <li>Prepared balanced and optimized feature sets for classification modeling.</li>
        </ul>

        <h4 class="report-subtitle">Model Development</h4>
        <p>Multiple classification models were trained and evaluated, including <strong>Logistic Regression</strong>, <strong>Decision Tree</strong>, and <strong>Random Forest</strong>. The project focused heavily on improving minority class detection due to class imbalance in accident severity categories.</p>

        <h4 class="report-subtitle">Model Performance Comparison</h4>
        <ul class="report-list">
            <li>
                <strong>Logistic Regression:</strong>
                <ul>
                    <li>Accuracy: 82.48%</li>
                    <li>Macro Recall: 0.28</li>
                    <li>Minority Class Detection: Very Poor</li>
                </ul>
            </li>

            <li>
                <strong>Decision Tree:</strong>
                <ul>
                    <li>Accuracy: 75.12%</li>
                    <li>Macro Recall: 0.45</li>
                    <li>Minority Class Detection: Improved</li>
                </ul>
            </li>

            <li>
                <strong>Random Forest:</strong>
                <ul>
                    <li>Accuracy: 66.58%</li>
                    <li>Macro F1 Score: 0.43</li>
                    <li>Weighted F1 Score: 0.71</li>
                    <li>Minority Class Detection: Significantly Improved</li>
                </ul>
            </li>
        </ul>

        <h4 class="report-subtitle">Final Model after Feature Selection</h4>
        <p>The optimized <strong>Random Forest</strong> model achieved the best balance between overall accuracy and minority class prediction capability after feature selection and hyperparameter tuning.</p>

        <ul class="report-list">
            <li><strong>Final Accuracy:</strong> 73.58%</li>
            <li><strong>Macro F1 Score:</strong> 0.46</li>
            <li><strong>Weighted F1 Score:</strong> 0.77</li>
            <li><strong>Minority Class Detection:</strong> Best Overall Performance</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The project demonstrates the importance of feature engineering, class imbalance handling, and ensemble learning in large-scale accident severity prediction tasks. While Logistic Regression achieved higher raw accuracy, Random Forest provided superior minority class detection and more balanced classification performance, making it the most effective model for real-world deployment scenarios.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Decsion%20Tree/accident_severity_prediction_using_random_forest.ipynb"
    },
    {
        id: "credit-card-fraud-detection",
        category: "ml",
        title: "Credit Card Fraud Detection using Anomaly Detection",
        date: "2025-04-10",
        topic: "Financial Security",
        algorithms: ["Isolation Forest", "One-Class SVM", "Anomaly Detection"],
        datasetSize: "28000+ transactions, 31 features",
        images: [
            "ml/credit-card_fraud_detection.png"
        ],
        tags: ["Python", "Scikit-Learn", "Anomaly Detection", "Fraud Detection", "Machine Learning"],
        summary: "An anomaly detection-based machine learning project designed to identify fraudulent credit card transactions by detecting unusual transaction behavior without relying on labeled training data.",
        detailedReport: `
        <h4 class="report-subtitle">Project Overview</h4>
        <p>The project focuses on detecting fraudulent credit card transactions using unsupervised anomaly detection techniques. The system was designed to identify abnormal transaction patterns in highly imbalanced financial datasets where fraudulent activities represent only a small fraction of total transactions.</p>

        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The dataset contains approximately 28,000 credit card transactions with 31 numerical features representing transaction behavior and anonymized financial attributes.</p>

        <h4 class="report-subtitle">Implementation Workflow</h4>
        <ul class="report-list">
            <li>Collected and prepared transaction data containing both fraudulent and legitimate cases.</li>
            <li>Performed data preprocessing, including missing value handling and feature normalization.</li>
            <li>Selected unsupervised anomaly detection algorithms such as <strong>Isolation Forest</strong> and <strong>One-Class SVM</strong>.</li>
            <li>Trained the model to learn normal transaction behavior patterns.</li>
            <li>Evaluated model performance using recall, precision, and F1-score metrics.</li>
        </ul>

        <h4 class="report-subtitle">Model Performance Metrics</h4>
        <ul class="report-list">
            <li><strong>Recall:</strong> 0.85</li>
            <li><strong>Precision:</strong> 0.30</li>
            <li><strong>F1 Score:</strong> 0.44</li>
        </ul>

        <h4 class="report-subtitle">Key Insights</h4>
        <ul class="report-list">
            <li><strong>High Fraud Detection Capability:</strong> The model successfully identified approximately 85% of fraudulent transactions.</li>
            <li><strong>False Positive Challenge:</strong> Low precision indicated a high number of legitimate transactions being flagged as fraudulent.</li>
            <li><strong>Anomaly Detection Strength:</strong> The unsupervised approach enabled fraud detection without relying heavily on labeled training data.</li>
            <li><strong>Production Consideration:</strong> The model is more suitable as an initial fraud screening layer rather than a standalone production system.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The project demonstrates the effectiveness of anomaly detection techniques in identifying suspicious financial transactions within highly imbalanced datasets. While the model achieved strong recall performance, future improvements involving supervised learning methods and hybrid detection systems could help reduce false positives and improve overall reliability in real-world fraud detection systems.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Anomaly%20Detection/credit_card_fraud_detection_using_anomaly_detection.ipynb"
    },
    {
        id: "covid19-anomaly-detection",
        category: "ml",
        title: "COVID-19 Anomaly Detection using Unsupervised Machine Learning",
        date: "2025-05-08",
        topic: "Healthcare Analytics",
        algorithms: ["Isolation Forest", "K-Means", "DBSCAN", "LOF", "One-Class SVM", "Gaussian Anomaly Detection"],
        datasetSize: "316,800 records, 27 features",
        images: [
            "ml/covid-19 prediction.jpg    "
        ],
        tags: ["Python", "Scikit-Learn", "Anomaly Detection", "PCA", "Healthcare", "Unsupervised Learning"],
        summary: "A large-scale unsupervised machine learning project focused on identifying unusual patient patterns in COVID-19 symptom data through advanced feature engineering, dimensionality reduction, and anomaly detection techniques.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The project utilized a cleaned and one-hot encoded COVID-19 dataset containing 316,800 patient records and 27 original features related to symptoms, demographics, contact history, and disease severity. The objective was to identify unusual patient profiles using unsupervised anomaly detection methods.</p>

        <h4 class="report-subtitle">Exploratory Data Analysis</h4>
        <ul class="report-list">
            <li>Explored symptom frequencies, severity distributions, age groups, and contact history patterns.</li>
            <li>Generated symptom correlation heatmaps to identify relationships among clinical indicators.</li>
            <li>Created and analyzed symptom-count distributions across the patient population.</li>
            <li>Identified potential unusual symptom and severity combinations for anomaly investigation.</li>
        </ul>

        <h4 class="report-subtitle">Feature Engineering & Preprocessing</h4>
        <p>Several domain-driven features were engineered to improve anomaly detection performance:</p>

        <ul class="report-list">
            <li>Symptoms_Count</li>
            <li>Respiratory_Score</li>
            <li>Nasal_Score</li>
            <li>Digestive_Score</li>
            <li>Exposure_Risk</li>
            <li>High_Risk_Age</li>
            <li>Severity_Score</li>
            <li>Risk_Score</li>
        </ul>

        <p>Selected features were standardized using <strong>StandardScaler</strong>, followed by <strong>PCA</strong> for dimensionality reduction, visualization, and anomaly analysis.</p>

        <h4 class="report-subtitle">Anomaly Detection Models</h4>
        <p>Multiple unsupervised anomaly detection algorithms were implemented and compared:</p>

        <ul class="report-list">
            <li><strong>Isolation Forest</strong></li>
            <li><strong>K-Means Clustering</strong></li>
            <li><strong>DBSCAN</strong></li>
            <li><strong>Local Outlier Factor (LOF)</strong></li>
            <li><strong>One-Class SVM</strong></li>
            <li><strong>Gaussian Anomaly Detection</strong></li>
        </ul>

        <h4 class="report-subtitle">Model Comparison</h4>
        <ul class="report-list">
            <li><strong>Isolation Forest:</strong> 9,500 anomalies detected</li>
            <li><strong>K-Means:</strong> 9,360 anomalies detected</li>
            <li><strong>DBSCAN:</strong> 0 anomalies detected</li>
            <li><strong>LOF:</strong> 8,520 anomalies detected</li>
            <li><strong>One-Class SVM:</strong> 17,620 anomalies detected</li>
            <li><strong>Gaussian Anomaly Detection:</strong> 9,480 anomalies detected</li>
        </ul>

        <h4 class="report-subtitle">Final Model Selection</h4>
        <p><strong>Isolation Forest</strong> was selected as the final model due to its consistent anomaly detection performance, scalability on high-dimensional data, robustness, and balanced results when compared with Gaussian and clustering-based approaches.</p>

        <h4 class="report-subtitle">Key Insights</h4>
        <ul class="report-list">
            <li>Patient distribution remained relatively balanced across age groups, severity levels, and exposure histories.</li>
            <li>Respiratory symptoms exhibited moderate positive correlations.</li>
            <li>Most patients reported between 3 and 5 symptoms.</li>
            <li>Rare symptom-severity combinations were successfully identified as potential anomalies.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>This project demonstrates how unsupervised machine learning can effectively identify unusual patient patterns within large-scale healthcare datasets. Through extensive feature engineering and model comparison, Isolation Forest emerged as the most reliable anomaly detection approach, providing scalable and interpretable results for COVID-19 patient analysis.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Anomaly%20Detection/Covid-19%20anomaly%20detection%20using%20unsupervised%20ML.ipynb"
    },
    {
        id: "hiring-trend-prediction",
        category: "ml",
        title: "Hiring Trend Prediction using Tree-Based Ensemble Models",
        date: "2025-05-15",
        topic: "HR Analytics",
        algorithms: ["Decision Tree", "Random Forest", "XGBoost", "SMOTE"],
        datasetSize: "Company Hiring Dataset",
        images: [
            "ml/hiring trend.jpg"
        ],
        tags: ["Python", "Scikit-Learn", "XGBoost", "SMOTE", "Classification", "HR Analytics"],
        summary: "A machine learning classification project focused on predicting organizational hiring trends using company, workforce, financial, AI adoption, and market-related factors through tree-based ensemble models.",
        detailedReport: `
        <h4 class="report-subtitle">Project Overview</h4>
        <p>The objective of this project was to predict hiring trends using organizational, economic, and workforce-related variables. Multiple tree-based machine learning models were developed and compared to identify the most effective approach for classification.</p>

        <h4 class="report-subtitle">Data Preprocessing & Feature Engineering</h4>
        <ul class="report-list">
            <li>Performed data cleaning and preprocessing.</li>
            <li>Removed irrelevant identifiers such as <strong>record_id</strong>.</li>
            <li>Applied one-hot encoding for categorical features.</li>
            <li>Used label encoding for the target variable <strong>hiring_trend</strong>.</li>
            <li>Performed train-test splitting for model evaluation.</li>
            <li>Applied <strong>SMOTE</strong> to address class imbalance.</li>
        </ul>

        <h4 class="report-subtitle">Models Evaluated</h4>
        <ul class="report-list">
            <li><strong>Decision Tree Classifier</strong> – Baseline model for comparison.</li>
            <li><strong>Random Forest Classifier</strong> – Ensemble approach using multiple decision trees.</li>
            <li><strong>XGBoost Classifier</strong> – Gradient boosting model with sequential error correction.</li>
            <li><strong>XGBoost + SMOTE</strong> – Combined boosting and class balancing for improved performance.</li>
        </ul>

        <h4 class="report-subtitle">Model Performance Comparison</h4>
        <ul class="report-list">
            <li><strong>Decision Tree:</strong> 72.6% Accuracy</li>
            <li><strong>Random Forest:</strong> 71.8% Accuracy</li>
            <li><strong>XGBoost:</strong> 74.7% Accuracy</li>
            <li><strong>XGBoost + SMOTE:</strong> 75.0% Accuracy</li>
        </ul>

        <h4 class="report-subtitle">Evaluation Metrics</h4>
        <ul class="report-list">
            <li>Accuracy Score</li>
            <li>Confusion Matrix</li>
            <li>Precision</li>
            <li>Recall</li>
            <li>F1-Score</li>
            <li>Feature Importance Analysis</li>
        </ul>

        <h4 class="report-subtitle">Important Features Identified</h4>
        <ul class="report-list">
            <li><strong>market_condition_Recession</strong></li>
            <li><strong>open_roles</strong></li>
            <li><strong>layoff_percentage</strong></li>
            <li><strong>ai_adoption_level</strong></li>
        </ul>

        <h4 class="report-subtitle">Final Model Selection</h4>
        <p><strong>XGBoost + SMOTE</strong> was selected as the final model due to its superior classification performance, improved minority class prediction, and balanced learning across target classes.</p>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The analysis revealed that AI adoption, workforce reductions, and broader market conditions are strong indicators of hiring behavior. XGBoost outperformed traditional tree-based methods through boosting-based learning, while SMOTE improved class balance and minority class detection. The combination of ensemble learning and imbalance handling resulted in the most robust hiring trend prediction model.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Decsion%20Tree/tech_layoof_due_to_AI_automation.ipynb"
    },
    {
        id: "wild-animal-image-clustering",
        category: "ml",
        title: "Wild Animal Image Clustering using CNN Features, PCA & K-Means",
        date: "2025-05-22",
        topic: "Computer Vision",
        algorithms: ["ResNet50", "PCA", "K-Means Clustering"],
        datasetSize: "4,738 images",
        images: [
            "ml/wild animal classification.jpg"
        ],
        tags: ["Python", "TensorFlow", "Computer Vision", "K-Means", "PCA", "Unsupervised Learning"],
        summary: "An unsupervised computer vision project that leverages deep CNN feature extraction, dimensionality reduction, and clustering techniques to automatically group wild animal species without using image labels.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The project utilized an animal image dataset containing 4,738 RGB images of wild animals including tigers, lions, leopards, snow leopards, cheetahs, wolves, foxes, and related species. All images were processed at a resolution of 512 × 512 pixels.</p>

        <h4 class="report-subtitle">Image Processing Pipeline</h4>
        <ul class="report-list">
            <li>Loaded and validated the image dataset.</li>
            <li>Verified image quality, dimensions, and removed corrupted files.</li>
            <li>Extracted high-level visual features using a pretrained <strong>ResNet50</strong> convolutional neural network.</li>
            <li>Generated a feature matrix of shape <strong>(4738, 2048)</strong>.</li>
            <li>Applied <strong>PCA</strong> for dimensionality reduction and computational efficiency.</li>
            <li>Selected <strong>172 principal components</strong>, preserving approximately 90% of total variance.</li>
        </ul>

        <h4 class="report-subtitle">Clustering Methodology</h4>
        <p>The optimal number of clusters was explored using the <strong>Elbow Method</strong> and <strong>Silhouette Score Analysis</strong>. K-Means clustering models were trained with multiple K values and evaluated based on cluster quality and visual interpretability.</p>

        <h4 class="report-subtitle">Model Components</h4>
        <ul class="report-list">
            <li><strong>ResNet50</strong> – Deep CNN feature extraction.</li>
            <li><strong>PCA</strong> – Dimensionality reduction and variance preservation.</li>
            <li><strong>K-Means Clustering</strong> – Unsupervised image grouping.</li>
        </ul>

        <h4 class="report-subtitle">Clustering Results</h4>
        <ul class="report-list">
            <li><strong>K = 4:</strong> Silhouette Score = 0.2507</li>
            <li><strong>K = 8:</strong> Silhouette Score = 0.2407</li>
        </ul>

        <p><strong>Cluster Interpretation (K = 4):</strong></p>
        <ul class="report-list">
            <li>Canines</li>
            <li>Tigers</li>
            <li>Lions</li>
            <li>Spotted Big Cats</li>
        </ul>

        <p><strong>Cluster Interpretation (K = 8):</strong></p>
        <ul class="report-list">
            <li>Tigers</li>
            <li>Cheetahs</li>
            <li>Leopards</li>
            <li>Snow Leopards</li>
            <li>Wolves</li>
            <li>Foxes</li>
            <li>Male Lions</li>
            <li>Lionesses / Cubs</li>
        </ul>

        <h4 class="report-subtitle">Final Model Selection</h4>
        <p><strong>K = 8</strong> was selected as the final clustering solution. Although K = 4 achieved a slightly higher silhouette score, K = 8 produced more meaningful species-level separation and richer visual cluster interpretation.</p>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>This project demonstrates a complete unsupervised image clustering workflow using deep learning feature extraction and clustering algorithms. By combining ResNet50, PCA, and K-Means, the system successfully discovered meaningful animal groupings without requiring labeled data, showcasing the power of representation learning in computer vision tasks.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/K-%20Mean%20Clustering/animal%20classifiction%20using%20clustering.ipynb"
    },
    {
        id: "teen-depression-prediction",
        category: "ml",
        title: "Teen Social Media Depression Prediction using Logistic Regression",
        date: "2025-05-28",
        topic: "Mental Health Analytics",
        algorithms: ["Logistic Regression"],
        datasetSize: "3,700 records, 13+ features",
        images: [
            "ml/teen depression.jpg"
        ],
        tags: ["Python", "Scikit-Learn", "Logistic Regression", "Feature Engineering", "Classification", "Healthcare Analytics"],
        summary: "A machine learning classification project that predicts depression risk among teenagers using social media usage patterns, lifestyle indicators, and psychological factors through Logistic Regression.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The project combined two teen social media datasets containing 3,700 samples and more than 13 engineered features. The target variable was <strong>depression_label</strong>, representing whether a teenager exhibited signs of depression.</p>

        <h4 class="report-subtitle">Data Preparation & Feature Engineering</h4>
        <ul class="report-list">
            <li>Combined multiple datasets and resolved feature mismatches.</li>
            <li>Performed exploratory data analysis (EDA) to understand behavioral and mental health patterns.</li>
            <li>Analyzed feature correlations and variable distributions.</li>
            <li>Created domain-specific engineered features including:</li>
            <ul>
                <li>Sleep Deficiency</li>
                <li>Mental Pressure</li>
                <li>High Screen Time</li>
            </ul>
            <li>Applied One-Hot Encoding for categorical variables.</li>
            <li>Performed feature scaling using <strong>StandardScaler</strong>.</li>
            <li>Split the dataset into training and testing subsets.</li>
        </ul>

        <h4 class="report-subtitle">Model Development</h4>
        <p>A <strong>Logistic Regression</strong> classifier was trained to predict depression risk based on behavioral, academic, and social media-related features. The model was selected due to the reasonably linear relationships observed within the dataset.</p>

        <h4 class="report-subtitle">Performance Metrics</h4>
        <ul class="report-list">
            <li><strong>Accuracy:</strong> 90.67%</li>
            <li><strong>Precision:</strong> 87%</li>
            <li><strong>Recall:</strong> 86%</li>
            <li><strong>F1-Score:</strong> 86%</li>
            <li><strong>ROC-AUC:</strong> 0.975</li>
        </ul>

        <h4 class="report-subtitle">Key Insights Extracted</h4>
        <ul class="report-list">
            <li><strong>Stress & Anxiety:</strong> Higher stress and anxiety levels significantly increased depression probability.</li>
            <li><strong>Social Media Usage:</strong> Increased screen time and social media engagement were associated with higher depression risk.</li>
            <li><strong>Sleep Patterns:</strong> Reduced sleep duration emerged as a strong indicator of mental health concerns.</li>
            <li><strong>Academic Impact:</strong> Poor academic performance showed a measurable relationship with depression risk.</li>
            <li><strong>Model Effectiveness:</strong> Logistic Regression successfully captured behavioral and psychological patterns within the dataset.</li>
        </ul>

        <h4 class="report-subtitle">Model Evaluation</h4>
        <p>The confusion matrix showed strong classification performance with very few false predictions. Additionally, the ROC curve demonstrated excellent class separation, indicating the model's ability to distinguish between depressed and non-depressed individuals effectively.</p>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The Logistic Regression model achieved strong predictive performance with balanced precision, recall, and F1-score values. The project highlights how social media behavior, sleep habits, stress, and anxiety can be leveraged to identify depression risk among teenagers. It also demonstrates a complete machine learning workflow including data preprocessing, feature engineering, model training, and evaluation.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Logistic%20Regression/depression_classification_due_to_social_media_on_teens.ipynb"
    },
    {
        id: "book-recommendation-knn",
        category: "ml",
        title: "Book Recommendation System using Collaborative Filtering & KNN",
        date: "2025-06-01",
        topic: "Recommendation Systems",
        algorithms: ["K-Nearest Neighbors (KNN)", "Collaborative Filtering", "Cosine Similarity"],
        datasetSize: "1.1M+ ratings, 271k books, 278k users",
        images: [
            "ml/book recommendation using collaborative.jpg"
        ],
        tags: ["Python", "Pandas", "Scikit-Learn", "KNN", "Recommendation System", "Collaborative Filtering"],
        summary: "A large-scale recommendation system that leverages collaborative filtering and K-Nearest Neighbors (KNN) to generate personalized book recommendations based on user rating behavior.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The project utilized the Book-Crossing dataset, consisting of over 271,000 books, 278,000 users, and approximately 1.15 million book ratings. The objective was to recommend books by identifying users with similar reading preferences.</p>

        <h4 class="report-subtitle">Data Analysis & Preprocessing</h4>
        <ul class="report-list">
            <li>Loaded and analyzed books, users, and ratings datasets.</li>
            <li>Studied rating distributions and user engagement patterns.</li>
            <li>Prepared and merged datasets for collaborative filtering analysis.</li>
            <li>Constructed a user-item interaction matrix representing user ratings across books.</li>
        </ul>

        <h4 class="report-subtitle">Recommendation Methodology</h4>
        <p>The recommendation engine was built using <strong>User-Based Collaborative Filtering</strong> combined with the <strong>K-Nearest Neighbors (KNN)</strong> algorithm.</p>

        <ul class="report-list">
            <li>Calculated user similarity using <strong>Cosine Similarity</strong>.</li>
            <li>Identified nearest neighbors with similar reading preferences.</li>
            <li>Predicted ratings for unseen books based on neighbor ratings.</li>
            <li>Generated personalized recommendations by ranking predicted ratings.</li>
        </ul>

        <h4 class="report-subtitle">Model Components</h4>
        <ul class="report-list">
            <li><strong>K-Nearest Neighbors (KNN)</strong></li>
            <li><strong>Collaborative Filtering</strong></li>
            <li><strong>Cosine Similarity</strong></li>
            <li><strong>User-Item Matrix Representation</strong></li>
        </ul>

        <h4 class="report-subtitle">Sample Recommendation Results</h4>
        <p>For the book <strong>"Table For Two"</strong>, the system generated the following similar recommendations:</p>

        <ul class="report-list">
            <li>Truly, Madly Manhattan (Distance: 0.444)</li>
            <li>Summer Pleasures (Distance: 0.513)</li>
            <li>Engaging The Enemy (Distance: 0.534)</li>
            <li>Face the Fire (Three Sisters Island Trilogy) (Distance: 0.565)</li>
            <li>The Villa (Distance: 0.571)</li>
        </ul>

        <h4 class="report-subtitle">Key Insights</h4>
        <ul class="report-list">
            <li>User preference patterns can effectively drive personalized recommendations.</li>
            <li>Cosine similarity successfully identified readers with similar rating behavior.</li>
            <li>KNN provided an intuitive and interpretable recommendation framework.</li>
            <li>Collaborative filtering enabled recommendations without requiring book content information.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>This project demonstrates the effectiveness of collaborative filtering techniques for personalized recommendation systems. By combining KNN and cosine similarity, the model successfully identified similar users and generated relevant book suggestions. The approach highlights how user interaction data alone can be leveraged to build scalable recommendation engines for large datasets.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Recommended%20System/book_recommendation_using_collaborative_filtering.ipynb"
    },
    {
        id: "book-recommendation-pearson",
        category: "ml",
        title: "Book Recommendation System using Pearson Correlation",
        date: "2025-06-02",
        topic: "Recommendation Systems",
        algorithms: ["Collaborative Filtering", "Pearson Correlation"],
        datasetSize: "1.1M+ ratings, 271k books, 278k users",
        images: [
            "ml/book recommendation perason correlation.jpg"
        ],
        tags: ["Python", "Pandas", "Collaborative Filtering", "Recommendation System", "Pearson Correlation"],
        summary: "A collaborative filtering recommendation system that leverages Pearson Correlation to identify users with similar reading preferences and generate personalized book recommendations.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The project utilized the Book-Crossing dataset consisting of 271,360 books, 278,858 users, and approximately 1.15 million book ratings. The objective was to recommend books by analyzing similarities in user rating behavior.</p>

        <h4 class="report-subtitle">Data Analysis & Preparation</h4>
        <ul class="report-list">
            <li>Loaded and analyzed books, users, and ratings datasets.</li>
            <li>Explored rating distributions and user engagement patterns.</li>
            <li>Prepared user-book interaction data for collaborative filtering.</li>
            <li>Examined average rating trends before implementing similarity-based recommendations.</li>
        </ul>

        <h4 class="report-subtitle">Recommendation Methodology</h4>
        <p>The recommendation engine was developed using a <strong>User-Based Collaborative Filtering</strong> approach powered by <strong>Pearson Correlation</strong>.</p>

        <ul class="report-list">
            <li>Generated initial recommendations using average book ratings.</li>
            <li>Calculated Pearson Correlation coefficients between users to measure similarity in reading preferences.</li>
            <li>Identified users with highly correlated rating behavior.</li>
            <li>Predicted book preferences based on ratings provided by similar users.</li>
            <li>Generated personalized recommendations for the target user.</li>
        </ul>

        <h4 class="report-subtitle">Model Components</h4>
        <ul class="report-list">
            <li><strong>User-Based Collaborative Filtering</strong></li>
            <li><strong>Pearson Correlation Similarity</strong></li>
            <li><strong>User-Item Rating Matrix</strong></li>
        </ul>

        <h4 class="report-subtitle">Recommendation Results</h4>
        <p>For the target user/book profile <strong>"Table For Two"</strong>, the system generated the following recommended books:</p>

        <ul class="report-list">
            <li>The Lovely Bones: A Novel</li>
            <li>The Nanny Diaries: A Novel</li>
            <li>The Pilot's Wife: A Novel</li>
            <li>1st to Die: A Novel</li>
            <li>Where the Heart Is (Oprah's Book Club)</li>
            <li>The Book of Ruth (Oprah's Book Club)</li>
            <li>Fahrenheit 451</li>
            <li>The Poisonwood Bible: A Novel</li>
            <li>The Reader</li>
            <li>Angela's Ashes: A Memoir</li>
        </ul>

        <h4 class="report-subtitle">Key Insights</h4>
        <ul class="report-list">
            <li>Pearson Correlation effectively captured similarities in user rating patterns.</li>
            <li>Users with comparable reading preferences contributed to more personalized recommendations.</li>
            <li>The recommendation engine was able to discover relevant books beyond simple popularity-based suggestions.</li>
            <li>Collaborative filtering successfully leveraged historical user interactions without requiring book content features.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>This project demonstrates how Pearson Correlation can be applied in collaborative filtering systems to generate personalized book recommendations. By identifying users with similar preferences, the model was able to recommend relevant titles and showcase the effectiveness of user-based recommendation techniques on large-scale rating datasets.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Recommended%20System/book_recommendation_using_pearson_correlation.ipynb"
    },
    {
        id: "skill-metric-content-recommender",
        category: "ml",
        title: "Skill-Metric Content-Based Resource Recommendation System",
        date: "2025-06-03",
        topic: "Recommendation Systems",
        algorithms: ["TF-IDF", "Cosine Similarity", "Sentence Transformers"],
        datasetSize: "816 resources, 2,019 interactions",
        images: [
            "ml/skill metrics.jpg"
        ],
        tags: ["Python", "NLP", "Recommendation Systems", "TF-IDF", "Sentence Transformers", "Cosine Similarity"],
        summary: "A production-ready content-based recommendation engine developed for Skill-Metric that recommends relevant learning resources using resource metadata, weighted TF-IDF representations, and similarity-based retrieval techniques.",
        detailedReport: `
        <h4 class="report-subtitle">Project Overview</h4>
        <p>The objective of this project was to build a personalized content-based recommendation system for Skill-Metric capable of recommending relevant learning resources based on resource content, educational metadata, and skill relationships.</p>

        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The recommendation system was built using a curated educational resource dataset and user interaction history.</p>

        <ul class="report-list">
            <li><strong>Total Resources:</strong> 816</li>
            <li><strong>Total Features:</strong> 37</li>
            <li><strong>Users:</strong> 16</li>
            <li><strong>Resources with Interactions:</strong> 607</li>
            <li><strong>Total Interactions:</strong> 2,019</li>
        </ul>

        <p><strong>Key Resource Features:</strong></p>

        <ul class="report-list">
            <li>Title</li>
            <li>Description</li>
            <li>Domain</li>
            <li>Subdomain</li>
            <li>Difficulty Level</li>
            <li>Related Skills</li>
            <li>Learning Outcomes</li>
            <li>Resource Type</li>
        </ul>

        <h4 class="report-subtitle">Data Preprocessing</h4>
        <ul class="report-list">
            <li>Performed missing value analysis and duplicate detection.</li>
            <li>Selected high-impact recommendation features.</li>
            <li>Applied text cleaning and normalization.</li>
            <li>Cleaned skill and learning outcome fields.</li>
            <li>Created a weighted combined text representation for recommendation modeling.</li>
        </ul>

        <p><strong>Feature Weighting Strategy:</strong></p>

        <ul class="report-list">
            <li>Title × 3</li>
            <li>Subdomain × 3</li>
            <li>Domain × 2</li>
            <li>Related Skills × 2</li>
            <li>Learning Outcomes × 1</li>
            <li>Description × 1</li>
        </ul>

        <h4 class="report-subtitle">Model Development</h4>

        <p><strong>Model 1 (Final Production Model)</strong></p>

        <ul class="report-list">
            <li>Weighted TF-IDF Vectorization</li>
            <li>Cosine Similarity</li>
            <li>Top-N Resource Recommendation Generation</li>
        </ul>

        <p><strong>Recommendation Pipeline:</strong></p>

        <p>
        Resource Metadata
        → TF-IDF Vectorization
        → Cosine Similarity Matrix
        → Top-N Resource Recommendations
        </p>

        <p><strong>Model 2 (Experimental Benchmark)</strong></p>

        <ul class="report-list">
            <li>Sentence Transformers (all-MiniLM-L6-v2)</li>
            <li>Cosine Similarity</li>
        </ul>

        <h4 class="report-subtitle">Model Evaluation</h4>

        <table class="report-table">
            <tr>
                <th>Metric</th>
                <th>TF-IDF</th>
                <th>Embeddings</th>
            </tr>
            <tr>
                <td>Coverage</td>
                <td>94.49%</td>
                <td>94.85%</td>
            </tr>
            <tr>
                <td>Diversity</td>
                <td>0.678</td>
                <td>0.460</td>
            </tr>
            <tr>
                <td>Precision@10</td>
                <td>0.318</td>
                <td>0.320</td>
            </tr>
        </table>

        <h4 class="report-subtitle">Final Model Selection</h4>
        <p><strong>Weighted TF-IDF + Cosine Similarity</strong> was selected as the production model.</p>

        <p><strong>Selection Reasons:</strong></p>

        <ul class="report-list">
            <li>Nearly identical Precision@10 performance compared to embeddings.</li>
            <li>Significantly higher recommendation diversity.</li>
            <li>Faster training and inference speed.</li>
            <li>Lower computational requirements.</li>
            <li>Simpler deployment and long-term maintenance.</li>
        </ul>

        <h4 class="report-subtitle">Key Findings</h4>

        <ul class="report-list">
            <li>Resource metadata contains strong predictive recommendation signals.</li>
            <li>Weighted TF-IDF performs exceptionally well on structured educational content.</li>
            <li>Transformer embeddings provided minimal performance gains for the current dataset size.</li>
            <li>Content-based recommendations effectively matched domains, subdomains, and skill relationships.</li>
            <li>The system is production-ready and suitable as the baseline recommendation engine for Skill-Metric.</li>
        </ul>

        <h4 class="report-subtitle">Future Roadmap</h4>

        <ul class="report-list">
            <li>✓ Content-Based Recommendation System (Completed)</li>
            <li>Generate Synthetic Users</li>
            <li>Build Collaborative Filtering Models</li>
            <li>Develop Hybrid Recommendation Systems</li>
            <li>Create Learning Path Recommendation Engine</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>A production-ready content-based recommendation system was successfully developed for Skill-Metric using Weighted TF-IDF and Cosine Similarity. The model achieved <strong>94.49% coverage</strong>, <strong>0.678 diversity</strong>, and <strong>0.318 Precision@10</strong>, delivering strong recommendation quality while maintaining scalability, interpretability, and deployment simplicity. The system establishes a solid foundation for future collaborative and hybrid recommendation architectures.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Recommended%20System/Content_based_recommendation_model_using_tf-idf.ipynb"
    },
    {
        id: "insurance-charges-prediction-numpy-nn",
        category: "ml",
        title: "Insurance Charges Prediction using Neural Network from Scratch",
        date: "2025-06-20",
        topic: "Regression",
        algorithms: ["Linear Regression", "Ridge Regression", "Lasso Regression", "Neural Network"],
        datasetSize: "1,338 samples, 8 features",
        images: [
            "ml/Screenshot 2026-07-09 120133.png"
        ],
        tags: ["Python", "NumPy", "Machine Learning", "Deep Learning", "Neural Network", "Regression"],
        summary: "A complete regression project comparing classical machine learning algorithms with a neural network implemented entirely from scratch using NumPy. The project demonstrates forward propagation, backpropagation, gradient descent optimization, and neural network implementation without deep learning libraries.",
        detailedReport: `
        <h4 class="report-subtitle">Project Overview</h4>
        <p>The objective of this project was to predict medical insurance charges using both classical regression algorithms and a fully custom neural network implemented from scratch using NumPy. The project focuses on understanding the mathematical foundations of neural networks while comparing their performance against traditional machine learning models.</p>

        <h4 class="report-subtitle">Dataset Overview</h4>
        <ul class="report-list">
            <li><strong>Dataset:</strong> Medical Insurance Charges Dataset</li>
            <li><strong>Total Samples:</strong> 1,338</li>
            <li><strong>Features:</strong> 8</li>
            <li><strong>Target Variable:</strong> Insurance Charges</li>
            <li><strong>Problem Type:</strong> Regression</li>
        </ul>

        <h4 class="report-subtitle">Project Workflow</h4>
        <ul class="report-list">
            <li>Performed data exploration and preprocessing.</li>
            <li>Applied One-Hot Encoding for categorical variables.</li>
            <li>Separated input features and target variable.</li>
            <li>Split the dataset into training and testing sets.</li>
            <li>Applied StandardScaler to normalize input features.</li>
            <li>Implemented and compared multiple regression models.</li>
        </ul>

        <h4 class="report-subtitle">Models Evaluated</h4>
        <table class="report-table">
            <tr>
                <th>Model</th>
                <th>R² Score</th>
            </tr>
            <tr>
                <td>Linear Regression (NumPy - Gradient Descent)</td>
                <td>0.8069</td>
            </tr>
            <tr>
                <td>Linear Regression (Normal Equation)</td>
                <td>0.8069</td>
            </tr>
            <tr>
                <td>Scikit-learn Linear Regression</td>
                <td>0.8069</td>
            </tr>
            <tr>
                <td>Ridge Regression</td>
                <td>≈ 0.806</td>
            </tr>
            <tr>
                <td>Lasso Regression</td>
                <td>≈ 0.805</td>
            </tr>
            <tr>
                <td><strong>Neural Network (NumPy)</strong></td>
                <td><strong>0.8835</strong></td>
            </tr>
            <tr>
                <td>Scikit-learn MLPRegressor</td>
                <td>0.8850</td>
            </tr>
        </table>

        <h4 class="report-subtitle">Neural Network Architecture</h4>
        <ul class="report-list">
            <li><strong>Input Layer:</strong> 8 neurons</li>
            <li><strong>Hidden Layer 1:</strong> 16 neurons (Leaky ReLU)</li>
            <li><strong>Hidden Layer 2:</strong> 8 neurons (Leaky ReLU)</li>
            <li><strong>Output Layer:</strong> 1 neuron (Linear Activation)</li>
        </ul>

        <h4 class="report-subtitle">Implemented from Scratch</h4>
        <ul class="report-list">
            <li>He Weight Initialization</li>
            <li>Forward Propagation</li>
            <li>Mean Squared Error (MSE) Loss</li>
            <li>Backpropagation</li>
            <li>Gradient Descent Optimization</li>
            <li>Leaky ReLU Activation</li>
            <li>Parameter Updates</li>
            <li>Prediction and R² Evaluation</li>
        </ul>

        <h4 class="report-subtitle">Key Challenges Solved</h4>
        <ul class="report-list">
            <li>Eliminated exploding gradients by scaling the target variable.</li>
            <li>Resolved the Dead ReLU problem using Leaky ReLU activation.</li>
            <li>Fixed activation function and derivative mismatch during backpropagation.</li>
            <li>Optimized learning rate and weight initialization for stable convergence.</li>
        </ul>

        <h4 class="report-subtitle">Key Findings</h4>
        <ul class="report-list">
            <li>Classical linear models explained approximately 80.7% of the variance in insurance charges.</li>
            <li>The custom neural network significantly improved prediction accuracy over linear regression.</li>
            <li>The NumPy implementation achieved performance nearly identical to Scikit-learn's MLPRegressor.</li>
            <li>Proper initialization and activation functions were critical for successful neural network training.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>This project successfully demonstrates both classical machine learning and deep learning approaches for regression. The neural network implemented entirely from scratch using NumPy achieved an <strong>R² score of 0.8835</strong>, closely matching <strong>Scikit-learn's MLPRegressor (0.8850)</strong>. Beyond predictive performance, the project showcases a complete understanding of neural network mathematics, including forward propagation, backpropagation, gradient descent optimization, and weight updates without relying on deep learning frameworks.</p>
    `,
        githubLink: "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Linear%20Regression/insurance_price_prediction_using_all_linear_reg_model.ipynb"
    },




















    //DL Projects
    {
        id: "binary-classification-sigmoid",
        category: "dl",
        title: "Binary Classification using Sigmoid Activation Function",
        date: "2025-05-01",
        topic: "Neural Networks",
        algorithms: ["Neural Network", "Gradient Descent", "Sigmoid Activation"],
        datasetSize: "1000 samples",
        images: [
            "dl/binary_classification.png"
        ],
        tags: ["Python", "NumPy", "Deep Learning", "Neural Networks", "Classification"],
        summary: "A foundational deep learning project implementing binary classification using the sigmoid activation function, forward propagation, backpropagation, and gradient descent optimization.",
        detailedReport: `
        <h4 class="report-subtitle">Project Overview</h4>
        <p>The project focuses on building a binary classification model from scratch using neural network fundamentals. The implementation demonstrates the complete workflow of forward propagation, backward propagation, and weight optimization using gradient descent.</p>

        <h4 class="report-subtitle">Implementation Workflow</h4>
        <ul class="report-list">
            <li>Loaded the dataset and performed train-test splitting for model evaluation.</li>
            <li>Applied feature scaling using standardization to normalize input features.</li>
            <li>Implemented the <strong>Sigmoid Activation Function</strong> for binary probability prediction.</li>
            <li>Performed forward propagation to compute predictions.</li>
            <li>Implemented backward propagation to calculate gradients and optimize weights.</li>
            <li>Updated weights iteratively using gradient descent optimization.</li>
            <li>Evaluated model performance using classification metrics.</li>
        </ul>

        <h4 class="report-subtitle">Model Performance</h4>
        <ul class="report-list">
            <li><strong>Training Accuracy:</strong> 98.90%</li>
            <li><strong>Testing Accuracy:</strong> 98.25%</li>
        </ul>

        <h4 class="report-subtitle">Key Insights</h4>
        <ul class="report-list">
            <li><strong>Strong Generalization:</strong> Minimal gap between training and testing accuracy indicated low overfitting.</li>
            <li><strong>Optimization Effectiveness:</strong> Gradient descent successfully minimized classification error during training.</li>
            <li><strong>Neural Network Fundamentals:</strong> The project provided practical understanding of activation functions, propagation techniques, and optimization methods.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The project successfully demonstrated the implementation of binary classification using neural network fundamentals and sigmoid activation. With testing accuracy above 98%, the model effectively learned decision boundaries while providing a strong foundation for understanding deep learning optimization techniques.</p>
    `,
        githubLink: "https://github.com/suyash2356/Deep-Learning-Projects/blob/main/Binary_Classification_Using_Sigmoid_DL.ipynb"
    },
    {
        id: "digit-recognition-cnn",
        category: "dl",
        title: "Handwritten Digit Recognition using CNN",
        date: "2025-04-24",
        topic: "Computer Vision",
        algorithms: ["Convolutional Neural Networks (CNN)"],
        datasetSize: "60,000 MNIST images",
        images: [
            "dl/minst_digit_recognition.png"
        ],
        tags: ["Python", "TensorFlow", "Keras", "CNN", "Deep Learning", "Computer Vision"],
        summary: "A deep learning computer vision project focused on recognizing handwritten digits from the MNIST dataset using a Convolutional Neural Network (CNN) architecture.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The project utilized the MNIST handwritten digit dataset containing 60,000 grayscale images of digits ranging from 0 to 9. Each image had a resolution of 28x28 pixels and was used for multi-class image classification.</p>

        <h4 class="report-subtitle">CNN Architecture</h4>
        <ul class="report-list">
            <li><strong>Input Layer:</strong> 28x28 grayscale images.</li>
            <li><strong>Convolutional Layer 1:</strong> 32 filters with 3x3 kernel and ReLU activation.</li>
            <li><strong>Max Pooling Layer 1:</strong> Pool size of 2x2.</li>
            <li><strong>Convolutional Layer 2:</strong> 64 filters with 3x3 kernel and ReLU activation.</li>
            <li><strong>Max Pooling Layer 2:</strong> Pool size of 2x2.</li>
            <li><strong>Flatten Layer:</strong> Converted feature maps into a one-dimensional vector.</li>
            <li><strong>Fully Connected Layer:</strong> 128 neurons with ReLU activation.</li>
            <li><strong>Output Layer:</strong> 10 neurons with softmax activation for digit classification.</li>
        </ul>

        <h4 class="report-subtitle">Training Configuration</h4>
        <ul class="report-list">
            <li><strong>Loss Function:</strong> Sparse Categorical Cross-Entropy</li>
            <li><strong>Optimizer:</strong> Adam</li>
            <li><strong>Batch Size:</strong> 128</li>
            <li><strong>Epochs:</strong> 10</li>
        </ul>

        <h4 class="report-subtitle">Model Performance</h4>
        <ul class="report-list">
            <li><strong>Training Accuracy:</strong> 99.2%</li>
            <li><strong>Validation Accuracy:</strong> 98.5%</li>
        </ul>

        <h4 class="report-subtitle">Key Insights</h4>
        <p>The CNN architecture successfully learned spatial patterns and edge features from handwritten digit images, achieving highly accurate classification performance. The model demonstrated strong generalization capability with minimal overfitting between training and validation accuracy.</p>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The project demonstrates the effectiveness of Convolutional Neural Networks in image recognition tasks. With validation accuracy exceeding 98%, the model achieved reliable handwritten digit classification and highlights the strength of CNN architectures in computer vision applications.</p>
    `,
        githubLink: "https://github.com/suyash2356/Deep-Learning-Projects/blob/main/digit_recognition_DL.ipynb"
    },
    {
        id: "skin-cancer-detection-dl",
        category: "dl",
        title: "Skin Cancer Detection using Deep Learning",
        date: "2025-04-18",
        topic: "Healthcare AI",
        algorithms: ["EfficientNetB0", "Convolutional Neural Networks (CNN)"],
        datasetSize: "10,015 medical images",
        images: [
            "dl/skin_cancer_detection.png"
        ],
        tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "Computer Vision", "EfficientNet"],
        summary: "A deep learning computer vision project focused on detecting multiple categories of skin cancer using EfficientNetB0 and medical image classification techniques.",
        detailedReport: `
        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The project utilized a medical imaging dataset containing 10,015 dermatoscopic skin lesion images across multiple skin cancer categories. The objective was to classify images into their respective diagnostic classes using deep learning techniques.</p>

        <h4 class="report-subtitle">Model Development Pipeline</h4>
        <ul class="report-list">
            <li>Applied one-hot encoding for multi-class label representation.</li>
            <li>Performed train-test splitting for model training and evaluation.</li>
            <li>Initialized model weights and configured image preprocessing pipelines.</li>
            <li>Used <strong>ImageDataGenerator</strong> for image augmentation and improved generalization.</li>
            <li>Implemented <strong>EfficientNetB0</strong> as the primary deep learning architecture.</li>
            <li>Compiled, trained, and evaluated the deep learning model on the medical image dataset.</li>
        </ul>

        <h4 class="report-subtitle">Evaluation Metrics</h4>
        <ul class="report-list">
            <li><strong>Overall Accuracy:</strong> 72%</li>
            <li><strong>Macro Average F1-Score:</strong> 0.45</li>
            <li><strong>Weighted Average F1-Score:</strong> 0.71</li>
        </ul>

        <h4 class="report-subtitle">Class-wise Performance Highlights</h4>
        <ul class="report-list">
            <li><strong>NV Class:</strong> Best performing category with precision of 0.85 and recall of 0.88.</li>
            <li><strong>MEL & BKL:</strong> Achieved moderate classification performance.</li>
            <li><strong>AKIEC & DF:</strong> Lower precision and recall indicated difficulty in identifying minority classes accurately.</li>
            <li><strong>Class Imbalance:</strong> Performance variation across categories suggested imbalance within the dataset.</li>
        </ul>

        <h4 class="report-subtitle">Key Insights</h4>
        <p>The EfficientNetB0 architecture demonstrated strong capability in medical image classification, particularly for dominant skin lesion categories. However, rare classes showed weaker predictive performance due to limited training samples and class imbalance challenges.</p>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The model achieved promising results with an overall accuracy of 72% in multi-class skin cancer detection. While the system performed well on common lesion types, additional improvements such as advanced augmentation strategies, larger balanced datasets, and further hyperparameter tuning could significantly improve minority class detection and overall diagnostic reliability.</p>
    `,
        githubLink: "https://github.com/suyash2356/Deep-Learning-Projects/tree/main/CNN/Skin%20Cancer%20Detection%20Using%20Transfer%20Learning"
    },





    {
        id: "plant-disease-detection-dl",
        category: "dl",
        title: "Plant Disease Detection using Deep Learning",
        date: "2025-06-05",
        topic: "Agricultural AI",
        algorithms: ["EfficientNetB0", "Convolutional Neural Networks (CNN)"],
        datasetSize: "20,000+ crop images",
        images: [
            "dl/Screenshot 2026-06-18 230255.png"
        ],
        tags: ["Python", "TensorFlow", "Keras", "Deep Learning", "Computer Vision", "EfficientNet", "Agriculture"],
        summary: "A deep learning-based computer vision system designed to identify and classify plant diseases from crop images using EfficientNetB0 and transfer learning techniques, achieving high classification accuracy across multiple disease categories.",
        detailedReport: `
        <h4 class="report-subtitle">Project Overview</h4>
        <p>The objective of this project was to develop an automated plant disease detection system capable of identifying crop diseases from leaf images. The solution leverages deep learning and transfer learning techniques to support early disease diagnosis and improve agricultural productivity.</p>

        <h4 class="report-subtitle">Dataset Overview</h4>
        <p>The model was trained on a dataset containing more than 20,000 images of various crops and plant disease categories. Images were preprocessed and resized to a standard input size before training.</p>

        <h4 class="report-subtitle">Model Architecture</h4>
        <p>The system was built using <strong>EfficientNetB0</strong> as the feature extraction backbone, followed by custom classification layers.</p>

        <ul class="report-list">
            <li><strong>Input Layer:</strong> 224 × 224 RGB images.</li>
            <li><strong>Feature Extractor:</strong> Pretrained EfficientNetB0 network.</li>
            <li><strong>Global Average Pooling:</strong> Reduced spatial feature dimensions.</li>
            <li><strong>Batch Normalization:</strong> Improved training stability and convergence.</li>
            <li><strong>Dropout Layers:</strong> Reduced overfitting and improved generalization.</li>
            <li><strong>Dense Layer:</strong> 256 neurons for feature learning and classification.</li>
            <li><strong>Output Layer:</strong> 15-class Softmax classifier.</li>
        </ul>

        <h4 class="report-subtitle">Model Architecture Summary</h4>
        <ul class="report-list">
            <li><strong>EfficientNetB0 Parameters:</strong> 4,049,571</li>
            <li><strong>Dense Layer Parameters:</strong> 327,936</li>
            <li><strong>Output Layer Parameters:</strong> 3,855</li>
            <li><strong>Total Classes:</strong> 15 Plant Disease Categories</li>
        </ul>

        <h4 class="report-subtitle">Model Performance</h4>
        <ul class="report-list">
            <li><strong>Accuracy:</strong> 95%</li>
            <li><strong>Precision:</strong> 0.94</li>
            <li><strong>Recall:</strong> 0.96</li>
            <li><strong>F1-Score:</strong> 0.95</li>
        </ul>

        <h4 class="report-subtitle">Key Insights</h4>
        <ul class="report-list">
            <li>Transfer learning with EfficientNetB0 significantly improved classification performance.</li>
            <li>The model demonstrated strong generalization across multiple crop and disease categories.</li>
            <li>High recall indicates effective identification of diseased plants, reducing the likelihood of missed detections.</li>
            <li>Balanced precision and recall resulted in a robust overall F1-score.</li>
            <li>The architecture successfully extracted complex visual disease patterns from plant leaf images.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>The Plant Disease Detection system achieved excellent classification performance with 95% accuracy and strong precision-recall balance. By leveraging EfficientNetB0 and deep learning-based feature extraction, the model effectively identified multiple plant diseases from crop images, making it a promising solution for smart agriculture, crop monitoring, and AI-assisted farming applications.</p>
    `,
        githubLink: "https://github.com/suyash2356/Deep-Learning-Projects/tree/main/ANN/Plant%20Disease%20Prediction"
    },




    {
        id: "hand-sign-classification-tensorflow",
        category: "dl",
        title: "Multiclass Hand Sign Classification using TensorFlow",
        date: "2025-06-08",
        topic: "Computer Vision",
        algorithms: ["Deep Neural Network (DNN)", "TensorFlow"],
        datasetSize: "64×64 RGB hand sign images (6 classes)",
        images: [
            "dl/finger sign recognition.png"
        ],
        tags: ["Python", "TensorFlow", "Deep Learning", "Neural Networks", "Computer Vision", "Image Classification"],
        summary: "A multiclass image classification project that implements a fully connected deep neural network in TensorFlow to recognize hand sign gestures across six categories while demonstrating the complete deep learning training pipeline from scratch.",
        detailedReport: `
        <h4 class="report-subtitle">Project Overview</h4>
        <p>The objective of this project was to build a multiclass image classification model using TensorFlow capable of recognizing hand sign images belonging to six different categories. The implementation focused on understanding the complete deep learning workflow rather than using pretrained models.</p>

        <h4 class="report-subtitle">Model Architecture</h4>
        <ul class="report-list">
            <li><strong>Input Layer:</strong> 12,288 features (64 × 64 × 3 RGB images).</li>
            <li><strong>Hidden Layer 1:</strong> 25 neurons with ReLU activation.</li>
            <li><strong>Hidden Layer 2:</strong> 12 neurons with ReLU activation.</li>
            <li><strong>Output Layer:</strong> 6 neurons (Logits) for multiclass prediction.</li>
            <li><strong>Optimizer:</strong> Adam</li>
            <li><strong>Loss Function:</strong> Categorical Cross-Entropy (from_logits=True)</li>
        </ul>

        <h4 class="report-subtitle">Training Pipeline</h4>
        <ul class="report-list">
            <li>Applied one-hot encoding for multiclass labels.</li>
            <li>Initialized network weights using Xavier (Glorot) initialization.</li>
            <li>Implemented forward propagation using TensorFlow operations.</li>
            <li>Computed gradients automatically using <strong>GradientTape</strong>.</li>
            <li>Trained the model using mini-batch gradient descent with the Adam optimizer.</li>
        </ul>

        <h4 class="report-subtitle">Model Performance</h4>
        <ul class="report-list">
            <li><strong>Training Accuracy:</strong> 75.37%</li>
            <li><strong>Test Accuracy:</strong> 69.17%</li>
            <li><strong>Final Loss (Cost):</strong> 0.744</li>
        </ul>

        <h4 class="report-subtitle">Training Observations</h4>
        <ul class="report-list">
            <li>The training cost consistently decreased from <strong>1.83</strong> to <strong>0.74</strong>, indicating effective learning.</li>
            <li>Training and testing accuracy improved steadily throughout the optimization process.</li>
            <li>The relatively small gap between training and testing accuracy suggests good generalization with only mild overfitting.</li>
        </ul>

        <h4 class="report-subtitle">Key Learnings</h4>
        <ul class="report-list">
            <li>TensorFlow tensors and variables</li>
            <li>Forward propagation implementation</li>
            <li>Xavier (Glorot) weight initialization</li>
            <li>One-hot encoding for multiclass classification</li>
            <li>Automatic differentiation using GradientTape</li>
            <li>Mini-batch gradient descent</li>
            <li>Adam optimization algorithm</li>
            <li>Multiclass classification using categorical cross-entropy</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>This project successfully implemented a complete multiclass image classification pipeline using TensorFlow. The deep neural network learned meaningful visual representations and achieved <strong>75.37% training accuracy</strong> and <strong>69.17% test accuracy</strong>. More importantly, it provided a strong practical understanding of TensorFlow fundamentals, neural network implementation, optimization, and multiclass classification, forming a solid foundation for advanced computer vision models such as Convolutional Neural Networks (CNNs).</p>
    `,
        githubLink: "https://github.com/suyash2356/Deep-Learning-Projects/blob/main/ANN/hand_sign_recognition_using_tensorflow.ipynb"
    },




    {
        id: "crop-type-classification-sentinel2",
        category: "dl",
        title: "Crop Type Classification using Multi-Temporal Sentinel-2 Data",
        date: "2025-06-15",
        topic: "Remote Sensing & Agricultural AI",
        algorithms: ["Random Forest", "XGBoost", "LSTM"],
        datasetSize: "122,614 samples, 585 features",
        images: [
            "dl/crop classification brieze dataset.png"
        ],
        tags: ["Python", "PyTorch", "XGBoost", "LSTM", "Remote Sensing", "Deep Learning", "Satellite Imagery"],
        summary: "An end-to-end crop classification project using multi-temporal Sentinel-2 satellite observations. The project compares classical machine learning models with a deep learning LSTM architecture, demonstrating the effectiveness of sequential modeling for agricultural remote sensing data.",
        detailedReport: `
        <h4 class="report-subtitle">Project Overview</h4>
        <p>The objective of this project was to develop a complete crop type classification pipeline using multi-temporal Sentinel-2 satellite observations. Multiple machine learning and deep learning models were implemented and compared to identify the most effective approach for recognizing crop types from seasonal spectral data.</p>

        <h4 class="report-subtitle">Dataset Overview</h4>
        <ul class="report-list">
            <li><strong>Dataset:</strong> BreizhCrops (FRH04)</li>
            <li><strong>Satellite:</strong> Sentinel-2</li>
            <li><strong>Total Samples:</strong> 122,614 agricultural fields</li>
            <li><strong>Features:</strong> 585 (45 timestamps × 13 spectral bands)</li>
            <li><strong>Target Classes:</strong> 9 crop types</li>
            <li><strong>Memory Usage:</strong> ~274 MB</li>
        </ul>

        <h4 class="report-subtitle">Data Analysis & Preprocessing</h4>
        <ul class="report-list">
            <li>Performed extensive exploratory data analysis on satellite observations.</li>
            <li>Verified dataset quality with no missing values or duplicate records.</li>
            <li>Analyzed crop class imbalance, spectral band behavior, and temporal trends.</li>
            <li>Studied spectral signatures, feature variance, PCA visualization, and correlation patterns.</li>
            <li>Prepared sequential satellite observations for both classical ML and LSTM-based deep learning models.</li>
        </ul>

        <h4 class="report-subtitle">Models Evaluated</h4>

        <p><strong>Classical Machine Learning</strong></p>

        <ul class="report-list">
            <li>Random Forest (Baseline)</li>
            <li>Random Forest (GridSearchCV)</li>
            <li>Random Forest with Balanced Class Weights</li>
            <li>XGBoost (GPU Accelerated)</li>
            <li>XGBoost with RandomizedSearchCV</li>
            <li>
            <strong>ML Notebook:</strong>
            <a href="https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Decsion%20Tree/crop_classification_using_random_forest.ipynb"
            target="_blank">
            View Random Forest & XGBoost Notebook
            </a>
            </li>
        </ul>

        <p><strong>Deep Learning Model</strong></p>

        <ul class="report-list">
            <li>Two-layer LSTM Network for sequential satellite time-series classification.</li>
        </ul>

        <h4 class="report-subtitle">LSTM Architecture</h4>

        <ul class="report-list">
            <li><strong>Input:</strong> 45 temporal observations × 13 Sentinel-2 spectral bands.</li>
            <li><strong>LSTM:</strong> 2 layers, 128 hidden units, dropout = 0.3.</li>
            <li><strong>Fully Connected Layer:</strong> 128 → 64 neurons.</li>
            <li><strong>Activation:</strong> ReLU</li>
            <li><strong>Dropout:</strong> 0.3</li>
            <li><strong>Output Layer:</strong> 9 crop classes.</li>
        </ul>

        <h4 class="report-subtitle">Model Performance Comparison</h4>

        <table class="report-table">
            <tr>
                <th>Model</th>
                <th>Accuracy</th>
            </tr>
            <tr>
                <td>Random Forest (Baseline)</td>
                <td>71.06%</td>
            </tr>
            <tr>
                <td>Random Forest (Grid Search)</td>
                <td>71.19%</td>
            </tr>
            <tr>
                <td>Random Forest (Balanced)</td>
                <td>70.13%</td>
            </tr>
            <tr>
                <td>XGBoost</td>
                <td>78.28%</td>
            </tr>
            <tr>
                <td>XGBoost (Random Search)</td>
                <td>78.28%</td>
            </tr>
            <tr>
                <td><strong>LSTM (Deep Learning)</strong></td>
                <td><strong>79.61%</strong></td>
            </tr>
        </table>

        <h4 class="report-subtitle">Evaluation Metrics</h4>

        <ul class="report-list">
            <li>Accuracy</li>
            <li>Precision</li>
            <li>Recall</li>
            <li>F1-Score</li>
            <li>Confusion Matrix</li>
            <li>Feature Importance (Machine Learning Models)</li>
        </ul>

        <h4 class="report-subtitle">Key Findings</h4>

        <ul class="report-list">
            <li>Satellite spectral signatures contain sufficient information for distinguishing multiple crop types.</li>
            <li>Temporal observations significantly improve crop recognition compared to single-date measurements.</li>
            <li>XGBoost substantially outperformed Random Forest, improving accuracy by more than 7 percentage points.</li>
            <li>The LSTM model achieved the highest classification accuracy by directly learning temporal dependencies from sequential Sentinel-2 observations.</li>
            <li>Hyperparameter tuning and class balancing produced only marginal improvements compared to model architecture selection.</li>
        </ul>

        <h4 class="report-subtitle">Key Learnings</h4>

        <ul class="report-list">
            <li>Working with multi-temporal Sentinel-2 satellite data.</li>
            <li>Large-scale exploratory data analysis.</li>
            <li>Feature engineering and preprocessing for remote sensing.</li>
            <li>Random Forest and XGBoost classification.</li>
            <li>GPU-accelerated model training.</li>
            <li>Hyperparameter optimization using GridSearchCV and RandomizedSearchCV.</li>
            <li>Sequential deep learning using LSTM networks.</li>
            <li>Performance evaluation and model comparison.</li>
        </ul>

        <h4 class="report-subtitle">Conclusion</h4>
        <p>This project successfully developed an end-to-end crop classification pipeline using multi-temporal Sentinel-2 satellite observations. Classical machine learning models established strong baselines, with XGBoost achieving <strong>78.28% accuracy</strong>. By leveraging temporal dependencies directly through a two-layer LSTM network, the deep learning approach further improved performance to <strong>79.61% accuracy</strong>, making it the best-performing model in the project. The work demonstrates the importance of temporal modeling in remote sensing applications and provides a solid foundation for future research in crop monitoring, moisture stress detection, and intelligent irrigation advisory systems.</p>
    `,
        githubLink: "https://github.com/suyash2356/Deep-Learning-Projects/tree/main/LSTM/Crop%20Classification"

    },





    {
        id: "object-aware-media-editing-yolo",
        category: "dl",
        title: "Object-Aware Image & Video Editing using YOLO",
        date: "2026-08-20",
        topic: "Computer Vision & Object Detection",
        algorithms: [
            "YOLO11",
            "Object Detection",
            "Instance Segmentation",
            "ByteTrack Object Tracking"
        ],
        datasetSize: "COCO dataset subset with 80 object classes",
        images: [
            "dl/Screenshot 2026-08-20 144425.png"
        ],
        tags: [
            "Python",
            "PyTorch",
            "Ultralytics",
            "YOLO",
            "Object Detection",
            "Instance Segmentation",
            "Object Tracking",
            "Computer Vision",
            "Image Processing",
            "Video Processing",
            "OpenCV",
            "Streamlit"
        ],
        summary: "An end-to-end computer vision project that uses YOLO-based object detection and instance segmentation to build a practical object-aware media editing system. The project progresses from YOLO fundamentals and custom object detection to segmentation, object-specific image editing, video tracking, and a local Streamlit interface for interactive use.",
        "detailedReport": `
    <h4 class="report-subtitle">Project Overview</h4>
    <p>The objective of this project was to move beyond basic YOLO object detection and build a practical computer vision system that can understand objects in images and videos and perform object-specific editing operations.</p>

    <p>The project was developed progressively through multiple stages, covering YOLO fundamentals, custom object detection, general-purpose object segmentation, object-aware image editing, video tracking, and finally a simple local web interface for using the complete system.</p>

    <h4 class="report-subtitle">Stage 1 — YOLO Fundamentals</h4>
    <ul class="report-list">
      <li>Learned the basic object detection pipeline using YOLO.</li>
      <li>Understood bounding boxes, confidence scores, and class predictions.</li>
      <li>Explored the complete flow from image input to detected objects.</li>
    </ul>

    <h4 class="report-subtitle">Stage 2 — Custom Object Detection</h4>
    <p>A custom object detection workflow was developed to understand training YOLO on application-specific classes rather than relying only on pretrained COCO classes.</p>

    <h4 class="report-subtitle">Stage 3 — General Object Detection Model</h4>
    <p>A YOLO object detection model was trained using an 80-class COCO subset containing common everyday objects.</p>

    <ul class="report-list">
      <li><strong>Classes:</strong> 80 COCO object categories</li>
      <li><strong>Training Images:</strong> 9,985</li>
      <li><strong>Validation Images:</strong> 1,997</li>
      <li><strong>Model:</strong> YOLO-based object detector</li>
      <li><strong>Saved Model:</strong> best.pt</li>
    </ul>

    <h4 class="report-subtitle">Stage 3 — Model Performance</h4>
    <ul class="report-list">
      <li><strong>Best mAP50-95:</strong> 0.41361</li>
      <li><strong>Best mAP50:</strong> 0.575</li>
      <li><strong>Best Precision:</strong> 0.67097</li>
      <li><strong>Best Recall:</strong> 0.52513</li>
      <li><strong>Best F1-Score:</strong> 0.58916</li>
    </ul>

    <h4 class="report-subtitle">Stage 4 — Instance Segmentation</h4>
    <p>The project was extended from bounding-box detection to pixel-level object segmentation using a pretrained YOLO11n segmentation model. This enabled the system to identify the exact pixels belonging to detected objects.</p>

    <ul class="report-list">
      <li>Object detection with class and confidence information.</li>
      <li>Pixel-level instance segmentation masks.</li>
      <li>Transparent object extraction.</li>
      <li>Object-specific cropping.</li>
      <li>Object-specific blurring.</li>
      <li>Object highlighting.</li>
    </ul>

    <p>The segmentation pipeline was practically validated using common COCO objects. For example, a cat was detected with approximately 0.905 confidence and successfully converted into a pixel-level mask for extraction, blurring, and highlighting operations.</p>

    <h4 class="report-subtitle">Stage 5 — Video Processing & Tracking</h4>
    <p>The system was extended to video by combining YOLO segmentation with ByteTrack object tracking. Objects can be detected and tracked across consecutive video frames while applying object-specific processing.</p>

    <ul class="report-list">
      <li><strong>Object Tracking:</strong> Maintains object identities across video frames.</li>
      <li><strong>Object Blur:</strong> Automatically blurs selected object classes throughout a video.</li>
      <li><strong>Object Highlight:</strong> Highlights selected objects while reducing the visibility of the background.</li>
      <li><strong>Tracked Visualization:</strong> Displays detected objects and tracking information.</li>
    </ul>

    <p>A practical example demonstrated automatic blurring of people throughout a video while leaving the surrounding environment relatively unaffected.</p>

    <h4 class="report-subtitle">Stage 6 — Interactive Application</h4>
    <p>A local Streamlit-based web interface was developed to make the trained models and processing functions easier to use without directly interacting with the underlying Python functions.</p>

    <p>The interface provides separate workflows for images and videos.</p>

    <ul class="report-list">
      <li><strong>Image Input:</strong> Upload an image and select a detected object.</li>
      <li><strong>Image Operations:</strong> Detect, blur, highlight, extract, and crop objects.</li>
      <li><strong>Video Input:</strong> Upload a video for object-aware processing.</li>
      <li><strong>Video Operations:</strong> Track, blur, and highlight selected object classes.</li>
      <li><strong>Adjustable Confidence:</strong> Allows users to control detection sensitivity.</li>
      <li><strong>Inference Resolution:</strong> Provides a configurable speed-versus-quality trade-off.</li>
      <li><strong>GPU Acceleration:</strong> Uses CUDA when an NVIDIA GPU is available.</li>
      <li><strong>Download:</strong> Processed images and videos can be saved locally.</li>
    </ul>

    <h4 class="report-subtitle">System Architecture</h4>
    <p>The final system follows an object-aware media processing pipeline:</p>

    <ul class="report-list">
      <li><strong>Image:</strong> Image → YOLO Segmentation → Object → Mask → Editing Operation → Output Image</li>
      <li><strong>Video:</strong> Video → YOLO Segmentation → Object Tracking → Object Mask → Editing Operation → Output Video</li>
    </ul>

    <h4 class="report-subtitle">Key Applications</h4>
    <ul class="report-list">
      <li>Privacy-oriented video editing through automatic object/person blurring.</li>
      <li>Creating transparent object cutouts for presentations and graphic design.</li>
      <li>Highlighting specific objects in educational or college presentations.</li>
      <li>Object-aware image preprocessing.</li>
      <li>Object-focused video analysis and visualization.</li>
      <li>Reusable computer vision experimentation platform.</li>
    </ul>

    <h4 class="report-subtitle">Key Learnings</h4>
    <ul class="report-list">
      <li>YOLO object detection fundamentals.</li>
      <li>Bounding boxes, confidence scores, and class predictions.</li>
      <li>Training and evaluating custom YOLO detection models.</li>
      <li>Precision, recall, F1-score, mAP50, and mAP50-95.</li>
      <li>Instance segmentation and pixel-level masks.</li>
      <li>Object-aware image processing using OpenCV.</li>
      <li>Object tracking using ByteTrack.</li>
      <li>Video processing with OpenCV.</li>
      <li>GPU-accelerated inference using CUDA.</li>
      <li>Building a practical local AI application with Streamlit.</li>
    </ul>

    <h4 class="report-subtitle">Conclusion</h4>
    <p>This project developed an end-to-end object-aware media processing system rather than stopping at basic object detection. Starting from YOLO fundamentals, the project progressed through object detection, instance segmentation, image editing, video tracking, and interactive application development. The final system demonstrates how object detection and segmentation can be transformed into practical tools for image and video editing, including object extraction, highlighting, privacy blurring, and tracked video processing.</p>
  `,
        githubLink: "https://github.com/suyash2356/Deep-Learning-Projects/blob/main/CNN/Object%20detection%20%26%20segmentation/Notebooks/object_ware_editing_segmentation.ipynb"
    },






    {
        id: "cnn-face-recognition-yunet-resnet50",
        category: "dl",
        title: "Real-Time Face Recognition using CNN, ResNet-50 & YuNet",
        date: "2026-09-09",
        topic: "Computer Vision, Face Detection & Face Recognition",

        algorithms: [
            "CNN",
            "ResNet-50",
            "Transfer Learning",
            "YuNet Face Detection",
            "512-D Face Embeddings",
            "Multi-Class Classification",
            "OpenCV Face Enhancement",
            "Face Preprocessing",
            "Real-Time Face Detection",
            "Video Face Recognition"
        ],

        datasetSize: "LFW DeepFunneled dataset subset with 10 public-figure identities + 28 personal face images, organized into 11 classes",

        images: [
            "dl/face recognition.png"
        ],

        tags: [
            "Python",
            "PyTorch",
            "TorchVision",
            "ResNet-50",
            "CNN",
            "Transfer Learning",
            "Computer Vision",
            "Face Recognition",
            "Face Detection",
            "YuNet",
            "OpenCV",
            "Deep Learning",
            "Image Processing",
            "Video Processing",
            "Real-Time AI",
            "Face Embedding",
            "Streamlit",
            "CUDA",
            "GPU Acceleration"
        ],

        summary: "An end-to-end deep learning face recognition system built using PyTorch, a pretrained ResNet-50 CNN, YuNet face detection, OpenCV-based face enhancement, and 512-dimensional face embeddings. The project processes images, video frames, and live webcam input through a consistent face detection and preprocessing pipeline before performing identity classification. A Streamlit interface was also developed to provide an interactive environment for image-based recognition and experimental video/webcam workflows.",

        "detailedReport": `
    <h4 class="report-subtitle">Project Overview</h4>

    <p>The objective of this project was to build a complete computer vision system capable of detecting and recognizing human faces from images, videos, and live webcam streams rather than relying only on a simple image classification model.</p>

    <p>The project was developed as a deep learning and CNN-based experimentation pipeline. It combines a pretrained ResNet-50 backbone with transfer learning, YuNet for face detection, OpenCV-based image enhancement, standardized face preprocessing, CNN feature extraction, and a custom classification head for identity recognition.</p>

    <p>The final system was also integrated into a local Streamlit application to provide an interactive interface for testing the trained face recognition pipeline.</p>


    <h4 class="report-subtitle">Project Goals</h4>

    <ul class="report-list">
      <li>Detect human faces reliably from real-world images.</li>
      <li>Extract a standardized face region from the original image.</li>
      <li>Improve low-quality face crops using lightweight OpenCV enhancement techniques.</li>
      <li>Use transfer learning with ResNet-50 to learn discriminative facial representations.</li>
      <li>Generate compact 512-dimensional face embeddings.</li>
      <li>Recognize faces belonging to the trained identity classes.</li>
      <li>Return an Unknown result when the recognition confidence is insufficient.</li>
      <li>Extend the recognition pipeline toward image, video, and live webcam applications.</li>
      <li>Build an interactive Streamlit interface for practical experimentation.</li>
    </ul>


    <h4 class="report-subtitle">Stage 1 — Dataset Preparation & Face Preprocessing</h4>

    <p>The first stage established a consistent preprocessing pipeline so that training images and real-world inference images would pass through the same major processing steps.</p>

    <p>The project uses the Labeled Faces in the Wild (LFW) DeepFunneled dataset as the primary public dataset. Instead of using all identities, a manageable subset of identities was selected for the custom recognition experiment. A separate personal face class was also added to test recognition using the developer's own images.</p>

    <ul class="report-list">
      <li><strong>Base Dataset:</strong> LFW DeepFunneled</li>
      <li><strong>Selected Public Identities:</strong> 10</li>
      <li><strong>Personal Identity:</strong> My_Face</li>
      <li><strong>Total Classes:</strong> 11</li>
      <li><strong>Personal Images:</strong> 28 original images</li>
      <li><strong>Training Samples:</strong> 1,191</li>
      <li><strong>Validation Samples:</strong> 293</li>
      <li><strong>Input Resolution:</strong> 224 × 224 pixels</li>
    </ul>

    <p>The selected public identities were George W. Bush, Colin Powell, Tony Blair, Donald Rumsfeld, Gerhard Schroeder, Ariel Sharon, Hugo Chavez, Junichiro Koizumi, Jean Chretien, and John Ashcroft, together with the custom My_Face class.</p>


    <h4 class="report-subtitle">Stage 1 — YuNet Face Detection</h4>

    <p>Instead of sending the complete image directly into the recognition network, the system first detects the actual face region using OpenCV's YuNet face detector.</p>

    <p>This was an important architectural improvement over the initial Haar Cascade based approach because real-world images can contain large backgrounds, multiple objects, small faces, and distracting regions. YuNet provides a bounding box and detection confidence for each detected face.</p>

    <ul class="report-list">
      <li>Input image is passed to YuNet.</li>
      <li>Multiple candidate faces can be detected.</li>
      <li>The most relevant/largest face is selected for the recognition pipeline.</li>
      <li>A face bounding box is extracted from the original image.</li>
      <li>Detection confidence is recorded separately from recognition confidence.</li>
    </ul>

    <p>The separation between detection confidence and recognition confidence is important. A high face-detection score does not mean that the identity prediction is correct.</p>


    <h4 class="report-subtitle">Stage 1 — OpenCV Face Enhancement</h4>

    <p>A lightweight Level-1 enhancement pipeline was implemented using OpenCV rather than introducing a separate super-resolution or image-restoration neural network.</p>

    <p>The objective was to improve the visual quality of detected face crops before they were passed to the CNN.</p>

    <ul class="report-list">
      <li>Face crop extraction.</li>
      <li>Local contrast enhancement.</li>
      <li>Illumination improvement.</li>
      <li>Sharpening/detail enhancement.</li>
      <li>Noise-aware processing.</li>
      <li>Final resizing to the model input resolution.</li>
    </ul>

    <p>This preprocessing stage was particularly useful for low-light and distant faces where the detected face contained limited visual detail. The enhancement process was deliberately kept lightweight so that it could also be used during real-time inference.</p>


    <h4 class="report-subtitle">Stage 2 — CNN Transfer Learning Model</h4>

    <p>The recognition model was developed using a pretrained ResNet-50 convolutional neural network. ResNet-50 was selected as the feature extraction backbone because it provides a strong convolutional representation while remaining practical for GPU-based experimentation.</p>

    <p>The pretrained ImageNet classification layer was replaced with a custom face-recognition architecture. Instead of using the original ImageNet classes, the network was adapted to learn representations for the project's 11 identity classes.</p>

    <ul class="report-list">
      <li><strong>Backbone:</strong> ResNet-50</li>
      <li><strong>Framework:</strong> PyTorch / TorchVision</li>
      <li><strong>Pretraining:</strong> ImageNet</li>
      <li><strong>Input:</strong> 224 × 224 RGB face images</li>
      <li><strong>Feature Representation:</strong> 512-dimensional embedding</li>
      <li><strong>Output:</strong> 11 identity classes</li>
      <li><strong>Training:</strong> Transfer learning with a custom recognition head</li>
      <li><strong>Hardware:</strong> NVIDIA CUDA GPU when available</li>
    </ul>


    <h4 class="report-subtitle">Stage 2 — Training Preprocessing</h4>

    <p>The training pipeline was designed so that the same fundamental preprocessing philosophy could be reproduced during inference.</p>

    <p>The processing flow is:</p>

    <ul class="report-list">
      <li>Original image</li>
      <li>YuNet face detection</li>
      <li>Face crop</li>
      <li>OpenCV enhancement</li>
      <li>Resize to 224 × 224</li>
      <li>Training-time augmentation</li>
      <li>Tensor conversion</li>
      <li>Normalization</li>
      <li>ResNet-50 feature extraction</li>
      <li>512-dimensional embedding generation</li>
      <li>Identity classification</li>
    </ul>


    <h4 class="report-subtitle">Stage 2 — Data Augmentation</h4>

    <p>Because the dataset contains a significant difference in the number of images available for different identities, training-time augmentation was incorporated to expose the model to additional variations of the available training faces.</p>

    <ul class="report-list">
      <li>Small geometric variations.</li>
      <li>Image appearance and illumination variations.</li>
      <li>Controlled image transformations.</li>
      <li>Variation in face presentation while preserving identity.</li>
    </ul>

    <p>Augmentation was applied only to training data. Validation images were kept separate so that model performance could be measured on unseen examples.</p>


    <h4 class="report-subtitle">Stage 2 — Model Evaluation</h4>

    <p>The trained model was evaluated on a separate validation set containing 293 samples. The best checkpoint achieved a validation accuracy of 70.31%.</p>

    <ul class="report-list">
      <li><strong>Best Validation Accuracy:</strong> 70.31%</li>
      <li><strong>Validation Samples:</strong> 293</li>
      <li><strong>Macro Precision:</strong> 0.71</li>
      <li><strong>Macro Recall:</strong> 0.69</li>
      <li><strong>Macro F1-Score:</strong> 0.68</li>
      <li><strong>Weighted Precision:</strong> 0.74</li>
      <li><strong>Weighted Recall:</strong> 0.70</li>
      <li><strong>Weighted F1-Score:</strong> 0.71</li>
    </ul>

    <p>The training and validation curves were also monitored through loss and accuracy plots to identify learning behavior and potential overfitting.</p>


    <h4 class="report-subtitle">Stage 2 — Class-Wise Evaluation</h4>

    <p>The confusion matrix and classification report were used to understand how individual identities performed rather than relying only on overall accuracy.</p>

    <p>The custom My_Face class achieved 100% precision, 100% recall, and 100% F1-score on its five validation samples. However, this result should be interpreted carefully because the number of validation samples for the personal class was very small.</p>

    <p>The evaluation also demonstrated the effect of class imbalance. Larger classes such as George_W_Bush and Colin_Powell had considerably more validation examples than smaller identities, resulting in different precision and recall characteristics across classes.</p>


    <h4 class="report-subtitle">Stage 3 — Complete Face Recognition Pipeline</h4>

    <p>The third stage connected the trained CNN model with the complete preprocessing and detection system.</p>

    <p>The final image inference pipeline follows:</p>

    <ul class="report-list">
      <li><strong>Input:</strong> Original image</li>
      <li><strong>Detection:</strong> YuNet</li>
      <li><strong>Localization:</strong> Face bounding box</li>
      <li><strong>Enhancement:</strong> OpenCV processing</li>
      <li><strong>Preprocessing:</strong> Resize and normalization</li>
      <li><strong>Feature Extraction:</strong> ResNet-50</li>
      <li><strong>Embedding:</strong> 512-dimensional vector</li>
      <li><strong>Recognition:</strong> Custom identity classifier</li>
      <li><strong>Decision:</strong> Known identity or Unknown</li>
    </ul>

    <p>The system reports detection confidence independently from recognition confidence and displays the top identity predictions when required.</p>


    <h4 class="report-subtitle">Stage 3 — Unknown Person Handling</h4>

    <p>The recognition pipeline does not automatically assume that every detected face belongs to one of the trained identities.</p>

    <p>A confidence threshold is used to distinguish between a sufficiently confident known prediction and an Unknown result. This is particularly important for real-world usage because the system may encounter people who were never present in the training dataset.</p>

    <p>For example, a detected face may receive the following ranking:</p>

    <ul class="report-list">
      <li>My_Face — highest predicted probability</li>
      <li>Colin_Powell — second prediction</li>
      <li>George_W_Bush — third prediction</li>
      <li>Other identities — remaining predictions</li>
    </ul>

    <p>If the top prediction does not reach the required recognition confidence, the system reports the face as <strong>Unknown</strong> rather than forcing an identity.</p>


    <h4 class="report-subtitle">Real-World Recognition Testing</h4>

    <p>The model was tested using personal photographs captured under substantially different conditions, including outdoor environments, sunglasses, different distances, lighting conditions, poses, and backgrounds.</p>

    <p>These experiments exposed an important limitation of the current model: although the personal identity frequently appeared as the top prediction, the probability distribution could remain low in difficult real-world images. This demonstrated the difference between closed-set validation performance and robust real-world face recognition.</p>

    <p>The project therefore served not only as a recognition implementation but also as an experiment in understanding dataset imbalance, preprocessing consistency, transfer learning limitations, and the challenges of open-world face recognition.</p>


    <h4 class="report-subtitle">Stage 4 — Interactive Streamlit Application</h4>

    <p>A local Streamlit web interface was developed to make the face recognition system easier to test without directly executing individual Python functions.</p>

    <p>The application was designed around three major input modes:</p>

    <ul class="report-list">
      <li><strong>Image:</strong> Upload an image and process detected faces.</li>
      <li><strong>Video:</strong> Upload a video for frame-by-frame face processing.</li>
      <li><strong>Live Webcam:</strong> Use the connected camera for real-time face detection and recognition experiments.</li>
    </ul>

    <p>The application integrates the YuNet detector, preprocessing pipeline, enhancement system, trained PyTorch model, and recognition logic into a single interface.</p>


    <h4 class="report-subtitle">Video & Real-Time Processing Architecture</h4>

    <p>The video and webcam workflows were designed around frame-level processing rather than treating the complete video as a single input.</p>

    <ul class="report-list">
      <li>Capture video frame.</li>
      <li>Run face detection.</li>
      <li>Extract detected face region.</li>
      <li>Apply the same preprocessing pipeline.</li>
      <li>Generate CNN representation.</li>
      <li>Predict identity.</li>
      <li>Draw bounding box and recognition information.</li>
      <li>Repeat for subsequent frames.</li>
    </ul>

    <p>This architecture provides the foundation for real-time recognition and future multi-object/person tracking improvements.</p>


    <h4 class="report-subtitle">Model & File Structure</h4>

    <p>The project was organized into separate components for data, models, detection, preprocessing, notebooks, and the Streamlit application.</p>

    <ul class="report-list">
      <li><strong>Dataset:</strong> LFW DeepFunneled + custom My_Face images</li>
      <li><strong>Detection Model:</strong> YuNet ONNX model</li>
      <li><strong>Recognition Model:</strong> face_recognition_resnet50.pth</li>
      <li><strong>Deep Learning Framework:</strong> PyTorch</li>
      <li><strong>Computer Vision:</strong> OpenCV</li>
      <li><strong>Application:</strong> Streamlit</li>
      <li><strong>Development:</strong> Jupyter/VS Code notebooks and Python modules</li>
    </ul>


    <h4 class="report-subtitle">System Architecture</h4>

    <p>The complete architecture can be represented as:</p>

    <ul class="report-list">
      <li><strong>Image:</strong> Image → YuNet → Face Crop → OpenCV Enhancement → Preprocessing → ResNet-50 → 512-D Embedding → Classifier → Identity / Unknown</li>
      <li><strong>Video:</strong> Video → Frame Extraction → YuNet → Face Crop → Preprocessing → ResNet-50 → Identity Prediction → Annotated Frame</li>
      <li><strong>Webcam:</strong> Camera → Live Frames → YuNet → Face Crop → Preprocessing → ResNet-50 → Identity Prediction → Real-Time Visualization</li>
    </ul>


    <h4 class="report-subtitle">Confidence & Recognition Analysis</h4>

    <p>The project explicitly separates three concepts that are often incorrectly treated as the same metric:</p>

    <ul class="report-list">
      <li><strong>Detection Confidence:</strong> How confidently YuNet believes a region contains a face.</li>
      <li><strong>Recognition Confidence:</strong> How strongly the recognition model favors the predicted identity.</li>
      <li><strong>Validation Accuracy:</strong> How often the trained classifier predicts the correct class on the held-out validation dataset.</li>
    </ul>

    <p>This distinction became particularly important during real-world testing. A face could be detected with high YuNet confidence while the recognition model remained uncertain about the person's identity.</p>


    <h4 class="report-subtitle">Technical Challenges & Lessons</h4>

    <ul class="report-list">
      <li>Handling differences between training images and real-world camera images.</li>
      <li>Maintaining consistent preprocessing between training and inference.</li>
      <li>Detecting small or poorly illuminated faces.</li>
      <li>Reducing false face detections from complex backgrounds.</li>
      <li>Handling class imbalance in the LFW subset.</li>
      <li>Understanding the difference between classification confidence and genuine identity similarity.</li>
      <li>Loading custom PyTorch checkpoints with matching architecture definitions.</li>
      <li>Integrating ONNX-based YuNet detection with a PyTorch recognition model.</li>
      <li>Using CUDA acceleration for CNN inference.</li>
      <li>Building an interactive application around the trained model.</li>
    </ul>


    <h4 class="report-subtitle">Key Applications</h4>

    <ul class="report-list">
      <li>Experimental face recognition from photographs.</li>
      <li>Real-time webcam face recognition research.</li>
      <li>Video-based identity detection.</li>
      <li>Face dataset and preprocessing experimentation.</li>
      <li>Computer vision model evaluation.</li>
      <li>Real-time AI interface development.</li>
      <li>Foundation for future person-search and tracking systems.</li>
    </ul>


    <h4 class="report-subtitle">Future Improvements</h4>

    <p>The current system provides a strong foundation, but robust real-world face recognition requires improvements beyond simple multi-class classification.</p>

    <ul class="report-list">
      <li>Increase the number of genuine images for each identity.</li>
      <li>Use stronger balanced data augmentation.</li>
      <li>Apply class-balanced sampling during training.</li>
      <li>Experiment with weighted loss functions.</li>
      <li>Improve face alignment before recognition.</li>
      <li>Use a face-specific pretrained representation model.</li>
      <li>Move from closed-set classification toward embedding-based face similarity.</li>
      <li>Use cosine similarity or distance-based identity matching.</li>
      <li>Implement robust multi-face tracking across video frames.</li>
      <li>Improve small and distant face recognition.</li>
      <li>Explore advanced image enhancement and super-resolution techniques.</li>
    </ul>


    <h4 class="report-subtitle">Key Learnings</h4>

    <ul class="report-list">
      <li>Convolutional neural network fundamentals.</li>
      <li>Transfer learning with ResNet-50.</li>
      <li>Face detection using YuNet.</li>
      <li>Face cropping and preprocessing.</li>
      <li>OpenCV image enhancement.</li>
      <li>Training-time data augmentation.</li>
      <li>512-dimensional feature embeddings.</li>
      <li>Multi-class face identity classification.</li>
      <li>Confusion matrix analysis.</li>
      <li>Precision, recall, F1-score, and validation accuracy.</li>
      <li>PyTorch checkpoint management.</li>
      <li>CUDA/GPU accelerated inference.</li>
      <li>Real-time video frame processing.</li>
      <li>Streamlit AI application development.</li>
      <li>Practical limitations of small and imbalanced datasets.</li>
      <li>Difference between face detection and face recognition.</li>
      <li>Difference between closed-set classification and open-world recognition.</li>
    </ul>


    <h4 class="report-subtitle">Conclusion</h4>

    <p>This project developed an end-to-end CNN-based face recognition system combining YuNet face detection, OpenCV enhancement, ResNet-50 transfer learning, 512-dimensional facial representations, identity classification, and an interactive Streamlit interface.</p>

    <p>The model achieved 70.31% overall validation accuracy across the 11-class experiment, while the custom My_Face validation class achieved perfect metrics on its small five-image validation subset. Real-world testing, however, revealed that strong validation performance does not automatically translate into robust recognition under changes in lighting, pose, distance, accessories, and background.</p>

    <p>This limitation became an important part of the project rather than simply an error: it demonstrated why modern face-recognition systems generally require stronger face-specific representations, balanced datasets, alignment, augmentation, and similarity-based embedding matching rather than relying solely on closed-set classification.</p>

    <p>The resulting system provides a practical foundation for future development toward a more advanced real-time AI vision system capable of recognizing and tracking known individuals across images, videos, and live camera streams.</p>
  `,

        githubLink: "https://github.com/suyash2356/Deep-Learning-Projects/tree/main/CNN/Face%20Recognition%20Model"
    },





    {
        id: "fashion-mnist-ann-cnn-vgg16",
        category: "dl",
        title: "Fashion-MNIST Image Classification using ANN, CNN & VGG16",
        date: "2026-08-XX",
        topic: "Deep Learning & Image Classification",

        algorithms: [
            "Artificial Neural Network (ANN)",
            "Convolutional Neural Network (CNN)",
            "VGG16",
            "Transfer Learning",
            "Image Classification"
        ],

        datasetSize: "Fashion-MNIST subset with approximately 6,000 images across 10 classes",

        images: [
            "dl/fashion mnist.png"
        ],

        tags: [
            "Python",
            "PyTorch",
            "Deep Learning",
            "ANN",
            "CNN",
            "VGG16",
            "Transfer Learning",
            "Fashion-MNIST",
            "Image Classification",
            "Computer Vision",
            "Neural Networks",
            "Convolutional Neural Networks",
            "TorchVision",
            "Model Evaluation"
        ],

        summary: "A comparative deep learning image-classification project developed using PyTorch on a subset of the Fashion-MNIST dataset. The project progressively implements a fully connected ANN baseline, a custom CNN with BatchNorm and Dropout, and a pretrained VGG16 transfer-learning model. The experiment demonstrates how preserving spatial information with CNNs and leveraging pretrained visual features can improve image classification performance.",

        "detailedReport": `
    <h4 class="report-subtitle">Project Overview</h4>

    <p>The objective of this project was to understand the progression of deep learning approaches for image classification by implementing and comparing three different neural network architectures using the Fashion-MNIST dataset.</p>

    <p>The project starts with a basic Artificial Neural Network (ANN) as a baseline, progresses to a custom Convolutional Neural Network (CNN) capable of learning spatial and local visual patterns, and finally applies transfer learning using a pretrained VGG16 architecture.</p>

    <p>All models were implemented using PyTorch, allowing the complete training and evaluation pipeline to be developed within a consistent deep learning framework.</p>


    <h4 class="report-subtitle">Dataset</h4>

    <p>Fashion-MNIST was used as the image classification dataset. The experiment used a smaller subset of the original dataset to provide a manageable environment for training and comparing different architectures.</p>

    <ul class="report-list">
      <li><strong>Dataset:</strong> Fashion-MNIST</li>
      <li><strong>Task:</strong> Image Classification</li>
      <li><strong>Dataset Size:</strong> Approximately 6,000 images</li>
      <li><strong>Number of Classes:</strong> 10</li>
      <li><strong>Image Resolution:</strong> 28 × 28 pixels</li>
      <li><strong>Channels:</strong> 1 (Grayscale)</li>
      <li><strong>Framework:</strong> PyTorch</li>
    </ul>

    <p>The dataset contains grayscale images belonging to ten different categories of fashion-related objects. The compact 28 × 28 image format makes Fashion-MNIST suitable for experimenting with fundamental neural network and CNN architectures.</p>


    <h4 class="report-subtitle">Stage 1 — ANN Baseline</h4>

    <p>The first model was a fully connected Artificial Neural Network used as the baseline for the experiment.</p>

    <p>Since a fully connected network expects a one-dimensional feature vector, each 28 × 28 grayscale image was flattened before being passed into the network.</p>

    <ul class="report-list">
      <li><strong>Original Input:</strong> 1 × 28 × 28</li>
      <li><strong>Flattened Input:</strong> 784 features</li>
      <li><strong>Output Classes:</strong> 10</li>
    </ul>

    <p>The architecture was:</p>

    <ul class="report-list">
      <li>784 input features</li>
      <li>Linear layer: 784 → 128</li>
      <li>ReLU activation</li>
      <li>Linear layer: 128 → 64</li>
      <li>ReLU activation</li>
      <li>Linear layer: 64 → 10</li>
    </ul>

    <p>The ANN achieved a <strong>test accuracy of 84.17%</strong> and served as the baseline against which the CNN and transfer-learning approaches were compared.</p>


    <h4 class="report-subtitle">Stage 1 — ANN Architecture</h4>

    <p>The complete ANN architecture can be represented as:</p>

    <ul class="report-list">
      <li><strong>Input:</strong> 784</li>
      <li>↓</li>
      <li><strong>Linear:</strong> 784 → 128</li>
      <li>↓</li>
      <li><strong>ReLU</strong></li>
      <li>↓</li>
      <li><strong>Linear:</strong> 128 → 64</li>
      <li>↓</li>
      <li><strong>ReLU</strong></li>
      <li>↓</li>
      <li><strong>Linear:</strong> 64 → 10</li>
      <li>↓</li>
      <li><strong>10-Class Prediction</strong></li>
    </ul>

    <p>Although the ANN provides a strong baseline, flattening the image removes the explicit two-dimensional spatial structure before the network processes the data.</p>


    <h4 class="report-subtitle">Stage 2 — Custom CNN</h4>

    <p>The second model was a custom Convolutional Neural Network designed specifically to preserve and learn spatial information from the 28 × 28 images.</p>

    <p>Unlike the ANN, the CNN processes the image using convolutional filters before flattening the learned feature maps. Batch Normalization was used to improve training behavior, while Max Pooling progressively reduced the spatial dimensions.</p>

    <p>The architecture was:</p>

    <ul class="report-list">
      <li><strong>Input:</strong> 1 × 28 × 28</li>
      <li>↓</li>
      <li><strong>Conv2d:</strong> 1 → 32, kernel 3 × 3</li>
      <li>↓</li>
      <li><strong>ReLU</strong></li>
      <li>↓</li>
      <li><strong>BatchNorm</strong></li>
      <li>↓</li>
      <li><strong>MaxPool:</strong> 2 × 2</li>
      <li>↓</li>
      <li><strong>Conv2d:</strong> 32 → 64, kernel 3 × 3</li>
      <li>↓</li>
      <li><strong>ReLU</strong></li>
      <li>↓</li>
      <li><strong>BatchNorm</strong></li>
      <li>↓</li>
      <li><strong>MaxPool:</strong> 2 × 2</li>
      <li>↓</li>
      <li><strong>Flatten</strong></li>
      <li>↓</li>
      <li><strong>Linear:</strong> 3136 → 128</li>
      <li>↓</li>
      <li><strong>ReLU</strong></li>
      <li>↓</li>
      <li><strong>Dropout:</strong> 0.4</li>
      <li>↓</li>
      <li><strong>Linear:</strong> 128 → 64</li>
      <li>↓</li>
      <li><strong>ReLU</strong></li>
      <li>↓</li>
      <li><strong>Dropout:</strong> 0.4</li>
      <li>↓</li>
      <li><strong>Linear:</strong> 64 → 10</li>
    </ul>

    <p>The CNN achieved a <strong>test accuracy of 87.42%</strong>, improving upon the ANN baseline by <strong>3.25 percentage points</strong>.</p>


    <h4 class="report-subtitle">Stage 2 — CNN Improvements over ANN</h4>

    <p>The improvement over the ANN demonstrates the advantage of convolutional architectures for image data.</p>

    <ul class="report-list">
      <li>Convolutional filters learn local visual patterns.</li>
      <li>Spatial relationships between neighboring pixels are preserved.</li>
      <li>Pooling reduces spatial dimensions while retaining important features.</li>
      <li>Batch Normalization supports more stable training.</li>
      <li>Dropout helps reduce overfitting in the fully connected layers.</li>
    </ul>

    <p>The CNN therefore provides a more appropriate architecture for image data than simply flattening the input into a feature vector.</p>


    <h4 class="report-subtitle">Stage 3 — VGG16 Transfer Learning</h4>

    <p>The final model used transfer learning with the pretrained VGG16 architecture. Instead of training the complete visual representation from scratch, VGG16 was used as a pretrained feature extractor and its classifier was adapted for the ten Fashion-MNIST classes.</p>

    <p>The custom classifier replaced the original classification layers with a new architecture suitable for the Fashion-MNIST task.</p>

    <p>The classifier architecture was:</p>

    <ul class="report-list">
      <li><strong>Input Features:</strong> 25,088</li>
      <li><strong>Linear:</strong> 25,088 → 1,024</li>
      <li><strong>ReLU</strong></li>
      <li><strong>Dropout:</strong> 0.5</li>
      <li><strong>Linear:</strong> 1,024 → 512</li>
      <li><strong>ReLU</strong></li>
      <li><strong>Dropout:</strong> 0.5</li>
      <li><strong>Linear:</strong> 512 → 10</li>
    </ul>

    <p>The VGG16 transfer-learning model achieved a <strong>test accuracy of 88.42%</strong>, producing the best result among the three evaluated approaches.</p>


    <h4 class="report-subtitle">Stage 3 — Transfer Learning Approach</h4>

    <p>The transfer-learning experiment demonstrated how pretrained convolutional features can be reused for a new classification task instead of learning all visual representations from scratch.</p>

    <p>The original VGG16 classifier was replaced with a custom classifier designed for the ten Fashion-MNIST categories. This allowed the pretrained network to act as a feature extractor while adapting the final prediction layers to the target dataset.</p>


    <h4 class="report-subtitle">Model Comparison</h4>

    <p>The three models were evaluated using test accuracy:</p>

    <ul class="report-list">
      <li><strong>ANN:</strong> 84.17%</li>
      <li><strong>Custom CNN:</strong> 87.42%</li>
      <li><strong>VGG16 Transfer Learning:</strong> 88.42%</li>
    </ul>

    <p>The results demonstrate a gradual improvement as the architecture becomes more suitable for visual feature learning.</p>


    <h4 class="report-subtitle">Performance Improvements</h4>

    <ul class="report-list">
      <li><strong>CNN vs ANN:</strong> +3.25 percentage points</li>
      <li><strong>VGG16 vs ANN:</strong> +4.25 percentage points</li>
      <li><strong>VGG16 vs CNN:</strong> +1.00 percentage point</li>
    </ul>

    <p>The VGG16 transfer-learning model achieved the highest test accuracy with an overall performance of <strong>88.42%</strong>.</p>


    <h4 class="report-subtitle">Results Summary</h4>

    <p>The progression of the evaluated models was:</p>

    <ul class="report-list">
      <li><strong>ANN → 84.17%</strong></li>
      <li><strong>Custom CNN → 87.42%</strong></li>
      <li><strong>VGG16 Transfer Learning → 88.42%</strong></li>
    </ul>

    <p>The experiment demonstrates that moving from a fully connected architecture to convolution-based feature extraction improves performance on image data, while transfer learning can provide an additional improvement by leveraging pretrained visual representations.</p>


    <h4 class="report-subtitle">Evaluation Method</h4>

    <p>Each model was evaluated using test-set classification accuracy. The primary objective was to compare the effectiveness of different neural network architectures on the same image classification task.</p>

    <ul class="report-list">
      <li><strong>Evaluation Metric:</strong> Test Accuracy</li>
      <li><strong>Number of Classes:</strong> 10</li>
      <li><strong>Baseline:</strong> ANN</li>
      <li><strong>Improved Model:</strong> Custom CNN</li>
      <li><strong>Transfer Learning Model:</strong> VGG16</li>
      <li><strong>Best Result:</strong> 88.42%</li>
    </ul>


    <h4 class="report-subtitle">Technology Stack</h4>

    <ul class="report-list">
      <li><strong>Programming Language:</strong> Python</li>
      <li><strong>Deep Learning Framework:</strong> PyTorch</li>
      <li><strong>Computer Vision:</strong> TorchVision</li>
      <li><strong>Models:</strong> ANN, Custom CNN, VGG16</li>
      <li><strong>Learning Approach:</strong> Supervised Learning and Transfer Learning</li>
      <li><strong>Dataset:</strong> Fashion-MNIST</li>
    </ul>


    <h4 class="report-subtitle">Key Learnings</h4>

    <ul class="report-list">
      <li>Building fully connected neural networks using PyTorch.</li>
      <li>Understanding the limitations of flattening image data.</li>
      <li>Designing custom CNN architectures.</li>
      <li>Using convolutional layers for spatial feature extraction.</li>
      <li>Understanding Batch Normalization.</li>
      <li>Using Max Pooling for spatial dimensionality reduction.</li>
      <li>Applying Dropout for regularization.</li>
      <li>Implementing multi-class image classification.</li>
      <li>Using pretrained VGG16 for transfer learning.</li>
      <li>Replacing pretrained classifier layers for a custom dataset.</li>
      <li>Comparing different deep learning architectures quantitatively.</li>
      <li>Evaluating classification models using test accuracy.</li>
      <li>Understanding the practical progression from ANN → CNN → Transfer Learning.</li>
    </ul>


    <h4 class="report-subtitle">Conclusion</h4>

    <p>This project demonstrated the progression from a basic fully connected neural network to convolutional and transfer-learning approaches for image classification.</p>

    <p>The ANN established a baseline accuracy of <strong>84.17%</strong>, while the custom CNN improved performance to <strong>87.42%</strong> by preserving spatial information and learning local image patterns.</p>

    <p>The final VGG16 transfer-learning model achieved the best performance at <strong>88.42% test accuracy</strong>, representing a 4.25 percentage-point improvement over the ANN baseline and a 1.00 percentage-point improvement over the custom CNN.</p>

    <p>The experiment provided practical experience with neural network design, CNN architecture, regularization, transfer learning, PyTorch model implementation, and comparative model evaluation.</p>
  `,

        githubLink: "https://github.com/suyash2356/Deep-Learning-Projects/blob/main/CNN/Fashion%20Mnist%20CNN/fashion_mnist_ann_pytorch.ipynb"
    }
];
