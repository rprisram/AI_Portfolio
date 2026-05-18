import ProjectCard from './ProjectCard';
import styles from './ProjectGrid.module.css';

const projects = [
    {
        id: 0,
        title: 'Autonomous Supply Chain Agentic Orchestration',
        description: 'Proprietary enterprise logistics platform featuring autonomous document parsing and agentic legacy data migrations.',
        tech: ['Google Agent Engine', 'LangGraph', 'LlamaIndex', 'FAISS', 'OpenTelemetry (OTEL)', 'Vertex AI Endpoints', 'Cloud Run', 'Oracle PL/SQL', 'Self-Healing Agents', 'Reflection Loops'],
        github: '', // Proprietary
        highlights: [
            'Multi-Modal Agentic Parsing: Designed an autonomous ingestion pipeline utilizing Reciprocal Rank Fusion (RRF) and hierarchical chunking to parse complex, unstructured domain-specific documents.',
            'Intelligent Data Migration: Developed an automated transformation accelerator combining LLM query expansion with deep relational database (PL/SQL) expertise for seamless cloud migrations.',
            'Self-Healing QA: Developed autonomous QA agents ensuring 100% adherence to complex business requirements across software release cycles.',
            'Observability: Engineered custom evaluation frameworks for automated release testing, backed by a unified "Telemetry Gravity" observability pattern using OTEL.'
        ],
        infographicLink: '',
        architectureLink: '',
        features: []
    },
    {
        id: 1,
        title: 'Distributed Multi-Agent Research Orchestrator',
        description: 'A sovereign NotebookLM-inspired agentic ecosystem built with Google ADK and LangGraph, consolidated into a Cloud Run Monolithic Single-Container with LlamaIndex and MCP RAG.',
        tech: [
            'Google Agent Development Kit (ADK)',
            'LangGraph (StateGraph)',
            'LlamaIndex',
            'Arize Phoenix & Google Cloud Trace',
            'zrok HTTP-SSE Tunneling',
            'Vertex AI & Vertex Search',
            'Custom MCP Server (FastMCP)',
            'Docker Containerization',
            'GCP Cloud Run (Monolithic Single-Container)',
            'Tools-as-Agents Topology',
            'Zero-Trust IAM & Secret Manager'

        ],
        github: 'https://github.com/rprisram/NotebookLM-Clone',
        githubLabel: 'Orchestrator Code (GitHub)',
        github2: 'https://github.com/rprisram/agenticaudiolab',
        github2Label: 'Audio Lab Module (GitHub)',
        highlights: [
            'Extreme Performance: 15 Min podcast generation under 2 minutes and cut compute costs by 90% via a monolithic Cloud Run container running sub-millisecond loopback (<1ms).',
            'Advanced RAG & Latency Defeat: Engineered SOTA Tri-Path Search (BM25 + Semantic + RRF) and reduced RAG latency from 38s down to 10.2s via native, Tools-as-Agents grounding.',
            'Unified Telemetry: Pioneered "Telemetry Gravity" pattern to merge instrumentation into a single pane of glass',
            'High-Fidelity Evaluation: 91% aggregate pass rate via custom JSON rubric evaluators.'
        ],
        architectureLink: '/assets/projects/Dist_Multi_Agent_Res_Orch/Distributed_Multi_Agent_Research_orchestrator.pdf',
        shortformLink: '/assets/projects/Dist_Multi_Agent_Res_Orch/Distributed_Multi_Agent_Research_orchestrator_ShortForm.pdf',
        infographicLink: '/assets/projects/Dist_Multi_Agent_Res_Orch/DMARO.png',
        features: [
            { label: 'Ingestion: LlamaIndex/LLMSherpa Pipeline', youtubeId: 'VPynVc0jHvM' },
            { label: 'Cloud Run Ingestion: Vertex AI Search', youtubeId: '72JdCa9AN38' },
            { label: 'Arize Phoenix Local Trace', youtubeId: 'CSS4lVfnVXA' },
            { label: 'Cloud Run Podcast Pipeline', youtubeId: 'DVN7964a7c4' },
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
    },
    {
        id: 6,
        title: 'Autonomous Career Operations Engine',
        description: 'End-to-End AI-Agentic Job Application Architecture built natively within the Antigravity IDE. It autonomously evaluates roles, generates tailored assets, and executes browser-based applications with deterministic state management.',
        tech: ['Antigravity IDE', 'Browser Subagent', 'SKILL.md Workflows', 'Python (urllib.parse)', 'YAML Database Management', 'Human-in-the-Loop (HITL)', 'Self-Healing Agents', 'Reflection Loops'],
        github: 'https://github.com/rprisram/Autonomous_Career_Engine_Public',
        fullWidth: true,
        highlights: [
            'SKILL.md Agentic Separation: Replaces traditional monolithic prompting with modular SKILL.md files chained via Workflows. This avoids context bloating by only loading necessary skill modules on demand.',
            'Zero API / Token Costs: Driven entirely within the Antigravity IDE, bypassing expensive external API dependencies by dynamically leveraging the model quota (Claude and Gemini families) available from the AI Coding Assistant.',
            'The Self-Healing Loop & Data Consolidation: Natively merges Resume & LinkedIn PDFs into a master experience-library.yaml. Dynamically pauses (HITL) to learn unknown application questions and permanently rewrites its knowledge base to never make the same mistake twice.',
            'Headless State & Deterministic Anti-Blocking: Automates execution blindly from active-session.yaml. Bypasses tracking/auth walls natively via explicit programmatic intercepts and strict HITL login pauses before autonomous DOM HTML mapping.',
            'Multi-Level Conditional Gating: Strict quantitative barrier logic mandates >90% scores across JD fit, ATS checks, and Recruiter reviews before the Apex Macro Orchestrator launches the browser subagent.'
        ],
        infographicLink: '/assets/projects/Auto_Career_Ops_Engine/Autonomous_Career_Operations_Engine.png',
        architectureLink: '/assets/projects/Auto_Career_Ops_Engine/Autonomous_Career_Operations_Engine.pdf',
        htmlSummaryLink: '/assets/projects/Auto_Career_Ops_Engine/career_engine_infographic.html',
        features: [
            {
                label: 'Phase 1: Autonomous JD vs Profile Evaluation',
                youtubeId: '2gQDgu0xYzo'
            }
        ]
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
