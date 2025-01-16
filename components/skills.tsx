'use client'

import { motion } from 'framer-motion'
import { Code, Database, Server, Globe, Cpu } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
      color: "bg-gradient-to-br from-blue-300 to-blue-400",
      icon: <Code className="w-8 h-8" />,
    },
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "Vite.js", "TailwindCSS", "Bootstrap", "Redux.js"], 
      color: "bg-gradient-to-br from-green-300 to-green-400",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "WebSockets", "NextAuth", "Prisma", "Jsonwebtoken (JWT)"],
      color: "bg-gradient-to-br from-yellow-300 to-yellow-400",
      icon: <Server className="w-8 h-8" />,
    },
    {
      category: "Databases",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Firebase"],
      color: "bg-gradient-to-br from-pink-300 to-pink-400",
      icon: <Database className="w-8 h-8" />,
    },
    {
      category: "DevOps",
      skills: ["Docker", "GitHub", "Git"],
      color: "bg-gradient-to-br from-purple-300 to-purple-400",
      icon: <Cpu className="w-8 h-8" />,
    },
  ]

  return (
    <section id="skills" className="space-y-8 mt-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">My Superpowers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={index} 
            className={`${category.color} p-6 rounded-xl border-2 border-gray-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-2xl lg:text-3xl font-bold ml-2 text-gray-800">{category.category}</h3>
            </div>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li 
                  key={skillIndex} 
                  className="text-lg lg:text-xl font-semibold bg-white px-3 py-1 rounded-full inline-block mr-2 mb-2 border-2 border-gray-800"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

