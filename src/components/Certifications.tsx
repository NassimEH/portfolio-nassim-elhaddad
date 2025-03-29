
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Award, Filter, Tag, Book, Code, Database, Server, FileText, Globe, CheckCircle2, Building, ChevronDown, Shield, Lightbulb, UserPlus, LineChart, Mail, Video, CreditCard, GraduationCap, MessageSquare, Presentation, Smartphone } from 'lucide-react';

interface Certification {
  id: number;
  name: string;
  nameEn?: string;
  organization: string;
  logo?: string;
  date: string;
  description?: string;
  certId?: string;
  category: string;
  displayName?: string;
}

// Logos des organisations
const organizationLogos = {
  'LinkedIn': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/2048px-LinkedIn_icon.svg.png',
  'Microsoft': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png',
  'Siemens': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/2560px-Siemens-logo.svg.png',
  'Google': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png',
  'Semrush': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Semrush_logo.svg/1920px-Semrush_logo.svg.png',
  'Apple': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png',
  'Project Management Institute': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Project_Management_Institute_logo.svg/1280px-Project_Management_Institute_logo.svg.png',
  'ANSSI': '/lovable-uploads/bea60337-76eb-4171-857e-5b73b3e4909c.png',
  'TOEIC Program': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/TOEIC_logo.svg/1280px-TOEIC_logo.svg.png',
  'UFOLEP': '/lovable-uploads/246697fb-35f1-40ae-9b67-9c5e459663e2.png',
  'Pix': '/lovable-uploads/68c3bc60-10d6-4e9e-baaa-9272a53727d1.png',
  'LVMH': '/lovable-uploads/77e15d32-1485-4a2a-a291-8d6c4867e5a4.png',
  'Projet Voltaire': '/lovable-uploads/dc1b2dea-681f-448e-b9c6-7621e710e422.png',
  'Udemy': 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/2560px-Udemy_logo.svg.png',
  'France Titres - ANTS': '/lovable-uploads/971c151e-649b-4558-a68a-a3658a2ef5d7.png',
};

