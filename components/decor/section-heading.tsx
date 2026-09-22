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
        "flex min-w-0 flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span className="section-kicker inline-flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
        {kicker}
      </span>
      <h2 className="font-display text-3xl font-semibold leading-tight sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-xl text-sm leading-7 text-muted-foreground sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </FadeIn>
  )
}
