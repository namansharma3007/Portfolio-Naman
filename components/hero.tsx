"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const resume_link = "https://drive.google.com/file/d/1OCqU368WsZDwhVgSlwkKphnOsgcawkFH/view?usp=sharing";

const Hero = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-br from-yellow-200 to-orange-200 p-6 lg:p-10 rounded-3xl border-2 border-gray-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-full"
    >
      <motion.div
        className="space-y-6 mb-8 lg:mb-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-800">
          Naman Sharma
        </h1>
        <h2 className="text-2xl lg:text-4xl font-semibold text-blue-600">
          Software Engineer
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 max-w-md">
          Turning coffee into code and ideas into innovation—one line at a time.
        </p>
        <Button className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-3 px-6 rounded-lg md:text-xl text-lg transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none">
          <a
            href={resume_link}
            target="_blank"
            className="flex items-center md:text-xl text-lg"
          >
            <Download className="mr-2" />
            Download Resume
          </a>
        </Button>
      </motion.div>
      <motion.div
        className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full border-4 border-gray-800 flex items-center justify-center overflow-hidden"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <span className="text-6xl">👨‍💻</span>
      </motion.div>
    </section>
  );
};

export default Hero;
