
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: ProjectCategory;
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export type ProjectCategory = 
  | 'web_development' 
  | 'mobile_development'
  | 'data_science'
  | 'design'
  | 'devops'
  | 'other';

export interface CategoryInfo {
  id: ProjectCategory;
  name: string;
  nameEn: string;
  technologies: string[];
  color: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'web_development',
    name: 'Développement Web',
    nameEn: 'Web Development',
    technologies: ['React', 'Vue.js', 'Angular', 'Node.js', 'Express', 'Laravel', 'WordPress', 'TypeScript', 'JavaScript', 'HTML/CSS'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'mobile_development',
    name: 'Développement Mobile',
    nameEn: 'Mobile Development',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
    color: 'from-green-500 to-emerald-400'
  },
  {
    id: 'data_science',
    name: 'Data Science',
    nameEn: 'Data Science',
    technologies: ['Python', 'R', 'TensorFlow', 'PyTorch', 'Pandas', 'SQL'],
    color: 'from-purple-500 to-indigo-400'
  },
  {
    id: 'design',
    name: 'Design & Présentation',
    nameEn: 'Design & Presentation',
    technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Canva', 'PDF'],
    color: 'from-pink-500 to-rose-400'
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    nameEn: 'DevOps & Cloud',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Jenkins'],
    color: 'from-orange-500 to-amber-400'
  },
  {
    id: 'other',
    name: 'Autres',
    nameEn: 'Other',
    technologies: ['C++', 'Java', 'Go', 'Rust', 'Unity', 'Unreal Engine'],
    color: 'from-gray-500 to-slate-400'
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Nassim E-commerce",
    description: "A modern e-commerce platform built with React and Node.js, featuring a responsive design and seamless checkout experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/e-commerce-app",
    demoUrl: "https://nassim-shop.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "An elegant portfolio website featuring interactive elements, smooth animations, and a responsive design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/portfolio",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects with collaboration features.",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/task-manager",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time forecasts and historical weather data visualization.",
    technologies: ["JavaScript", "Chart.js", "Weather API", "CSS"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/weather-app",
    featured: false,
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "A web application for discovering and saving recipes with filtering options by ingredients and dietary restrictions.",
    technologies: ["React", "Node.js", "MongoDB", "Food API"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/recipe-finder",
    featured: false,
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking social media performance across multiple platforms.",
    technologies: ["Vue.js", "D3.js", "Social Media APIs", "Vuetify"],
    category: 'data_science',
    githubUrl: "https://github.com/NassimEH/social-dashboard",
    featured: false,
  },
  {
    id: 7,
    title: "Mobile Food Delivery App",
    description: "A cross-platform mobile application for food ordering and delivery tracking.",
    technologies: ["React Native", "Firebase", "Stripe", "Google Maps API"],
    category: 'mobile_development',
    githubUrl: "https://github.com/NassimEH/food-delivery-app",
    featured: false,
  },
  {
    id: 8,
    title: "Data Visualization Tool",
    description: "A tool for creating interactive data visualizations from various data sources.",
    technologies: ["D3.js", "React", "Python", "pandas"],
    category: 'data_science',
    githubUrl: "https://github.com/NassimEH/data-viz-tool",
    featured: false,
  },
  {
    id: 9,
    title: "Company Branding Kit",
    description: "A comprehensive branding kit for a fictional tech startup, including logo, style guide, and marketing materials.",
    technologies: ["Figma", "Illustrator", "Photoshop"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/branding-kit",
    featured: false,
  },
  {
    id: 10,
    title: "Cloud Deployment Pipeline",
    description: "An automated CI/CD pipeline for deploying applications to various cloud platforms.",
    technologies: ["Docker", "Kubernetes", "AWS", "Jenkins"],
    category: 'devops',
    githubUrl: "https://github.com/NassimEH/cloud-pipeline",
    featured: false,
  }
];

export interface Experience {
  id: number;
  title: string;
  company: string;
  logo?: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Développeur Full Stack",
    company: "Keplr",
    logo: "https://media.licdn.com/dms/image/C4E0BAQHULu9h6xzCLQ/company-logo_100_100/0/1656587365514?e=1718236800&v=beta&t=3bWV53XkyghnWNwNbV_HshZdPiXmBGwdstWMbHK_gFA",
    location: "Lyon, Auvergne-Rhône-Alpes, France",
    startDate: "mai 2023",
    endDate: null,
    description: [
      "Développement front-end et back-end pour des applications médicales",
      "Utilisation de React, Node.js, et bases de données SQL",
      "Implémentation de fonctionnalités d'accessibilité et optimisation des performances"
    ],
    technologies: ["JavaScript", "React", "Node.js", "SQL", "TypeScript"]
  },
  {
    id: 2,
    title: "Développeur Web",
    company: "Freelance",
    logo: "https://media.licdn.com/dms/image/D4E35AQH7j6v7x9xswg/profile-framedphoto-shrink_100_100/0/1686245975841?e=1715986800&v=beta&t=7N4v1o8ot93-6qHoUHllAEwPsyTKJLrDY1hTNpZ68zU",
    location: "Lyon, France",
    startDate: "septembre 2021",
    endDate: "avril 2023",
    description: [
      "Création de sites web et applications pour divers clients",
      "Développement front-end avec React et Vue.js",
      "Mise en place de systèmes de gestion de contenu personnalisés"
    ],
    technologies: ["JavaScript", "React", "Vue.js", "HTML/CSS", "WordPress"]
  },
  {
    id: 3,
    title: "Développeur Web Junior",
    company: "Agence Web",
    logo: "https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1630621204188?e=1718236800&v=beta&t=RjJ-C_3jvMNh28i2MjtkdOxiQK-87zYvW1bs-bhWbzA",
    location: "Lyon, France",
    startDate: "janvier 2021",
    endDate: "août 2021",
    description: [
      "Participation au développement de sites web pour clients B2B",
      "Maintenance et mise à jour de sites existants",
      "Collaboration avec designers et chefs de projet"
    ],
    technologies: ["JavaScript", "PHP", "HTML/CSS", "WordPress", "MySQL"]
  }
];

export interface Education {
  id: number;
  degree: string;
  institution: string;
  logo?: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
  awards?: string[]; // Added awards property as optional
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Master en Développement Web",
    institution: "Université Claude Bernard Lyon 1",
    logo: "https://media.licdn.com/dms/image/C4D0BAQFqRQtofSAT-g/company-logo_100_100/0/1631343364290?e=1718236800&v=beta&t=S3CQK77LORBMaRWIdziwXvUKwwZFKjJ-8N-IUgE9Q68",
    location: "Lyon, France",
    startDate: "septembre 2019",
    endDate: "juin 2021",
    description: "Spécialisation en développement d'applications web modernes et technologies cloud.",
    awards: ["Prix d'excellence académique", "Mention spéciale pour le projet de fin d'études"]
  },
  {
    id: 2,
    degree: "Licence en Informatique",
    institution: "Université Lyon 2",
    logo: "https://media.licdn.com/dms/image/C4E0BAQEiNNkAIDK5Ww/company-logo_100_100/0/1631367645776?e=1718236800&v=beta&t=QG_Tq9bWIoDnIKTR6WgL8j1Ywm3qDcyYh0-g3u_35zs",
    location: "Lyon, France",
    startDate: "septembre 2016",
    endDate: "juin 2019",
    description: "Formation complète en informatique avec focus sur les algorithmes et structures de données.",
    awards: ["Bourse d'excellence", "Premier prix hackathon étudiant"]
  }
];

export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Langages",
    items: ["JavaScript", "TypeScript", "HTML", "CSS", "PHP", "Python", "SQL"]
  },
  {
    category: "Frontend",
    items: ["React", "Vue.js", "Angular", "Redux", "Tailwind CSS", "SASS", "Material UI"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Laravel", "Django", "REST API", "GraphQL"]
  },
  {
    category: "Bases de données",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase"]
  },
  {
    category: "DevOps & Outils",
    items: ["Git", "Docker", "CI/CD", "AWS", "Webpack", "Vite", "npm/yarn"]
  }
];

export const contactInfo = {
  email: "nassim.elhaddad@example.com",
  phone: "+33 6 12 34 56 78",
  location: "Lyon, France",
  linkedin: "https://www.linkedin.com/in/nassim-elhaddad/",
  github: "https://github.com/NassimEH"
};
