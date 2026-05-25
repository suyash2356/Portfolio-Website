// projectsData.js
// This file holds all your project information with advanced metadata for filtering.

const myProjects = [
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


    //DL Projects
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
