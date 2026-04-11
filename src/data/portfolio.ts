export const NAV_LINKS = [
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const PERSONAL_INFO = {
  name: "Uma Maheswar Reddy V",
  role: "Software Engineer & AI Developer",
  location: "Adoni, India",
  email: "umamaheswar.v275@gmail.com",
  college: "B.Tech in Computer Science and Engineering, Chadalawada Ramanamma Engineering College (Class of 2026)",
  resume: "/Umamaheswar_V_Resume.pdf"
};

export const Projects = [
  {
    title: "Intelligent Water Quality Monitoring System",
    date: "Dec 2025 - Mar 2026",
    category: "Data Science & AI",
    tech: ["Python", "TensorFlow", "LSTM-CNN", "IoT"],
    description: "Real-time forecasting system for water safety using hybrid neural networks.",
    github: "https://github.com/UmaMaheswar2005/Intelligent-Water-Quality-System",
    details: {
      challenge: "Predicting contamination levels from noisy regional sensor data.",
      solution: "Implemented hybrid LSTM-CNN for spatial and temporal data processing.",
      impact: "Achieved high-accuracy forecasting for real-time monitoring."
    }
  },
  {
    title: "Vibe to Viral Engine (v1)",
    date: "Mar 2026 - Apr 2026",
    category: "Audio Analysis & AI",
    tech: ["Python", "Librosa", "Machine Learning"], 
    description: "Proprietary audio analysis engine developed for a private client to evaluate the viral potential of tracks through acoustic pattern matching.",
    github: "https://github.com/UmaMaheswar2005/vibe-to-viral-engine",
    details: {
      challenge: "Identifying acoustic signatures that correlate with social media engagement metrics.",
      solution: "Developed a signal processing pipeline for feature extraction and trend classification.",
      impact: "Successfully delivered v1 for private client use; future versions are slated for a core engine migration to Rust for high-concurrency processing."
    }
  },
  {
    title: "Quantum OTP Generator",
    date: "Jan 2026 - Mar 2026",  
    category: "Quantum Computing",
    tech: ["Qiskit", "Python", "FastAPI"],
    description: "Quantum algorithm implementation for optimization and cryptography.",
    github: "https://github.com/UmaMaheswar2005/quantum-otp-generator",
    details: {
      challenge: "OTP generation using quantum principles for enhanced security.",
      solution: "Implemented quantum algorithms to connect to IBM's quantum hardware for secure one-time passwords.",
      impact: "Demonstrated the potential for quantum-enhanced security applications."
    }
  },
  {
    title: "SAP Enterprise Order Dashboard",
    date: "Nov 2025 - Jan 2026",
    category: "Enterprise Integration",
    tech: ["Python", "Flask", "SAP OData API"],
    description: "Real-time sales order tracking integrated with SAP systems.",
    github: "https://github.com/UmaMaheswar2005/sap-enterprise-dashboard",
    details: {
      challenge: "Bridging modern web frontends with rigid enterprise SAP backends.",
      solution: "Developed a Flask middleware to consume and display OData REST APIs.",
      impact: "Streamlined real-time visibility into sales order processing."
    }
  },
  {
    title: "Civic Sight System",
    date: "Dec 2025 - Jan 2026",
    category: "Full Stack & AI",
    tech: ["Java", "Spring Boot", "React.js", "MySQL"],
    description: "AI-powered civic issue reporting and resolution platform.",
    github: "https://github.com/UmaMaheswar2005/CivicSight-Monitoring-System",
    details: {
      challenge: "Creating an intuitive interface for citizens to report issues.",
      solution: "Developed a full-stack application with AI categorization of reports.",
      impact: "Facilitated faster response times for civic issue resolution."
    }
  },
  {
    title: "Security Object Detection System",
    date: "Aug 2025 - Nov 2025",
    category: "Computer Vision",
    tech: ["Python", "OpenCV", "YOLOv8"],
    description: "High-accuracy biometric and object identification for surveillance.",
    github: "https://github.com/UmaMaheswar2005/SMART_VISION_SYSTEM",
    details: {
      challenge: "Maintaining high detection speed without sacrificing accuracy.",
      solution: "Optimized YOLO models for real-time biometric identification.",
      impact: "Developed a functional prototype for secure zone monitoring."
    }
  }
];

export const EXPERIENCE = [
  {
    company: "Infosys Springboard",
    role: "Data Visualization Intern",
    duration: "Feb 2026 - Apr 2026", 
    description: "Completed Internship 6.0 focusing on data storytelling and advanced visualization techniques."
  },
  {
    company: "SkillDzire",
    role: "Web Dev & Cloud Integration Intern",
    duration: "Dec 2025 - Mar 2026",
    description: "Engineered scalable solutions and gained hands-on experience in full-stack web development and cloud deployment."
  },
  {
    company: "Agratas Academy Pvt Ltd",
    role: "Cloud Computing Industrial Training",
    duration: "May 2024 - Jul 2024",
    description: "Completed intensive training on foundational cloud architecture and deployment strategies."
  }
];

// src/data/portfolio.ts
export const EXPERTISE = [
  {
    area: "AI & Data Science",
    icon: "BrainCircuit",
    description: "Building predictive models, computer vision systems, and analyzing complex datasets.",
    skills: ["Python", "TensorFlow", "YOLOv8", "OpenCV", "Pandas", "Plotly"]
  },
  {
    area: "Full-Stack Engineering",
    icon: "Code",
    description: "Developing scalable enterprise applications and interactive web dashboards.",
    skills: ["React.js", "Next.js", "TypeScript", "Java", "Spring Boot", "Flask"]
  },
  {
    area: "Quantum & Cloud Architecture",
    icon: "Cpu",
    description: "Implementing quantum cryptography algorithms and integrating cloud infrastructures.",
    skills: ["Qiskit", "SAP OData", "IoT", "MySQL", "AWS / Cloud Deployment"]
  }
];