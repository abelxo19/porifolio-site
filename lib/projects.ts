export type Project = {
  title: string
  description: string
  image: string
  tags: string[]
  primaryLink: string
  primaryLabel: string
  githubLink?: string
  problem?: string
  solution?: string
  impact?: string
}

export const projects: Project[] = [
  {
    title: "Islamic Seminary",
    description:
      "A content-rich seminary website with clear navigation, easy content management, and integrated payments.",
    image: "/Tisa.png",
    tags: ["WordPress", "Elementor", "CMS", "Website Management", "Payment Integration"],
    primaryLink: "https://islamicseminary.us",
    primaryLabel: "Visit Site",
    problem: "The seminary needed a content-rich public site that was easy to navigate and simple for staff to maintain.",
    solution: "Built a structured WordPress + Elementor site with clear navigation, custom pages, and integrated payments.",
    impact: "A polished, easy-to-maintain public presence for the seminary's programs and community.",
  },
  {
    title: "Dr. Tamara Henry",
    description:
      "A personal brand website with responsive Elementor layouts, approachable content, and a polished professional presence.",
    image: "/dr.png",
    tags: ["WordPress", "Elementor", "Professional Site", "Responsive UI"],
    primaryLink: "https://drtamarahenry.com/",
    primaryLabel: "Visit Site",
    problem: "Needed an approachable, mobile-friendly site to present a professional personal brand.",
    solution: "Designed and built responsive WordPress and Elementor page layouts that are simple to maintain.",
    impact: "A professional, mobile-responsive site that represents the brand clearly across devices.",
  },
  {
    title: "Simsbury Troop 1175",
    description:
      "A community website with organized information for members and visitors, built for easy updates by troop volunteers.",
    image: "/Troop1175.png",
    tags: ["WordPress", "Elementor", "Community Site", "Content Updates"],
    primaryLink: "https://simsburytroop1175.org",
    primaryLabel: "Visit Site",
    problem: "The troop needed an organized site where volunteers could update content without technical help.",
    solution: "Structured WordPress pages with practical layouts built for frequent, easy content updates.",
    impact: "A community site that stays current, maintained directly by troop organizers.",
  },
  {
    title: "EcoShop E-Commerce",
    description:
      "An online store with product search, wishlists, and secure Stripe checkout, built with Next.js and MongoDB.",
    image: "/eco.png",
    tags: ["Next.js", "MongoDB", "Stripe", "Kinde"],
    primaryLink: "#",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/my-eco-shop.git",
    problem: "Wanted to build a fast, full-featured e-commerce experience from scratch with real payments.",
    solution: "Built EcoShop with Next.js, MongoDB, and Stripe, adding wishlist, search, and secure checkout.",
    impact: "A fast, responsive shopping experience with a complete cart-to-checkout flow.",
  },
  {
    title: "Horror Fan Site",
    description:
      "An immersive home for original horror stories and curated film picks, with a custom content system and a distinctive visual identity.",
    image: "/haunt.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Supabase", "Kinde"],
    primaryLink: "https://horror-fan-site.vercel.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/horror-fan-site.git",
    problem: "Wanted a themed content site to showcase creative writing and curated media picks.",
    solution: "Built with Next.js, Prisma, and Supabase for content storage, styled with a dark, immersive theme.",
    impact: "A distinct, atmosphere-driven site that reflects a personal creative project.",
  },
  {
    title: "Landing Page",
    description: "A modern landing page website showcasing projects and skills with a clean, minimalist and responsive design.",
    image: "/makeit.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    primaryLink: "https://modern-landing-page-theta.vercel.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/modern-landing-page.git",
    problem: "Needed a lightweight, reusable landing page pattern for showcasing projects and skills.",
    solution: "Built a clean, minimalist, fully responsive landing page with Next.js, Tailwind CSS, and Framer Motion.",
    impact: "A reusable, modern landing page template with smooth motion and fast load times.",
  },
  {
    title: "AI Fitness Tracker",
    description:
      "A cloud-hosted fitness app that turns activity tracking into personalized insights with Gemini AI.",
    image: "/fitness.png",
    tags: ["React", "Firebase", "Gemini AI", "Google Cloud"],
    primaryLink: "https://fitness-track--fitness-tracker-458718.us-central1.hosted.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/abelxo19/fitness-track.git",
    problem: "Wanted to explore AI-assisted, cloud-hosted personal fitness tracking.",
    solution: "Built with React, Firebase, and Google Cloud, integrating Gemini AI for personalized insights.",
    impact: "A cloud-hosted app that turns tracked activity into personalized fitness insights.",
  },
  {
    title: "ConnectX E-Commerce",
    description:
      "A multi-tenant commerce platform for merchant onboarding, store management, analytics, and secure payments.",
    image: "/connect.png",
    tags: ["Next.js", "Django", "PostgreSQL", "Docker"],
    primaryLink: "https://connect-x-peach.vercel.app/",
    primaryLabel: "Demo",
    githubLink: "https://github.com/maajidAwol/ConnectX.git",
    problem: "Merchants needed a multi-tenant platform to onboard, manage stores, and process orders securely.",
    solution: "Built with Next.js, Django, and PostgreSQL to handle onboarding, store management, analytics, and payments.",
    impact: "A multi-tenant platform supporting merchant onboarding, order management, and secure payments.",
  },
]

export function getProjectActionKind(label: string): "visit" | "external" {
  return label.toLowerCase().includes("visit") ? "visit" : "external"
}
