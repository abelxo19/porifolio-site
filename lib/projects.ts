export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  primaryLink: string
  primaryLabel: string
  githubLink?: string
}

export const projects: Project[] = [
  {
    title: "Islamic Seminary Website",
    description:
      "WordPress website experience supporting a content-rich seminary presence with clear navigation, structured pages, and a polished public-facing experience.",
    image: "/Tisa.png",
    tags: ["WordPress", "Elementor", "CMS", "Website Management", "Payment Integration"],
    primaryLink: "https://islamicseminary.us",
    primaryLabel: "Visit Site",
  },
  {
    title: "Dr. Tamara Henry Website",
    description:
      "WordPress and Elementor site work for a professional brand, balancing approachable content presentation, mobile responsiveness, and maintainable page layouts.",
    image: "/dr.png",
    tags: ["WordPress", "Elementor", "Professional Site", "Responsive UI"],
    primaryLink: "https://drtamarahenry.com/",
    primaryLabel: "Visit Site",
  },
  {
    title: "Simsbury Troop 1175 Website",
    description:
      "Community-focused WordPress website experience with organized content, easy updates, and practical page structures for visitors and members.",
    image: "/Troop1175.png",
    tags: ["WordPress", "Elementor", "Community Site", "Content Updates"],
    primaryLink: "https://simsburytroop1175.org",
    primaryLabel: "Visit Site",
  },
  {
    title: "E-Commerce Platform",
    description:
      "EcoShop is a Next.js-powered e-commerce platform with wishlist, search, and secure Stripe payments, delivering a fast, responsive, and smooth shopping experience.",
    image: "/eco.png",
    tags: ["Nextjs.js", "MongoDB", "Stripe", "kinde"],
    primaryLink: "#",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/my-eco-shop.git",
  },
  {
    title: "Horror Fan Site",
    description:
      "A collection of my best horror-inspired stories and top horror movie and series picks. Dark, eerie, and thrilling, step into my world of creativity and fear.",
    image: "/haunt.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "kinde"],
    primaryLink: "https://horror-fan-site.vercel.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/horror-fan-site.git",
  },
  {
    title: "Landing Page",
    description: "A modern landing page website showcasing projects and skills with a clean, minimalist and responsive design.",
    image: "/landing.png",
    tags: ["Nextjs", "Tailwind CSS", "Framer Motion"],
    primaryLink: "https://modern-landing-page-theta.vercel.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/modern-landing-page.git",
  },
  {
    title: "AI-Powered Cloud-Based Fitness-Tracker Web App",
    description:
      "A fitness tracker web app powered by AI, leveraging cloud-based technologies to provide personalized fitness insights and progress tracking.",
    image: "/fitness.png",
    tags: ["React", "Firebase", "GeminiAI", "GoogleCloud"],
    primaryLink: "https://fitness-track--fitness-tracker-458718.us-central1.hosted.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/fitness-track.git",
  },
  {
    title: "ConnectX - E-Commerce Platform",
    description:
      "ConnectX is a multi-tenant e-commerce platform for merchant onboarding, store management, analytics, orders, and secure payment integration.",
    image: "/connect.png",
    tags: ["Next.js", "Django", "PostgreSQL", "Docker"],
    primaryLink: "https://connect-x-peach.vercel.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/maajidAwol/ConnectX.git",
  },
]

export function getProjectActionKind(label: string): "visit" | "external" {
  return label.toLowerCase().includes("visit") ? "visit" : "external"
}
