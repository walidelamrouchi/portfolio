export interface NavLink {
  href: string;
  label: string;
  index: string;
}

export interface SocialLink {
  id: "email" | "github" | "linkedin";
  label: string;
  href: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  stack: string[];
  status: "progress" | "complete";
  statusLabel: string;
  image?: string;
  imageAlt: string;
  liveUrl?: string;
  repoUrl?: string;
  year: string;
}

export interface PickItem {
  id: string;
  title: string;
  note: string;
  href: string;
}

export interface SiteContent {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  location: string;
  nav: NavLink[];
  about: {
    titleLine1: string;
    titleLine2: string;
    body: string[];
    highlights: string[];
  };
  skillGroups: SkillGroup[];
  picks: PickItem[];
  projects: Project[];
  contact: {
    heading: string;
    subtitle: string;
    invite: string;
    email: string;
    phone?: string;
    socials: SocialLink[];
  };
}

export const content: SiteContent = {
  name: "Walid",
  shortName: "W",
  role: "Développeur fullstack",
  tagline: "Java / Spring Boot · React · PHP",
  location: "Tanger / Taza, Maroc",
  nav: [
    { href: "#top", label: "Accueil", index: "01" },
    { href: "#about", label: "À propos", index: "02" },
    { href: "#projects", label: "Projets", index: "03" },
    { href: "#contact", label: "Contact", index: "04" },
  ],
  about: {
    titleLine1: "Je transforme une vision",
    titleLine2: "en produit digital",
    body: [
      "Licence SMI 2025. Je construis des applications de bout en bout, avec une transition assumée vers le fullstack : Java, Spring Boot, React, et PHP / MySQL quand le projet l’exige.",
      "Mon PFE, FindIt, m’a appris à livrer un vrai produit (objets trouvés / perdus) plutôt qu’un TP. J’utilise des outils d’IA assistée — surtout Cursor — pour aller plus vite sans sacrifier la lisibilité du code.",
    ],
    highlights: ["Java", "Spring Boot", "React", "PHP", "MySQL", "Cursor"],
  },
  skillGroups: [
    {
      id: "backend",
      title: "Backend",
      items: ["Java", "Spring Boot", "PHP", "MySQL", "REST APIs"],
    },
    {
      id: "frontend",
      title: "Frontend",
      items: ["React.js", "JavaScript", "HTML/CSS", "Tailwind"],
    },
    {
      id: "tools",
      title: "Outils IA & Workflow",
      items: ["Cursor", "Bolt.new", "Claude"],
    },
  ],
  picks: [
    {
      id: "cursor",
      title: "Cursor",
      note: "Éditeur IA pour accélérer le quotidien.",
      href: "https://cursor.com",
    },
    {
      id: "mdn",
      title: "MDN Web Docs",
      note: "La référence HTML / CSS / JS, sans bruit.",
      href: "https://developer.mozilla.org",
    },
    {
      id: "roadmap",
      title: "roadmap.sh",
      note: "Cartes de compétences pour ne pas se perdre.",
      href: "https://roadmap.sh",
    },
    {
      id: "todo-pick",
      title: "À confirmer",
      // TODO: remplace par un cours, un repo GitHub ou une chaîne YouTube que tu recommandes vraiment.
      note: "TODO : ta 4e ressource (cours, repo ou chaîne).",
      href: "#picks",
    },
  ],
  projects: [
    {
      id: "findit",
      title: "FindIt",
      year: "2025",
      status: "complete",
      statusLabel: "Terminé",
      summary:
        "Gestion d’objets trouvés et perdus pour la Faculté Sidi Mohamed Ben Abdellah de Taza : déclarations, suivi, et interface claire pour étudiants et administration.",
      stack: ["React.js", "PHP", "MySQL"],
      imageAlt: "Placeholder FindIt — TODO : ajouter un vrai screenshot.",
    },
    {
      id: "eco-defense",
      title: "Eco-Défense",
      year: "2024",
      status: "complete",
      statusLabel: "Terminé",
      summary:
        "Jeu en Java pensé avec une architecture clean : règles séparées de l’affichage, pour rester lisible et extensible.",
      stack: ["Java"],
      imageAlt: "Placeholder Eco-Défense — TODO : ajouter un vrai screenshot.",
    },
    {
      id: "talim",
      title: "Ta'lim",
      year: "2025",
      status: "progress",
      statusLabel: "En cours",
      summary:
        "Tracker Excel / suivi pédagogique. TODO : préciser s’il s’agit du tracker Ta'lim ou d’un projet Spring Boot en cours, et coller le vrai résumé.",
      stack: ["Excel", "Spring Boot"],
      imageAlt: "Placeholder Ta'lim — TODO : ajouter un vrai screenshot.",
    },
  ],
  contact: {
    heading: "Parlons-en",
    subtitle: "Un projet, un stage, ou juste une question technique.",
    invite: "Écris-moi : je réponds dès que je peux, sans discours générique.",
    // TODO: remplace par ton email réel
    email: "walid@example.com",
    socials: [
      { id: "email", label: "Email", href: "mailto:walid@example.com" },
      // TODO: URL GitHub réelle
      { id: "github", label: "GitHub", href: "https://github.com" },
      // TODO: URL LinkedIn réelle
      { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com" },
    ],
  },
};
