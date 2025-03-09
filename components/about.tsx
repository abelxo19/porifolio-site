"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          {/* 3D Effect Image */}
          <motion.div
            className="relative md:h-[400px] overflow-hidden rounded-3xl transition-all duration-70"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -10 }}
            whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={400}
              height={400}
              className="hidden md:block md:ml-16"
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-4 transition-all duration-700"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 10 }}
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              About Me
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Passionate Developer & Designer
            </h2>
            <p className="text-muted-foreground md:text-lg">
              I&apos;m a full-stack developer with over 3 years of experience
              building web applications. I specialize in creating responsive,
              user-friendly interfaces with modern technologies like Next.js.
            </p>
            <p className="text-muted-foreground md:text-lg">
              My journey in web development started when I was in university,
              and since then, I&apos;ve worked on various projects to bring ideas
              to life. I&apos;m passionate about clean code, responsiveness,
              accessibility, and creating exceptional user experiences.
            </p>
            <p className="text-muted-foreground md:text-lg">
              When I&apos;m not coding, you can find me playing football, reading, or
              experimenting with new technologies.
            </p>

            {/* Resume Download Button */}
            <div className="flex gap-4 pt-4">
              <a href="/resume.pdf" download="Abel_Resume.pdf">
                <Button className="group">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
