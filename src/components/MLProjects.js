import styles from './MLProjects.module.css';

const mlProjects = [
    {
        title: 'NLP Stock Sentiment & Summarization',
        desc: 'Advanced sentiment analysis on financial news using BERT-tuned models and Zero-shot classification for impact scoring.',
        tags: ['Quantized LLMs', 'BERT', 'Zero-shot Classification', 'NLP'],
        github: 'https://github.com/rprisram/NLP-driven-Stock-Market-Sentiment-Analysis-and-News-Summarization'
    },
    {
        title: 'CNN Plant Seedling Classification',
        desc: 'Computer vision pipeline utilizing Transfer Learning (VGG19) and Data Augmentation for automated botanical identification.',
        tags: ['VGG19 Transfer Learning', 'CNN', 'Data Augmentation', 'Batch Normalization'],
        github: 'https://github.com/rprisram/CNN-based-Plant-Seedling-Classification'
    },
    {
        title: 'Customer Churn Forecasting',
        desc: 'Deep learning neural network for telecom churn prediction featuring Keras Tuner tracking and EarlyStopping regularization.',
        tags: ['Keras Tuner', 'EarlyStopping', 'Adam Optimizer', 'Neural Networks'],
        github: 'https://github.com/rprisram/Customer-Churn-Forecasting'
    },
    {
        title: 'Credit Card User Churn Prediction',
        desc: 'Ensemble learning system optimized via BayesSearchCV to identify high-risk accounts using SMOTE balancing.',
        tags: ['Gradient Boosting', 'SMOTE', 'BayesSearchCV', 'Random Forest'],
        github: 'https://github.com/rprisram/Credit-Card-Users-Churn-Prediction'
    },
    {
        title: 'Personal Loan Prediction',
        desc: 'Predictive classification model utilizing GridSearchCV and advanced Cost Complexity Pruning (ccp_alpha) to maximize conversions.',
        tags: ['Cost Complexity Pruning', 'GridSearchCV', 'Decision Trees', 'SMOTE'],
        github: 'https://github.com/rprisram/Personal-Loan-Campaign-Prediction'
    },
    {
        title: 'FoodHub Order Analysis (EDA)',
        desc: 'Comprehensive exploratory data analysis leveraging engineered features (total_time) and visual analytics (Seaborn) for demand forecasting.',
        tags: ['Feature Engineering', 'Seaborn', 'Statistical Analysis', 'EDA'],
        github: 'https://github.com/rprisram/FoodHub-Data-Analysis'
    }
];

export default function MLProjects() {
    return (
        <section id="ml" className={styles.mlSection}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.sectionTitle}>Foundational AI/ML Systems (Post-Graduate Portfolio)</h2>
                <div className={styles.grid}>
                    {mlProjects.map((p, i) => (
                        <div key={i} className={`${styles.projectCard} glass`}>
                            <h3 className={styles.projectTitle}>{p.title}</h3>
                            <p className={styles.projectDesc}>{p.desc}</p>
                            <div className={styles.tagRow}>
                                {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
                            </div>
                            <div className={styles.cardFooter}>
                                <a href={p.github} target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                                    View on GitHub →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
