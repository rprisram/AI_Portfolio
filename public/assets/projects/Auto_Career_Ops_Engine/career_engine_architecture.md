# Autonomous Career Operations Engine Architecture

This artifact contains a Mermaid diagram visualizing the core engine features, ingestion paths, and the sequential workflows of the Autonomous Career Operations Engine. For the high-fidelity landscape version, please open the newly generated `career_engine_infographic.html` in your browser.

```mermaid
graph TD
    %% Define Styles
    classDef purpleNode fill:#4c1d95,stroke:#8b5cf6,stroke-width:2px,color:#fff;
    classDef blueNode fill:#1e3a8a,stroke:#3b82f6,stroke-width:2px,color:#fff;
    classDef greenNode fill:#064e3b,stroke:#10b981,stroke-width:2px,color:#fff;
    classDef goldNode fill:#78350f,stroke:#f59e0b,stroke-width:2px,color:#fff;
    classDef dbNode fill:#1e293b,stroke:#94a3b8,stroke-width:1px,color:#fff,stroke-dasharray: 5 5;

    subgraph INGESTION["1. Context & Ingestion"]
        A[search/vault/ <br/> Resume & LinkedIn PDFs]:::purpleNode --> B[Native LLM Parsing <br/> Antigravity Natively Reads PDFs]:::purpleNode
        B --> C[(search/context/ <br/> Unified Knowledge Graph)]:::dbNode
        C -.-> C1(experience-library.yaml)
        C -.-> C2(interview-answers.yaml)
        C -.-> C3(active-session.yaml)
    end

    subgraph ORCHESTRATOR["2. Sequential Workflows (.agent/workflows/)"]
        D[1. @evaluate-role <br/> Fit, Gap, ATS Check]:::blueNode
        E[2. @cover-letter <br/> Tailored Mapping]:::blueNode
        F[3. @network-outreach <br/> Insights & Messaging]:::blueNode
        G[4. @auto-apply <br/> DOM HTML Input Mapping]:::blueNode
        
        D -->|Saves Score| E
        D -->|Passes JD Data| F
        E --> G
        F --> G
        
        H[5. @autonomous-orchestrator <br/> The Apex Macro: Natively executes 1-4 reading from active-session.yaml]:::goldNode
        G -.->|Managed by| H
        D -.->|Managed by| H
    end

    subgraph CAPABILITIES["3. Core Capabilities"]
        I[Headless State Automation]:::greenNode
        J[Deterministic Anti-Blocking <br/> clean-url & HITL pauses]:::greenNode
        K[Self-Healing Loop <br/> Learns unknown application questions]:::greenNode
    end

    C --> D
    
    %% Connect Engine Capabilities loosely to the Orchestrator
    I -.-> H
    J -.-> G
    K -.-> G
```
