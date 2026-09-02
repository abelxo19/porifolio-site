import { Github, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative border-t border-border/60 bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="#home" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <span className="font-display text-sm font-bold text-primary-foreground">AA</span>
              </div>
              <span className="font-display text-xl font-semibold">Abel Atkelet</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Made with ❤️ by Abel Atkelet!
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="https://github.com/abelxo19"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/abel-atkelet-b36993282"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
