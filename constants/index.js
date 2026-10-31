import React from "react";
import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Research",
  },
  {
    id: "achievements",
    title: "Achievements",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "AI/ML Researcher",
    subtitle: "Clinical AI, Risk Prediction & Calibrated Deep Learning",
    icon: (
      <svg className="w-12 h-12 text-[#915eff]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.1-.4 2.1-1.1 2.8L16 14a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2l1.1-5.2C8.4 8.1 8 7.1 8 6a4 4 0 0 1 4-4z" />
        <path d="M6 18h12v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2z" />
        <circle cx="9" cy="6" r="1" fill="currentColor" />
        <circle cx="15" cy="6" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Clinical AI & Imaging",
    subtitle: "Medical Diagnostic CNNs with Grad-CAM Interpretability",
    icon: (
      <svg className="w-12 h-12 text-[#00cea8]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
  },
  {
    title: "Biomedical NLP & LLMs",
    subtitle: "Claim Verification & Health Misinformation Detection",
    icon: (
      <svg className="w-12 h-12 text-[#f5af19]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <line x1="9" y1="10" x2="15" y2="10" />
        <line x1="12" y1="7" x2="12" y2="13" />
      </svg>
    ),
  },
  {
    title: "Physiological IoT Systems",
    subtitle: "Wearable Multi-Sensor Fusion & Real-Time Alerts",
    icon: (
      <svg className="w-12 h-12 text-[#38ef7d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Mathematical Foundations",
    subtitle: "SOF IMO Gold Medalist & Rigorous Analysis",
    icon: (
      <svg className="w-12 h-12 text-[#56ccf2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Technical Leadership",
    subtitle: "Co-Founder of ML Minds & Community Mentor",
    icon: (
      <svg className="w-12 h-12 text-[#fc6767]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const technologies = {
  languages: [
    { name: "Python", icon: "/assets/tech/python.svg", link: "https://www.python.org/" },
    { name: "Java", icon: "/assets/tech/java.svg", link: "https://www.java.com/en/" },
    { name: "C", icon: "/assets/tech/c.svg", link: "https://en.cppreference.com/w/c" },
    { name: "TypeScript", icon: "/assets/tech/typescript.svg", link: "https://www.typescriptlang.org/" },
    { name: "JavaScript", icon: "/assets/tech/javascript.svg", link: "https://262.ecma-international.org/" },
    { name: "HTML5", icon: "/assets/tech/html5.svg", link: "https://html.spec.whatwg.org/multipage/" },
    { name: "CSS3", icon: "/assets/tech/css3.svg", link: "https://www.w3.org/Style/CSS/Overview.en.html/" },
  ],
  frameworks: [
    { name: "React", icon: "/assets/tech/react.svg", link: "https://react.dev/" },
    { name: "Next.js", icon: "/assets/tech/nextjs.svg", link: "https://nextjs.org/" },
    { name: "TailwindCSS", icon: "/assets/tech/tailwindcss.svg", link: "https://tailwindcss.com/" },
    { name: "Express.js", icon: "/assets/tech/expressjs.png", link: "https://expressjs.com/" },
  ],
  libraries: [
    { name: "Three.js", icon: "/assets/tech/threejs.svg", link: "https://threejs.org/" },
    { name: "Framer-motion", icon: "/assets/tech/framer.svg", link: "https://www.framer.com/motion/" },
    { name: "Prisma", icon: "/assets/tech/prisma.svg", link: "https://www.prisma.io/" },
  ],
  databases: [
    { name: "MongoDB", icon: "/assets/tech/mongodb.svg", link: "https://www.mongodb.com/" },
    { name: "MySQL", icon: "/assets/tech/my-sql.png", link: "https://www.mysql.com/" },
    { name: "Firebase", icon: "/assets/tech/firebase.svg", link: "https://firebase.google.com/" },
  ],
  tools: [
    { name: "Git", icon: "/assets/tech/git.svg", link: "https://git-scm.com/" },
    { name: "Github", icon: "/assets/icons/github.svg", link: "https://github.com/" },
    { name: "Docker", icon: "/assets/tech/docker.svg", link: "https://www.docker.com/" },
    { name: "Postman", icon: "/assets/tech/postman.svg", link: "https://www.postman.com/" },
  ],
  environments: [
    { name: "Node.js", icon: "/assets/tech/nodejs.svg", link: "https://nodejs.org/en" },
  ],
};

const experiences = [
  {
    title: "AI/ML & Clinical AI Research Intern",
    company_name: "Amrita Vishwa Vidyapeetham",
    badge: "Clinical AI Research",
    date: "Mar 2025 – Jun 2026",
    iconBg: "#1d1836",
    iconType: "research",
    points: [
      "Conducted dedicated research in cardiovascular risk assessment under Dr. B. Venkatesh, advancing clinical risk reliability through deep learning and probabilistic calibration.",
      "Architected a bagged Multilayer Perceptron (MLP) ensemble in Python combining PyTorch and scikit-learn with Bayesian bootstrap aggregation and multi-technique calibration (Platt scaling, isotonic regression, histogram binning).",
      "Engineered clinical biomarker interaction pipelines (Cholesterol × BMI, pulse pressure ratio, Age × Stress level) to capture real-world medical dependencies.",
      "Achieved 96.42% accuracy, a Brier score of 0.0489, 0.97 recall, and suppressed the false negative rate to 3%, directly reflecting true patient incidence.",
      "Published as author in the Q1-ranked journal Engineered Science (DOI: 10.30919/es2461).",
    ],
  },
  {
    title: "Co-Founder & Lead Developer",
    company_name: "ML Minds – Student AI Community",
    badge: "AI Community & Mentorship",
    date: "Sep 2024 – Present",
    iconBg: "#151030",
    iconType: "community",
    points: [
      "Co-founded and lead an active machine learning initiative at Amrita University, organizing technical workshops, paper discussions, and hands-on AI projects.",
      "Mentored student peers in core machine learning principles, PyTorch workflows, and practical research methodologies.",
      "Served as Vice President of the AMAL Club and actively guided students in the Sankhya Mathematics Club, promoting peer collaboration.",
    ],
  },
  {
    title: "Captain – Powerlifting Team",
    company_name: "Amrita Vishwa Vidyapeetham",
    badge: "Athletics & Leadership",
    date: "Jul 2024 – Feb 2025",
    iconBg: "#1d1836",
    iconType: "athletics",
    points: [
      "Captained the university varsity powerlifting team, achieving District Gold and State Silver medals while leading Amrita to secure 1st place in district rankings.",
      "Former state-level swimming champion (Gold Medal), bringing relentless discipline, physical conditioning, and goal-oriented focus to both athletics and research.",
    ],
  },
];

const testimonials = [
  {
    title: "Best Paper Award",
    organization: "IEEE ICKECS 2026",
    category: "Healthcare NLP",
    date: "2026",
    badgeColor: "border-amber-400 text-amber-300 bg-amber-950/40",
    testimonial:
      "Honored with the Best Paper Award for 'Detecting Health Misinformation: AI Solutions for Medical and Policy Content', recognizing novel LLM and transformer methods for biomedical statement verification.",
    name: "IEEE ICKECS Committee",
    designation: "International Conference Award",
    company: "IEEE",
  },
  {
    title: "Top 3% Student Researcher",
    organization: "Amrita Vishwa Vidyapeetham",
    category: "Academic Distinction",
    date: "2026",
    badgeColor: "border-purple-400 text-purple-300 bg-purple-950/40",
    testimonial:
      "Recognized in the top 3% of student researchers across the university for sustained research productivity, with a Q1 journal paper and 11+ peer-reviewed conference publications in healthcare AI and systems.",
    name: "Office of Research",
    designation: "University Merit Award",
    company: "Amrita University",
  },
  {
    title: "SOF International Mathematics Olympiad (IMO)",
    organization: "Science Olympiad Foundation (SOF)",
    category: "Gold Medalist",
    date: "National Distinction",
    badgeColor: "border-cyan-400 text-cyan-300 bg-cyan-950/40",
    testimonial:
      "Earned a Gold Medal in the SOF International Mathematics Olympiad (IMO) and scored 100% in Class 10 mathematics, turning an early academic challenge into a lifelong analytical foundation.",
    name: "SOF Olympiad Committee",
    designation: "Gold Medalist",
    company: "Science Olympiad Foundation",
  },
  {
    title: "1st Place Winner (86%)",
    organization: "Arista Networks Boot Camp",
    category: "Systems & Networking",
    date: "2026",
    badgeColor: "border-emerald-400 text-emerald-300 bg-emerald-950/40",
    testimonial:
      "Secured 1st place overall in the Arista Networks Boot Camp 2026 with a score of 86%, proving deep mastery of high-performance network architectures, protocols, and distributed systems debugging.",
    name: "Arista Networks",
    designation: "1st Place Winner",
    company: "Arista Networks",
  },
];

const projects = [
  {
    name: "Heart Disease Risk Prediction",
    venue: "Engineered Science (Q1 Journal)",
    venueBadge: "Q1 Journal Publication",
    metric: "96.42% Acc • 0.0489 Brier",
    gradient: "from-rose-600/30 via-red-900/20 to-purple-900/30",
    borderAccent: "border-rose-500/30",
    iconColor: "text-rose-400",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 7.65l.77.78L12 20.66l7.65-7.65.77-.78a5.4 5.4 0 0 0 0-7.65z" />
        <polyline points="3.5 12 6.5 12 8.5 9 11.5 15 13.5 12 16.5 12" />
      </svg>
    ),
    description:
      "A clinical deep learning framework pairing a bagged MLP ensemble with Bayesian bootstrap aggregation and multi-technique probability calibration (Platt scaling & isotonic regression) to deliver calibrated risk probabilities with a minimal 3% false negative rate.",
    tags: [
      { name: "Clinical AI", color: "blue-text-gradient" },
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "Probabilistic Calibration", color: "yellow-text-gradient" },
      { name: "Scikit-Learn", color: "green-text-gradient" },
    ],
  },
  {
    name: "Automated Medical Image Analysis",
    venue: "3rd ICITEICS 2026",
    venueBadge: "IEEE Conference Paper",
    metric: "99% Skin • 94% Brain (0.993 AUC)",
    gradient: "from-cyan-600/30 via-blue-900/20 to-indigo-900/30",
    borderAccent: "border-cyan-500/30",
    iconColor: "text-cyan-400",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
        <path d="M4.93 4.93l4.24 4.24" />
        <path d="M14.83 14.83l4.24 4.24" />
      </svg>
    ),
    description:
      "A transfer learning diagnostic system combining VGG16, ResNet-50, and EfficientNet across MRI brain tumor and dermoscopic skin lesion datasets. Integrated Grad-CAM visual heatmaps for transparent visual explanations of clinical predictions.",
    tags: [
      { name: "Medical Imaging", color: "blue-text-gradient" },
      { name: "Grad-CAM", color: "orange-text-gradient" },
      { name: "Transfer Learning", color: "pink-text-gradient" },
      { name: "Clinical AI", color: "green-text-gradient" },
    ],
  },
  {
    name: "AI Health Misinformation Detection",
    venue: "IEEE ICKECS 2026 (Best Paper)",
    venueBadge: "Best Paper Award",
    metric: "83.91% Acc • 0.783 Macro-F1",
    gradient: "from-amber-600/30 via-orange-900/20 to-rose-900/30",
    borderAccent: "border-amber-500/30",
    iconColor: "text-amber-400",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    description:
      "An NLP claim verification architecture for biomedical and policy statements. Overcame severe class imbalance using T5 paraphrasing and compared BioBERT, SciBERT, and Meta-Llama-3-8B-Instruct on three-way verification (Support, Refute, Neutral).",
    tags: [
      { name: "Biomedical NLP", color: "blue-text-gradient" },
      { name: "BioBERT", color: "green-text-gradient" },
      { name: "Llama-3", color: "pink-text-gradient" },
      { name: "Healthcare Policy", color: "yellow-text-gradient" },
    ],
  },
  {
    name: "Multimodal Seizure Detection System",
    venue: "ICACS 2026 (Under Review)",
    venueBadge: "IoT Hardware & Signal Fusion",
    metric: "Real-Time Multi-Sensor Fusion",
    gradient: "from-emerald-600/30 via-teal-900/20 to-blue-900/30",
    borderAccent: "border-emerald-500/30",
    iconColor: "text-emerald-400",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    description:
      "A low-cost physiological monitoring system integrating MAX30102 photoplethysmography, MPU6050 6-axis accelerometry, and an Arduino Uno. Devised a physiological threshold fusion algorithm to filter motion noise and broadcast immediate alerts.",
    tags: [
      { name: "Clinical Wearables", color: "blue-text-gradient" },
      { name: "Signal Fusion", color: "green-text-gradient" },
      { name: "Arduino / IoT", color: "yellow-text-gradient" },
      { name: "Embedded Health", color: "pink-text-gradient" },
    ],
  },
  {
    name: "RNN-Based Deadlock Detection",
    venue: "16th ICCCNT 2025",
    venueBadge: "OS Architecture & Optimization",
    metric: "90.25% Acc • +28% CPU Score",
    gradient: "from-purple-600/30 via-indigo-900/20 to-pink-900/30",
    borderAccent: "border-purple-500/30",
    iconColor: "text-purple-400",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="15" x2="23" y2="15" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="15" x2="4" y2="15" />
      </svg>
    ),
    description:
      "A sequential OS monitoring engine utilizing a 2-layer Recurrent Neural Network in PyTorch to detect impending process deadlocks from one-hot resource logs, boosting CPU benchmark scores from 70 to 98.02 through proactive intervention.",
    tags: [
      { name: "RNN / PyTorch", color: "blue-text-gradient" },
      { name: "Systems Engineering", color: "orange-text-gradient" },
      { name: "CPU Benchmarking", color: "green-text-gradient" },
    ],
  },
  {
    name: "Priority-Aware SDN for Healthcare IoT",
    venue: "ICUIS 2026",
    venueBadge: "SDN & Reinforcement Learning",
    metric: "-40% P95 Latency • -84% Jitter",
    gradient: "from-blue-600/30 via-indigo-900/20 to-cyan-900/30",
    borderAccent: "border-blue-500/30",
    iconColor: "text-blue-400",
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="6" height="6" rx="1" />
        <rect x="16" y="2" width="6" height="6" rx="1" />
        <rect x="9" y="16" width="6" height="6" rx="1" />
        <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
        <path d="M12 13v3" />
      </svg>
    ),
    description:
      "A software-defined networking controller uniting Dijkstra dynamic routing with tabular Q-learning to dynamically tune queue weights across 4 healthcare IoT traffic streams, achieving 100% on-time critical packet delivery at peak network load.",
    tags: [
      { name: "Healthcare IoT", color: "blue-text-gradient" },
      { name: "Q-Learning", color: "pink-text-gradient" },
      { name: "SDN", color: "green-text-gradient" },
      { name: "Critical Networks", color: "yellow-text-gradient" },
    ],
  },
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/vibhas-reddy",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/vibhas-reddy/",
  },
  {
    id: "x",
    icon: <XIcon />,
    link: "https://twitter.com/",
  },
];

const heroTexts = [
  "AI/ML Researcher",
  800,
  "Clinical AI Researcher",
  800,
  "Healthcare AI Specialist",
  800,
  "Deep Learning Engineer",
  800,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
