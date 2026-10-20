export type Accent = "python" | "laravel" | "php" | "yellow";

export const profile = {
  name: "AHANTO Henri Sylvain",
  firstName: "Henri Sylvain",
  lastName: "AHANTO",
  handle: "henri-ahanto",
  role: "Développeur Web Fullstack, Mobile & IA",
  roles: [
    "Développeur Web Fullstack",
    "Développeur Mobile",
    "Développeur IA & Data",
    "Architecte logiciel",
  ],
  tagline:
    "Je conçois des applications robustes et évolutives, de l'interface au déploiement — avec React, Laravel, PHP et Python.",
  location: "Lokossa / Cotonou, Bénin",
  email: "ahantohenrisylvain@gmail.com",
  phones: ["+229 01 53 46 58 49", "+229 01 44 08 14 98"],
  availability: "Ouvert aux opportunités CDI & Freelance",
  bio: [
    "Développeur web fullstack passionné, diplômé en Informatique et Télécommunications (INSTI, 2026) et actuellement en stage professionnel chez WaohDigital.",
    "Fort d'une expertise en conception logicielle, je conçois des applications robustes et évolutives. Mon profil polyvalent me permet d'intervenir sur toutes les couches d'un projet : frontend, backend, base de données et intelligence artificielle.",
    "Toujours en veille, j'explore l'IA, le web scraping et la cybersécurité pour enrichir chaque projet et repousser les limites de ce que je construis.",
  ],
  links: {
    github: "https://github.com/henri-ahanto",
    youtube: "https://youtube.com/@digitallifeacademy911",
    portfolio: "https://ahantohenrisylvain.vercel.app",
    cv: "/CV_AHANTO_Henri_Sylvain.pdf",
  },
  languages: ["Français", "Anglais", "Fon", "Adja"],
} as const;

export const stats = [
  { value: 4, suffix: "", label: "Projets réalisés" },
  { value: 25, suffix: "+", label: "Technologies maîtrisées" },
  { value: 3, suffix: "", label: "Stages effectués" },
  { value: 3, suffix: "", label: "Années d'études à l'INSTI" },
];

export const techColors: Record<string, string> = {
  Figma: "#F24E1E",
  Framer: "#0055FF",
  "C++": "#00599C",
  PHP: "#777BB4",
  "PHP 8": "#777BB4",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  Python: "#4B8BBE",
  "Python 3": "#4B8BBE",
  Java: "#F89820",
  "Java 21": "#F89820",
  NextJS: "#FFFFFF",
  "Next.js": "#FFFFFF",
  "React 19": "#61DAFB",
  React: "#61DAFB",
  Django: "#44B78B",
  Laravel: "#FF2D20",
  "Laravel 11-13": "#FF2D20",
  Flask: "#E6EDF7",
  FastAPI: "#009688",
  PyTorch: "#EE4C2C",
  TensorFlow: "#FF6F00",
  BeautifulSoup: "#8A2BE2",
  Selenium: "#43B02A",
  Pandas: "#E70488",
  MySQL: "#4479A1",
  "MySQL 8": "#4479A1",
  PostgreSQL: "#4169E1",
  "PostgreSQL 16": "#4169E1",
  MongoDB: "#47A248",
  "Clean Architecture": "#FFD43B",
  MVC: "#4B8BBE",
  MVVM: "#777BB4",
  "Architecture Hexagonale": "#FF2D20",
  YouTube: "#FF2D20",
  Pédagogie: "#FFD43B",
  ERP: "#777BB4",
  Gestion: "#4B8BBE",
  "Sur mesure": "#FFD43B",
  Frontend: "#61DAFB",
};

export type SkillCategory = {
  title: string;
  icon: "palette" | "code" | "layers" | "brain" | "database" | "boxes";
  accent: Accent;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Design",
    icon: "palette",
    accent: "php",
    skills: ["Figma", "Framer"],
  },
  {
    title: "Langages de programmation",
    icon: "code",
    accent: "python",
    skills: ["C++", "PHP 8", "JavaScript", "TypeScript", "Python 3", "Java 21"],
  },
  {
    title: "Frameworks",
    icon: "layers",
    accent: "laravel",
    skills: ["Next.js", "React 19", "Django", "Laravel 11-13", "Flask", "FastAPI"],
  },
  {
    title: "IA / Data Science",
    icon: "brain",
    accent: "yellow",
    skills: ["PyTorch", "TensorFlow", "BeautifulSoup", "Selenium", "Pandas"],
  },
  {
    title: "Bases de données",
    icon: "database",
    accent: "python",
    skills: ["MySQL 8", "PostgreSQL 16", "MongoDB"],
  },
  {
    title: "Architecture logicielle",
    icon: "boxes",
    accent: "laravel",
    skills: ["Clean Architecture", "MVC", "MVVM", "Architecture Hexagonale"],
  },
];

