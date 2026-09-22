import { ArrowUp, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="site-container flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">&copy; {new Date().getFullYear()} Abel Atkelet. Built with care.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/abelxo19" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" className="inline-flex size-10 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"><Github className="size-4" /></a>
          <a href="https://www.linkedin.com/in/abel-atkelet-b36993282" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" className="inline-flex size-10 items-center justify-center rounded-md text-muted-foreground hover:bg-secondary hover:text-foreground"><Linkedin className="size-4" /></a>
          <a href="#home" className="inline-flex min-h-10 items-center gap-2 text-xs text-muted-foreground hover:text-foreground">Back to top <ArrowUp className="size-4" /></a>
        </div>
      </div>
    </footer>
  )
}
