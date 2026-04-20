import ProjectCard from './ProjectCard';
import styles from './ProjectGrid.module.css';

const projects = [
    {
        id: 0,
        title: 'Autonomous Supply Chain Agentic Orchestration',
        description: 'Proprietary enterprise logistics platform featuring autonomous document parsing and agentic legacy data migrations.',
        tech: ['Google Agent Engine', 'LangGraph', 'LlamaIndex', 'FAISS', 'OpenTelemetry (OTEL)', 'Vertex AI Endpoints', 'Cloud Run', 'Oracle PL/SQL'],
        github: '', // Proprietary
        highlights: [
            'Multi-Modal Agentic Parsing: Designed an autonomous ingestion pipeline utilizing Reciprocal Rank Fusion (RRF) and hierarchical chunking to parse complex, unstructured domain-specific documents.',
            'Intelligent Data Migration: Developed an automated transformation accelerator combining LLM query expansion with deep relational database (PL/SQL) expertise for seamless cloud migrations.',
            'Self-Healing QA & Observability: Engineered custom evaluation frameworks for automated release testing, backed by a unified "Telemetry Gravity" observability pattern using OTEL.'
        ],
        infographicLink: '',
        architectureLink: '',
        features: []
    },
    {
        id: 1,
        title: 'Distributed Multi-Agent Research Orchestrator',
        description: 'A sovereign agentic ecosystem leveraging Google Agent Development Kit (ADK), LangGraph orchestration, and advanced RAG using LlamaIndex and Model Context Protocol (MCP).',
        tech: ['Google Agent Development Kit (ADK)', 'LangGraph (StateGraph)', 'LlamaIndex', 'Arize Phoenix & Google Cloud Trace', 'zrok', 'Gradio', 'Vertex AI', 'Custom MCP Server', 'Docker'],
        github: 'https://github.com/rprisram/NotebookLM-Clone',
        highlights: [
            'Extreme Performance: < 2 min end-to-end generation for a 15-minute high-fidelity podcast.',
            'High Fidelity Custom Evaluation: 91% aggregate pass rate via custom JSON rubric evaluators.',
            'Unified Telemetry: Pioneered "Telemetry Gravity" pattern to merge instrumentation into a single pane of glass.',
            'Advanced RAG: Engineered SOTA retrieval engine using Reciprocal Rank Fusion (RRF) and hierarchical chunking.'
        ],
        architectureLink: '/assets/projects/Dist_Multi_Agent_Res_Orch/Distributed_Multi_Agent_Research_orchestrator.pdf',
        shortformLink: '/assets/projects/Dist_Multi_Agent_Res_Orch/Distributed_Multi_Agent_Research_orchestrator_ShortForm.pdf',
        infographicLink: '/assets/projects/Dist_Multi_Agent_Res_Orch/DMARO.png',
        features: [
            { label: 'Ingestion: LlamaIndex/LLMSherpa Pipeline', youtubeId: 'VPynVc0jHvM' },
            { label: 'Arize Phoenix Local Trace', youtubeId: 'CSS4lVfnVXA' },
            { label: 'MCP Server Audio (GCP Observability)', youtubeId: 'LQjvxHNY49k' },
            { label: 'Automated Podcast Creation', youtubeId: '6mdUp3NP6Qc' },
            { label: 'BM25 Only Search', youtubeId: 'NrWAOC8qk7k' },
            { label: 'BM25 + Grounded Search', youtubeId: 'b7nJ9wwUnkQ' },
            { label: 'Semantic + Alternate Queries + Grounded', youtubeId: '6SLc1d5y7pQ' },
            { label: 'Advanced Semantic + Grounded Chat', youtubeId: 'XE3LYkcJLH8' },
            { label: 'MindMap Feature', youtubeId: 'HGTwMYlfhMc' },
            { label: 'Study Guide Generation', youtubeId: '0kp-2EOLT6w' }
        ]
    },
    {
        id: 2,
        title: 'Specialized Drug Interaction LLM: Fine-Tuning & GCP Deployment',
        description: 'An interactive AI chatbot showcasing MLOps from training to production on Google Cloud.',
        tech: ['Llama 3.1 8B', 'Unsloth', 'PEFT (LoRA)', 'SFT', 'Gradio', 'Vertex AI Endpoints', 'Weights & Biases'],
        github: 'https://github.com/rprisram/Drug-Interaction-Chatbot',
        highlights: [
            'Specialization Leap: Achieved a 331.68% performance increase over base model via targeted PEFT.',
            'Cloud Architecture: Scalable 3-tier cloud deployment using Vertex AI Endpoints and Cloud Run (scale-to-zero).',
            'Model Lifecycle: Managed full lifecycle from GGUF quantization to rigorous "LLM as a Judge" evaluation.'
        ],
        architectureLink: '/assets/projects/DDI_FineTuning/DDI_FineTuning.pdf',
        infographicLink: '/assets/projects/DDI_FineTuning/DDI_FineTuning.png',
        features: [
            { label: 'Secure 3-Tier Production Architecture', youtubeId: 'kAfAzn4F0IE' },
            { label: 'Local Inference (Ollama/MLX Optimized)', youtubeId: 'w63ubqj2j5A' }
        ]
    },
    {
        id: 3,
        title: 'Generative Bid Agent: Enterprise RFP Intelligence System',
        description: 'Multi-Modal RAG system using "Triangle of Truth" reasoning to synthesize high-fidelity RFP responses.',
        tech: ['Google Agent Development Kit (ADK)', 'Vertex AI Search', 'Gemini 3.0 Pro', 'Next.js 15', 'Arize Phoenix & Google Cloud Trace', 'Triangle of Truth Logic', 'Docker'],
        github: 'https://github.com/rprisram/rfp_rag',
        highlights: [
            'SOTA Retrieval: Implemented 2-stage retrieval pipeline with dynamic filtering and re-ranking.',
            'Reasoning Engine: Derives bidding logic and estimation heuristics from heterogeneous documents (PDF/Excel/PPT).',
            'Response Automation: Automates end-to-end RFP response generation and solution architecture decks.'
        ],
        infographicLink: '/assets/projects/RFP_RAG/rfp_rag.png',
        architectureLink: '/assets/projects/RFP_RAG/rfp_rag.pdf',
        features: [
            { label: 'RFP Intelligence UI Preview', imageLink: '/assets/projects/RFP_RAG/rfp_rag_UI.png' },
            { label: 'Vertex AI AgentEngine Data Search', imageLink: '/assets/projects/RFP_RAG/rfp_rag_VertexAI-DataSearch.png' },
            {
                label: 'Interative Intelligence Hub (ADK Dev UI)',
                link: '/assets/projects/RFP_RAG/Agent Development Kit Dev UI.html',
                isHtml: true,
                desc: 'Full-featured developer console for agent orchestration and evaluation.'
            },
            {
                label: 'Gemini-3-pro Model Agent Workspace',
                link: '/assets/projects/RFP_RAG/Gemini-3-pro_Model_Agent.html',
                isHtml: true,
                desc: 'Interactive workspace for refining agent-driven RFP responses.'
            }
        ]
    },
    {
        id: 4,
        title: 'GAIA Agent: General AI Assistant Orchestrator',
        description: 'High-complexity orchestrator capable of multi-step tool-use and deep information retrieval, proven against GAIA standards.',
        tech: ['LangGraph (StateGraph)', 'Mem0', 'HuggingFace Datasets', 'Gemini 2.5 Flash', 'Tavily Search', 'Wikipedia Tool'],
        github: 'https://huggingface.co/spaces/rprisram/Final_Assignment_Template/tree/main',
        githubLabel: 'View Source Code (HuggingFace)',
        highlights: [
            'Benchmark Excellence: Achieved 100% accuracy on the GAIA (General AI Assistant) benchmark.',
            'Advanced Memory: Leveraged Mem0 for long-term persistent memory across heterogeneous sessions.',
            'Tool Orchestra: Managed a suite of 12 tools (Tavily, Wikipedia, Multimedia Processors) via StateGraph.'
        ],
        features: []
    },
    {
        id: 5,
        title: "Priya's AI Portfolio & Reasoning Engine",
        description: 'An Agentic Digital Twin portfolio built with Next.js and powered by a highly constrained, context-aware Gemini AI Assistant.',
        tech: ['Next.js 15', 'Gemini 2.5 Flash', 'Agentic Context Injection', 'Strict System Guardrails', 'Google Cloud Run', 'Docker'],
        github: 'https://github.com/rprisram/AI_Portfolio',
        highlights: [
            'Agentic Contextualization: Synthesized 18+ years of professional history into a structured JSON memory for precise AI reasoning.',
            'Strict Reliability Guardrails: Engineered strict prompt boundaries ensuring the AI explicitly refuses beyond scope or knowledge boundary or ungrounded proprietary inquiries.',
            'Cloud-Native Deployment: Fully containerized application deployed to GCP Cloud Run, utilizing Google Secret Manager for secure API key injection.'
        ],
        features: []
    }
];

export default function ProjectGrid() {
    return (
        <section id="genai" className={styles.projectsSection}>
            <div className={`${styles.container} container`}>
                <h2 className={styles.sectionTitle}>Production GenAI Implementations</h2>
                <div className={styles.grid}>
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
