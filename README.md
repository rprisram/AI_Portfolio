# 🤖 AI/ML Portfolio - Digital Twin (v2.0)

A high-fidelity, production-grade portfolio designed to showcase 18+ years of technology leadership and cutting-edge GenAI/ML expertise. This site features a **"Digital Twin" AI Assistant** contextualized with exhaustive professional memory.

**Live URL**: [https://priyaraman-ai-portfolio-76375761518.us-central1.run.app](https://priyaraman-ai-portfolio-76375761518.us-central1.run.app)

## 🌟 Key Features

- **Digital Twin AI Assistant**: A specialized reasoning engine (Gemini 2.5 Flash) injected with 18+ years of career history, architectural whitepapers, and project metadata.
- **Architectural Sight**: The AI can perform visual deep-dives into flow diagrams (PNGs) and cite evidence from interactive execution demos (HTMLs).
- **Video Concierge Library**: 10+ production feature demonstrations mapped to clickable Markdown hyperlinks within the chat.
- **Enterprise Case Studies**: Deep-dives into **DMARO** (Orchestration), **RFP Intelligence** (Agentic RAG), and **DDI Fine-Tuning** (Hybrid Compute).
- **Telemetry Gravity Architecture**: Built-in instrumentation for enterprise-grade observability.

---

## 🚀 Tech Stack

- **Frontend**: Next.js 15, React 19, Vanilla CSS.
- **AI Core**: Google Gemini SDK (Gemini 2.5 Flash).
- **Context Engine**: Synthetic Memory Injection (Structured JSON).
- **Infrastructure**: Google Cloud Run, Artifact Registry, Secret Manager.
- **Tools**: Docker (Multi-stage AMD64 Builds).

---

## 🛠 Getting Started

### Prerequisites
- **Node.js** (v20+ )
- **Docker** (For production builds)
- **Google Cloud SDK** (For deployment)

### Local Development
1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Environment Setup:** Create a `.env.local` with your `GOOGLE_API_KEY`.
3. **Run Dev Server:**
   ```bash
   npm run dev
   ```
4. **View Site:** [http://localhost:3000](http://localhost:3000)

---

## ☁️ Deployment (GCP)

This portfolio is fully containerized and serves on Google Cloud Run with secure secret management.

**Detailed Deployment Steps**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for full instructions on building x86 images (AMD64) from Mac hardware and configuring Secret Manager.

---

## 📁 Asset Organization
- `/public/assets/projects/`: Individual subfolders containing infographics, PDFs, and interactive demos.
- `/src/data/digital_twin_context.json`: The "Source of Truth" memory file for the AI Assistant.
