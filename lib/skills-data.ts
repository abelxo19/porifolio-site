export type Technology = {
  name: string
  logo: string
  category: string
  preserveColor?: boolean
}

export const technologies: Technology[] = [
  {
    name: "React",
    logo: "/tech/react.svg",
    category: "Frontend",
  },
  {
    name: "Next.js",
    logo: "/tech/next.svg",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    logo: "/tech/typescript.png",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    logo: "/tech/javascript.svg",
    category: "Frontend",
  },
  {
    name: "HTML",
    logo: "/tech/html.svg",
    category: "Frontend",
  },
  {
    name: "CSS",
    logo: "/tech/css.svg",
    category: "Frontend",
  },
  {
    name: "WordPress",
    logo: "/tech/wordpress.svg",
    category: "CMS",
    preserveColor: true,
  },
  {
    name: "Elementor",
    logo: "/tech/elementor.svg",
    category: "Page Builder",
    preserveColor: true,
  },
  {
    name: "Node.js",
    logo: "/tech/nodejs.svg",
    category: "Backend",
  },
  {
    name: "MySQL",
    logo: "/tech/mysql.svg",
    category: "Database",
  },
  {
    name: "PostgreSQL",
    logo: "/tech/postgresql.svg",
    category: "Database",
  },
  {
    name: "Tailwind CSS",
    logo: "/tech/tailwind.svg",
    category: "Frontend",
  },
  {
    name: "Django",
    logo: "/tech/django2.svg",
    category: "Backend",
  },
  {
    name: "Python",
    logo: "/tech/python.png",
    category: "Backend",
  },
  {
    name: "C++",
    logo: "/tech/cpp.svg",
    category: "Programming",
  },
  {
    name: "Git",
    logo: "/tech/git.svg",
    category: "Tools",
  },
  {
    name: "GitHub",
    logo: "/tech/github.svg",
    category: "Version Control",
  },
]
