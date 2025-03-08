
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Nassim E-commerce",
    description: "A modern e-commerce platform built with React and Node.js, featuring a responsive design and seamless checkout experience.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/NassimEH/e-commerce-app",
    demoUrl: "https://nassim-shop.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "An elegant portfolio website featuring interactive elements, smooth animations, and a responsive design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Three.js"],
    githubUrl: "https://github.com/NassimEH/portfolio",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity application for managing tasks and projects with collaboration features.",
    technologies: ["React", "Redux", "Firebase", "Material UI"],
    githubUrl: "https://github.com/NassimEH/task-manager",
    featured: true,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description: "A weather application that provides real-time forecasts and historical weather data visualization.",
    technologies: ["JavaScript", "Chart.js", "Weather API", "CSS"],
    githubUrl: "https://github.com/NassimEH/weather-app",
    featured: false,
  },
  {
    id: 5,
    title: "Recipe Finder",
    description: "A web application for discovering and saving recipes with filtering options by ingredients and dietary restrictions.",
    technologies: ["React", "Node.js", "MongoDB", "Food API"],
    githubUrl: "https://github.com/NassimEH/recipe-finder",
    featured: false,
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "An analytics dashboard for tracking social media performance across multiple platforms.",
    technologies: ["Vue.js", "D3.js", "Social Media APIs", "Vuetify"],
    githubUrl: "https://github.com/NassimEH/social-dashboard",
    featured: false,
  }
];

export interface Experience {
  id: number;
  title: string;
  company: string;
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
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Master en Développement Web",
    institution: "Université Claude Bernard Lyon 1",
    location: "Lyon, France",
    startDate: "septembre 2019",
    endDate: "juin 2021",
    description: "Spécialisation en développement d'applications web modernes et technologies cloud."
  },
  {
    id: 2,
    degree: "Licence en Informatique",
    institution: "Université Lyon 2",
    location: "Lyon, France",
    startDate: "septembre 2016",
    endDate: "juin 2019",
    description: "Formation complète en informatique avec focus sur les algorithmes et structures de données."
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
