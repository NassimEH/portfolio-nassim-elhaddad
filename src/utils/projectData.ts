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
  date?: string;
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
    technologies: ['React', 'Node.js', 'Laravel', 'WordPress', 'TypeScript', 'JavaScript', 'HTML/CSS', 'PHP', 'Python', 'RiotJS', 'CSS Bulma', 'API TMDB'],
    color: 'from-blue-500 to-cyan-400'
  },
  {
    id: 'mobile_development',
    name: 'Développement Mobile',
    nameEn: 'Mobile Development',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Java', 'Android Studio', 'Android Java'],
    color: 'from-green-500 to-emerald-400'
  },
  {
    id: 'data_science',
    name: 'Data Science',
    nameEn: 'Data Science',
    technologies: ['Python', 'R', 'SQL', 'PowerBI'],
    color: 'from-purple-500 to-indigo-400'
  },
  {
    id: 'design',
    name: 'Design & Présentation',
    nameEn: 'Design & Presentation',
    technologies: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'Canva', 'PDF', 'Blender', 'PowerPoint', 'Design graphique', 'UI/UX', 'Communication orale', 'Ergonomie informatique'],
    color: 'from-pink-500 to-rose-400'
  },
  {
    id: 'software_development',
    name: 'Développement Logiciel',
    nameEn: 'Software Development',
    technologies: ['Java', 'C', 'Python', 'Java Swing', 'Windows', 'Linux'],
    color: 'from-orange-500 to-amber-400'
  },
  {
    id: 'devops',
    name: 'DevOps & Cloud',
    nameEn: 'DevOps & Cloud',
    technologies: ['Docker', 'Kubernetes'],
    color: 'from-orange-500 to-amber-400'
  },
  {
    id: 'other',
    name: 'Autres',
    nameEn: 'Other',
    technologies: ['Droit du travail', 'Rédaction', 'Communication orale', 'Management', 'Gestion de projet'],
    color: 'from-gray-500 to-slate-400'
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "WeListen",
    description: "Une plateforme web interactive pour découvrir et partager de la musique, avec des recommandations basées sur les goûts des utilisateurs. Développée à l'origine comme projet scolaire, elle est devenue une application innovante qui mélange partage musical et interaction sociale.",
    technologies: ["React", "MongoDB", "TailwindCSS", "HTML", "CSS", "JavaScript"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/WeListen",
    demoUrl: "https://welisten-demo.vercel.app",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQG9_0DNca7R7w/profile-treasury-image-shrink_800_800/B4EZVyIp_7HcAY-/0/1741376627283?e=1743868800&v=beta&t=yAq3CLRlQcsd7coyIpBNiVSLbOkRdztvxH6crTU0Aeo",
    featured: true,
    date: "Mars 2025"
  },
  {
    id: 2,
    title: "DHCP ZTP Server",
    description: "Interface web conçue pour configurer facilement un système DHCP ZTP (Zero Touch Provisioning) sur des appareils spécifiques. Cette plateforme inclut une gestion des utilisateurs avec différents rôles et permissions, une interface claire et intuitive, et un système de gestion des connaissances.",
    technologies: ["Python", "HTML", "CSS", "JavaScript", "SQL", "Django"],
    category: 'devops',
    githubUrl: "https://github.com/NassimEH/WebZTP",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQHjg-g2iJ9ZiQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1735558719605?e=1743868800&v=beta&t=sQNout9odyGrc3DX7R0uNF9-IHTDRBvO1pOVGk17Pxs",
    featured: true,
    date: "Décembre 2024"
  },
  {
    id: 3,
    title: "Télétravailler en France",
    description: "Présentation de groupe sur le droit au télétravail en France pour un cours de droit social. Analyse des avantages (flexibilité, économies de coûts), des inconvénients (isolement, frontières floues entre vie professionnelle et personnelle), et du cadre juridique actuel.",
    technologies: ["PowerPoint", "Communication orale", "Droit du travail"],
    category: 'other',
    githubUrl: "https://github.com/NassimEH/Teleworking-presentation",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQEzkj3Oj_OZAA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734180737522?e=1743868800&v=beta&t=Eydh5tRVpeeqvTgIXKuBtxPlkKuTTTDqY50Uxqd1Tuc",
    featured: false,
    date: "Décembre 2024"
  },
  {
    id: 4,
    title: "Word to PDF Converter",
    description: "Programme automatisé pour convertir des fichiers Word (.doc et .docx) en fichiers PDF. L'application crée automatiquement des dossiers dédiés pour les résultats et gère l'installation des dépendances requises.",
    technologies: ["Python"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/WordToPDF-code",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQFjMKMKqhIypQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1734800313736?e=1743868800&v=beta&t=PMGHza0Ss1HheWjQ8fhPCpKCUw1sQ4oLrbt_v7Rfwxw",
    featured: false,
    date: "Décembre 2024"
  },
  {
    id: 5,
    title: "Creativity × Music Composition",
    description: "Ce projet présente l'évolution du processus créatif dans la composition musicale à travers différentes époques, préparé pour un cours d'anglais C1-C2 à Télécom SudParis. Il examine les approches des compositeurs des périodes classique, romantique et contemporaine.",
    technologies: ["PowerPoint", "Communication orale"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/Creativity-x-Music",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQHCjlChpBYYXw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1732969279412?e=1743868800&v=beta&t=o9ZPdX31MVBtGd-SPxvOnRgcED9CRn9ISdiY3xudAyI",
    featured: false,
    date: "Novembre 2024"
  },
  {
    id: 6,
    title: "Violence domestique en entreprise",
    description: "Projet de groupe issu d'un cours de management sur les droits des femmes et comment agir en tant que collègue si vous soupçonnez qu'un(e) collègue subit des violences domestiques. L'objectif est de sensibiliser et d'éduquer les employés sur les signes d'abus domestiques.",
    technologies: ["PowerPoint", "Communication orale", "Management", "Gestion de projet"],
    category: 'other',
    githubUrl: "https://github.com/NassimEH/Presentation-Femmes-Entreprise",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGFzYO5Hoquzw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1731101869570?e=1743868800&v=beta&t=W8cZrtOk_Ndu8Fc1k7IbEL9vJivuDkVFTh2aqin5zWI",
    featured: false,
    date: "Novembre 2024"
  },
  {
    id: 7,
    title: "Redesign MonChauffeurVIP",
    description: "En tant que freelance, j'ai participé à la refonte complète du site MonChauffeurVIP, en travaillant sur le front-end avec le CMS WordPress. J'ai utilisé des plugins comme Yoast SEO pour optimiser le site pour les moteurs de recherche.",
    technologies: ["WordPress", "SEO", "HTML", "CSS", "JavaScript"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/MonChauffeurVIP-redesign",
    imageUrl: "https://lh3.googleusercontent.com/p/AF1QipOcuXHU-GbQ2wzWEcotpP9I3nWMvaav_3P7Ozsw=s680-w680-h510",
    featured: true,
    date: "Novembre 2024"
  },
  {
    id: 8,
    title: "3D Cyborg",
    description: "Un modèle 3D d'un cyborg créé dans le cadre d'un projet de groupe avec Blender.",
    technologies: ["Blender"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/Le-Cyborg-3D",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGU-M191afENw/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1728141870259?e=1743868800&v=beta&t=crivGEBS6YhXn5_QiP8-6skGdPkOA-GoKN8LL92WAeo",
    featured: false,
    date: "Octobre 2024"
  },
  {
    id: 9,
    title: "3D Gameboy",
    description: "Modèle 3D d'une Gameboy créé avec Blender.",
    technologies: ["Blender"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/Gameboy-3D",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQG7HYPhhFc6yQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1728142229881?e=1743868800&v=beta&t=O8bVM0LdD9hsp-Ml9eRN_5U2ynAWGVAnf8mTcRlhZeM",
    featured: false,
    date: "Octobre 2024"
  },
  {
    id: 10,
    title: "3D Room",
    description: "Modèle 3D d'une chambre créé avec Blender (apprentissage du shading et des matériaux).",
    technologies: ["Blender"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/Room-3D",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGjvkrznlWmJw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729376727927?e=1743868800&v=beta&t=L4xgjg6c18UOjSEsj6rwn5b03_4gMESSKF-iJ3CBGVk",
    featured: false,
    date: "Octobre 2024"
  },
  {
    id: 11,
    title: "3D Chairs",
    description: "Modèle 3D de deux chaises créé avec Blender.",
    technologies: ["Blender"],
    category: 'design',
    githubUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGjZ_bL_TEveA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1727533250474?e=1743868800&v=beta&t=GJoMohDlMv1ey_mtgDeKZHPmqbBfZCxPLaOWVLzXQq4",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGjZ_bL_TEveA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1727533250474?e=1743868800&v=beta&t=GJoMohDlMv1ey_mtgDeKZHPmqbBfZCxPLaOWVLzXQq4",
    featured: false,
    date: "Septembre 2024"
  },
  {
    id: 12,
    title: "3D Mug",
    description: "Mon premier projet de modélisation 3D avec Blender: une tasse. Réalisé grâce au ModelTT (club de TSP).",
    technologies: ["Blender"],
    category: 'design',
    githubUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQHLJaoHtTaPyg/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1726949270931?e=1743868800&v=beta&t=8wismkcgkBfg9QukDpV4d1e_kOVaMGl_SUTClrMZMpQ",
    featured: false,
    date: "Septembre 2024"
  },
  {
    id: 13,
    title: "Snake Game",
    description: "Ce projet représente mon effort individuel pour créer une version du jeu Snake en Python. J'ai réalisé ce projet pendant mes vacances d'été pour offrir une expérience de jeu amusante et engageante sur ordinateur.",
    technologies: ["Python"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/Snake-Python",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQFj4vDPJ_ramw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1721505320259?e=1743868800&v=beta&t=ZGTIboZXoiYhGOs999JJIw_M--ZfUCLk_3lsRal6WPM",
    featured: false,
    date: "Juillet 2024"
  },
  {
    id: 14,
    title: "TicTacToe Game",
    description: "Ce projet représente mon effort individuel pour créer une version du jeu TicTacToe en Python. J'ai réalisé ce projet pendant mon temps libre pour offrir une expérience de jeu amusante et engageante sur ordinateur.",
    technologies: ["Python"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/TicTacToe-Python",
    imageUrl : "https://media.licdn.com/dms/image/v2/D4E2DAQFj3iRGfsshvA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1721572462846?e=1743868800&v=beta&t=5vWyRPd3_UfEJvTk7h4KjLMr9Iln7d9dLNzNEjnSjiY",
    featured: false,
    date: "Juillet 2024"
  },
  {
    id: 15,
    title: "Designs Photoshop",
    description: "Collection de tous mes designs créés avec Photoshop pendant mon temps libre.",
    technologies: ["Photoshop", "Design graphique"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/Design-Photoshop",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQHEb6lZGh3XFw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720988611347?e=1743868800&v=beta&t=GaxlyL0tFTxeIWE7iL39xAXxgvk5zT00fBdMpoupuI4",
    featured: false,
    date: "Juin 2024"
  },
  {
    id: 16,
    title: "Mémoire Professionnel BUT2",
    description: "Ce projet représente le rapport de mon stage de fin de BUT2 à l'Université Paris-Est Créteil, effectué chez Netopsia en tant que développeur. Le stage visait à améliorer mes compétences en développement logiciel et à appliquer les connaissances théoriques acquises pendant mes études.",
    technologies: ["Rédaction"],
    category: 'other',
    githubUrl: "https://github.com/NassimEH/Memoire-Professionnel-BUT2",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGaZHh7bgLj5A/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1722010654671?e=1743868800&v=beta&t=PilrJQ7y2SfsuJOM2qt6TBBnfnTY9DbNIXsKaOVrWbY",
    featured: false,
    date: "Juin 2024"
  },
  {
    id: 17,
    title: "Wireframes Netopsia",
    description: "Maquette créée pour la V2 du site web de l'entreprise NETOPSIA, où j'ai effectué mon stage de fin de cycle pour mon BUT en informatique.",
    technologies: ["Figma", "UI/UX", "Ergonomie informatique", "WCAG"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/Wireframe-Figma",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGR4qeGSRyXQg/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720902478234?e=1743868800&v=beta&t=OW7do4PvgXcau-zIlNLGI9xftAqkPkqAqznJ_CDtNTc",
    featured: false,
    date: "Mai 2024"
  },
  {
    id: 18,
    title: "Site web du Cinéma",
    description: "Un site web sur le thème du cinéma, développé avec le framework RiotJS et l'API TMDB.",
    technologies: ["CSS", "RiotJS", "API TMDB", "HTML"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/Site-Web-Cinema",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGFNcJuYQLbLQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720901110505?e=1743868800&v=beta&t=skXBA-S_sINiny4sXTBlWPetBav4r_WJM0WhbF7Wy48",
    featured: false,
    date: "Avril 2024"
  },
  {
    id: 19,
    title: "Morpion Solitaire",
    description: "Une version du jeu Morpion Solitaire mobile, codée en Java Android. Mon premier projet mobile.",
    technologies: ["Android Java", "Java", "Android Studio"],
    category: 'mobile_development',
    githubUrl: "https://github.com/NassimEH/Morpion-Solitaire",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQHAtOFGddQVmQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720900932033?e=1743868800&v=beta&t=i0sdK6angb17vDgq2bXk1IukTc5xrEsNulqnM-_Ga4Y",
    featured: true,
    date: "Avril 2024"
  },
  {
    id: 20,
    title: "Hypertrophie Musculaire",
    description: "Une présentation sur le thème de l'hypertrophie musculaire, projet réalisé en deuxième année de mon BUT en informatique dans le cadre d'un cours de communication.",
    technologies: ["PowerPoint", "Communication orale"],
    category: 'design',
    githubUrl: "https://github.com/NassimEH/Hypertrophie-Powerpoint",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQEsQAeEY1IXHQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720898376392?e=1743868800&v=beta&t=Xv-ks4i88VsPG7x8BdSiha0gqeGIk1-QNB49XSIymzA",
    featured: false,
    date: "Mars 2024"
  },
  {
    id: 21,
    title: "Tableur Java",
    description: "Un tableur inspiré d'Excel, développé en Java Swing pour l'interface utilisateur.",
    technologies: ["Java", "Java Swing"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/Tableur-Java",
    ImageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGkv80_uHDDZw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720898768030?e=1743868800&v=beta&t=mv3Vb0t5_lJPPUDqH60xCzOu1hImsDE_0lGVAjkGo-k",
    featured: true,
    date: "Février 2024"
  },
  {
    id: 22,
    title: "Pie Charts in Java",
    description: "Un projet Java utilisant Swing pour modéliser des données d'une base de données sous forme de graphique circulaire.",
    technologies: ["Java", "Java Swing", "UI/UX"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/Diagrammes-Java",
    ImageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGkv80_uHDDZw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720898768030?e=1743868800&v=beta&t=mv3Vb0t5_lJPPUDqH60xCzOu1hImsDE_0lGVAjkGo-k",
    featured: false,
    date: "Décembre 2023"
  },
  {
    id: 23,
    title: "Site Web Ergonomique",
    description: "Un site web où l'accent était mis sur la pertinence des choix de développement et la mise en œuvre d'une ergonomie utilisateur optimale.",
    technologies: ["HTML", "CSS", "JavaScript", "UI/UX", "Ergonomie informatique"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/Site-Web-Ergonomique",
    ImageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGnPiHEhYc5MA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720901374751?e=1743868800&v=beta&t=0zWObAB6a0763f2FdBUBl1ET2tWQ6oy7vf-G4Gp_nys",
    featured: false,
    date: "Octobre 2023"
  },
  {
    id: 24,
    title: "Le Donjon Infini",
    description: "Mon projet de fin de première année de BUT en informatique : un jeu de plateau de type RPG.",
    technologies: ["Java", "Java Swing"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/Donjon-Infini-PT2",
    ImageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQFC7VjYxg7X_Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720900407926?e=1743868800&v=beta&t=6IQH5qPlj2Us4YUoYIjBab-v34YHg4k8TbUpi2VEHWU",
    featured: true,
    date: "Juillet 2023"
  },
  {
    id: 25,
    title: "Dual Boot Windows/Linux",
    description: "Un tutoriel créé en binôme pour mettre en place un Dual Boot avec Windows 7 / Arch Linux.",
    technologies: ["Windows", "Linux"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/Dual-Boot",
    ImageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGEl4k24_v3hw/profile-treasury-image-shrink_1920_1920/profile-treasury-image-shrink_1920_1920/0/1722689320400?e=1743868800&v=beta&t=rRuOPxh7IeOwYZGMtv402R4DKSrYRNNcwdcnV6uOFnc",
    featured: false,
    date: "Février 2023"
  },
  {
    id: 26,
    title: "Site Web Threecot",
    description: "Un projet de site web pour une association caritative fictive dédiée au tricot.",
    technologies: ["PHP", "HTML", "CSS"],
    category: 'web_development',
    githubUrl: "https://github.com/NassimEH/Site-Web-Threecot",
    ImageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQEAeQbQUOAlXA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720900642097?e=1743868800&v=beta&t=woMfV4JzbLsjjFX-A4M6KFsz1HbpEC7pB91qXQs5AlU",
    featured: false,
    date: "Février 2023"
  },
  {
    id: 27,
    title: "Bataille Navale",
    description: "Une version jouable de la Bataille Navale sur terminal en ligne de commande, développée en C.",
    technologies: ["C"],
    category: 'software_development',
    githubUrl: "https://github.com/NassimEH/Bataille-Navale",
    ImageUrl: "https://media.licdn.com/dms/image/v2/D4E2DAQGhBH2qySzzJQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1720898045454?e=1743868800&v=beta&t=VTrzgMHLtUjRIbb8lfUzzlWZvUWZSIrl-DiQMgceOEI",
    featured: false,
    date: "Décembre 2022"
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
    logo: "/lovable-uploads/09275dd5-751d-4eb5-98ae-8133e842c4c0.png",
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
    logo: "/lovable-uploads/48042697-212b-4742-b92a-f939a1c11a92.png",
    location: "Palaiseau, France",
    startDate: "2024",
    endDate: "2027",
    description: "Engineering studies with a focus on Computer science and Networks at Telecom SudParis, part of Institut Polytechnique de Paris."
  },
  {
    id: 2,
    degree: "Bachelor's degree in Computer Science (BUT)",
    institution: "Université Paris-Est Créteil (Paris 12)",
    logo: "/lovable-uploads/faf6c4ab-5656-42b7-ba95-3c6edbe70eb0.png",
    location: "Créteil, France",
    startDate: "2022",
    endDate: "2024",
    description: "Bachelor's University of Technology degree in Computer Science."
  },
  {
    id: 3,
    degree: "High School Diploma",
    institution: "Lycée La Mare Carrée",
    logo: "/lovable-uploads/ad741a26-ddd7-4412-80a6-096b56f7bb86.png",
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
