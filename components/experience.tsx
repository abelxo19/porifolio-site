import SectionHeading from "@/components/decor/section-heading"
import FadeIn from "@/components/motion/fade-in"

const experiences = [
  {
    company: "Prodigy Infotech",
    role: "Web Development Intern",
    start: "2023-07",
    end: "2023-08",
    startLabel: "Jul 2023",
    endLabel: "Aug 2023",
    remote: false,
    highlights: [
      "Completed five web development projects, ranging from basic to intermediate complexity, within assigned timelines.",
      "Strengthened CSS and JavaScript skills through hands-on development.",
      "Received a certificate of completion and a letter of recommendation.",
    ],
  },
  {
    company: "Afronex Techhub",
    role: "Full-Stack Developer Intern",
    start: "2024-06",
    end: "2024-09",
    startLabel: "Jun 2024",
    endLabel: "Sep 2024",
    remote: false,
    highlights: [
      "Built 3+ website clones using React, Next.js, and Tailwind CSS, developing practical UI/UX design skills.",
      "Developed an e-commerce application and a note-taking SaaS application with Stripe payments and database integration.",
      "Led React.js tutorials for 10 electrical engineering students.",
    ],
  },
  {
    company: "Quantum Pulse Consulting",
    role: "Full-Stack Developer",
    start: "2025-07",
    end: "2026-08",
    startLabel: "Jul 2025",
    endLabel: "Aug 2026",
    remote: true,
    highlights: [
      "Built and maintained 5+ websites using Frappe, React, and WordPress.",
      "Used Gemini and AI agents to support website development and maintenance workflows.",
    ],
  },
  {
    company: "Revelo Talent Corporation",
    role: "LLM Trainer",
    start: "2026-01",
    end: "2026-03",
    startLabel: "Jan 2026",
    endLabel: "Mar 2026",
    remote: true,
    highlights: [
      "Evaluated pull requests, reviewed AI-generated transcripts, and assessed code specifications against defined quality metrics.",
      "Contributed evaluations to improve LLM training data and response quality.",
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section-space border-t border-border" aria-label="Work experience">
      <div className="site-container">
        <SectionHeading
          kicker="03 / Experience"
          title="Where I’ve put my skills to work."
          description="From web development internships to full-stack delivery and AI evaluation."
          align="left"
          className="mb-10 md:mb-14"
        />

        <ol className="relative mx-auto max-w-5xl space-y-8 before:absolute before:inset-y-0 before:left-2 before:w-px before:bg-primary/25 md:space-y-6 md:before:left-1/2" role="list">
          {experiences.map((experience, index) => (
            <li key={experience.company} className="relative pl-9 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
              <span aria-hidden="true" className="absolute left-2 top-9 z-10 size-2.5 -translate-x-1/2 rounded-full bg-primary ring-4 ring-background md:left-1/2" />
              <span aria-hidden="true" className={`absolute left-2 top-10 h-px w-7 bg-primary/25 md:w-8 ${index % 2 === 0 ? "md:left-1/2" : "md:left-auto md:right-1/2"}`} />

              <FadeIn distance={12} className={index % 2 === 0 ? "min-w-0 md:col-start-2" : "min-w-0 md:col-start-1"}>
                <article className="rounded-lg border border-border bg-card p-5 shadow-sm sm:p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex flex-wrap items-center gap-x-1 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-foreground">
                      <time dateTime={experience.start}>{experience.startLabel}</time>
                      <span aria-hidden="true">–</span><span className="sr-only">to</span>
                      <time dateTime={experience.end}>{experience.endLabel}</time>
                    </span>
                    {experience.remote && <span className="text-xs text-muted-foreground">Remote</span>}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold leading-snug">{experience.company}</h3>
                  <p className="mt-1 text-sm font-medium text-primary dark:text-indigo-400">{experience.role}</p>
                  <ul className="mt-4 space-y-2.5" role="list">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2.5 text-sm leading-6 text-muted-foreground">
                        <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
