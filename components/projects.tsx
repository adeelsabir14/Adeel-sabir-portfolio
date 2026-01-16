"use client"

import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { AnimatedCard } from "./aceternity/animated-card"

export default function Projects() {
  const projects = [
    {
      title: "DYDO Beverage E-Commerce Platform",
      description:
        "Full-featured e-commerce platform for beverage shopping with product catalog, shopping cart, and seamless checkout flow.",
      technologies: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "REST APIs"],
      link: "#",
      github: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Complaint Management System (CMS)",
      description:
        "Dynamic complaint tracking system enabling customers to submit complaints and admins to manage and resolve them efficiently.",
      technologies: ["React", "Redux", "Node.js", "JavaScript", "REST APIs"],
      link: "#",
      github: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "E-Document Archive System",
      description:
        "Comprehensive document management system with advanced search, file categorization, and secure storage capabilities.",
      technologies: ["React", "Next.js", "Node.js", "Tailwind CSS", "State Management"],
      link: "#",
      github: "#",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Technical Service Website",
      description:
        "Service request submission platform with real-time status tracking and responsive mobile-first design for service management.",
      technologies: ["React", "Angular", "HTML5", "CSS3", "JavaScript"],
      link: "#",
      github: "#",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Responsive Web Redesign",
      description:
        "Complete redesign and modernization of web interfaces with focus on user experience, accessibility, and performance optimization.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design", "UI/UX"],
      link: "#",
      github: "#",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "API Integration & State Management",
      description:
        "Robust RESTful API integration with Redux and Context API for efficient state handling and data synchronization across applications.",
      technologies: ["React", "Redux", "Context API", "REST APIs", "Node.js"],
      link: "#",
      github: "#",
      gradient: "from-teal-500 to-cyan-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-balance"
        >
          Featured Projects
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, idx) => (
            <AnimatedCard key={project.title} className="h-full">
              <div className="group relative p-6 bg-card rounded-lg border border-border hover:border-primary transition-all hover:shadow-xl h-full overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                <div className="relative z-10">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.a
                      whileHover={{ x: 4 }}
                      href={project.link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                    >
                      View Live
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={project.github}
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
