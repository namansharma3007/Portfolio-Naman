"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";

export default function Home() {
  const [navbarWidth, setNavbarWidth] = useState(80); // Initial closed width (20px * 4)

  useEffect(() => {
    const handleResize = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        setNavbarWidth(navbar.clientWidth);
      }
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Navbar />
      <main
        className="flex-1 p-4 lg:p-8 transition-all duration-300 overflow-x-hidden"
        style={{
          marginLeft: `${navbarWidth}px`,
          width: `calc(100% - ${navbarWidth}px)`,
          maxWidth: "100vw",
          overflowX: "hidden",
        }}
      >
        <div className="space-y-20">
          <Hero />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}
