"use client";

import type React from "react";
import {  useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { sendContactEmail } from "@/app/action/contact";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const initialState = {
  error: null as string | null,
  success: null as string | null,
};

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

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
      setFormState({ error: "Something went wrong. Please try again.", success: null });
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">abelaatkelet@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+251-993861744</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
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
          </div>

          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I&apos;ll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {formState.success && (
                  <Alert className="mb-4 bg-green-50 text-green-800 border-green-200">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>{formState.success}</AlertDescription>
                  </Alert>
                )}

                {formState.error && (
                  <Alert className="mb-4 bg-red-50 text-red-800 border-red-200">
                    <AlertCircle className="h-4 w-4 text-red-600" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{formState.error}</AlertDescription>
                  </Alert>
                )}

                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Input name="name" placeholder="Name" required />
                    </div>
                    <div className="space-y-2">
                      <Input name="email" placeholder="Email" type="email" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Input name="subject" placeholder="Subject" required />
                  </div>
                  <div className="space-y-2">
                    <Textarea name="message" placeholder="Your message" className="min-h-[120px]" required />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
