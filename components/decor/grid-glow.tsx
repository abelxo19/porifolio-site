import { cn } from "@/lib/utils"

interface GridGlowProps {
  className?: string
  variant?: "hero" | "section"
}

export default function GridGlow({ className, variant = "section" }: GridGlowProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div
        className={cn(
          "absolute rounded-full blur-[100px]",
          variant === "hero"
            ? "-top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 opacity-40"
            : "top-1/2 left-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 opacity-20",
        )}
        style={{
          background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)",
        }}
      />
      {variant === "hero" && (
        <>
          <div
            className="absolute right-[8%] top-[18%] h-64 w-64 rounded-full opacity-25 blur-[90px]"
            style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
          />
          <div
            className="absolute left-[6%] bottom-[10%] h-56 w-56 rounded-full opacity-20 blur-[90px]"
            style={{ background: "radial-gradient(circle, var(--foreground) 0%, transparent 70%)" }}
          />
        </>
      )}
    </div>
  )
}
