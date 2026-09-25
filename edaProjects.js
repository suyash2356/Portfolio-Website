// EDA Projects Data
const edaProjects = [
    {
        "id": "aapl-stock-eda-technical-analysis",
        "category": "eda",
        "title": "AAPL Stock Market EDA & Technical Analysis Dashboard",
        "date": "2026-09-XX",
        "topic": "Time Series Data Analysis & Financial Technical Indicators",
        "algorithms": [
            "Exploratory Data Analysis (EDA)",
            "RSI (Relative Strength Index)",
            "MACD (Moving Average Convergence Divergence)",
            "Bollinger Bands",
            "Moving Average Crossover (Golden Cross / Death Cross)",
            "Support & Resistance Detection",
            "Drawdown & Volatility Analysis"
        ],
        "datasetSize": "Live market data via yfinance, ~4,200+ daily records (2010–2026)",
        "images": [
            "eda/appl stock eda.png"
        ],
        "tags": [
            "Python",
            "yfinance",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Time Series Analysis",
            "Financial Data",
            "Technical Analysis",
            "Data Visualization",
            "Exploratory Data Analysis",
            "Stock Market",
            "Volatility Analysis",
            "Risk Metrics"
        ],
        "summary": "A comprehensive exploratory data analysis and technical analysis project on 16 years of live AAPL stock data, covering price growth, volatility, drawdowns, seasonality, and four industry-standard technical indicators (RSI, MACD, Bollinger Bands, Moving Average crossovers). Built as the analytical foundation for a larger stock trading toolkit, this notebook focuses purely on understanding market behavior through statistics and visualization before any modeling was attempted.",
        "detailedReport": "\n    <h4 class=\"report-subtitle\">Project Overview</h4>\n\n    <p>The objective of this project was to conduct a rigorous, statistically grounded exploratory analysis of Apple Inc. (AAPL) stock, using live market data rather than a static historical dataset. The analysis was designed to answer the questions a trader or investor genuinely cares about: how has the stock grown, how volatile has it been, how far has it ever fallen from its peak, are there seasonal patterns, and what do standard technical indicators say about its current positioning.</p>\n\n    <p>This notebook was intentionally kept separate from the model-building notebook, following proper project structure — EDA and analysis first, modeling second, each in its own dedicated workspace.</p>\n\n\n    <h4 class=\"report-subtitle\">Dataset</h4>\n\n    <ul class=\"report-list\">\n      <li><strong>Source:</strong> Live data via yfinance (Yahoo Finance API)</li>\n      <li><strong>Ticker:</strong> AAPL (Apple Inc.)</li>\n      <li><strong>Date Range:</strong> January 2010 – September 2026</li>\n      <li><strong>Total Trading Days:</strong> ~4,206</li>\n      <li><strong>Columns:</strong> Date, Open, High, Low, Close, Volume</li>\n      <li><strong>Data Quality:</strong> No missing values; verified complete before analysis</li>\n    </ul>\n\n    <p>Using a live data pipeline instead of a static Kaggle CSV ensures the analysis and any downstream tools always reflect current market conditions, rather than becoming stale.</p>\n\n\n    <h4 class=\"report-subtitle\">Stage 1 — Price, Volume & Risk Analysis</h4>\n\n    <p>The first stage established the core statistical profile of the stock:</p>\n\n    <ul class=\"report-list\">\n      <li><strong>Price Growth:</strong> ~$8 (2010) → ~$337 (2026), approximately 42x growth over 16 years</li>\n      <li><strong>Annualized Volatility:</strong> 28.11%</li>\n      <li><strong>Maximum Drawdown Ever:</strong> approximately -44% from an all-time high</li>\n      <li><strong>Volume Trend:</strong> structurally declining over time as share price increased</li>\n    </ul>\n\n    <p>A dedicated drawdown chart was built to visualize every historical decline from peak, clearly showing that long-term growth was accompanied by real, sometimes severe, short-term corrections — critical context often missing from simple price charts.</p>\n\n\n    <h4 class=\"report-subtitle\">Stage 2 — Seasonality Analysis</h4>\n\n    <p>Daily returns were grouped by calendar month across the full 16-year history to test for recurring seasonal patterns.</p>\n\n    <ul class=\"report-list\">\n      <li><strong>Historically Strongest Months:</strong> July, August, October</li>\n      <li><strong>Historically Weakest Months:</strong> January, December, September</li>\n    </ul>\n\n    <p>This analysis was presented with an explicit statistical caveat: these are historical averages across many years, not guaranteed future patterns — a distinction often glossed over in casual market commentary.</p>\n\n\n    <h4 class=\"report-subtitle\">Stage 3 — Technical Indicator Suite</h4>\n\n    <p>Four widely-used technical indicators were implemented from scratch and visualized:</p>\n\n    <ul class=\"report-list\">\n      <li><strong>RSI (14-day):</strong> momentum oscillator identifying overbought (&gt;70) / oversold (&lt;30) conditions</li>\n      <li><strong>MACD:</strong> 12/26/9 EMA-based trend and momentum indicator with signal line crossover detection</li>\n      <li><strong>Bollinger Bands:</strong> 20-day SMA with 2-standard-deviation bands to identify volatility-adjusted price extremes</li>\n      <li><strong>MA50 / MA200 Crossover:</strong> Golden Cross / Death Cross detection for long-term trend direction</li>\n      <li><strong>Support &amp; Resistance:</strong> rolling local minima/maxima detection over a 20-day window</li>\n    </ul>\n\n    <p>A combined \"technical snapshot\" function was built to summarize all indicators into a single, easy-to-read current market read — the kind of quick-glance summary a trader checks daily.</p>\n\n\n    <h4 class=\"report-subtitle\">Key Statistical Findings</h4>\n\n    <ul class=\"report-list\">\n      <li>AAPL grew approximately 42x over the studied period, with an annualized volatility of 28.11%</li>\n      <li>The stock experienced a maximum historical drawdown of approximately -44% from peak</li>\n      <li>Mid-to-late calendar year months have historically outperformed year-start/year-end months</li>\n      <li>At the time of analysis, all four major technical indicators were simultaneously aligned in bullish territory (Golden Cross active, MACD bullish, RSI neutral, price mid-Bollinger-range)</li>\n    </ul>\n\n\n    <h4 class=\"report-subtitle\">Technology Stack</h4>\n\n    <ul class=\"report-list\">\n      <li><strong>Programming Language:</strong> Python</li>\n      <li><strong>Data Source:</strong> yfinance (live market data API)</li>\n      <li><strong>Data Manipulation:</strong> Pandas, NumPy</li>\n      <li><strong>Visualization:</strong> Matplotlib, Seaborn</li>\n      <li><strong>Domain:</strong> Quantitative Finance / Technical Analysis</li>\n    </ul>\n\n\n    <h4 class=\"report-subtitle\">Key Learnings</h4>\n\n    <ul class=\"report-list\">\n      <li>Building a live, self-updating financial data pipeline instead of relying on static datasets</li>\n      <li>Implementing industry-standard technical indicators (RSI, MACD, Bollinger Bands) from first principles</li>\n      <li>Quantifying risk using drawdown and annualized volatility, not just returns</li>\n      <li>Detecting trend signals via moving average crossovers and support/resistance levels</li>\n      <li>Presenting statistical findings with appropriate caveats to avoid overstating certainty</li>\n      <li>Structuring a data science project with clean separation between analysis and modeling</li>\n    </ul>\n\n\n    <h4 class=\"report-subtitle\">Conclusion</h4>\n\n    <p>This project delivered a rigorous, statistically grounded understanding of AAPL's market behavior — growth trajectory, risk profile, seasonal tendencies, and current technical positioning — using live data and industry-standard financial analysis techniques.</p>\n\n    <p>Rather than jumping straight to prediction, this EDA-first approach established the honest, evidence-based foundation needed before any modeling work, and directly informed the feature engineering and validation strategy used in the subsequent trend-classification project.</p>\n  ",
        "githubLink": "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(Appl%20stock%20price%20data%20analysis).ipynb"
    },
    {
        "id": "sentinel2-crop-classification-eda",
        "category": "eda",
        "title": "Sentinel-2 Crop Classification Dataset Analysis",
        "date": "2025-06-10",
        "topic": "Remote Sensing",
        "algorithms": [
            "Statistical Analysis",
            "Principal Component Analysis (PCA)"
        ],
        "datasetSize": "122k+ samples, 585 features",
        "images": [
            "eda/brizecrop eda.png"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "EDA",
            "Remote Sensing",
            "Sentinel-2"
        ],
        "summary": "A comprehensive exploratory data analysis of a large-scale Sentinel-2 satellite dataset to understand crop distributions, spectral signatures, temporal trends, and feature relationships before machine learning model development.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The dataset contains <strong>122,614 satellite observations</strong> with <strong>585 features</strong> representing 45 observation timestamps across 13 Sentinel-2 spectral bands. The objective is multiclass crop classification across nine crop categories using multi-temporal remote sensing data.</p>\n\n        <h4 class=\"report-subtitle\">Data Quality Assessment</h4>\n        <ul class=\"report-list\">\n            <li><strong>Missing Values:</strong> None detected.</li>\n            <li><strong>Duplicate Records:</strong> None detected.</li>\n            <li><strong>Data Type:</strong> float32</li>\n            <li><strong>Memory Usage:</strong> Approximately 273.6 MB.</li>\n            <li>The dataset required no additional cleaning and was ready for model development.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Exploratory Data Analysis</h4>\n        <ul class=\"report-list\">\n            <li>Analyzed feature statistics and value distributions across all Sentinel-2 bands.</li>\n            <li>Studied class distribution and identified severe class imbalance.</li>\n            <li>Examined spectral reflectance across all 13 satellite bands.</li>\n            <li>Investigated temporal changes over 45 observation dates.</li>\n            <li>Performed correlation analysis to understand temporal feature relationships.</li>\n            <li>Applied Principal Component Analysis (PCA) for low-dimensional visualization.</li>\n            <li>Analyzed feature variance and outlier behavior.</li>\n            <li>Compared spectral signatures among crop classes.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights Extracted</h4>\n        <ul class=\"report-list\">\n            <li><strong>Class Imbalance:</strong> Classes 3, 7, and 8 dominate the dataset, whereas classes 4, 5, and 6 contain very few samples, presenting a significant classification challenge.</li>\n            <li><strong>Spectral Information:</strong> Different Sentinel-2 bands capture distinct vegetation, soil, and moisture characteristics, indicating varying predictive importance across bands.</li>\n            <li><strong>Temporal Dynamics:</strong> Reflectance values change noticeably across the 45 observation dates, successfully capturing seasonal crop growth patterns.</li>\n            <li><strong>Stable Feature Distribution:</strong> Most features exhibit consistent distributions with only a small number of genuine satellite outliers.</li>\n            <li><strong>Feature Correlation:</strong> Measurements from nearby observation dates show stronger correlations than distant timestamps, demonstrating meaningful temporal evolution.</li>\n            <li><strong>PCA Analysis:</strong> Considerable overlap between crop classes indicates that simple linear separation is insufficient and machine learning models are required.</li>\n            <li><strong>Spectral Signatures:</strong> Individual crop types display distinct temporal spectral responses, providing strong discriminative information for classification.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusions Drawn</h4>\n        <p>The exploratory analysis confirms that the Sentinel-2 dataset is clean, information-rich, and highly suitable for crop classification tasks. Multi-temporal satellite observations combined with multiple spectral bands provide valuable information describing crop growth throughout the season. Although the dataset presents a significant class imbalance challenge, the observed temporal patterns and unique spectral signatures suggest that tree-based machine learning models such as Random Forest can effectively learn meaningful crop classification patterns from the available features.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(BreizhCrops%20Data).ipynb"
    },
    {
        "id": "us-accidents-eda",
        "category": "eda",
        "title": "US Accidents Exploratory Data Analysis",
        "date": "2026-05-21",
        "topic": "Road Safety & Traffic Analysis",
        "algorithms": [
            "Exploratory Data Analysis",
            "Statistical Analysis",
            "Correlation Analysis",
            "Trend Analysis"
        ],
        "datasetSize": "7,728,394 accident records",
        "images": [
            "eda/us accidents.jpeg"
        ],
        "tags": [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "EDA",
            "Data Cleaning",
            "Feature Engineering"
        ],
        "summary": "Performed a complete exploratory data analysis on a large-scale US Accidents dataset to identify accident hotspots, weather impacts, traffic patterns, severity factors, and time-based accident trends using statistical analysis and visual storytelling.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The dataset contains over 7.7 million US accident records with information related to weather conditions, traffic infrastructure, location, time, visibility, and accident severity.</p>\n\n        <h4 class=\"report-subtitle\">Analysis Performed</h4>\n        <ul class=\"report-list\">\n            <li>Performed data cleaning by handling missing values, duplicate records, datatype corrections, and outlier treatment.</li>\n            <li>Conducted univariate, bivariate, and multivariate analysis to understand accident trends and feature relationships.</li>\n            <li>Created visualizations for accident hotspots, weather conditions, severity distribution, traffic patterns, and time-based trends.</li>\n            <li>Performed correlation analysis on weather-related numerical features.</li>\n            <li>Applied feature engineering on datetime and weather-related features for improved analysis.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights Extracted</h4>\n        <ul class=\"report-list\">\n            <li><strong>Accident Hotspots:</strong> California recorded the highest number of accidents, followed by Florida and Texas.</li>\n            <li><strong>Rush Hour Impact:</strong> Accident frequency peaked during morning and evening office rush hours.</li>\n            <li><strong>Weather Influence:</strong> Most accidents occurred during fair and cloudy weather conditions.</li>\n            <li><strong>Road Infrastructure:</strong> Traffic signals and crossings were the most common road features involved in accidents.</li>\n            <li><strong>Seasonal Trends:</strong> Winter months showed increased accident occurrences compared to summer months.</li>\n            <li><strong>Severity Analysis:</strong> Severity level 2 accidents dominated the dataset.</li>\n            <li><strong>Visibility & Humidity:</strong> Higher humidity was associated with lower visibility conditions.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The analysis revealed that accident occurrence and severity are strongly influenced by traffic congestion, weather conditions, road infrastructure, and time-based driving patterns. The project provides valuable insights for accident hotspot detection and forms a strong foundation for future machine learning-based accident severity prediction systems.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(US%20Accidents%20Analysis).ipynb"
    },
    {
        "id": "ai-companies-eda",
        "category": "eda",
        "title": "AI Companies & Model Performance Analysis",
        "date": "2025-01-12",
        "topic": "Artificial Intelligence",
        "algorithms": [
            "Statistical Analysis",
            "Trend Analysis"
        ],
        "datasetSize": "150+ AI models",
        "images": [
            "eda/IMG-20260519-WA0003.jpg"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "EDA"
        ],
        "summary": "An exploratory analysis of AI companies and their models to uncover trends in model performance, popularity of AI domains, and technological progress over time.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The dataset contains information about 100 AI companies and 150 AI models, including model type, development year, and performance metrics such as accuracy and F1-score.</p>\n\n        <h4 class=\"report-subtitle\">Analysis Performed</h4>\n        <ul class=\"report-list\">\n            <li>Cleaned the dataset by removing duplicate entries and handling missing values.</li>\n            <li>Performed exploratory data analysis (EDA) to study the distribution of AI model types.</li>\n            <li>Created bar charts and scatter plots to visualize performance trends over time.</li>\n            <li>Calculated average performance metrics for each AI model category.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights Extracted</h4>\n        <ul class=\"report-list\">\n            <li><strong>NLP Dominance:</strong> Natural Language Processing (NLP) emerged as the most common AI model category, followed by Computer Vision.</li>\n            <li><strong>Performance Growth:</strong> NLP models showed a strong increase in accuracy and F1-score over the years.</li>\n            <li><strong>Computer Vision Trends:</strong> Computer Vision models improved steadily, though at a slower pace than NLP systems.</li>\n            <li><strong>Top Performing Companies:</strong> Companies like OpenAI, Google, and Anthropic consistently developed high-performing models.</li>\n            <li><strong>Innovation Impact:</strong> A positive correlation was observed between development year and model performance, indicating newer models perform better.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The analysis highlights the rapid growth of NLP technologies and the importance of continuous innovation in AI development. Companies consistently producing high-performing models are likely to maintain a competitive advantage in the AI industry.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(AI%20Companies%20and%20there%20models).ipynb"
    },
    {
        "id": "heart-stroke-analysis",
        "category": "eda",
        "title": "Heart Stroke Risk Analysis",
        "date": "2025-01-18",
        "topic": "Healthcare",
        "algorithms": [
            "Statistical Analysis",
            "Correlation Analysis"
        ],
        "datasetSize": "5000+ records",
        "images": [
            "eda/IMG-20260519-WA0000.jpg"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Healthcare"
        ],
        "summary": "A healthcare data analysis project focused on identifying major risk factors associated with stroke occurrence using demographic and medical attributes.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The dataset contains 5,110 healthcare records with 12 features including age, hypertension, heart disease, BMI, glucose level, smoking status, and stroke occurrence.</p>\n\n        <h4 class=\"report-subtitle\">Analysis Performed</h4>\n        <ul class=\"report-list\">\n            <li>Removed duplicate records and handled missing values using statistical imputation techniques.</li>\n            <li>Conducted exploratory data analysis (EDA) to study relationships between medical factors and stroke occurrence.</li>\n            <li>Used histograms, box plots, and correlation heatmaps for visualization and pattern discovery.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights Extracted</h4>\n        <ul class=\"report-list\">\n            <li><strong>Age Factor:</strong> Older individuals were found to have a significantly higher stroke risk.</li>\n            <li><strong>Medical Conditions:</strong> Hypertension and heart disease showed strong correlation with stroke occurrence.</li>\n            <li><strong>Lifestyle Impact:</strong> Smoking status and glucose levels also contributed to increased stroke risk.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The analysis identified age, hypertension, heart disease, smoking habits, and glucose levels as key indicators of stroke risk. These insights can support preventive healthcare strategies and future predictive modeling applications.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(Heart%20Stroke%20Rate).ipynb"
    },
    {
        "id": "house-price-analysis",
        "category": "eda",
        "title": "House Price Analysis & Visualization",
        "date": "2025-01-22",
        "topic": "Real Estate",
        "algorithms": [
            "Statistical Analysis"
        ],
        "datasetSize": "1000 house listings",
        "images": [
            "eda/IMG-20260519-WA0006.jpg"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Matplotlib",
            "EDA",
            "Visualization"
        ],
        "summary": "An exploratory analysis of housing market data to identify how area, location, and furnishing type influence property prices.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The dataset contains information about house prices, including carpet area, super area, furnishing type, and location details for 1,000 property listings.</p>\n\n        <h4 class=\"report-subtitle\">Analysis Performed</h4>\n        <ul class=\"report-list\">\n            <li>Loaded and cleaned the dataset from an Excel source.</li>\n            <li>Processed area-related columns by extracting numeric values and converting them into integer format.</li>\n            <li>Handled missing values and standardized column names for consistency.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights Extracted</h4>\n        <ul class=\"report-list\">\n            <li><strong>Area vs Price:</strong> Larger carpet and super areas generally correspond to higher property prices.</li>\n            <li><strong>Location Impact:</strong> Different locations showed significant variation in price ranges.</li>\n            <li><strong>Furnishing Influence:</strong> Furnished properties tended to have higher average prices compared to unfurnished homes.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The analysis demonstrates that property size, location, and furnishing type are major contributors to house pricing. These insights can help buyers, sellers, and real estate analysts better understand market behavior.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(House%20Pricing%20and%20Analysis).ipynb"
    },
    {
        "id": "cricket-performance-analysis",
        "category": "eda",
        "title": "Cricket Player Performance Analysis",
        "date": "2025-02-02",
        "topic": "Sports Analytics",
        "algorithms": [
            "Statistical Analysis",
            "Performance Analysis"
        ],
        "datasetSize": "1000 player records",
        "images": [
            "eda/IMG-20260519-WA0005.jpg"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Sports Analytics"
        ],
        "summary": "A sports analytics project analyzing cricket player performance metrics such as runs, wickets, batting average, and strike rate.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The dataset contains performance statistics of cricket players including runs scored, wickets taken, batting average, and strike rate across 1,000 records.</p>\n\n        <h4 class=\"report-subtitle\">Analysis Performed</h4>\n        <ul class=\"report-list\">\n            <li>Performed data cleaning and handled missing values.</li>\n            <li>Created histograms, box plots, scatter plots, bar charts, and pair plots for performance analysis.</li>\n            <li>Analyzed relationships between batting and bowling performance metrics.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights Extracted</h4>\n        <ul class=\"report-list\">\n            <li><strong>Runs Distribution:</strong> Runs scored followed a right-skewed distribution where few players scored exceptionally high.</li>\n            <li><strong>Wicket Outliers:</strong> Certain players showed significantly higher wicket counts compared to others.</li>\n            <li><strong>Strike Rate Correlation:</strong> Players scoring more runs generally maintained higher strike rates.</li>\n            <li><strong>Top Performers:</strong> The analysis identified the highest run-scorers and best overall performers.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The project provided valuable insights into player consistency, batting efficiency, and overall cricket performance trends, helping support sports analytics and selection strategies.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(IPL%20Players%20Performance%20Analysis).ipynb"
    },
    {
        "id": "india-rape-case-analysis",
        "category": "eda",
        "title": "India Rape Case Data Analysis",
        "date": "2025-02-10",
        "topic": "Social Analytics",
        "algorithms": [
            "Statistical Analysis",
            "Trend Analysis"
        ],
        "datasetSize": "16k+ reported cases",
        "images": [
            "eda/IMG-20260519-WA0001.jpg"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "Data Analysis"
        ],
        "summary": "A social data analysis project exploring demographic and geographic trends in reported rape cases across different states in India.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The dataset contains approximately 16,000 reported rape cases across multiple Indian states, including demographic and regional information about victims.</p>\n\n        <h4 class=\"report-subtitle\">Analysis Performed</h4>\n        <ul class=\"report-list\">\n            <li>Analyzed victim demographics and age-group distribution.</li>\n            <li>Studied state-wise trends and geographic concentration of reported cases.</li>\n            <li>Identified patterns related to vulnerable age groups and special case categories.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights Extracted</h4>\n        <ul class=\"report-list\">\n            <li><strong>High-Risk Age Group:</strong> Women aged 18–30 represented nearly 50% of reported cases.</li>\n            <li><strong>Teenage Vulnerability:</strong> Victims aged 14–18 accounted for approximately 25% of cases.</li>\n            <li><strong>State-Wise Concentration:</strong> Madhya Pradesh, Uttar Pradesh, and Maharashtra recorded the highest case counts.</li>\n            <li><strong>Incest Cases:</strong> Madhya Pradesh showed a comparatively higher number of reported incest rape cases.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The analysis highlights concerning national trends in sexual violence and emphasizes the need for stronger preventive measures, awareness programs, and victim support systems across vulnerable demographics and high-risk regions.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(Rape%20case%20in%20India).ipynb"
    },
    {
        "id": "telco-customer-churn-analysis",
        "category": "eda",
        "title": "Telco Customer Churn Analysis (2020)",
        "date": "2025-02-18",
        "topic": "Telecom Analytics",
        "algorithms": [
            "Statistical Analysis",
            "Trend Analysis"
        ],
        "datasetSize": "1000 transactions",
        "images": [
            "eda/IMG-20260519-WA0002.jpg"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Matplotlib",
            "EDA",
            "Business Analytics"
        ],
        "summary": "A retail analytics project analyzing product sales, category performance, and seasonal trends in customer purchasing behavior during 2020.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The dataset contains 1,000 retail store transactions from January 2020 to December 2020, including product, category, quantity sold, and total sales information.</p>\n\n        <h4 class=\"report-subtitle\">Analysis Performed</h4>\n        <ul class=\"report-list\">\n            <li>Cleaned the dataset by removing duplicates and handling missing values.</li>\n            <li>Performed EDA to understand category-wise and product-wise sales distribution.</li>\n            <li>Created bar charts and line graphs to visualize monthly and seasonal sales trends.</li>\n            <li>Calculated total sales metrics for products and categories.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights Extracted</h4>\n        <ul class=\"report-list\">\n            <li><strong>Top Product:</strong> Product A generated the highest overall sales revenue.</li>\n            <li><strong>Best Category:</strong> Electronics emerged as the highest-selling category.</li>\n            <li><strong>Seasonal Trend:</strong> Sales increased significantly during November and December due to holiday demand.</li>\n            <li><strong>Transaction Metrics:</strong> Average quantity sold per transaction was 3 items with an average sale value of $150.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The analysis revealed strong seasonal purchasing behavior and identified high-performing products and categories. These insights can support inventory planning, marketing strategies, and sales optimization in retail businesses.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(Tel%20Customer%20churn).ipynb"
    },
    {
        "id": "titanic-data-analysis",
        "category": "eda",
        "title": "Titanic Survival Data Analysis",
        "date": "2025-02-25",
        "topic": "Historical Data Analysis",
        "algorithms": [
            "Statistical Analysis",
            "Correlation Analysis"
        ],
        "datasetSize": "891 passenger records",
        "images": [
            "eda/IMG-20260519-WA0004.jpg"
        ],
        "tags": [
            "Python",
            "Pandas",
            "Matplotlib",
            "Seaborn",
            "EDA"
        ],
        "summary": "An exploratory analysis of Titanic passenger data to identify demographic and socioeconomic factors influencing survival rates.",
        "detailedReport": "\n        <h4 class=\"report-subtitle\">Dataset Overview</h4>\n        <p>The Titanic dataset contains information about 891 passengers, including age, gender, passenger class, fare, and survival status.</p>\n\n        <h4 class=\"report-subtitle\">Analysis Performed</h4>\n        <ul class=\"report-list\">\n            <li>Conducted data inspection and preprocessing.</li>\n            <li>Handled missing values and removed duplicate entries.</li>\n            <li>Created visualizations to analyze survival patterns across age, gender, and passenger classes.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Key Insights Extracted</h4>\n        <ul class=\"report-list\">\n            <li><strong>Age Distribution:</strong> Most passengers were in their 20s and 30s.</li>\n            <li><strong>Fare Relationship:</strong> Older passengers generally paid higher fares.</li>\n            <li><strong>Gender Impact:</strong> Women and children had significantly higher survival rates.</li>\n            <li><strong>Class Difference:</strong> Third-class male passengers experienced the highest mortality rates.</li>\n        </ul>\n\n        <h4 class=\"report-subtitle\">Conclusion</h4>\n        <p>The analysis demonstrates that demographic and socioeconomic factors strongly influenced survival outcomes during the Titanic disaster. Passenger class, gender, and age were among the most significant determinants of survival probability.</p>\n    ",
        "githubLink": "https://github.com/suyash2356/EDA-Project/blob/main/EDA%20(Titanic%20Survival%20Analysis).ipynb"
    }
];
