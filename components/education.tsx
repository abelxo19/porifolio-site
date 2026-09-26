import { Award, GraduationCap, ScrollText } from "lucide-react"
import SectionHeading from "@/components/decor/section-heading"
import FadeIn from "@/components/motion/fade-in"

const achievements = [
  {
    title: "Exceptional Academic Performance Award",
    institution: "Addis Ababa Science and Technology University (AASTU)",
    distinction: "3.93 GPA",
    description: "Received the university’s Exceptional Academic Performance Award for attaining a GPA of 3.93.",
    icon: Award,
  },
  {
    title: "Certificate & Letter of Recommendation",
    institution: "Prodigy Infotech",
    distinction: "Internship recognition",
    description: "Received a certificate of completion and a letter of recommendation following the web development internship.",
    icon: ScrollText,
  },
  {
    title: "Graduated with Great Honors",
    institution: "Addis Ababa Science and Technology University (AASTU)",
    distinction: "3.6 GPA",
    description: "Graduated with great honors from Addis Ababa Science and Technology University, earning a GPA of 3.6.",
    icon: GraduationCap,
  },
]

export default function Education() {
  return (
    <section id="education" aria-label="Education and recognition" className="section-space border-t border-border bg-secondary/25">
      <div className="site-container">
        <SectionHeading
          kicker="04 / Education & recognition"
          title="Learning, dedication, and recognition."
          description="Academic achievements and professional milestones along the way."
          align="left"
          className="mb-10"
        />
        <ul role="list" className="grid gap-5 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <li key={achievement.title} className="min-w-0">
              <FadeIn distance={12} className="h-full">
                <article className="flex h-full flex-col rounded-lg border border-border bg-card p-6 shadow-sm">
                  <div className="mb-6 flex flex-wrap items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary dark:text-indigo-400">
                      <achievement.icon aria-hidden="true" className="size-5" />
                    </span>
                    <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium">{achievement.distinction}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug">{achievement.title}</h3>
                  <p className="mt-2 text-sm font-medium leading-6 text-primary dark:text-indigo-400">{achievement.institution}</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{achievement.description}</p>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