export type Project = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  kind: string;
  href: string | null;
  accent: Accent;
  snippet: string;
};

export const projects: Project[] = [
  {
    title: "Gestion des ventes",
    slug: "expense-app",
    description:
      "Application de gestion des ventes construite avec Laravel et React : une interface réactive et une API structurée pour piloter l'activité au quotidien.",
    tags: ["Laravel", "React"],
    kind: "Application web",
    href: "https://github.com/henri-ahanto/expense-app",
    accent: "laravel",
    snippet: "$ php artisan serve",
  },
  {
    title: "Clone d'Apple",
    slug: "appleSiteClone",
    description:
      "Reproduction de l'expérience visuelle du site Apple en React : mise en page soignée, animations fluides et attention portée aux détails responsive.",
    tags: ["React", "Frontend"],
    kind: "Frontend",
    href: "https://github.com/henri-ahanto/appleSiteClone",
    accent: "python",
    snippet: "<AppleHero />",
  },
  {
    title: "Digital Life Academy",
    slug: "youtube",
    description:
      "Chaîne YouTube de formation en ligne : tutoriels et cours gratuits autour de l'informatique et du développement logiciel, partagés avec la communauté.",
    tags: ["YouTube", "Pédagogie"],
    kind: "Formation",
    href: "https://youtube.com/@digitallifeacademy911",
    accent: "php",
    snippet: "$ npm run teach",
  },
  {
    title: "ERP DrachTravel",
    slug: "erp-drach",
    description:
      "Logiciel d'assistance à la gestion d'une entreprise de voyage : centralisation des informations, suivi des activités et accompagnement des équipes au quotidien.",
    tags: ["ERP", "Gestion", "Sur mesure"],
    kind: "Projet privé",
    href: null,
    accent: "yellow",
    snippet: "$ erp:drach --sync",
  },
];

export type TimelineItem = {
  date: string;
  title: string;
  place: string;
  description?: string;
  type: "work" | "education";
  current?: boolean;
};

export const timeline: TimelineItem[] = [
  {
    date: "Sept. 2026 — Aujourd'hui",
    title: "Stage professionnel",
    place: "WaohDigital",
    description:
      "Stage professionnel chez WaohDigital, sur des projets de développement web.",
    type: "work",
    current: true,
  },
  {
    date: "Sept. 2025 — Août 2026",
    title: "Licence 3 — Informatique & Télécommunications",
    place: "INSTI, Lokossa",
    description:
      "Troisième année de licence en informatique et télécommunications.",
    type: "education",
  },
  {
    date: "Août — Sept. 2025",
    title: "Stage de fin de 2ᵉ année",
    place: "ICT-Consulting, Cotonou Godomey",
    description: "Stage en informatique et télécommunications.",
    type: "work",
  },
  {
    date: "2024 — 2025",
    title: "Licence 2 — Informatique & Télécommunications",
    place: "INSTI, Lokossa",
    type: "education",
  },
  {
    date: "Août — Sept. 2024",
    title: "Stage de fin de 1ʳᵉ année",
    place: "NTIC-Technologie, Lokossa",
    type: "work",
  },
  {
    date: "2023 — 2024",
    title: "Licence 1 — Informatique & Télécommunications",
    place: "INSTI, Lokossa",
    type: "education",
  },
];

export const diplomas = [
  { year: "2023", title: "BAC série F3", place: "Lycée Technique de Lokossa" },
  { year: "2023", title: "DT série F3", place: "Lycée Technique de Lokossa" },
  { year: "2022", title: "CAP série F3", place: "Lycée Technique de Lokossa" },
  { year: "2020", title: "BEPC", place: "Collège catholique de Lokossa" },
  { year: "2016", title: "CEP", place: "EPP Julien QUENUM, Lokossa" },
];

export const navLinks = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "projets", label: "Projets" },
  { id: "parcours", label: "Parcours" },
  { id: "contact", label: "Contact" },
];
