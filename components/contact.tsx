"use client";

import type React from "react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { sendContactEmail } from "@/app/action/contact";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import FadeIn from "@/components/motion/fade-in";
import SectionHeading from "@/components/decor/section-heading";

const initialState = {
  error: null as string | null,
  success: null as string | null,
};

const contactDetails = [
  { icon: Mail, label: "Email", value: "abelaatkelet@gmail.com" },
  { icon: Phone, label: "Phone", value: "+251993861744" },
  { icon: MapPin, label: "Location", value: "Nairobi, Kenya" },
];

const formFields = [
  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
  { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
];

export default function Contact() {
  const [formState, setFormState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await sendContactEmail(formData);
      setFormState({
        error: response.error || null,
        success: response.success || null,
      });

      if (response.success) {
        e.currentTarget.reset();
      }
    } catch {
      setFormState({ error: null, success: null });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <SectionHeading
          kicker="Get In Touch"
          title="Let's Build Something"
          description="Have a project in mind or want to collaborate? Feel free to reach out!"
          className="mb-14"
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <FadeIn direction="left" className="space-y-6">
            <Card className="glass-panel border-border/60">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <detail.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{detail.label}</p>
                      <p className="font-medium">{detail.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="glow-border bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Let&apos;s work together</CardTitle>
                <CardDescription className="text-primary-foreground/80">
                  I&apos;m currently available for freelance work and collaborations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-primary-foreground/90">
                  Whether you need a website, web application, or consultation, I&apos;m here to help bring your ideas
                  to life with modern technologies and best practices.
                </p>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn direction="right">
            <Card className="glass-panel border-border/60">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AnimatePresence mode="wait">
                  {formState.success && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <Alert className="mb-4 bg-green-50 text-green-800 border-green-200 dark:bg-green-950/40 dark:text-green-300 dark:border-green-900">
                        <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        <AlertTitle>Success!</AlertTitle>
                        <AlertDescription>{formState.success}</AlertDescription>
                      </Alert>
                    </motion.div>
                  )}

                  {formState.error && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <Alert className="mb-4 bg-red-50 text-red-800 border-red-200 dark:bg-red-950/40 dark:text-red-300 dark:border-red-900">
                        <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                        <AlertTitle>Error</AlertTitle>
                        <AlertDescription>{formState.error}</AlertDescription>
                      </Alert>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {formFields.map((field) => (
                      <div className="space-y-2" key={field.name}>
                        <label htmlFor={field.name} className="text-sm font-medium">
                          {field.label}
                        </label>
                        <Input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input id="subject" name="subject" placeholder="What's this about?" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button type="submit" variant="glow" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
