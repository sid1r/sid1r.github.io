export interface Experience {
  id: string;
  company: string;
  location: string;
  position: string;
  period: string;
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Education {
  credential: string;
  institution: string;
  location: string;
  year: string;
  score: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const experiences: Experience[] = [];

export const skills: Skill[] = [
  { category: 'Languages', items: ['Python', 'Java', 'C', 'JavaScript'] },
  { category: 'Frameworks & Tools', items: ['FastAPI', 'Node.js', 'React', 'Tailwind CSS'] },
  { category: 'Query Languages', items: ['SQL', 'NoSQL'] },
  { category: 'Databases', items: ['MongoDB', 'PostgreSQL', 'MySQL'] },
  { category: 'Machine Learning & Data', items: ['NumPy', 'Pandas', 'scikit-learn'] },
  { category: 'Core CS', items: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'Computer Networks'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'Linux', 'Postman', 'Render'] },
];

export const projects: Project[] = [
  {
    id: 'placement-ai',
    title: 'Placement AI',
    subtitle: 'AI-Powered Placement Management System',
    description: 'A placement management platform with student profiles, resume analysis, authentication, and AI-driven recommendation and prediction modules.',
    technologies: ['Python', 'FastAPI', 'SQL', 'JWT', 'Git', 'GitHub Actions'],
    features: [
      'Student profiles, resume management and authentication',
      'Resume analysis to extract text, identify skills, and generate resume scores',
      'AI-based interview, company recommendation and placement prediction modules',
      'CI/CD with GitHub Actions',
    ],
    githubUrl: 'https://github.com/sid1r/placement_ai',
  },
  {
    id: 'live-cartoon-cam',
    title: 'Real-Time Image Cartoonization',
    subtitle: 'GAN-based real-time cartoonization',
    description: 'A GAN-based pipeline for real-time image cartoonization with GPU acceleration and optimized preprocessing for near real-time inference.',
    technologies: ['Python', 'PyTorch', 'OpenCV'],
    features: ['GAN-based model integration', 'GPU-accelerated inference', 'Optimized preprocessing pipeline'],
    githubUrl: 'https://github.com/sid1r/live-cartoon-cam',
  },
  {
    id: 'localai-commerce',
    title: 'LocalAI Commerce',
    subtitle: 'AI-Powered Local Shopping Platform',
    description: 'An AI-driven local shopping platform using an LLM-based buyer agent to ground recommendations in real local inventory, with merchant workflows and payments.',
    technologies: ['Python', 'FastAPI', 'SQLAlchemy', 'Gemini', 'Razorpay', 'HTML/CSS/JavaScript'],
    features: ['Gemini-based Buyer Agent for natural-language product recommendations', 'Merchant product/catalog workflows with FastAPI + SQLAlchemy', 'Razorpay checkout and server-side payment verification'],
    githubUrl: 'https://github.com/sid1r/LocalAI_Commerce/tree/main',
  },
];

export const personalInfo = {
  name: 'SIDRA RAHMAN',
  title: 'Computer Science (AI & ML) student',
  location: 'Bengaluru, Karnataka',
  email: 'sidrarahman01@gmail.com',
  github: 'https://github.com/sid1r',
  linkedin: 'https://linkedin.com/in/sidrarahman19',
  summary:
    'Computer Science (AI & ML) student focused on backend systems and real-time applications, with hands-on experience building scalable architectures and ML-powered solutions.',
};

export const education: Education[] = [
  {
    credential: 'B.Tech in Computer Science & Engineering (AI & Machine Learning)',
    institution: 'KNS Institute of Technology, Bengaluru',
    location: 'Bengaluru, Karnataka',
    year: 'Aug 2023 - Aug 2027 (Expected)',
    score: 'CGPA: 8.06/10',
  },
];

export const certifications: string[] = [
  'Introduction to Generative AI — Google Cloud (2024)',
  'AI Resume Screening with LangChain — Innomatics (2026)',
  'DBMS Course — Scaler Topics (2025)',
];
