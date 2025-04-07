"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Vote, CircleDollarSign } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Poll-Chain",
      description:
        "The next generation of decentralized polling powered by blockchain technology. Your voice matters and your vote is immutable.",
      technologies: [
        "Vite.js",
        "Express.js",
        "MongoDB",
        "TailwindCSS",
        "Hardhat",
        "Ether.js",
        "JsonWebToken (JWT)",
        "Node.js",
      ],
      color: "bg-gradient-to-br from-cyan-300 to-cyan-400",
      link: "https://github.com/namansharma3007/Poll-Chain-frontend",
      icon: <Vote className="w-8 h-8" />,
    },
    {
      title: "Equi-Share",
      description:
        "Divide expenses fairly among friends with just a few taps. Create and manage multiple groups for different occasions or roommates. Get a clear overview of who owes what with detailed reports and summaries.",
      technologies: [
        "Next.js",
        "PostgreSQL",
        "TailwindCSS",
        "Prisma",
        "Shadcn/UI",
        "Jsonwebtoken (JWT)",
      ],
      color: "bg-gradient-to-br from-orange-300 to-orange-400",
      link: "https://github.com/namansharma3007/Equi-share",
      icon: <CircleDollarSign className="w-8 h-8" />,
    }
  ];

  return (
    <section id="projects" className="space-y-8 mt-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
        My Creations
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`${project.color} p-6 rounded-xl border-2 border-gray-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none flex flex-col justify-between`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div>
              <div className="flex items-center mb-4">
                {project.icon}
                <h3 className="text-2xl lg:text-3xl font-bold ml-2 text-gray-800">
                  {project.title}
                </h3>
              </div>
              <p className="text-lg mb-4">{project.description}</p>
            </div>

            <div>
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
                <a href={project.link} target="_blank">
                  Learn More
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
