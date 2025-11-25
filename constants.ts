import { Profile, News, Publication, Experience } from './types';

export const PROFILE: Profile = {
  name: "Tingshuo Fan",
  title: "Undergraduate Student",
  institution: "Fudan University (FNLP Lab)",
  email: "fantingshuo@qq.com",
  location: "Shanghai, China",
  avatarUrl: "https://github.com/Survivor613.png", 
  bio: "Hello, I am **Tingshuo Fan**, a sophomore student at **Fudan University**, pursuing a double degree in **English and Computer Science**. I am currently a research assistant at the **Fudan Natural Language Processing Lab (FNLP)**, focusing on **Large Language Models (LLM)**, **Retrieval-Augmented Generation (RAG)**, and **Agents**.",
  interests: [
    "Natural Language Processing",
    "Retrieval-Augmented Generation",
    "LLM Agents",
    "Global Reasoning"
  ],
  socialLinks: [
    { name: "GitHub", url: "https://github.com/Survivor613", icon: "Github" },
    { name: "Email", url: "mailto:fantingshuo@qq.com", icon: "Mail" },
    { name: "Lab Homepage", url: "https://openmoss.github.io", icon: "Globe" }
  ]
};

export const NEWS: News[] = [
  {
    id: "n1",
    date: "Nov 2025",
    content: "**GlobalQA** paper received minor revisions! Started research on **Multi-Modal RAG** and VLM-based retrieval."
  },
  {
    id: "n2",
    date: "Nov 2025",
    content: "Submitted **MARAG-R1** to **CJC** and **arXiv**. Conducted experiments for the appendix."
  },
  {
    id: "n3",
    date: "Oct 2025",
    content: "Submitted **GlobalQA** to **CJE** and **arXiv**. Completed surveys on **Graph-based RAG**."
  },
  {
    id: "n4",
    date: "Oct 2025",
    content: "Built enterprise-level RAG pipelines using **Dify** and deployed local models using Docker."
  },
  {
    id: "n5",
    date: "Sep 2025",
    content: "Joined **FNLP Lab**. Contributed to the dataset analysis and experiments for **GlobalQA**."
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "p1",
    title: "MARAG-R1: Beyond Single Retriever via Reinforcement-Learned Multi-Tool Agentic Retrieval",
    authors: ["Qi Luo", "Xiaonan Li", "Yuxin Wang", "Tingshuo Fan", "Xingchi Chen", "Xipeng Qiu"],
    venue: "Chinese Journal of Computers (CJC)",
    year: 2025,
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", // Tech Nodes / Cybersecurity / Agents
    highlight: true,
    abstract: "提出 MARAG-R1，一种通过强化学习协调多种检索工具的多工具检索增强生成框架，使大模型能主动整合更丰富的外部信息以进行全局推理。相较以往单一检索或图结构方法，MARAG-R1 通过监督微调与强化学习结合，实现了多步工具调用策略学习，在多个全局推理基准上取得了新的最优性能。",
    links: [
        { name: "ArXiv", url: "https://arxiv.org/abs/2510.27569", icon: "FileText" }
    ]
  },
  {
    id: "p2",
    title: "Towards Global Reasoning in RAG: Tool-Augmented Agents with a New Benchmark",
    authors: ["Qi Luo", "Xiaonan Li", "Tingshuo Fan", "Xingchi Chen", "Xipeng Qiu"],
    venue: "Chinese Journal of Electronics (CJE)",
    year: 2025,
    thumbnail: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?auto=format&fit=crop&q=80&w=800", // Stylized Earth / Global Connectivity
    highlight: false,
    abstract: "提出 GlobalQA 数据集及 GlobalRAG 基线，系统评测 RAG 系统在全局语料推理任务中的表现。",
    links: [
        { name: "ArXiv", url: "https://arxiv.org/abs/2510.26205", icon: "FileText" }
    ]
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: "e1",
    role: "Research Assistant",
    institution: "Natural Language Processing Lab, Fudan University",
    period: "Aug 2025 – Present",
    description: "Focus Areas: Agent / RAG"
  },
  {
    id: "e2",
    role: "Bachelor of Arts in English Linguistics & CS",
    institution: "Fudan University",
    period: "Sept 2024 – Present",
    description: "Double Degree Program"
  }
];

export const SYSTEM_INSTRUCTION = `You are a helpful AI assistant acting as the "Digital Twin" of ${PROFILE.name}. 
Your goal is to answer questions about Tingshuo's research, background, and publications based on the provided context.
Answer in the first person ("I", "my"). Be professional but friendly and engaging.
If asked about contact info, refer to the email provided.
My research focuses on NLP, RAG, and Agents.

Here is the context about me:
Profile: ${JSON.stringify(PROFILE)}
Publications: ${JSON.stringify(PUBLICATIONS)}
Experience: ${JSON.stringify(EXPERIENCE)}
News: ${JSON.stringify(NEWS)}
`;