// Mock data for Seelam Avinash Reddy's Portfolio

export const personalInfo = {
  name: "Seelam Avinash Reddy",
  title: "Machine Learning Engineer",
  location: "Bhopal, Madhya Pradesh",
  phone: "+91 8919689676",
  email: "avinashreddy112295@gmail.com",
  linkedin: "linkedin.com/in/avinash-reddy-139380273",
  github: "github.com/Avinash3625",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  summary: "Aspiring Machine Learning Engineer graduating June 2025 (B.Tech, AI & ML specialization) with hands-on experience in NLP, classification models, and computer vision projects. Built and deployed ML prototypes, collaborated with mentors, and delivered measurable model performance improvements. Seeking entry-level ML/NLP/Data Science roles in product-focused teams."
};

export const education = [
  {
    id: 1,
    degree: "Bachelor of Technology (Computer Science & Engineering — AI & ML)",
    institution: "Vellore Institute of Technology",
    duration: "Aug 2021 – Jun 2025",
    cgpa: "7.0/10",
    location: "Vellore"
  },
  {
    id: 2,
    degree: "Higher Secondary (Class 12)",
    institution: "Delhi Public School, Vijayawada",
    duration: "2019-2021",
    percentage: "76.80%",
    location: "Vijayawada"
  },
  {
    id: 3,
    degree: "Secondary (Class 10)",
    institution: "Delhi Public School, Vijayawada", 
    duration: "2017-2019",
    percentage: "56.30%",
    location: "Vijayawada"
  }
];

export const experience = [
  {
    id: 1,
    title: "Machine Learning Intern",
    company: "EDUNET Foundation",
    duration: "Dec 2024 – Jan 2025",
    type: "Internship",
    achievements: [
      "Built an SMS spam-detection pipeline using NLP preprocessing (tokenization, normalization) and TF-IDF feature engineering",
      "Developed and tuned SVM and Multinomial Naive Bayes classifiers with scikit-learn; evaluated using precision, recall and F1-score and achieved ~90% accuracy",
      "Addressed class imbalance and applied hyperparameter tuning with cross-validation to improve model robustness",
      "Packaged a Streamlit demo for stakeholders and documented methodology and evaluation to support deployment decisions"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Finding Water Index Value using ML",
    duration: "Oct 2022",
    description: "Developed a multi-output regression approach for water quality and availability. Used explainable AI (SHAP/LIME) to surface key features and implemented anomaly detection for early warnings.",
    technologies: ["Python", "Scikit-learn", "SHAP", "LIME", "Pandas", "NumPy"],
    category: "Machine Learning"
  },
  {
    id: 2,
    title: "Music Recommendation System",
    duration: "Jul 2024", 
    description: "Implemented a hybrid recommendation system combining collaborative filtering and content-based methods to improve relevance. Addressed cold-start with demographic signals and integrated contextual inputs (time, mood).",
    technologies: ["Python", "Collaborative Filtering", "Content-Based Filtering", "Pandas", "NumPy"],
    category: "Recommendation System"
  },
  {
    id: 3,
    title: "Farm Management using Drones (CV & ML)",
    duration: "Mar 2024",
    description: "Designed a drone-based monitoring prototype leveraging computer vision to identify crop stress, enabling targeted interventions and efficient resource allocation.",
    technologies: ["Computer Vision", "OpenCV", "Machine Learning", "Drone Technology", "Python"],
    category: "Computer Vision"
  }
];

export const skills = {
  programming: ["Python", "SQL", "Git"],
  libraries: ["Scikit-learn", "Pandas", "NumPy", "OpenCV"],
  ml: ["NLP (NLTK, TF-IDF)", "Machine Learning", "Computer Vision", "Streamlit"],
  tools: ["Microsoft Excel", "Generative AI concepts"]
};

export const certifications = [
  {
    id: 1,
    name: "Introduction to SQL",
    issuer: "Kaggle",
    year: "2024"
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