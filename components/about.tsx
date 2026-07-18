"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
    <section id="about" className="py-11 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="relative min-h-[320px] overflow-hidden rounded-xl bg-secondary/40 shadow-sm md:min-h-[430px]"
            initial={{ opacity: 0, x: -24, scale: 0.98 }}
            animate={
              isVisible
                ? { opacity: 1, x: 0, scale: 1, y: [0, -6, 0] }
                : { opacity: 0, x: -24, scale: 0.98, y: 0 }
            }
            whileHover={{ rotateY: 4, rotateX: 2, scale: 1.02 }}
            transition={{
              opacity: { duration: 0.6 },
              x: { duration: 0.6 },
              scale: { duration: 0.6 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src="/hero.png"
              alt="Abel Atkelet"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
              priority
            />
          </motion.div>

          {/* About Content */}
          <motion.div
            className="space-y-4 transition-all duration-700"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 24 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              About Me
            </div>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
              Passionate Developer & Designer
            </h2>
            <p className="text-muted-foreground text-sm md:text-lg">
              I&apos;m a full-stack developer with over 3 years of experience
              building web applications. I specialize in creating responsive,
              user-friendly interfaces with modern technologies like Next.js.
            </p>
            <p className="text-muted-foreground text-sm md:text-lg">
              My journey in web development started when I was in university,
              and since then, I&apos;ve worked on various projects to bring ideas
              to life. I&apos;m passionate about clean code, responsiveness,
              accessibility, and creating exceptional user experiences.
            </p>
            <p className="text-muted-foreground text-sm md:text-lg">
              When I&apos;m not coding, you can find me playing football, reading, or
              experimenting with new technologies.
            </p>

            {/* Resume Download Button 
            <div className="flex gap-4 pt-4">
              <a 
                href="/resume.pdf" 
                download="Abel_Resume.pdf"
                className="inline-block"
                aria-label="Download Resume"
                onClick={() => {
                  console.log('Resume download initiated');
                }}
              >
                <Button className="group">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
                  Download Resume
                </Button>
              </a>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
