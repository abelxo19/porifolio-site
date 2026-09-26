import Image from "next/image"
import SectionHeading from "@/components/decor/section-heading"
import FadeIn from "@/components/motion/fade-in"
import { technologies } from "@/lib/skills-data"

const groups = [
  { name: "Frontend", categories: ["Frontend"], description: "Responsive interfaces with care for every detail." },
  { name: "Backend & data", categories: ["Backend", "Database", "Programming"], description: "The logic, APIs, and data behind the experience." },
  { name: "WordPress & Elementor", categories: ["CMS", "Page Builder"], description: "Custom websites, payment integration, and content management." },
  { name: "Tools & delivery", categories: ["Tools", "Version Control"], description: "Version control, deployment, and dependable delivery." },
]

export default function Skills() {
  return (
    <section id="skills" className="section-space border-t border-border">
      <div className="site-container">
        <SectionHeading kicker="05 / My toolkit" title="The right tools for the job." description="From a focused WordPress website to a complete web application." align="left" className="mb-10" />
        <div className="divide-y divide-border border-y border-border">
          {groups.map((group) => (
            <FadeIn key={group.name} distance={12} className="grid gap-5 py-7 md:grid-cols-[240px_1fr] md:gap-12">
              <div>
                <h3 className="text-base font-semibold">{group.name}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{group.description}</p>
              </div>
              <ul className="flex flex-wrap content-center gap-x-6 gap-y-5">
                {technologies.filter((tech) => group.categories.includes(tech.category)).map((tech) => (
                  <li key={tech.name} className="skill-item flex items-center gap-2.5">
                    <span className="relative size-6 shrink-0">
                      <Image
                        src={tech.logo}
                        alt=""
                        fill
                        sizes="24px"
                        className={"object-contain " + (["Next.js", "GitHub"].includes(tech.name) ? "dark:invert" : "")}
                      />
                    </span>
                    <span className="text-sm">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
