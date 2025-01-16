"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-br from-teal-200 to-teal-300 p-6 lg:p-10 rounded-3xl border-2 border-gray-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-16 max-w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
        Let's Connect!
      </h2>
      <form className="space-y-6 max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="text"
            placeholder="Your Name"
            className="text-lg lg:text-xl p-4 rounded-lg border-2 border-gray-800 focus:ring-4 focus:ring-blue-300 bg-blue-200"
            required
          />
          <Input
            type="email"
            placeholder="Your Email"
            className="text-lg lg:text-xl p-4 rounded-lg border-2 border-gray-800 focus:ring-4 focus:ring-green-300 bg-green-200"
            required
          />
        </div>
        <Textarea
          placeholder="Your Message"
          className="w-full text-lg lg:text-xl p-4 rounded-lg border-2 border-gray-800 focus:ring-4 focus:ring-yellow-300 bg-yellow-200"
          required
          rows={6}
        />
        <Button className="w-full bg-red-400 hover:bg-red-500 text-white md:text-xl text-lg lg:text-2xl font-bold py-4 rounded-lg transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none">
          <Send className="mr-2" />
          Send Message
        </Button>
      </form>
      <div className="mt-12 text-center">
        <p className="text-xl lg:text-2xl font-bold mb-4">
          Or reach out directly:
        </p>
        <p className="text-lg lg:text-xl">namansharma3007c@gmail.com</p>
        <div className="mt-6 justify-center items-center flex flex-wrap gap-2">
          <Button className="bg-blue-400 hover:bg-blue-500 text-white transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none">
            <Linkedin className="mr-2" />
            <a
              href="https://www.linkedin.com/in/naman-sharma-b46950226/"
              target="_blank"
            >
              LinkedIn
            </a>
          </Button>
          <Button className="bg-gray-700 hover:bg-gray-800 text-white transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none">
            <Github className="mr-2" />
            <a href="https://github.com/namansharma3007" target="_blank">
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
