
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
  | 'software_development'
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
    technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Canva', 'PDF', 'Blender', 'PowerPoint'],
    color: 'from-pink-500 to-rose-400'
  },
  {
    id: 'software_development',
    name: 'Développement Logiciel',
    nameEn: 'Software Development',
    technologies: ['Java', 'C', 'C++', 'Python', 'Qt'],
    color: 'from-orange-500 to-amber-400'
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
  // Web Development Projects
  {
    id: 1,
    title: "WeListen",
    description: "Une plateforme web interactive pour découvrir et partager de la musique, avec des recommandations basées sur les goûts des utilisateurs.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Spotify API"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/WeListen",
    demoUrl: "https://welisten-demo.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "CinemaHome",
    description: "Application web pour créer une expérience cinéma à domicile, incluant une bibliothèque de films et des recommandations personnalisées.",
    technologies: ["Vue.js", "Node.js", "Firebase", "TheMovieDB API"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/CinemaHome",
    featured: true,
  },
  {
    id: 3,
    title: "WebZTP",
    description: "Outil web pour la gestion des paramètres ZTP (Zero Touch Provisioning) pour le déploiement automatisé d'équipements réseau.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Docker", "SQLite"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/WebZTP",
    featured: true,
  },
  {
    id: 4,
    title: "Threecot",
    description: "Site web utilisant Three.js pour créer des visualisations 3D interactives et immersives pour des applications éducatives.",
    technologies: ["JavaScript", "Three.js", "WebGL", "HTML/CSS"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/Threecot",
    featured: false,
  },
  
  // Mobile Development Projects
  {
    id: 5,
    title: "Morpion Solitaire",
    description: "Application mobile du jeu Morpion Solitaire, un jeu de réflexion basé sur le placement stratégique de marques sur une grille.",
    technologies: ["React Native", "JavaScript", "Redux"],
    category: 'mobile_development',
    githubUrl: "https://github.com/NassimEH/MorpionSolitaire",
    featured: false,
  },
  
  // Design & Presentation Projects
  {
    id: 6,
    title: "Wireframes Netopsia",
    description: "Conception de wireframes pour les applications et sites web de Netopsia, centrés sur l'expérience utilisateur et l'accessibilité.",
    technologies: ["Figma", "Adobe XD"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/NetopsiaDesigns",
    featured: false,
  },
  {
    id: 7,
    title: "Designs Photoshop",
    description: "Collection de designs et d'illustrations créés avec Photoshop pour divers projets personnels et professionnels.",
    technologies: ["Photoshop", "Illustrator"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/PhotoshopProjects",
    featured: false,
  },
  {
    id: 8,
    title: "Modèles 3D Blender",
    description: "Modèles 3D créés avec Blender, incluant un mug, une chambre et une Gameboy, démontrant mes compétences en modélisation 3D.",
    technologies: ["Blender", "3D Modeling"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/BlenderModels",
    featured: false,
  },
  {
    id: 9,
    title: "Présentation Télétravail",
    description: "Présentation approfondie sur les enjeux et opportunités du télétravail dans les entreprises modernes.",
    technologies: ["PowerPoint", "Canva"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/WorkFromHomePresentation",
    featured: false,
  },
  {
    id: 10,
    title: "Présentation Créativité et Musique",
    description: "Exploration des liens entre la créativité et la musique, et comment ils influencent notre façon de penser et de travailler.",
    technologies: ["PowerPoint", "Canva"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/CreativityMusicPresentation",
    featured: false,
  },
  {
    id: 11,
    title: "Présentation Femmes en Entreprise",
    description: "Analyse de la place des femmes dans le monde de l'entreprise et des défis à surmonter pour atteindre l'égalité professionnelle.",
    technologies: ["PowerPoint", "Canva"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/WomenInBusinessPresentation",
    featured: false,
  },
  {
    id: 12,
    title: "Présentation Hypertrophie Musculaire",
    description: "Étude scientifique de l'hypertrophie musculaire, des mécanismes biologiques et des méthodes d'entraînement optimales.",
    technologies: ["PowerPoint", "Canva", "PDF"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/MuscleHypertrophyPresentation",
    featured: false,
  },
  
  // Software Development Projects
  {
    id: 13,
    title: "Le Donjon Infini",
    description: "Jeu de rôle de style donjon avec génération procédurale de niveaux, offrant une expérience de jeu différente à chaque partie.",
    technologies: ["Java", "Swing", "Object-Oriented Programming"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/InfiniteDungeon",
    featured: true,
  },
  {
    id: 14,
    title: "Bataille Navale",
    description: "Implémentation du jeu classique de la bataille navale avec une interface graphique et la possibilité de jouer contre l'ordinateur.",
    technologies: ["C", "SDL"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/Battleship",
    featured: false,
  },
  {
    id: 15,
    title: "Tableur",
    description: "Application de type tableur avec fonctionnalités de calcul, formatage et visualisation de données similaires à Excel.",
    technologies: ["Python", "Qt", "Pandas"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/SpreadsheetApp",
    featured: false,
  },
  {
    id: 16,
    title: "Diagrammes Dynamiques",
    description: "Outil de création de diagrammes dynamiques pour visualiser et analyser des données complexes en temps réel.",
    technologies: ["JavaScript", "D3.js", "SVG"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/DynamicDiagrams",
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
    title: "Apprentice - Cybersecurity Engineer",
    company: "Siemens",
    logo: "/logos/siemens.png",
    location: "Paris, France",
    startDate: "September 2024",
    endDate: "August 2027",
    description: [
      "Supported the industrialization of cybersecurity in Siemens Mobility products.",
      "Formalized project management processes within multidisciplinary projects.",
      "Promoted the tool used among various users and ensured proper configuration maintenance.",
      "Set up and utilized infrastructures for cybersecurity audits of systems.",
      "Contributed to the testing of complex equipment and systems."
    ],
    technologies: ["Cybersecurity", "Project Management", "Audit", "Systems Testing"]
  },
  {
    id: 2,
    title: "Intern - Developer",
    company: "Netopsia",
    logo: "/logos/netopsia.png",
    location: "Paris, France (Hybrid)",
    startDate: "April 2024",
    endDate: "June 2024",
    description: [
      "Migrated legacy systems to newer architectures, ensuring performance optimization.",
      "Developed and debugged custom scripts for network automation.",
      "Provided documentation for future maintenance and scalability of systems."
    ],
    technologies: ["Network Automation", "Legacy Migration", "Documentation", "Performance Optimization"]
  },
  {
    id: 3,
    title: "Freelance - Web developer and SEO editor",
    company: "Chauff'Heure VIP",
    logo: "/logos/chauffheure.png",
    location: "Paris, France",
    startDate: "October 2022",
    endDate: "November 2022",
    description: [
      "Fixed minor bugs on the company's website.",
      "Wrote articles using the WordPress CMS, optimized SEO using the Yoast plugin.",
      "Managed web performance using audit tools."
    ],
    technologies: ["WordPress", "SEO", "Web Performance", "Content Writing"]
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
  awards?: string[];
}

export const education: Education[] = [
  {
    id: 1,
    degree: "Engineer's degree in Computer science and Networks",
    institution: "Telecom SudParis",
    logo: "/logos/telecom.png",
    location: "Palaiseau, France",
    startDate: "2024",
    endDate: "2027",
    description: "Engineering studies with a focus on Computer science and Networks at Telecom SudParis, part of Institut Polytechnique de Paris."
  },
  {
    id: 2,
    degree: "Bachelor's degree",
    institution: "Université Paris-Est Créteil (Paris 12)",
    logo: "/logos/upec.png",
    location: "Créteil, France",
    startDate: "2022",
    endDate: "2024",
    description: "Bachelor's degree in Computer Science."
  },
  {
    id: 3,
    degree: "High School Diploma",
    institution: "Lycée La Mare Carrée",
    logo: "/logos/lycee.png",
    location: "Moissy-Cramayel, France",
    startDate: "2019",
    endDate: "2022",
    description: "High School diploma with focuses on mathematics and computer science."
  }
];

export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: "Langages de programmation",
    items: ["Java", "Python", "C", "HTML", "CSS", "JavaScript", "TypeScript", "PHP", "SQL", "Bash"]
  },
  {
    category: "Frontend",
    items: ["React", "Vue.js", "Angular", "Redux", "Tailwind CSS", "SASS", "Material UI"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Django", "REST API"]
  },
  {
    category: "Bases de données",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "SQLite"]
  },
  {
    category: "Outils & Technologies",
    items: ["Git", "Docker", "Linux", "Windows", "VSCode", "Wireshark", "Office 365", "PowerBI", "StarUML", "WordPress", "Drupal"]
  },
  {
    category: "Langues",
    items: ["Français (Natif)", "Arabe (Natif)", "Anglais (Niveau professionnel)", "Espagnol (Notions)"]
  },
  {
    category: "Réseaux",
    items: ["IP", "Ethernet", "TCP", "UDP", "DNS", "VLAN", "NAT", "FTP", "VPN", "TCP/IP", "OSI"]
  }
];

export const contactInfo = {
  email: "elhaddad.nassimpro@gmail.com",
  phone: "+33 6 99 50 90 52",
  location: "Paris, France",
  linkedin: "https://www.linkedin.com/in/nassim-elhaddad/",
  github: "https://github.com/NassimEH"
};

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image?: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  date: string;
  source: 'linkedin' | 'personal' | 'other';
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jean Dupont",
    position: "Senior Developer",
    company: "Tech Solutions",
    image: "/testimonials/person1.png",
    text: "Nassim est un développeur talentueux avec une grande capacité d'adaptation. Son travail sur notre projet a été exemplaire, et sa connaissance technique a été un atout majeur pour notre équipe.",
    rating: 5,
    date: "Juin 2023",
    source: 'linkedin'
  },
  {
    id: 2,
    name: "Marie Lambert",
    position: "Project Manager",
    company: "Digital Innovations",
    image: "/testimonials/person2.png",
    text: "J'ai eu le plaisir de travailler avec Nassim sur plusieurs projets. Sa rigueur, son sens de l'initiative et sa capacité à résoudre des problèmes complexes sont impressionnants.",
    rating: 5,
    date: "Mars 2023",
    source: 'linkedin'
  },
  {
    id: 3,
    name: "Thomas Mercier",
    position: "CTO",
    company: "WebSphere",
    image: "/testimonials/person3.png",
    text: "Nassim a fait preuve d'une expertise remarquable en cybersécurité lors de notre collaboration. Son approche méthodique et sa passion pour la sécurité en font un atout pour n'importe quelle équipe.",
    rating: 4,
    date: "Janvier 2023",
    source: 'linkedin'
  }
];
