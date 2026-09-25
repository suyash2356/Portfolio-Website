// Machine Learning Projects Data
const mlProjects = [
    {
        "id": "house-price-prediction-ml",
        "category": "ml",
        "title": "House Price Prediction using Regression Models",
        "date": "2025-03-05",
        "topic": "Real Estate",
        "algorithms": [
            "Linear Regression",
            "Ridge Regression",
            "Lasso Regression"
        ],
        "datasetSize": "1460 records, 81 features",
        "images": [
            "ml/house price prediction.jpeg"
        ],
        "tags": [
            "Python",
            "Scikit-Learn",
            "Regression",
            "Feature Engineering",
            "Hyperparameter Tuning"
        ],
        "summary": "A machine learning regression project focused on predicting house prices using advanced preprocessing, regularization techniques, and hyperparameter optimization.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Data Preprocessing & Feature Engineering</h4>\n        <p>The project utilized the Kaggle House Prices dataset containing 1,460 records and 81 features related to residential properties. The dataset was cleaned by handling missing values, encoding categorical variables, and scaling numerical features to improve model performance and stability.</p>\n\n        <h4 class=\"report-subtitle\">Model Development</h4>\n        <p>Started with a baseline Linear Regression model and later experimented with <strong>Ridge Regression</strong> and <strong>Lasso Regression</strong> to reduce overfitting and improve generalization. Hyperparameter tuning was performed to identify the optimal regularization strength for the final model.</p>\n\n        <h4 class=\"report-subtitle\">Final Model Selection</h4>\n        <p><strong>Lasso Regression</strong> was selected as the final model due to its strong predictive performance and ability to reduce feature redundancy through regularization and feature selection.</p>\n\n        <h4 class=\"report-subtitle\">Performance Metrics</h4>\n        <ul class=\"report-list\">\n            <li><strong>Test R² Score:</strong> 0.8926</li>\n            <li><strong>Cross-Validation R²:</strong> 0.8643</li>\n            <li><strong>Mean Absolute Error (MAE):</strong> ~16,762</li>\n            <li><strong>Average Prediction Error:</strong> Approximately 9%</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The project demonstrates the effectiveness of regularized regression techniques in predicting real estate prices. Lasso Regression provided strong generalization performance while reducing model complexity, making it suitable for structured housing datasets with high-dimensional features.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Linear%20Regression/House_Price_Prediction_Linear_Regression.ipynb"
    },
    {
        "id": "cartpole-reinforcement-learning",
        "category": "ml",
        "title": "CartPole Balancing using Reinforcement Learning",
        "date": "2025-03-12",
        "topic": "Reinforcement Learning",
        "algorithms": [
            "Q-Learning",
            "Deep Q-Network (DQN)"
        ],
        "datasetSize": "OpenAI Gym Environment",
        "images": [
            "ml/rl-video-episode-0.mp4"
        ],
        "tags": [
            "Python",
            "PyTorch",
            "OpenAI Gym",
            "Reinforcement Learning",
            "Deep Learning"
        ],
        "summary": "A reinforcement learning project focused on training intelligent agents to balance the CartPole environment using Q-Learning and Deep Q-Network (DQN) techniques.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Project Overview</h4>\n        <p>The project focuses on solving the CartPole balancing problem using reinforcement learning algorithms. Multiple agents were developed and evaluated to compare performance improvements from random actions to deep reinforcement learning techniques.</p>\n\n        <h4 class=\"report-subtitle\">Implementation Workflow</h4>\n        <ul class=\"report-list\">\n            <li>Imported essential reinforcement learning and deep learning libraries.</li>\n            <li>Created and configured the OpenAI Gym CartPole environment.</li>\n            <li>Implemented a baseline random agent for initial performance benchmarking.</li>\n            <li>Developed a Q-Learning agent with discretized state space representation.</li>\n            <li>Implemented a Deep Q-Network (DQN) agent using neural networks for policy learning.</li>\n            <li>Trained, evaluated, and saved the final DQN model.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Comparison & Performance</h4>\n        <ul class=\"report-list\">\n            <li><strong>Base Random Agent:</strong> Average reward of 20.5 over 100 episodes.</li>\n            <li><strong>Q-Learning Agent:</strong> Average reward improved to 50.3 over 100 episodes.</li>\n            <li><strong>DQN Agent:</strong> Achieved an average reward of 195.7 over 100 episodes, nearly solving the environment.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights</h4>\n        <p>The transition from traditional Q-Learning to Deep Q-Networks significantly improved the agent’s ability to learn optimal balancing strategies. The DQN agent demonstrated stable and near-optimal performance compared to the baseline and tabular approaches.</p>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The project demonstrates the effectiveness of deep reinforcement learning in solving dynamic control problems. By combining neural networks with Q-Learning principles, the DQN agent achieved strong performance and successfully learned to balance the CartPole environment efficiently.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Reinforcement%20Learning/CartPole%20using%20reinforcement%20learning.ipynb"
    },
    {
        "id": "movie-recommendation-system",
        "category": "ml",
        "title": "Movie Recommendation System using Collaborative Filtering",
        "date": "2025-03-18",
        "topic": "Recommendation Systems",
        "algorithms": [
            "Collaborative Filtering",
            "Singular Value Decomposition (SVD)"
        ],
        "datasetSize": "10000+ ratings, 9k+ movies",
        "images": [
            "ml/Screenshot 2026-05-25 123057.png"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Recommendation System",
            "SVD"
        ],
        "summary": "A machine learning recommendation system designed to suggest movies to users using collaborative filtering and matrix factorization techniques based on historical rating patterns.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The project utilized two datasets containing movie information and user ratings. The movies dataset consisted of 9,742 movie records, while the ratings dataset contained over 100,000 user ratings.</p>\n\n        <h4 class=\"report-subtitle\">Data Preprocessing</h4>\n        <ul class=\"report-list\">\n            <li>Merged the movies and ratings datasets using the <strong>movieId</strong> column.</li>\n            <li>Handled missing values by imputing average movie ratings.</li>\n            <li>Encoded categorical features such as genres using one-hot encoding techniques.</li>\n            <li>Prepared the dataset for collaborative filtering and matrix factorization modeling.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Development</h4>\n        <p>A collaborative filtering recommendation system was developed using <strong>Singular Value Decomposition (SVD)</strong>. The dataset was split into training and testing sets, and the model was trained to learn hidden user-movie interaction patterns for personalized recommendations.</p>\n\n        <h4 class=\"report-subtitle\">Evaluation & Recommendations</h4>\n        <p>The model performance was evaluated using <strong>Root Mean Squared Error (RMSE)</strong> on the test dataset to measure prediction accuracy.</p>\n\n        <ul class=\"report-list\">\n            <li><strong>Top Recommended Movies:</strong></li>\n            <li>Gintama: The Movie (2010)</li>\n            <li>anohana: The Flower We Saw That Day - The Movie</li>\n            <li>Silver Spoon (2014)</li>\n            <li>Love Live! The School Idol Movie (2015)</li>\n            <li>No Game No Life: Zero (2017)</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The recommendation system successfully identified user preference patterns and generated relevant movie suggestions using collaborative filtering techniques. The project demonstrates how matrix factorization methods like SVD can be applied effectively in personalized recommendation systems.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Recommended%20System/movies_recommendation_model.ipynb"
    },
    {
        "id": "apple-stock-trend-predictor",
        "category": "ml",
        "title": "AAPL Stock Trend Predictor using Regression Analysis",
        "date": "2025-03-25",
        "topic": "Financial Analytics",
        "algorithms": [
            "Linear Regression",
            "Ridge Regression",
            "Lasso Regression"
        ],
        "datasetSize": "2520 records, 10 features",
        "images": [
            "ml/appl_stock_trend_predictor.png"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "Time Series Analysis",
            "Regression"
        ],
        "summary": "A financial machine learning project focused on predicting AAPL stock trends using regression models, feature engineering, and time-series-based evaluation techniques.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The project utilized historical AAPL stock market data consisting of 2,520 records and 10 financial features including OHLC prices and engineered indicators.</p>\n\n        <h4 class=\"report-subtitle\">Data Analysis & Preprocessing</h4>\n        <ul class=\"report-list\">\n            <li>Performed data cleaning and preprocessing to ensure consistency and quality.</li>\n            <li>Conducted univariate, bivariate, and multivariate analysis to study stock behavior and feature relationships.</li>\n            <li>Applied feature engineering techniques to improve predictive capability.</li>\n            <li>Used time-series splitting to maintain chronological integrity during training and evaluation.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Development</h4>\n        <p>Developed and compared multiple regression models including <strong>Linear Regression</strong>, <strong>Ridge Regression</strong>, and <strong>Lasso Regression</strong>. Regularization techniques were explored to handle multicollinearity and reduce overfitting.</p>\n\n        <h4 class=\"report-subtitle\">Final Model Selection</h4>\n        <p><strong>Lasso Regression</strong> with alpha = 0.001 was selected as the final model due to its ability to reduce noisy and redundant features while maintaining stable performance.</p>\n\n        <h4 class=\"report-subtitle\">Performance Metrics</h4>\n        <ul class=\"report-list\">\n            <li><strong>MAE:</strong> 0.0118</li>\n            <li><strong>RMSE:</strong> 0.0173</li>\n            <li><strong>R² Score:</strong> -0.0005</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights Extracted</h4>\n        <ul class=\"report-list\">\n            <li><strong>Market Noise:</strong> Stock returns were highly noisy and difficult to predict using simple linear models.</li>\n            <li><strong>Feature Correlation:</strong> Strong multicollinearity existed among OHLC price features.</li>\n            <li><strong>Regularization Impact:</strong> Ridge Regression improved model stability and generalization.</li>\n            <li><strong>Lasso Advantage:</strong> Lasso Regression performed best by removing redundant and noisy features.</li>\n            <li><strong>Market Complexity:</strong> Financial markets demonstrated nonlinear and stochastic behavior beyond simple linear assumptions.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The project highlights the challenges of stock market prediction using linear models and demonstrates the importance of regularization techniques in financial machine learning. While prediction accuracy remained limited due to market randomness, the analysis provided valuable insights into feature relationships and model behavior in time-series forecasting.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Linear%20Regression/aapl_stock_trend_predictor.ipynb"
    },
    {
        "id": "us-accident-severity-prediction",
        "category": "ml",
        "title": "US Accident Severity Prediction using Random Forest",
        "date": "2025-04-02",
        "topic": "Transportation Analytics",
        "algorithms": [
            "Logistic Regression",
            "Decision Tree",
            "Random Forest"
        ],
        "datasetSize": "700000 records, 46 features",
        "images": [
            "ml/us_accident_severity_prediction.png"
        ],
        "tags": [
            "Python",
            "Scikit-Learn",
            "Random Forest",
            "Feature Engineering",
            "EDA"
        ],
        "summary": "A large-scale machine learning project focused on predicting accident severity levels in the United States using classification models, feature engineering, and ensemble learning techniques.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The project utilized a large-scale US accident dataset containing over 7.7 million records and 46 features related to road conditions, weather, location, and accident severity.</p>\n\n        <h4 class=\"report-subtitle\">Data Processing & Feature Engineering</h4>\n        <ul class=\"report-list\">\n            <li>Performed extensive data cleaning and preprocessing on large-scale structured data.</li>\n            <li>Conducted exploratory data analysis (EDA) to identify accident trends and feature relationships.</li>\n            <li>Applied feature engineering and feature selection techniques to improve model efficiency and performance.</li>\n            <li>Prepared balanced and optimized feature sets for classification modeling.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Development</h4>\n        <p>Multiple classification models were trained and evaluated, including <strong>Logistic Regression</strong>, <strong>Decision Tree</strong>, and <strong>Random Forest</strong>. The project focused heavily on improving minority class detection due to class imbalance in accident severity categories.</p>\n\n        <h4 class=\"report-subtitle\">Model Performance Comparison</h4>\n        <ul class=\"report-list\">\n            <li>\n                <strong>Logistic Regression:</strong>\n                <ul>\n                    <li>Accuracy: 82.48%</li>\n                    <li>Macro Recall: 0.28</li>\n                    <li>Minority Class Detection: Very Poor</li>\n                </ul>\n            </li>\n\n            <li>\n                <strong>Decision Tree:</strong>\n                <ul>\n                    <li>Accuracy: 75.12%</li>\n                    <li>Macro Recall: 0.45</li>\n                    <li>Minority Class Detection: Improved</li>\n                </ul>\n            </li>\n\n            <li>\n                <strong>Random Forest:</strong>\n                <ul>\n                    <li>Accuracy: 66.58%</li>\n                    <li>Macro F1 Score: 0.43</li>\n                    <li>Weighted F1 Score: 0.71</li>\n                    <li>Minority Class Detection: Significantly Improved</li>\n                </ul>\n            </li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Final Model after Feature Selection</h4>\n        <p>The optimized <strong>Random Forest</strong> model achieved the best balance between overall accuracy and minority class prediction capability after feature selection and hyperparameter tuning.</p>\n\n        <ul class=\"report-list\">\n            <li><strong>Final Accuracy:</strong> 73.58%</li>\n            <li><strong>Macro F1 Score:</strong> 0.46</li>\n            <li><strong>Weighted F1 Score:</strong> 0.77</li>\n            <li><strong>Minority Class Detection:</strong> Best Overall Performance</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The project demonstrates the importance of feature engineering, class imbalance handling, and ensemble learning in large-scale accident severity prediction tasks. While Logistic Regression achieved higher raw accuracy, Random Forest provided superior minority class detection and more balanced classification performance, making it the most effective model for real-world deployment scenarios.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Decsion%20Tree/accident_severity_prediction_using_random_forest.ipynb"
    },
    {
        "id": "credit-card-fraud-detection",
        "category": "ml",
        "title": "Credit Card Fraud Detection using Anomaly Detection",
        "date": "2025-04-10",
        "topic": "Financial Security",
        "algorithms": [
            "Isolation Forest",
            "One-Class SVM",
            "Anomaly Detection"
        ],
        "datasetSize": "28000+ transactions, 31 features",
        "images": [
            "ml/credit-card_fraud_detection.png"
        ],
        "tags": [
            "Python",
            "Scikit-Learn",
            "Anomaly Detection",
            "Fraud Detection",
            "Machine Learning"
        ],
        "summary": "An anomaly detection-based machine learning project designed to identify fraudulent credit card transactions by detecting unusual transaction behavior without relying on labeled training data.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Project Overview</h4>\n        <p>The project focuses on detecting fraudulent credit card transactions using unsupervised anomaly detection techniques. The system was designed to identify abnormal transaction patterns in highly imbalanced financial datasets where fraudulent activities represent only a small fraction of total transactions.</p>\n\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The dataset contains approximately 28,000 credit card transactions with 31 numerical features representing transaction behavior and anonymized financial attributes.</p>\n\n        <h4 class=\"report-subtitle\">Implementation Workflow</h4>\n        <ul class=\"report-list\">\n            <li>Collected and prepared transaction data containing both fraudulent and legitimate cases.</li>\n            <li>Performed data preprocessing, including missing value handling and feature normalization.</li>\n            <li>Selected unsupervised anomaly detection algorithms such as <strong>Isolation Forest</strong> and <strong>One-Class SVM</strong>.</li>\n            <li>Trained the model to learn normal transaction behavior patterns.</li>\n            <li>Evaluated model performance using recall, precision, and F1-score metrics.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Performance Metrics</h4>\n        <ul class=\"report-list\">\n            <li><strong>Recall:</strong> 0.85</li>\n            <li><strong>Precision:</strong> 0.30</li>\n            <li><strong>F1 Score:</strong> 0.44</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights</h4>\n        <ul class=\"report-list\">\n            <li><strong>High Fraud Detection Capability:</strong> The model successfully identified approximately 85% of fraudulent transactions.</li>\n            <li><strong>False Positive Challenge:</strong> Low precision indicated a high number of legitimate transactions being flagged as fraudulent.</li>\n            <li><strong>Anomaly Detection Strength:</strong> The unsupervised approach enabled fraud detection without relying heavily on labeled training data.</li>\n            <li><strong>Production Consideration:</strong> The model is more suitable as an initial fraud screening layer rather than a standalone production system.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The project demonstrates the effectiveness of anomaly detection techniques in identifying suspicious financial transactions within highly imbalanced datasets. While the model achieved strong recall performance, future improvements involving supervised learning methods and hybrid detection systems could help reduce false positives and improve overall reliability in real-world fraud detection systems.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Anomaly%20Detection/credit_card_fraud_detection_using_anomaly_detection.ipynb"
    },
    {
        "id": "covid19-anomaly-detection",
        "category": "ml",
        "title": "COVID-19 Anomaly Detection using Unsupervised Machine Learning",
        "date": "2025-05-08",
        "topic": "Healthcare Analytics",
        "algorithms": [
            "Isolation Forest",
            "K-Means",
            "DBSCAN",
            "LOF",
            "One-Class SVM",
            "Gaussian Anomaly Detection"
        ],
        "datasetSize": "316,800 records, 27 features",
        "images": [
            "ml/covid-19 prediction.jpg    "
        ],
        "tags": [
            "Python",
            "Scikit-Learn",
            "Anomaly Detection",
            "PCA",
            "Healthcare",
            "Unsupervised Learning"
        ],
        "summary": "A large-scale unsupervised machine learning project focused on identifying unusual patient patterns in COVID-19 symptom data through advanced feature engineering, dimensionality reduction, and anomaly detection techniques.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The project utilized a cleaned and one-hot encoded COVID-19 dataset containing 316,800 patient records and 27 original features related to symptoms, demographics, contact history, and disease severity. The objective was to identify unusual patient profiles using unsupervised anomaly detection methods.</p>\n\n        <h4 class=\"report-subtitle\">Exploratory Data Analysis</h4>\n        <ul class=\"report-list\">\n            <li>Explored symptom frequencies, severity distributions, age groups, and contact history patterns.</li>\n            <li>Generated symptom correlation heatmaps to identify relationships among clinical indicators.</li>\n            <li>Created and analyzed symptom-count distributions across the patient population.</li>\n            <li>Identified potential unusual symptom and severity combinations for anomaly investigation.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Feature Engineering & Preprocessing</h4>\n        <p>Several domain-driven features were engineered to improve anomaly detection performance:</p>\n\n        <ul class=\"report-list\">\n            <li>Symptoms_Count</li>\n            <li>Respiratory_Score</li>\n            <li>Nasal_Score</li>\n            <li>Digestive_Score</li>\n            <li>Exposure_Risk</li>\n            <li>High_Risk_Age</li>\n            <li>Severity_Score</li>\n            <li>Risk_Score</li>\n        </ul>\n\n        <p>Selected features were standardized using <strong>StandardScaler</strong>, followed by <strong>PCA</strong> for dimensionality reduction, visualization, and anomaly analysis.</p>\n\n        <h4 class=\"report-subtitle\">Anomaly Detection Models</h4>\n        <p>Multiple unsupervised anomaly detection algorithms were implemented and compared:</p>\n\n        <ul class=\"report-list\">\n            <li><strong>Isolation Forest</strong></li>\n            <li><strong>K-Means Clustering</strong></li>\n            <li><strong>DBSCAN</strong></li>\n            <li><strong>Local Outlier Factor (LOF)</strong></li>\n            <li><strong>One-Class SVM</strong></li>\n            <li><strong>Gaussian Anomaly Detection</strong></li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Comparison</h4>\n        <ul class=\"report-list\">\n            <li><strong>Isolation Forest:</strong> 9,500 anomalies detected</li>\n            <li><strong>K-Means:</strong> 9,360 anomalies detected</li>\n            <li><strong>DBSCAN:</strong> 0 anomalies detected</li>\n            <li><strong>LOF:</strong> 8,520 anomalies detected</li>\n            <li><strong>One-Class SVM:</strong> 17,620 anomalies detected</li>\n            <li><strong>Gaussian Anomaly Detection:</strong> 9,480 anomalies detected</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Final Model Selection</h4>\n        <p><strong>Isolation Forest</strong> was selected as the final model due to its consistent anomaly detection performance, scalability on high-dimensional data, robustness, and balanced results when compared with Gaussian and clustering-based approaches.</p>\n\n        <h4 class=\"report-subtitle\">Key Insights</h4>\n        <ul class=\"report-list\">\n            <li>Patient distribution remained relatively balanced across age groups, severity levels, and exposure histories.</li>\n            <li>Respiratory symptoms exhibited moderate positive correlations.</li>\n            <li>Most patients reported between 3 and 5 symptoms.</li>\n            <li>Rare symptom-severity combinations were successfully identified as potential anomalies.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>This project demonstrates how unsupervised machine learning can effectively identify unusual patient patterns within large-scale healthcare datasets. Through extensive feature engineering and model comparison, Isolation Forest emerged as the most reliable anomaly detection approach, providing scalable and interpretable results for COVID-19 patient analysis.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Anomaly%20Detection/Covid-19%20anomaly%20detection%20using%20unsupervised%20ML.ipynb"
    },
    {
        "id": "hiring-trend-prediction",
        "category": "ml",
        "title": "Hiring Trend Prediction using Tree-Based Ensemble Models",
        "date": "2025-05-15",
        "topic": "HR Analytics",
        "algorithms": [
            "Decision Tree",
            "Random Forest",
            "XGBoost",
            "SMOTE"
        ],
        "datasetSize": "Company Hiring Dataset",
        "images": [
            "ml/hiring trend.jpg"
        ],
        "tags": [
            "Python",
            "Scikit-Learn",
            "XGBoost",
            "SMOTE",
            "Classification",
            "HR Analytics"
        ],
        "summary": "A machine learning classification project focused on predicting organizational hiring trends using company, workforce, financial, AI adoption, and market-related factors through tree-based ensemble models.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Project Overview</h4>\n        <p>The objective of this project was to predict hiring trends using organizational, economic, and workforce-related variables. Multiple tree-based machine learning models were developed and compared to identify the most effective approach for classification.</p>\n\n        <h4 class=\"report-subtitle\">Data Preprocessing & Feature Engineering</h4>\n        <ul class=\"report-list\">\n            <li>Performed data cleaning and preprocessing.</li>\n            <li>Removed irrelevant identifiers such as <strong>record_id</strong>.</li>\n            <li>Applied one-hot encoding for categorical features.</li>\n            <li>Used label encoding for the target variable <strong>hiring_trend</strong>.</li>\n            <li>Performed train-test splitting for model evaluation.</li>\n            <li>Applied <strong>SMOTE</strong> to address class imbalance.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Models Evaluated</h4>\n        <ul class=\"report-list\">\n            <li><strong>Decision Tree Classifier</strong> – Baseline model for comparison.</li>\n            <li><strong>Random Forest Classifier</strong> – Ensemble approach using multiple decision trees.</li>\n            <li><strong>XGBoost Classifier</strong> – Gradient boosting model with sequential error correction.</li>\n            <li><strong>XGBoost + SMOTE</strong> – Combined boosting and class balancing for improved performance.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Performance Comparison</h4>\n        <ul class=\"report-list\">\n            <li><strong>Decision Tree:</strong> 72.6% Accuracy</li>\n            <li><strong>Random Forest:</strong> 71.8% Accuracy</li>\n            <li><strong>XGBoost:</strong> 74.7% Accuracy</li>\n            <li><strong>XGBoost + SMOTE:</strong> 75.0% Accuracy</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Evaluation Metrics</h4>\n        <ul class=\"report-list\">\n            <li>Accuracy Score</li>\n            <li>Confusion Matrix</li>\n            <li>Precision</li>\n            <li>Recall</li>\n            <li>F1-Score</li>\n            <li>Feature Importance Analysis</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Important Features Identified</h4>\n        <ul class=\"report-list\">\n            <li><strong>market_condition_Recession</strong></li>\n            <li><strong>open_roles</strong></li>\n            <li><strong>layoff_percentage</strong></li>\n            <li><strong>ai_adoption_level</strong></li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Final Model Selection</h4>\n        <p><strong>XGBoost + SMOTE</strong> was selected as the final model due to its superior classification performance, improved minority class prediction, and balanced learning across target classes.</p>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The analysis revealed that AI adoption, workforce reductions, and broader market conditions are strong indicators of hiring behavior. XGBoost outperformed traditional tree-based methods through boosting-based learning, while SMOTE improved class balance and minority class detection. The combination of ensemble learning and imbalance handling resulted in the most robust hiring trend prediction model.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Decsion%20Tree/tech_layoof_due_to_AI_automation.ipynb"
    },
    {
        "id": "wild-animal-image-clustering",
        "category": "ml",
        "title": "Wild Animal Image Clustering using CNN Features, PCA & K-Means",
        "date": "2025-05-22",
        "topic": "Computer Vision",
        "algorithms": [
            "ResNet50",
            "PCA",
            "K-Means Clustering"
        ],
        "datasetSize": "4,738 images",
        "images": [
            "ml/wild animal classification.jpg"
        ],
        "tags": [
            "Python",
            "TensorFlow",
            "Computer Vision",
            "K-Means",
            "PCA",
            "Unsupervised Learning"
        ],
        "summary": "An unsupervised computer vision project that leverages deep CNN feature extraction, dimensionality reduction, and clustering techniques to automatically group wild animal species without using image labels.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The project utilized an animal image dataset containing 4,738 RGB images of wild animals including tigers, lions, leopards, snow leopards, cheetahs, wolves, foxes, and related species. All images were processed at a resolution of 512 × 512 pixels.</p>\n\n        <h4 class=\"report-subtitle\">Image Processing Pipeline</h4>\n        <ul class=\"report-list\">\n            <li>Loaded and validated the image dataset.</li>\n            <li>Verified image quality, dimensions, and removed corrupted files.</li>\n            <li>Extracted high-level visual features using a pretrained <strong>ResNet50</strong> convolutional neural network.</li>\n            <li>Generated a feature matrix of shape <strong>(4738, 2048)</strong>.</li>\n            <li>Applied <strong>PCA</strong> for dimensionality reduction and computational efficiency.</li>\n            <li>Selected <strong>172 principal components</strong>, preserving approximately 90% of total variance.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Clustering Methodology</h4>\n        <p>The optimal number of clusters was explored using the <strong>Elbow Method</strong> and <strong>Silhouette Score Analysis</strong>. K-Means clustering models were trained with multiple K values and evaluated based on cluster quality and visual interpretability.</p>\n\n        <h4 class=\"report-subtitle\">Model Components</h4>\n        <ul class=\"report-list\">\n            <li><strong>ResNet50</strong> – Deep CNN feature extraction.</li>\n            <li><strong>PCA</strong> – Dimensionality reduction and variance preservation.</li>\n            <li><strong>K-Means Clustering</strong> – Unsupervised image grouping.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Clustering Results</h4>\n        <ul class=\"report-list\">\n            <li><strong>K = 4:</strong> Silhouette Score = 0.2507</li>\n            <li><strong>K = 8:</strong> Silhouette Score = 0.2407</li>\n        </ul>\n\n        <p><strong>Cluster Interpretation (K = 4):</strong></p>\n        <ul class=\"report-list\">\n            <li>Canines</li>\n            <li>Tigers</li>\n            <li>Lions</li>\n            <li>Spotted Big Cats</li>\n        </ul>\n\n        <p><strong>Cluster Interpretation (K = 8):</strong></p>\n        <ul class=\"report-list\">\n            <li>Tigers</li>\n            <li>Cheetahs</li>\n            <li>Leopards</li>\n            <li>Snow Leopards</li>\n            <li>Wolves</li>\n            <li>Foxes</li>\n            <li>Male Lions</li>\n            <li>Lionesses / Cubs</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Final Model Selection</h4>\n        <p><strong>K = 8</strong> was selected as the final clustering solution. Although K = 4 achieved a slightly higher silhouette score, K = 8 produced more meaningful species-level separation and richer visual cluster interpretation.</p>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>This project demonstrates a complete unsupervised image clustering workflow using deep learning feature extraction and clustering algorithms. By combining ResNet50, PCA, and K-Means, the system successfully discovered meaningful animal groupings without requiring labeled data, showcasing the power of representation learning in computer vision tasks.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/K-%20Mean%20Clustering/animal%20classifiction%20using%20clustering.ipynb"
    },
    {
        "id": "teen-depression-prediction",
        "category": "ml",
        "title": "Teen Social Media Depression Prediction using Logistic Regression",
        "date": "2025-05-28",
        "topic": "Mental Health Analytics",
        "algorithms": [
            "Logistic Regression"
        ],
        "datasetSize": "3,700 records, 13+ features",
        "images": [
            "ml/teen depression.jpg"
        ],
        "tags": [
            "Python",
            "Scikit-Learn",
            "Logistic Regression",
            "Feature Engineering",
            "Classification",
            "Healthcare Analytics"
        ],
        "summary": "A machine learning classification project that predicts depression risk among teenagers using social media usage patterns, lifestyle indicators, and psychological factors through Logistic Regression.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The project combined two teen social media datasets containing 3,700 samples and more than 13 engineered features. The target variable was <strong>depression_label</strong>, representing whether a teenager exhibited signs of depression.</p>\n\n        <h4 class=\"report-subtitle\">Data Preparation & Feature Engineering</h4>\n        <ul class=\"report-list\">\n            <li>Combined multiple datasets and resolved feature mismatches.</li>\n            <li>Performed exploratory data analysis (EDA) to understand behavioral and mental health patterns.</li>\n            <li>Analyzed feature correlations and variable distributions.</li>\n            <li>Created domain-specific engineered features including:</li>\n            <ul>\n                <li>Sleep Deficiency</li>\n                <li>Mental Pressure</li>\n                <li>High Screen Time</li>\n            </ul>\n            <li>Applied One-Hot Encoding for categorical variables.</li>\n            <li>Performed feature scaling using <strong>StandardScaler</strong>.</li>\n            <li>Split the dataset into training and testing subsets.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Development</h4>\n        <p>A <strong>Logistic Regression</strong> classifier was trained to predict depression risk based on behavioral, academic, and social media-related features. The model was selected due to the reasonably linear relationships observed within the dataset.</p>\n\n        <h4 class=\"report-subtitle\">Performance Metrics</h4>\n        <ul class=\"report-list\">\n            <li><strong>Accuracy:</strong> 90.67%</li>\n            <li><strong>Precision:</strong> 87%</li>\n            <li><strong>Recall:</strong> 86%</li>\n            <li><strong>F1-Score:</strong> 86%</li>\n            <li><strong>ROC-AUC:</strong> 0.975</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights Extracted</h4>\n        <ul class=\"report-list\">\n            <li><strong>Stress & Anxiety:</strong> Higher stress and anxiety levels significantly increased depression probability.</li>\n            <li><strong>Social Media Usage:</strong> Increased screen time and social media engagement were associated with higher depression risk.</li>\n            <li><strong>Sleep Patterns:</strong> Reduced sleep duration emerged as a strong indicator of mental health concerns.</li>\n            <li><strong>Academic Impact:</strong> Poor academic performance showed a measurable relationship with depression risk.</li>\n            <li><strong>Model Effectiveness:</strong> Logistic Regression successfully captured behavioral and psychological patterns within the dataset.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Evaluation</h4>\n        <p>The confusion matrix showed strong classification performance with very few false predictions. Additionally, the ROC curve demonstrated excellent class separation, indicating the model's ability to distinguish between depressed and non-depressed individuals effectively.</p>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The Logistic Regression model achieved strong predictive performance with balanced precision, recall, and F1-score values. The project highlights how social media behavior, sleep habits, stress, and anxiety can be leveraged to identify depression risk among teenagers. It also demonstrates a complete machine learning workflow including data preprocessing, feature engineering, model training, and evaluation.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Logistic%20Regression/depression_classification_due_to_social_media_on_teens.ipynb"
    },
    {
        "id": "book-recommendation-knn",
        "category": "ml",
        "title": "Book Recommendation System using Collaborative Filtering & KNN",
        "date": "2025-06-01",
        "topic": "Recommendation Systems",
        "algorithms": [
            "K-Nearest Neighbors (KNN)",
            "Collaborative Filtering",
            "Cosine Similarity"
        ],
        "datasetSize": "1.1M+ ratings, 271k books, 278k users",
        "images": [
            "ml/book recommendation using collaborative.jpg"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Scikit-Learn",
            "KNN",
            "Recommendation System",
            "Collaborative Filtering"
        ],
        "summary": "A large-scale recommendation system that leverages collaborative filtering and K-Nearest Neighbors (KNN) to generate personalized book recommendations based on user rating behavior.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The project utilized the Book-Crossing dataset, consisting of over 271,000 books, 278,000 users, and approximately 1.15 million book ratings. The objective was to recommend books by identifying users with similar reading preferences.</p>\n\n        <h4 class=\"report-subtitle\">Data Analysis & Preprocessing</h4>\n        <ul class=\"report-list\">\n            <li>Loaded and analyzed books, users, and ratings datasets.</li>\n            <li>Studied rating distributions and user engagement patterns.</li>\n            <li>Prepared and merged datasets for collaborative filtering analysis.</li>\n            <li>Constructed a user-item interaction matrix representing user ratings across books.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Recommendation Methodology</h4>\n        <p>The recommendation engine was built using <strong>User-Based Collaborative Filtering</strong> combined with the <strong>K-Nearest Neighbors (KNN)</strong> algorithm.</p>\n\n        <ul class=\"report-list\">\n            <li>Calculated user similarity using <strong>Cosine Similarity</strong>.</li>\n            <li>Identified nearest neighbors with similar reading preferences.</li>\n            <li>Predicted ratings for unseen books based on neighbor ratings.</li>\n            <li>Generated personalized recommendations by ranking predicted ratings.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Components</h4>\n        <ul class=\"report-list\">\n            <li><strong>K-Nearest Neighbors (KNN)</strong></li>\n            <li><strong>Collaborative Filtering</strong></li>\n            <li><strong>Cosine Similarity</strong></li>\n            <li><strong>User-Item Matrix Representation</strong></li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Sample Recommendation Results</h4>\n        <p>For the book <strong>\"Table For Two\"</strong>, the system generated the following similar recommendations:</p>\n\n        <ul class=\"report-list\">\n            <li>Truly, Madly Manhattan (Distance: 0.444)</li>\n            <li>Summer Pleasures (Distance: 0.513)</li>\n            <li>Engaging The Enemy (Distance: 0.534)</li>\n            <li>Face the Fire (Three Sisters Island Trilogy) (Distance: 0.565)</li>\n            <li>The Villa (Distance: 0.571)</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights</h4>\n        <ul class=\"report-list\">\n            <li>User preference patterns can effectively drive personalized recommendations.</li>\n            <li>Cosine similarity successfully identified readers with similar rating behavior.</li>\n            <li>KNN provided an intuitive and interpretable recommendation framework.</li>\n            <li>Collaborative filtering enabled recommendations without requiring book content information.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>This project demonstrates the effectiveness of collaborative filtering techniques for personalized recommendation systems. By combining KNN and cosine similarity, the model successfully identified similar users and generated relevant book suggestions. The approach highlights how user interaction data alone can be leveraged to build scalable recommendation engines for large datasets.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Recommended%20System/book_recommendation_using_collaborative_filtering.ipynb"
    },
    {
        "id": "book-recommendation-pearson",
        "category": "ml",
        "title": "Book Recommendation System using Pearson Correlation",
        "date": "2025-06-02",
        "topic": "Recommendation Systems",
        "algorithms": [
            "Collaborative Filtering",
            "Pearson Correlation"
        ],
        "datasetSize": "1.1M+ ratings, 271k books, 278k users",
        "images": [
            "ml/book recommendation perason correlation.jpg"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Collaborative Filtering",
            "Recommendation System",
            "Pearson Correlation"
        ],
        "summary": "A collaborative filtering recommendation system that leverages Pearson Correlation to identify users with similar reading preferences and generate personalized book recommendations.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The project utilized the Book-Crossing dataset consisting of 271,360 books, 278,858 users, and approximately 1.15 million book ratings. The objective was to recommend books by analyzing similarities in user rating behavior.</p>\n\n        <h4 class=\"report-subtitle\">Data Analysis & Preparation</h4>\n        <ul class=\"report-list\">\n            <li>Loaded and analyzed books, users, and ratings datasets.</li>\n            <li>Explored rating distributions and user engagement patterns.</li>\n            <li>Prepared user-book interaction data for collaborative filtering.</li>\n            <li>Examined average rating trends before implementing similarity-based recommendations.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Recommendation Methodology</h4>\n        <p>The recommendation engine was developed using a <strong>User-Based Collaborative Filtering</strong> approach powered by <strong>Pearson Correlation</strong>.</p>\n\n        <ul class=\"report-list\">\n            <li>Generated initial recommendations using average book ratings.</li>\n            <li>Calculated Pearson Correlation coefficients between users to measure similarity in reading preferences.</li>\n            <li>Identified users with highly correlated rating behavior.</li>\n            <li>Predicted book preferences based on ratings provided by similar users.</li>\n            <li>Generated personalized recommendations for the target user.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Components</h4>\n        <ul class=\"report-list\">\n            <li><strong>User-Based Collaborative Filtering</strong></li>\n            <li><strong>Pearson Correlation Similarity</strong></li>\n            <li><strong>User-Item Rating Matrix</strong></li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Recommendation Results</h4>\n        <p>For the target user/book profile <strong>\"Table For Two\"</strong>, the system generated the following recommended books:</p>\n\n        <ul class=\"report-list\">\n            <li>The Lovely Bones: A Novel</li>\n            <li>The Nanny Diaries: A Novel</li>\n            <li>The Pilot's Wife: A Novel</li>\n            <li>1st to Die: A Novel</li>\n            <li>Where the Heart Is (Oprah's Book Club)</li>\n            <li>The Book of Ruth (Oprah's Book Club)</li>\n            <li>Fahrenheit 451</li>\n            <li>The Poisonwood Bible: A Novel</li>\n            <li>The Reader</li>\n            <li>Angela's Ashes: A Memoir</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights</h4>\n        <ul class=\"report-list\">\n            <li>Pearson Correlation effectively captured similarities in user rating patterns.</li>\n            <li>Users with comparable reading preferences contributed to more personalized recommendations.</li>\n            <li>The recommendation engine was able to discover relevant books beyond simple popularity-based suggestions.</li>\n            <li>Collaborative filtering successfully leveraged historical user interactions without requiring book content features.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>This project demonstrates how Pearson Correlation can be applied in collaborative filtering systems to generate personalized book recommendations. By identifying users with similar preferences, the model was able to recommend relevant titles and showcase the effectiveness of user-based recommendation techniques on large-scale rating datasets.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Recommended%20System/book_recommendation_using_pearson_correlation.ipynb"
    },
    {
        "id": "skill-metric-content-recommender",
        "category": "ml",
        "title": "Skill-Metric Content-Based Resource Recommendation System",
        "date": "2025-06-03",
        "topic": "Recommendation Systems",
        "algorithms": [
            "TF-IDF",
            "Cosine Similarity",
            "Sentence Transformers"
        ],
        "datasetSize": "816 resources, 2,019 interactions",
        "images": [
            "ml/skill metrics.jpg"
        ],
        "tags": [
            "Python",
            "NLP",
            "Recommendation Systems",
            "TF-IDF",
            "Sentence Transformers",
            "Cosine Similarity"
        ],
        "summary": "A production-ready content-based recommendation engine developed for Skill-Metric that recommends relevant learning resources using resource metadata, weighted TF-IDF representations, and similarity-based retrieval techniques.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Project Overview</h4>\n        <p>The objective of this project was to build a personalized content-based recommendation system for Skill-Metric capable of recommending relevant learning resources based on resource content, educational metadata, and skill relationships.</p>\n\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The recommendation system was built using a curated educational resource dataset and user interaction history.</p>\n\n        <ul class=\"report-list\">\n            <li><strong>Total Resources:</strong> 816</li>\n            <li><strong>Total Features:</strong> 37</li>\n            <li><strong>Users:</strong> 16</li>\n            <li><strong>Resources with Interactions:</strong> 607</li>\n            <li><strong>Total Interactions:</strong> 2,019</li>\n        </ul>\n\n        <p><strong>Key Resource Features:</strong></p>\n\n        <ul class=\"report-list\">\n            <li>Title</li>\n            <li>Description</li>\n            <li>Domain</li>\n            <li>Subdomain</li>\n            <li>Difficulty Level</li>\n            <li>Related Skills</li>\n            <li>Learning Outcomes</li>\n            <li>Resource Type</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Data Preprocessing</h4>\n        <ul class=\"report-list\">\n            <li>Performed missing value analysis and duplicate detection.</li>\n            <li>Selected high-impact recommendation features.</li>\n            <li>Applied text cleaning and normalization.</li>\n            <li>Cleaned skill and learning outcome fields.</li>\n            <li>Created a weighted combined text representation for recommendation modeling.</li>\n        </ul>\n\n        <p><strong>Feature Weighting Strategy:</strong></p>\n\n        <ul class=\"report-list\">\n            <li>Title × 3</li>\n            <li>Subdomain × 3</li>\n            <li>Domain × 2</li>\n            <li>Related Skills × 2</li>\n            <li>Learning Outcomes × 1</li>\n            <li>Description × 1</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Development</h4>\n\n        <p><strong>Model 1 (Final Production Model)</strong></p>\n\n        <ul class=\"report-list\">\n            <li>Weighted TF-IDF Vectorization</li>\n            <li>Cosine Similarity</li>\n            <li>Top-N Resource Recommendation Generation</li>\n        </ul>\n\n        <p><strong>Recommendation Pipeline:</strong></p>\n\n        <p>\n        Resource Metadata\n        → TF-IDF Vectorization\n        → Cosine Similarity Matrix\n        → Top-N Resource Recommendations\n        </p>\n\n        <p><strong>Model 2 (Experimental Benchmark)</strong></p>\n\n        <ul class=\"report-list\">\n            <li>Sentence Transformers (all-MiniLM-L6-v2)</li>\n            <li>Cosine Similarity</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Model Evaluation</h4>\n\n        <table class=\"report-table\">\n            <tr>\n                <th>Metric</th>\n                <th>TF-IDF</th>\n                <th>Embeddings</th>\n            </tr>\n            <tr>\n                <td>Coverage</td>\n                <td>94.49%</td>\n                <td>94.85%</td>\n            </tr>\n            <tr>\n                <td>Diversity</td>\n                <td>0.678</td>\n                <td>0.460</td>\n            </tr>\n            <tr>\n                <td>Precision@10</td>\n                <td>0.318</td>\n                <td>0.320</td>\n            </tr>\n        </table>\n\n        <h4 class=\"report-subtitle\">Final Model Selection</h4>\n        <p><strong>Weighted TF-IDF + Cosine Similarity</strong> was selected as the production model.</p>\n\n        <p><strong>Selection Reasons:</strong></p>\n\n        <ul class=\"report-list\">\n            <li>Nearly identical Precision@10 performance compared to embeddings.</li>\n            <li>Significantly higher recommendation diversity.</li>\n            <li>Faster training and inference speed.</li>\n            <li>Lower computational requirements.</li>\n            <li>Simpler deployment and long-term maintenance.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Findings</h4>\n\n        <ul class=\"report-list\">\n            <li>Resource metadata contains strong predictive recommendation signals.</li>\n            <li>Weighted TF-IDF performs exceptionally well on structured educational content.</li>\n            <li>Transformer embeddings provided minimal performance gains for the current dataset size.</li>\n            <li>Content-based recommendations effectively matched domains, subdomains, and skill relationships.</li>\n            <li>The system is production-ready and suitable as the baseline recommendation engine for Skill-Metric.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Future Roadmap</h4>\n\n        <ul class=\"report-list\">\n            <li>✓ Content-Based Recommendation System (Completed)</li>\n            <li>Generate Synthetic Users</li>\n            <li>Build Collaborative Filtering Models</li>\n            <li>Develop Hybrid Recommendation Systems</li>\n            <li>Create Learning Path Recommendation Engine</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>A production-ready content-based recommendation system was successfully developed for Skill-Metric using Weighted TF-IDF and Cosine Similarity. The model achieved <strong>94.49% coverage</strong>, <strong>0.678 diversity</strong>, and <strong>0.318 Precision@10</strong>, delivering strong recommendation quality while maintaining scalability, interpretability, and deployment simplicity. The system establishes a solid foundation for future collaborative and hybrid recommendation architectures.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Recommended%20System/Content_based_recommendation_model_using_tf-idf.ipynb"
    },
    {
        "id": "insurance-charges-prediction-numpy-nn",
        "category": "ml",
        "title": "Insurance Charges Prediction using Neural Network from Scratch",
        "date": "2025-06-20",
        "topic": "Regression",
        "algorithms": [
            "Linear Regression",
            "Ridge Regression",
            "Lasso Regression",
            "Neural Network"
        ],
        "datasetSize": "1,338 samples, 8 features",
        "images": [
            "ml/Screenshot 2026-07-09 120133.png"
        ],
        "tags": [
            "Python",
            "NumPy",
            "Machine Learning",
            "Deep Learning",
            "Neural Network",
            "Regression"
        ],
        "summary": "A complete regression project comparing classical machine learning algorithms with a neural network implemented entirely from scratch using NumPy. The project demonstrates forward propagation, backpropagation, gradient descent optimization, and neural network implementation without deep learning libraries.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Project Overview</h4>\n        <p>The objective of this project was to predict medical insurance charges using both classical regression algorithms and a fully custom neural network implemented from scratch using NumPy. The project focuses on understanding the mathematical foundations of neural networks while comparing their performance against traditional machine learning models.</p>\n\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <ul class=\"report-list\">\n            <li><strong>Dataset:</strong> Medical Insurance Charges Dataset</li>\n            <li><strong>Total Samples:</strong> 1,338</li>\n            <li><strong>Features:</strong> 8</li>\n            <li><strong>Target Variable:</strong> Insurance Charges</li>\n            <li><strong>Problem Type:</strong> Regression</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Project Workflow</h4>\n        <ul class=\"report-list\">\n            <li>Performed data exploration and preprocessing.</li>\n            <li>Applied One-Hot Encoding for categorical variables.</li>\n            <li>Separated input features and target variable.</li>\n            <li>Split the dataset into training and testing sets.</li>\n            <li>Applied StandardScaler to normalize input features.</li>\n            <li>Implemented and compared multiple regression models.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Models Evaluated</h4>\n        <table class=\"report-table\">\n            <tr>\n                <th>Model</th>\n                <th>R² Score</th>\n            </tr>\n            <tr>\n                <td>Linear Regression (NumPy - Gradient Descent)</td>\n                <td>0.8069</td>\n            </tr>\n            <tr>\n                <td>Linear Regression (Normal Equation)</td>\n                <td>0.8069</td>\n            </tr>\n            <tr>\n                <td>Scikit-learn Linear Regression</td>\n                <td>0.8069</td>\n            </tr>\n            <tr>\n                <td>Ridge Regression</td>\n                <td>≈ 0.806</td>\n            </tr>\n            <tr>\n                <td>Lasso Regression</td>\n                <td>≈ 0.805</td>\n            </tr>\n            <tr>\n                <td><strong>Neural Network (NumPy)</strong></td>\n                <td><strong>0.8835</strong></td>\n            </tr>\n            <tr>\n                <td>Scikit-learn MLPRegressor</td>\n                <td>0.8850</td>\n            </tr>\n        </table>\n\n        <h4 class=\"report-subtitle\">Neural Network Architecture</h4>\n        <ul class=\"report-list\">\n            <li><strong>Input Layer:</strong> 8 neurons</li>\n            <li><strong>Hidden Layer 1:</strong> 16 neurons (Leaky ReLU)</li>\n            <li><strong>Hidden Layer 2:</strong> 8 neurons (Leaky ReLU)</li>\n            <li><strong>Output Layer:</strong> 1 neuron (Linear Activation)</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Implemented from Scratch</h4>\n        <ul class=\"report-list\">\n            <li>He Weight Initialization</li>\n            <li>Forward Propagation</li>\n            <li>Mean Squared Error (MSE) Loss</li>\n            <li>Backpropagation</li>\n            <li>Gradient Descent Optimization</li>\n            <li>Leaky ReLU Activation</li>\n            <li>Parameter Updates</li>\n            <li>Prediction and R² Evaluation</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Challenges Solved</h4>\n        <ul class=\"report-list\">\n            <li>Eliminated exploding gradients by scaling the target variable.</li>\n            <li>Resolved the Dead ReLU problem using Leaky ReLU activation.</li>\n            <li>Fixed activation function and derivative mismatch during backpropagation.</li>\n            <li>Optimized learning rate and weight initialization for stable convergence.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Findings</h4>\n        <ul class=\"report-list\">\n            <li>Classical linear models explained approximately 80.7% of the variance in insurance charges.</li>\n            <li>The custom neural network significantly improved prediction accuracy over linear regression.</li>\n            <li>The NumPy implementation achieved performance nearly identical to Scikit-learn's MLPRegressor.</li>\n            <li>Proper initialization and activation functions were critical for successful neural network training.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>This project successfully demonstrates both classical machine learning and deep learning approaches for regression. The neural network implemented entirely from scratch using NumPy achieved an <strong>R² score of 0.8835</strong>, closely matching <strong>Scikit-learn's MLPRegressor (0.8850)</strong>. Beyond predictive performance, the project showcases a complete understanding of neural network mathematics, including forward propagation, backpropagation, gradient descent optimization, and weight updates without relying on deep learning frameworks.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/Machine-Learning-Projects/blob/main/Linear%20Regression/insurance_price_prediction_using_all_linear_reg_model.ipynb"
    }
];
