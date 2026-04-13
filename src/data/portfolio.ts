export const ROLES = [
  "Software Engineer",
  "AI Developer",
  "Quantum Enthusiast",
  "Full-Stack Builder"
];

export const NAV_LINKS = [
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "History", href: "#experience" },
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

export const PROJECTS = [
  {
    title: "Water Quality Monitoring & Forecasting System",
    date: "Dec 2025 - Mar 2026",
    category: "Data Science & AI",
    tech: ["Python", "TensorFlow", "LSTM-CNN", "IoT"],
    description: "A sophisticated real-time monitoring ecosystem leveraging hybrid LSTM-CNN architectures to process spatial and temporal data. The system provides high-accuracy predictive analytics for 12 critical water quality parameters, ensuring proactive safety alerts across regional sensor networks.",
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
    tech: ["Python", "Librosa", "Machine Learning", "Rust"], 
    description: "An advanced proprietary audio analysis engine engineered to evaluate the viral potential of musical tracks. By performing deep signal processing and energy fingerprinting, the system identifies high-engagement acoustic signatures, providing private industry clients with data-driven A&R insights.",
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
    description: "A cutting-edge cryptographic implementation that harnesses true quantum randomness to generate secure one-time passwords. By interfacing directly with IBM's quantum hardware, the system eliminates the vulnerabilities of pseudo-random generators found in classical computing architectures.",
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
    description: "A robust enterprise-grade dashboard designed to bridge the gap between modern web interfaces and rigid SAP ERP backends. Using Flask-based middleware and OData APIs, the system provides real-time sales order tracking with advanced analytical filtering for high-volume enterprise data.",
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
    description: "A comprehensive full-stack platform focused on municipal transparency and infrastructure resolution. It features an AI categorization engine that automatically classifies citizen reports, integrated with a Spring Boot backend to facilitate rapid resolution and data tracking for local authorities.",
    github: "https://github.com/UmaMaheswar2005/CivicSight-Monitoring-System",
    details: {
      challenge: "Creating an intuitive interface for citizens to report issues.",
      solution: "Developed a full-stack application with AI categorization of reports.",
      impact: "Facilitated faster response times for civic issue resolution."
    }
  },
  {
    title: "Real-time Edge Security System",
    date: "Aug 2025 - Nov 2025",
    category: "Computer Vision",
    tech: ["Python", "OpenCV", "YOLOv8"],
    description: "A high-performance security platform optimized for real-time biometric and object identification. By utilizing YOLOv8 for spatial detection and custom biometric models, the system achieves sub-30ms inference speeds, making it suitable for critical area monitoring and automated access control.",
    github: "https://github.com/UmaMaheswar2005/Real-time-Edge-Security-System",
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

export const EXPERTISE = [
  {
    area: "AI & Data Science",
    icon: "BrainCircuit",
    description: "Building predictive models, computer vision systems, and analyzing complex datasets.",
    skills: ["Python", "TensorFlow", "YOLOv8", "OpenCV", "Pandas", "Plotly"]
  },
  {
    area: "Full-Stack & Systems", // Updated title slightly to reflect systems languages
    icon: "Code",
    description: "Developing scalable enterprise applications and interactive web dashboards.",
    // Added C++, Go, and Rust here!
    skills: ["React.js", "Next.js", "TypeScript", "Java", "Spring Boot", "Flask", "C++", "Go", "Rust"] 
  },
  {
    area: "Quantum & Cloud Architecture",
    icon: "Cpu",
    description: "Implementing quantum cryptography algorithms and integrating cloud infrastructures.",
    // Kept your custom text, the component will read "AWS" from this and show the logo
    skills: ["Qiskit", "SAP OData", "IoT", "MySQL", "AWS / Cloud Deployment"]
  }
];