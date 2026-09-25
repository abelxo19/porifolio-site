"use client"

import type React from "react"
import { useState } from "react"
import { ArrowUpRight, Mail, Phone, MapPin, Send, LoaderCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/app/action/contact"
import FadeIn from "@/components/motion/fade-in"
import SectionHeading from "@/components/decor/section-heading"

const contactDetails = [
  { icon: Mail, label: "Email", value: "abelaatkelet@gmail.com", href: "mailto:abelaatkelet@gmail.com" },
  { icon: Phone, label: "Phone", value: "+251993861744", href: "tel:+251993861744" },
  { icon: MapPin, label: "Based in", value: "Addis Ababa, Ethiopia", href: undefined },
]

export default function Contact() {
  const [formState, setFormState] = useState<{ error: string | null; success: string | null }>({ error: null, success: null })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (isSubmitting) return
    const form = event.currentTarget
    const formData = new FormData(form)
    setIsSubmitting(true)
    setFormState({ error: null, success: null })

    try {
      const response = await sendContactEmail(formData)
      setFormState({ error: response.error || null, success: response.success || null })
      if (response.success) form.reset()
    } catch {
      setFormState({ error: "Something went wrong. Please try again or email me directly.", success: null })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-space border-t border-border bg-secondary/25">
      <div className="site-container grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading kicker="05 / Get in touch" title="Have something in mind?" description="I'd love to hear about it. Available for freelance projects and collaborations." align="left" />
          <FadeIn className="mt-8">
            <dl className="space-y-6">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-4">
                  <detail.icon className="mt-1 size-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0">
                    <dt className="text-xs text-muted-foreground">{detail.label}</dt>
                    <dd className="mt-1 text-sm font-medium">
                      {detail.href ? (
                        <a href={detail.href} className="inline-flex min-h-8 items-center gap-2 break-all hover:text-primary">
                          {detail.value}<ArrowUpRight className="size-3.5 shrink-0" />
                        </a>
                      ) : detail.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </FadeIn>
        </div>

        <FadeIn>
          <form className="space-y-5" onSubmit={handleSubmit} aria-label="Send a message" aria-busy={isSubmitting}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input id="name" name="name" autoComplete="name" placeholder="Your name" className="h-11 bg-background" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" className="h-11 bg-background" required />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">Subject</label>
              <Input id="subject" name="subject" placeholder="What's the project?" className="h-11 bg-background" required />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <Textarea id="message" name="message" placeholder="Tell me a little about what you have in mind..." className="min-h-36 resize-y bg-background" required />
            </div>
            <div aria-live="polite">
              {formState.success && <p role="status" className="text-sm text-emerald-700 dark:text-emerald-400">{formState.success}</p>}
              {formState.error && <p role="alert" className="text-sm text-red-600 dark:text-red-400">{formState.error}</p>}
            </div>
            <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-md bg-foreground text-background hover:bg-foreground/85 sm:w-auto">
              {isSubmitting ? <LoaderCircle className="size-4 motion-safe:animate-spin" /> : <Send className="size-4" />}
              {isSubmitting ? "Sending..." : "Send message"}
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
