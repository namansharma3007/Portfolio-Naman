'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Chrome } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of Project 1 and its key features.",
      technologies: ["React", "Node.js", "MongoDB"],
      color: "bg-gradient-to-br from-orange-300 to-orange-400",
      icon: <Chrome className="w-8 h-8" />,
    },
    {
      title: "Project 2",
      description: "An overview of Project 2 and what makes it special.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      color: "bg-gradient-to-br from-cyan-300 to-cyan-400",
      icon: <Github className="w-8 h-8" />,
    },
    {
      title: "Project 3",
      description: "Highlighting the main aspects and achievements of Project 3.",
      technologies: ["Angular", "Django", "MySQL"],
      color: "bg-gradient-to-br from-lime-300 to-lime-400",
      icon: <ExternalLink className="w-8 h-8" />,
    },
  ]

  return (
    <section id="projects" className="space-y-8 mt-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">My Creations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className={`${project.color} p-6 rounded-xl border-2 border-gray-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {project.icon}
              <h3 className="text-2xl lg:text-3xl font-bold ml-2 text-gray-800">{project.title}</h3>
            </div>
            <p className="text-lg mb-4">{project.description}</p>
            <div className="mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="text-sm font-semibold bg-white px-2 py-1 rounded-full inline-block mr-2 mb-2 border-2 border-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Button className="bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-lg transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none">
              Learn More
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects

