// Data for Seelam Avinash Reddy's Portfolio

export const personalInfo = {
  name: "Seelam Avinash Reddy",
  title: "AI / Machine Learning Engineer",
  location: "Hyderabad, Telangana",
  phone: "+91 8919689676",
  email: "avinashreddy112295@gmail.com",
  linkedin: "linkedin.com/in/avinash-reddy-139380273",
  github: "github.com/Avinash3625",
  // TODO: Replace with your real headshot photo placed in public/ folder
  profileImage: "/profile.jpg",
  summary: "AI / Machine Learning Engineer (B.Tech, AI & ML) with expertise in supervised learning, NLP, and computer vision. Demonstrated experience through production-ready internship projects achieving 90%+ accuracy. Proficient in building end-to-end ML pipelines (preprocessing, feature engineering, deployment) and MLOps workflows."
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology (CSE — AI & ML)",
    institution: "Vellore Institute of Technology",
    duration: "Aug 2021 – Jun 2025",
    cgpa: "7.12/10",
    location: "Vellore"
  }
];

export const experience = [
  {
    id: 1,
    title: "Machine Learning Intern",
    company: "SmartInternz",
    duration: "Sep 2025 – Oct 2025",
    type: "Internship",
    technologies: ["Python", "Scikit-learn", "Streamlit", "Random Forest", "SVM", "Logistic Regression"],
    achievements: [
      "Engineered 'Anemia Sense', a clinical diagnostic pipeline using 8 blood biomarkers",
      "Optimized classification models (Logistic Regression, Random Forest, SVM) achieving 91% accuracy and 0.93 AUC",
      "Deployed a real-time clinical UI on Streamlit for decision support"
    ]
  },
  {
    id: 2,
    title: "SMS Spam Detection using ML Intern",
    company: "Edunet",
    duration: "Mar 2023 – May 2023",
    type: "Internship",
    technologies: ["Python", "NLP", "NLTK", "TF-IDF", "SVM", "Naive Bayes", "SMOTE", "Streamlit"],
    achievements: [
      "Developed an NLP system for spam classification with TF-IDF and NLTK",
      "Achieved 90% accuracy using SVM and Naive Bayes; mitigated class imbalance using SMOTE",
      "Deployed a Streamlit app with real-time classification and confidence scores"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Anemia Sense",
    duration: "Sep 2025",
    description: "Flask-based clinical diagnostic app using 8 blood biomarkers. Implemented model serialization with pickle and comprehensive model evaluation for Logistic Regression, Random Forest, and SVM classifiers achieving 91% accuracy.",
    technologies: ["Python", "Flask", "Scikit-learn", "Pickle", "Streamlit"],
    category: "Machine Learning",
    github: "https://github.com/Avinash3625/Anemia-Sense"
  },
  {
    id: 2,
    title: "Farm Management using Drones",
    duration: "Mar 2024",
    description: "CV-based crop health monitoring system using OpenCV and color space analysis. Designed a drone-based prototype leveraging computer vision to identify crop stress, enabling targeted interventions. Achieved 92% accuracy.",
    technologies: ["Computer Vision", "OpenCV", "Python", "Color Space Analysis"],
    category: "Computer Vision",
    github: "https://github.com/Avinash3625"
  },
  {
    id: 3,
    title: "Music Recommendation System",
    duration: "Jul 2023",
    description: "Hybrid recommendation system combining SVD matrix factorization and content-based filtering. Addressed cold-start with demographic signals and integrated contextual inputs, improving relevance by 25%.",
    technologies: ["Python", "SVD", "Collaborative Filtering", "Content-Based Filtering", "Pandas"],
    category: "Recommendation System",
    github: "https://github.com/Avinash3625"
  },
  {
    id: 4,
    title: "Finding Water Index Value using ML",
    duration: "Oct 2022",
    description: "Multi-output regression approach using Random Forest and XGBoost for water quality and availability prediction. Used SHAP for explainability and Isolation Forest for anomaly detection.",
    technologies: ["Python", "Random Forest", "XGBoost", "SHAP", "Isolation Forest"],
    category: "Machine Learning",
    github: "https://github.com/Avinash3625"
  }
];

export const skills = {
  programming: ["Python", "SQL", "Git"],
  libraries: ["Scikit-learn", "Pandas", "NumPy", "OpenCV", "Flask", "Streamlit"],
  ml: ["Machine Learning", "NLP (NLTK, TF-IDF)", "Computer Vision", "Feature Engineering", "Model Evaluation", "MLOps", "Agentic AI"],
  visualization: ["Matplotlib", "Seaborn"],
  tools: ["Git", "Streamlit", "Flask"]
};

export const certifications = [
  {
    id: 1,
    name: "Microsoft AI & ML Engineering Professional Certificate",
    issuer: "Coursera",
    year: "Dec 2024"
  },
  {
    id: 2,
    name: "Introduction to Artificial Intelligence",
    issuer: "Coursera",
    year: "2024"
  }
];

export const languages = ["English", "Telugu"];

export const interests = ["Web technologies", "Android updates", "Coding challenges"];