const certifications: Certification[] = [
  {
    id: 1,
    name: "Améliorer sa mémoire",
    nameEn: "Improve Your Memory",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Mars 2025",
    category: "personal_development",
    description: "Formation sur les techniques de mémorisation pour améliorer l'apprentissage et la rétention d'information."
  },
  {
    id: 2,
    name: "Apple Search Ads Certification",
    nameEn: "Apple Search Ads Certification",
    organization: "Apple",
    logo: organizationLogos.Apple,
    date: "Mars 2025",
    displayName: "Certification Apple Search Ads",
    category: "marketing",
    description: "Certification officielle d'Apple sur l'utilisation et l'optimisation des campagnes publicitaires Apple Search Ads."
  },
  {
    id: 3,
    name: "Booster ses compétences par le codéveloppement",
    nameEn: "Boosting Skills through Co-development",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Mars 2025",
    category: "personal_development",
    description: "Formation sur les méthodes de codéveloppement professionnel pour améliorer les compétences en équipe."
  },
  {
    id: 4,
    name: "Certified Developer by Microsoft",
    nameEn: "Certified Developer by Microsoft",
    organization: "Microsoft",
    logo: organizationLogos.Microsoft,
    date: "Mars 2025",
    certId: "7c5b74c896a615a0b364a095185db3c44e8dc62df629c9249cae96fba1f7bb41",
    category: "programming",
    description: "Certification officielle Microsoft pour les compétences en développement Python et utilisation de Visual Studio Code."
  },
  {
    id: 5,
    name: "Choisir d'être un bon manager",
    nameEn: "Choosing to be a Good Manager",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Mars 2025",
    category: "management",
    description: "Formation sur les principes fondamentaux de management et leadership d'équipe."
  },
  {
    id: 6,
    name: "Cybersecurity by Microsoft",
    nameEn: "Cybersecurity by Microsoft",
    organization: "Microsoft",
    logo: organizationLogos.Microsoft,
    date: "Mars 2025",
    certId: "59970265d7ea6f688ed2eead561237ddf8231cb75d8adbd825fca2b8d6e74f23",
    category: "cybersecurity",
    description: "Certification Microsoft sur les fondamentaux de la cybersécurité et la gestion des risques informatiques."
  },
  {
    id: 7,
    name: "Design Thinking",
    nameEn: "Design Thinking",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Mars 2025",
    certId: "ac8615299711949464b14ae33963016dd97719fd9009972816f45b75b7c148e078",
    category: "design",
    description: "Formation sur la méthodologie de Design Thinking pour résoudre des problèmes complexes de façon créative."
  },
  {
    id: 8,
    name: "Développer son agilité cérébrale",
    nameEn: "Developing Mental Agility",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Mars 2025",
    category: "personal_development",
    description: "Formation sur la flexibilité cognitive et les techniques de prise de décision efficace."
  },
  {
    id: 9,
    name: "Getting Started with Semrush",
    nameEn: "Getting Started with Semrush",
    organization: "Semrush",
    logo: organizationLogos.Semrush,
    date: "Mars 2025",
    certId: "551482",
    displayName: "Getting started with Semrush",
    category: "marketing",
    description: "Introduction aux fonctionnalités de base de Semrush pour l'analyse SEO et le marketing digital."
  },
  {
    id: 10,
    name: "Gérer les techniciens / techniciennes",
    nameEn: "Managing Technicians",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Mars 2025",
    displayName: "Gérer les techniciens / techniciennes",
    category: "management",
    description: "Formation sur la gestion d'équipes techniques et le leadership dans un contexte IT."
  },
  {
    id: 11,
    name: "La réflexion stratégique",
    nameEn: "Strategic Thinking",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Mars 2025",
    category: "management",
    description: "Formation sur les principes de réflexion stratégique pour les leaders et managers."
  },
  {
    id: 12,
    name: "Les fondements de la gestion de projet : L'intégration",
    nameEn: "Fundamentals of Project Management: Integration",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Mars 2025",
    category: "project_management",
    description: "Formation sur l'intégration des différents aspects de la gestion de projets."
  },
  {
    id: 13,
    name: "Léa, chargée de mission : quotidien, salaire, parcours",
    nameEn: "Lea, Project Manager: Daily Work, Salary, Career Path",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Mars 2025",
    category: "project_management",
    description: "Formation sur le métier de chargé de mission et ses responsabilités quotidiennes."
  },
  {
    id: 14,
    name: "Office 365 : Planner",
    nameEn: "Office 365: Planner",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Mars 2025",
    certId: "3ee37abda714dd58fa702b92bcbe42fdcbe6e2626323165287c0305e8b81e5a",
    displayName: "Office 365 : Planner",
    category: "office",
    description: "Formation sur l'utilisation de Microsoft Planner pour la gestion de tâches et projets en équipe."
  },
  {
    id: 15,
    name: "Semrush - Emoji Marketing",
    nameEn: "Semrush - Emoji Marketing",
    organization: "Semrush",
    logo: organizationLogos.Semrush,
    date: "Mars 2025",
    certId: "551934",
    displayName: "Semrush - Emoji Marketing",
    category: "marketing",
    description: "Certification sur l'utilisation stratégique des emojis dans le marketing digital."
  },
  {
    id: 16,
    name: "Semrush - Marketing Trivia 2024",
    nameEn: "Semrush - Marketing Trivia 2024",
    organization: "Semrush",
    logo: organizationLogos.Semrush,
    date: "Mars 2025",
    certId: "551891",
    displayName: "Semrush - Marketing Trivia 2024",
    category: "marketing",
    description: "Certification de connaissances générales en marketing digital pour l'année 2024."
  },
  {
    id: 17,
    name: "Siemens - AI Cyber Rules",
    nameEn: "Siemens - AI Cyber Rules",
    organization: "Siemens",
    logo: organizationLogos.Siemens,
    date: "Mars 2025",
    displayName: "AI Cyber Rules by Siemens",
    category: "cybersecurity",
    description: "Formation Siemens sur les règles de cybersécurité appliquées à l'intelligence artificielle."
  },
  {
    id: 18,
    name: "Siemens - Cyber Smart Structures",
    nameEn: "Siemens - Cyber Smart Structures",
    organization: "Siemens",
    logo: organizationLogos.Siemens,
    date: "Mars 2025",
    displayName: "Cyber Smart Structures by Siemens",
    category: "cybersecurity",
    description: "Formation Siemens sur la sécurisation des infrastructures intelligentes."
  },
  {
    id: 19,
    name: "Siemens - Environment Smart Structures",
    nameEn: "Siemens - Environment Smart Structures",
    organization: "Siemens",
    logo: organizationLogos.Siemens,
    date: "Mars 2025",
    displayName: "Environment Siemens",
    category: "environment",
    description: "Formation Siemens sur l'impact environnemental des infrastructures intelligentes."
  },
  {
    id: 20,
    name: "Siemens - Project Management",
    nameEn: "Siemens - Project Management",
    organization: "Siemens",
    logo: organizationLogos.Siemens,
    date: "Mars 2025",
    displayName: "Project Management",
    category: "project_management",
    description: "Formation Siemens sur les principes de gestion de projet appliqués dans l'entreprise."
  },
  {
    id: 21,
    name: "Évaluer et améliorer un plan stratégique",
    nameEn: "Evaluating and Improving a Strategic Plan",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Mars 2025",
    category: "management",
    description: "Formation sur l'évaluation et l'optimisation des plans stratégiques en entreprise."
  },
  {
    id: 22,
    name: "AI & Environment",
    nameEn: "AI & Environment",
    organization: "Project Management Institute",
    logo: organizationLogos["Project Management Institute"],
    date: "Février 2025",
    certId: "383d8aca8ce6fdd206f4af7e304c9806245ed906f63a340abd44be51ec59e0bef",
    displayName: "AI & Environment",
    category: "ai",
    description: "Certification PMI sur l'impact environnemental des technologies d'intelligence artificielle."
  },
  {
    id: 23,
    name: "AI & GDPR",
    nameEn: "AI & GDPR",
    organization: "Project Management Institute",
    logo: organizationLogos["Project Management Institute"],
    date: "Février 2025",
    certId: "db87bbc2f110748f0583c840f303e9cc66b84abc8213e2d40d3a713f96d37f4",
    displayName: "AI & Data Protection",
    category: "ai",
    description: "Certification PMI sur la conformité RGPD des systèmes d'intelligence artificielle."
  },
  {
    id: 24,
    name: "AI, what future for humans?",
    nameEn: "AI, what future for humans?",
    organization: "Project Management Institute",
    logo: organizationLogos["Project Management Institute"],
    date: "Février 2025",
    certId: "cb9bb4985965fd691d00f556bb189ffe02cc6571d73340754c1fa9aee6a031a",
    displayName: "AI, what future for humans?",
    category: "ai",
    description: "Réflexion sur l'impact futur de l'IA sur les métiers et la société."
  },
  {
    id: 25,
    name: "Better Manage Cybersecurity Incidents at Work",
    nameEn: "Better Manage Cybersecurity Incidents at Work",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    certId: "336b2e8a2a95345c44ad6ae722be184110d9a7d49fbbc6c5f15f6ec9ef09d42",
    displayName: "Better manage cybersecurity incidents at work",
    category: "cybersecurity",
    description: "Formation sur la gestion des incidents de cybersécurité en entreprise."
  },
  {
    id: 26,
    name: "Creating an Effective Influencer Marketing Strategy",
    nameEn: "Creating an Effective Influencer Marketing Strategy",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    certId: "795ed1175db89069ff8dff0e9713ce0620916418870f61eb133ae0b942857b5",
    displayName: "Creating an effective influencer marketing strategy",
    category: "marketing",
    description: "Formation sur la création et l'exécution de stratégies de marketing d'influence efficaces."
  },
  {
    id: 27,
    name: "Cybersecurity Threat Overview",
    nameEn: "Cybersecurity Threat Overview",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    certId: "281ce98fb6a4e3253ab8119c13896934f83b3dc58636ac2fdb4b3ef0b6006106",
    displayName: "Cybersecurity Threat Overview",
    category: "cybersecurity",
    description: "Aperçu des principales menaces en cybersécurité et des stratégies de protection."
  },
  {
    id: 28,
    name: "Cybersecurity by LinkedIn",
    nameEn: "Cybersecurity by LinkedIn",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    certId: "00e3592c54b50727c4438f481c6cdf141fcfa5fc1afd5c9ca343eecb4c64fd3",
    displayName: "Cybersecurity by LinkedIn",
    category: "cybersecurity",
    description: "Formation complète sur les principes fondamentaux de la cybersécurité."
  },
  {
    id: 29,
    name: "Ensuring Cybersecurity While Traveling",
    nameEn: "Ensuring Cybersecurity While Traveling",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    certId: "c4ca1c63be88158c9dbb76df27eaf834d6fb0a9c5858e2c4e59214bbaa9539",
    displayName: "Ensuring cybersecurity while traveling",
    category: "cybersecurity",
    description: "Formation sur les bonnes pratiques de cybersécurité lors des déplacements professionnels."
  },
  {
    id: 30,
    name: "Improve your Listening Skills",
    nameEn: "Improve your Listening Skills",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    displayName: "Improve your listening skills",
    category: "personal_development",
    description: "Formation sur l'amélioration des compétences d'écoute active dans un contexte professionnel."
  },
  {
    id: 31,
    name: "Introduction to Supply Chain",
    nameEn: "Introduction to Supply Chain",
    organization: "Project Management Institute",
    logo: organizationLogos["Project Management Institute"],
    date: "Février 2025",
    certId: "552634b40be2b49ae1d50ecc7d542dcca9a811dd916317636becd28add42eb6",
    displayName: "Introduction to Supply Chain",
    category: "business",
    description: "Introduction aux principes de la chaîne d'approvisionnement et à sa gestion."
  },
  {
    id: 32,
    name: "Make a Good Impression",
    nameEn: "Make a Good Impression",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    displayName: "Make a good impression",
    category: "personal_development",
    description: "Formation sur les techniques pour faire bonne impression dans un contexte professionnel."
  },
  {
    id: 33,
    name: "Microsoft 365 : Outlook",
    nameEn: "Microsoft 365: Outlook",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    certId: "c9de5a301c702b7ca1aa1bd3d49804e743ea80fc11547f2c577ca2e7c48f819",
    displayName: "Microsoft 365 : Outlook",
    category: "office",
    description: "Formation sur l'utilisation avancée de Microsoft Outlook pour la gestion d'emails professionnels."
  },
  {
    id: 34,
    name: "Microsoft 365 : Powerpoint",
    nameEn: "Microsoft 365: PowerPoint",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    certId: "c88e3f4815ee5121956761bb75925fa33fe1b8703fe7e4dd3b517379ec1ef",
    displayName: "Microsoft 365 : Powerpoint",
    category: "office",
    description: "Formation sur la création de présentations professionnelles avec PowerPoint."
  },
  {
    id: 35,
    name: "Microsoft 365 : Word",
    nameEn: "Microsoft 365: Word",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    certId: "ef1ac914dd8f2087586bbd563820157223543f62b0df42ca4897ea1c41ae9b14",
    displayName: "Word",
    category: "office",
    description: "Formation sur l'utilisation avancée de Microsoft Word pour la création de documents professionnels."
  },
  {
    id: 36,
    name: "PowerBI",
    nameEn: "PowerBI",
    organization: "Project Management Institute",
    logo: organizationLogos["Project Management Institute"],
    date: "Février 2025",
    displayName: "PowerBI",
    category: "data",
    description: "Formation sur l'utilisation de PowerBI pour l'analyse et la visualisation de données."
  },
  {
    id: 37,
    name: "PowerBI Advanced",
    nameEn: "PowerBI Advanced",
    organization: "Project Management Institute",
    logo: organizationLogos["Project Management Institute"],
    date: "Février 2025",
    displayName: "PowerBI Advanced",
    category: "data",
    description: "Formation avancée sur PowerBI pour l'analyse complexe et la modélisation de données."
  },
  {
    id: 38,
    name: "Scrum Master Certified",
    nameEn: "Scrum Master Certified",
    organization: "Project Management Institute",
    logo: organizationLogos["Project Management Institute"],
    date: "Février 2025",
    certId: "1fec5d8049111f7f264e15fa1b3624da817bbc0449e82d6e84743ffbd373bcf91",
    displayName: "Devenir un bon Scrum Master",
    category: "project_management",
    description: "Certification officielle de Scrum Master pour la gestion de projets agiles."
  },
  {
    id: 39,
    name: "Team Working",
    nameEn: "Team Working",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    certId: "141faab072b4170473282cabab535ebe5ac79dbaa10780951617e7a628ebcb0e",
    displayName: "Team Working",
    category: "teamwork",
    description: "Formation sur les principes de travail d'équipe efficace et de collaboration."
  },
  {
    id: 40,
    name: "The fundamentals of programming",
    nameEn: "The fundamentals of programming",
    organization: "LinkedIn",
    logo: organizationLogos.LinkedIn,
    date: "Février 2025",
    certId: "c7a25fecba7e8b630f7e22d14606d9986745313b8bb6eadc7213a6ac72025ed7",
    displayName: "The fundamentals of programming",
    category: "programming",
    description: "Introduction aux concepts fondamentaux de la programmation informatique."
  },
  {
    id: 41,
    name: "SecNumAcadémie : Cybersécurité par l'ANSSI",
    nameEn: "SecNumAcademy: Cybersecurity by ANSSI",
    organization: "ANSSI - Agence nationale de la sécurité des systèmes d'information",
    logo: organizationLogos.ANSSI,
    date: "Octobre 2024",
    displayName: "Certification ANSSI : Cybersécurité",
    category: "cybersecurity",
    description: "Certification officielle de l'ANSSI sur les fondamentaux de la cybersécurité."
  },
  {
    id: 42,
    name: "Google AI Essentials",
    nameEn: "Google AI Essentials",
    organization: "Google",
    logo: organizationLogos.Google,
    date: "Août 2024",
    certId: "6OS2KRXLRKFH",
    displayName: "Les fondamentaux de l'IA par Google",
    category: "ai",
    description: "Certification Google sur les concepts fondamentaux de l'intelligence artificielle."
  },
  {
    id: 43,
    name: "Customs Essentials",
    nameEn: "Customs Essentials",
    organization: "Siemens",
    logo: organizationLogos.Siemens,
    date: "Juillet 2024",
    displayName: "Custom Essentials",
    category: "business",
    description: "Formation Siemens sur les bases des procédures douanières et commerciales."
  },
  {
    id: 44,
    name: "Excellence opérationnelle - Notre devoir de conseil clients",
    nameEn: "Operational Excellence - Our Customer Advisory Duty",
    organization: "Siemens",
    logo: organizationLogos.Siemens,
    date: "Juillet 2024",
    displayName: "Siemens - Conseils clients",
    category: "business",
    description: "Formation Siemens sur l'excellence opérationnelle dans le conseil client."
  },
  {
    id: 45,
    name: "Fundamentals Of Digital Marketing",
    nameEn: "Fundamentals Of Digital Marketing",
    organization: "Google",
    logo: organizationLogos.Google,
    date: "Juillet 2024",
    certId: "308231725",
    displayName: "Les principes fondamentaux du marketing numérique",
    category: "marketing",
    description: "Certification Google sur les fondamentaux du marketing digital et du SEO."
  },
  {
    id: 46,
    name: "LVMH Inside",
    nameEn: "LVMH Inside",
    organization: "LVMH",
    logo: organizationLogos.LVMH,
    date: "Juillet 2024",
    certId: "a7fe632664",
    displayName: "Certificat LVMH Inside",
    category: "business",
    description: "Formation interne LVMH sur la culture et les valeurs du groupe de luxe."
  },
  {
    id: 47,
    name: "Siemens BCG - Doing the right thing !",
    nameEn: "Siemens BCG - Doing the right thing!",
    organization: "Siemens",
    logo: organizationLogos.Siemens,
    date: "Juillet 2024",
    displayName: "Certificate Siemens BCG - Doing the right thing !",
    category: "business",
    description: "Formation Siemens sur l'éthique des affaires et la conformité."
  },
  {
    id: 48,
    name: "Blockchain - Cryptomonnaies & Bitcoin",
    nameEn: "Blockchain - Cryptocurrencies & Bitcoin",
    organization: "Udemy",
    logo: organizationLogos.Udemy,
    date: "Juin 2024",
    certId: "UC-cca0aa24-1c28-4534-b722-c9a3d736cbf8",
    displayName: "Certification Udemy : Cryptomonnaies et Blockchain",
    category: "finance",
    description: "Formation complète sur les fondamentaux de la blockchain et des cryptomonnaies."
  },
  {
    id: 49,
    name: "Certification Voltaire",
    nameEn: "Voltaire Certification",
    organization: "Projet Voltaire",
    logo: organizationLogos["Projet Voltaire"],
    date: "Juin 2023",
    category: "writing",
    description: "Certification attestant d'un niveau élevé en orthographe et grammaire française."
  },
  {
    id: 50,
    name: "Test of English for International Communication (TOEIC)",
    nameEn: "Test of English for International Communication (TOEIC)",
    organization: "TOEIC Program",
    logo: organizationLogos["TOEIC Program"],
    date: "Juin 2023",
    displayName: "TOEIC",
    category: "language",
    description: "Certification internationale d'anglais professionnel."
  },
  {
    id: 51,
    name: "Permis de conduire - B",
    nameEn: "Driving License - B",
    organization: "France Titres - Agence nationale des titres sécurisés - ANTS",
    logo: organizationLogos["France Titres - ANTS"],
    date: "Mars 2023",
    category: "other",
    description: "Permis de conduire français pour véhicules légers."
  },
  {
    id: 52,
    name: "PIX",
    nameEn: "PIX",
    organization: "Pix",
    logo: organizationLogos.Pix,
    date: "Juin 2022",
    category: "office",
    description: "Certification des compétences numériques reconnue par l'État français."
  },
  {
    id: 53,
    name: "PSC1 - Certificat de compétences de citoyen de sécurité civile",
    nameEn: "PSC1 - Civil Security Citizen Skills Certificate",
    organization: "UFOLEP",
    logo: organizationLogos.UFOLEP,
    date: "Mars 2022",
    displayName: "PSC1",
    category: "teamwork",
    description: "Formation aux premiers secours et aux comportements à adopter face à une situation d'urgence."
  }
];

