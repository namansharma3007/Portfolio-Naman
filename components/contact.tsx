"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Linkedin, Github } from "lucide-react";
import { toast } from "@/hooks/use-toast";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {

  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if(!response.ok){
        toast({
          title: data.message,
          variant: "destructive",
          duration: 2000,
        });
      }
      toast({
        title: data.message,
        description: "You will be contacted soon",
        variant: "success",
        duration: 2000,
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (_error) {
      toast({
        title: "Internal Server Error! 😢",
        description: "Please try again later.",
        variant: "destructive",
        duration: 2000,
      })
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="bg-gradient-to-br from-teal-200 to-teal-300 p-6 lg:p-10 rounded-3xl border-2 border-gray-800 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-16 max-w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12">
        Let&apos;s Connect!
      </h2>
      <form className="space-y-6 max-w-2xl mx-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="text-lg lg:text-xl p-4 rounded-lg border-2 border-gray-800 focus:ring-4 focus:ring-blue-300 bg-blue-200"
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="text-lg lg:text-xl p-4 rounded-lg border-2 border-gray-800 focus:ring-4 focus:ring-green-300 bg-green-200"
            required
          />
        </div>
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full text-lg lg:text-xl p-4 rounded-lg border-2 border-gray-800 focus:ring-4 focus:ring-yellow-300 bg-yellow-200"
          required
          rows={6}
        />
        <Button
          type="submit"
          className="w-full bg-red-400 hover:bg-red-500 text-white md:text-xl text-lg lg:text-2xl font-bold py-4 rounded-lg transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none"
          disabled={isSubmitting}
        >
          <Send className="mr-2" />
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
      <div className="mt-12 text-center">
        <p className="text-xl lg:text-2xl font-bold mb-4">
          Or reach out directly:
        </p>
        <p className="text-lg lg:text-xl break-words">
          namansharma3007c@gmail.com
        </p>
        <div className="mt-6 justify-center items-center flex flex-wrap gap-2">
          <a
            href="https://www.linkedin.com/in/naman-sharma-b46950226/"
            target="_blank"
          >
            <Button className="bg-blue-400 hover:bg-blue-500 text-white transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none">
              <Linkedin className="mr-2" />
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/namansharma3007" target="_blank">
            <Button className="bg-gray-700 hover:bg-gray-800 text-white transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] hover:shadow-none">
              <Github className="mr-2" />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
