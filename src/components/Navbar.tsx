"use client"

import React, { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const navLinks = [
  { name: "ABOUT ME", href: "/" },
  { name: "PORTFOLIO", href: "/portfolio" },
  { name: "CONTACT", href: "/contact" }
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="fixed top-0 lg:mt-[30px] left-0 w-full z-50">
      <nav className=" lg:max-w-4xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 bg-black/65 text-white shadow-md lg:rounded-3xl">
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-center py-2">
          <div className="flex items-center">
            <ul className="flex space-x-32">
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  whileHover={{ scale: 1.05 }}
                  className={`relative px-4 py-2 rounded-2xl ${
                    pathname === link.href
                      ? "text-black bg-white"
                      : "text-white"
                  }`}
                >
                  <Link href={link.href}>{link.name}</Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center py-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden  text-white backdrop-blur-md rounded-b-lg px-6 py-4 space-y-4 h-screen w-full flex flex-col items-center"
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  whileTap={{ scale: 0.95 }}
                  className={`block px-4 py-1 rounded-3xl transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-white text-black"
                      : "text-white"
                  }`}
                >
                  <Link href={link.href} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
