import { cn } from "@/lib/utils"
import FadeIn from "@/components/motion/fade-in"

interface SectionHeadingProps {
  kicker: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
}

export default function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <FadeIn
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
        {kicker}
      </span>
      <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-sm text-muted-foreground md:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  )
}
