'use client'

import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { TypeIcon as type, LucideIcon, User, Cpu, FileCode, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const updateNavbarWidth = useCallback(() => {
    const navbar = document.querySelector('nav')
    if (navbar) {
      document.body.style.setProperty('--navbar-width', `${navbar.clientWidth}px`)
    }
  }, [])

  useEffect(() => {
    updateNavbarWidth()
    window.addEventListener('resize', updateNavbarWidth)
    return () => window.removeEventListener('resize', updateNavbarWidth)
  }, [updateNavbarWidth])

  useEffect(() => {
    updateNavbarWidth()
  }, [isOpen, updateNavbarWidth])

  return (
    <nav 
      className={`fixed top-0 left-0 h-full ${isOpen ? 'w-64' : 'w-20'} transition-all duration-300 z-50 overflow-hidden h-screen`}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="h-full bg-purple-200 border-r-2 border-gray-800 shadow-[4px_0px_0px_0px_rgba(0,0,0,1)] p-4 flex flex-col items-center">
        <motion.div 
          className={`text-3xl font-bold text-gray-800 mb-8 ${isOpen ? 'w-32 h-32' : 'w-12 h-12'} bg-yellow-300 rounded-full flex items-center justify-center border-2 border-gray-800`}
          animate={{ width: isOpen ? 128 : 48, height: isOpen ? 128 : 48 }}
        >
          {isOpen ? 'NS' : 'N'}
        </motion.div>
        <div className="space-y-4 w-full">
          <NavItem href="#about" label="About" icon={User} color="bg-blue-300" isOpen={isOpen}/>
          <NavItem href="#skills" label="Skills" icon={Cpu} color="bg-green-300" isOpen={isOpen} />
          <NavItem href="#projects" label="Projects" icon={FileCode} color="bg-orange-300" isOpen={isOpen} />
          <NavItem href="#contact" label="Contact" icon={Phone} color="bg-pink-300" isOpen={isOpen} />
        </div>
      </div>
    </nav>
  )
}

const NavItem = ({ href, label, icon: Icon, color, isOpen }: { href: string; label: string; icon: LucideIcon; color: string; isOpen: boolean }) => (
  <Link 
    href={href} 
    className={`flex items-center ${isOpen ? 'justify-start' : 'justify-center'} text-xl font-bold text-gray-800 hover:bg-white px-4 py-2 rounded-lg border-2 border-gray-800 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform transition-all duration-300 hover:translate-x-1 hover:translate-y-1 hover:shadow-none ${color} overflow-hidden`}
  >
    <Icon className={`flex-shrink-0 w-6 h-6 ${isOpen ? 'mr-2' : ''}`} />
    {isOpen && <span className="truncate">{label}</span>}
  </Link>
)

export default Navbar

