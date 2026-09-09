import styles from './TechnicalArsenal.module.css';

const skills = [
    {
        category: 'Agentic Lifecycle & NLP',
        items: [
            'Multi-Agent Orchestration (LangGraph, StateGraph)',
            'Agentic RAG (Advanced Semantic Fusion, RRF & Tri-Path Search)',
            'Google Agent Development Kit (ADK)',
            'LlamaIndex',
            'Tools-as-Agents Topology (Grounding LLM-Bypass)',
            'Custom MCP Server Implementation (FastMCP & Zrok HTTP-SSE Reverse Tunnels)',
            'PydanticAI & Strict Schema Adherence',
            'Arize Phoenix & Google Cloud Trace Observability',
            'Antigravity Native IDE Orchestration (SKILL.md Workflow)',
            'Azure App Insights',
            'Model-Agnostic Agent Router (Claude Lane + Microsoft Agent Framework Lane)'
        ]
    },
    {
        category: 'High-Performance Reasoning',
        items: [
            'Gemini 3.0 Pro / 3.0 Flash / 2.5 Flash',
            'Anthropic Claude (Opus / Sonnet Enterprise Document Reasoning)',
            'Llama 3.1 & 4B (PEFT/LoRA Fine-tuned)',
            'SFT (Supervised Fine-Tuning)',
            'GGUF Quantization',
            'Ollama & MLX Optimization (Local Inference & MLX-Audio)',
            'LLM-as-a-Judge Custom RAG Triad Evaluation',
            'Weights & Biases (W&B) Lifecycle Tracking',
            'Real-Time SSE Asynchronous Generator Relay',
            'Turn-2 Output-Token Capping (Single-Token Handshake Turns, Zero Reasoning Waste)',
            'Prompt Cache Optimizations - Warm Cache, Cache Write & Read between Turns'
        ]
    },
    {
        category: 'MLOps & Cloud Scalability',
        items: [
            'GCP Cloud Run (Monolithic Single-Container Multi-Process Topology)',
            'Process Multiplexing & Private Loopback(<1ms)',
            'Vertex AI Endpoints & Model Registry',
            'Vertex AI Agent Engine',
            'Docker Containerization , Artifact Registry & GCP Cloud Build',
            'Workload Identity & Compute Service Account Least-Privilege IAM',
            'Zero-Trust Security Patterns (Secret Manager Bootstrapping)',
            'Vertex AI Search Data Ingestion & Grounding Integration',
            'Zero-Trust AI Gateway',
            'Metadata-Driven Model Routing in APIM & Code Config',
            'APIM Subscription-Key/JWT Inter-Service Auth',
            'Four-Layer AI Guardrail Evaluation'
        ]
    },
    {
        category: 'Advanced Architecture Patterns',
        items: [
            'Self-Healing Agents & Reflection Loops (Headless Reflection)',
            'High Fidelity Custom Evaluation Framework (LLM-as-a-Judge)',
            'Triangle of Truth (Multi-Modal Synthesis Reasoning)',
            'Telemetry Gravity (Observability Switch: Local Arize / GCP Trace)',
            'Nuclear Teardown Protocol (FinOps Automation for Idle Compute)',
            'Distributed Research & Synthesis Orchestration',
            'Tools-as-Agents Latency Optimization (LLM reasoning-bypass)',
            'Smart Tool Self-Polling Event-Listener & LRO Ejection Pattern',
            'Deterministic Rubric-Based Evaluation',
            'Telemetry & Session Cost Visibility',
            'Prompt Cache Engineering POptimizations',
            'Two-Pass, Tiered-Model Orchestration',
            'Anti-Hallucination Evidence Sandboxing',
            'EA-Owned Rubric vs. Engineering-Owned Config Governance'
        ]
    },
    {
        category: 'Foundational AI/ML Systems',
        items: ['Hyperparameter Optimization (Keras Tuner, BayesSearchCV)', 'Cost-Complexity Pruning & EarlyStopping', 'Transfer Learning (VGG19) & Data Augmentation', 'SMOTE-Tomek Imbalanced Data Balancing', 'Transformer NLP (BERT) & Zero-shot Classification', 'Advanced Ensemble Modeling (XGBoost/RF)']
    },
    {
        category: 'Enterprise Leadership Strategy',
        items: ['18+ Years Technology Leadership', 'AI Engineering Architect (Cyclotron)', 'Cross-Functional EA & Engineering Governance Partnership (Regulated Banking Client Program)', 'GenAI Architect & Engineering Lead (Strategic Portfolios)', 'Generative AI Architect & Engineer (KSAP Technologies)', 'Mobile Principal Engineer I (CVS Health)', 'Mobile Lead / Solution Architect (McDonalds)', 'iOS Developer (Keevat LLC & Allstate)', 'Facets ERP Oracle Developer / Tech Lead (Cognizant)', 'Cross-Functional GenAI Strategy & Adoption']
    }
];

export default function TechnicalArsenal() {
    return (
        <section id="skills" className={styles.skillsSection}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.sectionTitle}>Technical Arsenal</h2>
                <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                        <div key={index} className={`${styles.skillCard} glass`}>
                            <h3 className={styles.category}>{skill.category}</h3>
                            <ul className={styles.skillList}>
                                {skill.items.map((item, i) => (
                                    <li key={i} className={styles.skillItem}>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