// Extracting unique organizations for the filter
const organizations = ['All', ...Array.from(new Set(certifications.map(cert => cert.organization)))];

// Updated filters with more relevant categories
const filters = [
  { id: 'all', name: 'Tous', nameEn: 'All', icon: <Filter className="w-4 h-4" /> },
  { id: 'cybersecurity', name: 'Cybersécurité', nameEn: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
  { id: 'ai', name: 'Intelligence Artificielle', nameEn: 'Artificial Intelligence', icon: <Lightbulb className="w-4 h-4" /> },
  { id: 'marketing', name: 'Marketing', nameEn: 'Marketing', icon: <LineChart className="w-4 h-4" /> },
  { id: 'programming', name: 'Programmation', nameEn: 'Programming', icon: <Code className="w-4 h-4" /> },
  { id: 'project_management', name: 'Gestion de projet', nameEn: 'Project Management', icon: <CheckCircle2 className="w-4 h-4" /> },
  { id: 'management', name: 'Management', nameEn: 'Management', icon: <UserPlus className="w-4 h-4" /> },
  { id: 'personal_development', name: 'Développement personnel', nameEn: 'Personal Development', icon: <Presentation className="w-4 h-4" /> },
  { id: 'office', name: 'Bureautique', nameEn: 'Office', icon: <FileText className="w-4 h-4" /> },
  { id: 'business', name: 'Business', nameEn: 'Business', icon: <Building className="w-4 h-4" /> },
  { id: 'data', name: 'Data', nameEn: 'Data', icon: <Database className="w-4 h-4" /> },
  { id: 'teamwork', name: 'Travail d\'équipe', nameEn: 'Teamwork', icon: <UserPlus className="w-4 h-4" /> },
  { id: 'design', name: 'Design', nameEn: 'Design', icon: <FileText className="w-4 h-4" /> },
  { id: 'environment', name: 'Environnement', nameEn: 'Environment', icon: <Globe className="w-4 h-4" /> },
  { id: 'language', name: 'Langues', nameEn: 'Language', icon: <MessageSquare className="w-4 h-4" /> },
  { id: 'finance', name: 'Finance', nameEn: 'Finance', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'writing', name: 'Rédaction', nameEn: 'Writing', icon: <Mail className="w-4 h-4" /> },
  { id: 'other', name: 'Autres', nameEn: 'Other', icon: <Tag className="w-4 h-4" /> },
];

const Certifications: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [activeOrganization, setActiveOrganization] = useState<string>('All');
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Mouse position tracking for background effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOrgDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredCertifications = certifications
    .filter(cert => activeFilter === 'all' || cert.category === activeFilter)
    .filter(cert => activeOrganization === 'All' || cert.organization === activeOrganization)
    .sort((a, b) => {
      // Parse dates for comparison - assuming format is "Month Year" or similar
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime(); // Most recent first
    });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="certifications" className="py-24 relative overflow-hidden" ref={containerRef}>
      {/* Background interactive effects */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-background via-gray-900/80 to-background"
        style={{
          background: `radial-gradient(circle ${Math.max(400, window.innerWidth / 3)}px at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15), transparent 80%)`
        }}
      ></div>
      
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Moving particles - reduced count for better performance */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500/50"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: Math.random() * 0.5 + 0.3
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{ 
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "mirror"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 tracking-tight bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {t('certifications.title')}
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {t('certifications.description')}
          </motion.p>
        </div>

        {/* Filter section - More compact design */}
        <motion.div 
          className="mb-10 flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Filter layout with category horizontally scrollable and organization as small dropdown */}
          <div className="flex items-center justify-between gap-4">
            {/* Category filters - horizontal scrollable */}
            <div className="glass-morphism p-2 rounded-full overflow-x-auto flex gap-2 border border-purple-500/20 shadow-lg scrollbar-none flex-grow">
              <div className="flex min-w-max px-1">
                {filters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-3 py-1.5 rounded-full text-xs flex items-center whitespace-nowrap gap-1.5 transition-all mx-0.5 ${
                      activeFilter === filter.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                        : 'bg-white/5 text-muted-foreground hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter.icon}
                    <span className="truncate">{i18n.language === 'fr' ? filter.name : filter.nameEn}</span>
                  </motion.button>
                ))}
              </div>
            </div>
            
            {/* Organization dropdown filter - more compact */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
                className="px-3 py-1.5 rounded-lg text-xs flex items-center gap-2 glass-morphism border border-cyan-500/20 shadow-lg w-auto max-w-[160px] justify-between"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-1.5 truncate">
                  <Building className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                  <span className="truncate">{activeOrganization === 'All' ? t('certifications.all_orgs') : activeOrganization}</span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${isOrgDropdownOpen ? 'rotate-180' : ''}`} />
              </motion.button>
              
              {/* Dropdown menu */}
              <AnimatePresence>
                {isOrgDropdownOpen && (
                  <motion.div 
                    className="absolute z-50 right-0 mt-2 w-48 rounded-xl glass-morphism border border-cyan-500/20 shadow-xl backdrop-blur-lg bg-background/95 py-2 max-h-60 overflow-y-auto scrollbar-none"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    {organizations.map((org) => (
                      <button
                        key={org}
                        className={`w-full text-left px-4 py-1.5 text-xs hover:bg-white/10 transition-colors ${
                          activeOrganization === org ? 'text-cyan-400' : 'text-muted-foreground'
                        }`}
                        onClick={() => {
                          setActiveOrganization(org);
                          setIsOrgDropdownOpen(false);
                        }}
                      >
                        <span className="line-clamp-1">{org}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Certifications cards grid with filtered animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeFilter}-${activeOrganization}`} 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {filteredCertifications.length > 0 ? (
              filteredCertifications.map(cert => (
                <motion.div 
                  className="relative group"
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  key={cert.id}
                  layout
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative rounded-xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/50 hover:bg-black/60 transition-all h-full">
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
                    
                    <div className="p-4 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1 pr-2">
                          <h3 className="text-base font-bold line-clamp-2 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                            {i18n.language === 'fr' ? cert.name : cert.nameEn || cert.name}
                          </h3>
                        </div>
                        <Award className="h-4 w-4 text-pink-400 ml-1 flex-shrink-0" />
                      </div>
                      
                      {/* Organization with logo */}
                      <div className="flex items-center mb-3">
                        {cert.logo && (
                          <div className="w-7 h-7 rounded-full overflow-hidden bg-white/10 p-1 mr-2 flex items-center justify-center flex-shrink-0">
                            <img 
                              src={cert.logo} 
                              alt={cert.organization}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                // Fallback if image fails to load
                                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/30?text=' + cert.organization.charAt(0);
                              }}
                            />
                          </div>
                        )}
                        <span className="text-xs text-cyan-400 line-clamp-1">{cert.organization}</span>
                      </div>
                      
                      {cert.description && (
                        <p className="text-muted-foreground mb-3 text-xs line-clamp-3 flex-grow">{cert.description}</p>
                      )}
                      
                      <div className="mt-auto flex justify-between items-center">
                        <div className="text-xs text-cyan-400 font-mono">{cert.date}</div>
                        
                        {/* Category badge moved to bottom right */}
                        <div className="px-2 py-0.5 rounded-full text-xxs bg-black/50 border border-pink-500/30 text-pink-300">
                          {i18n.language === 'fr' 
                            ? filters.find(f => f.id === cert.category)?.name 
                            : filters.find(f => f.id === cert.category)?.nameEn || cert.category}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div 
                className="col-span-1 sm:col-span-2 lg:col-span-3 text-center py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-muted-foreground">{t('certifications.no_results')}</p>
                <div className="flex gap-2 justify-center mt-4">
                  <button
                    onClick={() => setActiveFilter('all')}
                    className="px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-lg text-xs"
                  >
                    {t('certifications.reset_categories')}
                  </button>
                  {activeOrganization !== 'All' && (
                    <button
                      onClick={() => setActiveOrganization('All')}
                      className="px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-lg text-xs"
                    >
                      {t('certifications.reset_organizations')}
                    </button>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
        
        {/* Floating decoration elements */}
        <motion.div 
          className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-purple-500/10 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        
        <motion.div 
          className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
    </section>
  );
};

export default Certifications;
