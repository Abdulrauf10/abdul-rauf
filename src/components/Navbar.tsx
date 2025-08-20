"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  const menuLinks = [
    { label: "Home", path: "/" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" }
  ]

  return (
    <>
      {!isOpen && (
        <div className="menu-bar fixed top-0 left-0 w-full p-6 flex justify-between items-center z-[999] bg-white text-black shadow">
          <div className="menu-logo">
            <Link
              href="/"
              className="text-xl font-bold cursor-pointer"
              target="_blank"
            >
              Home
            </Link>
          </div>

          <div className="flex gap-4 items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black cursor-pointer"
            >
              Menu
            </button>
          </div>
        </div>
      )}

      {/* Backdrop - Only visible when menu is open */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop click to close */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Overlay Menu with Shadow */}
            <motion.div
              className="menu-overlay fixed top-0 left-0 w-full h-screen bg-black p-6 z-40 flex flex-col justify-between overflow-y-auto text-white shadow-2xl"
              initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
              transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              {/* Header */}
              {isOpen && (
                <div className="flex justify-between items-start w-full">
                  <div className="menu-logo">
                    <Link
                      onClick={() => setIsOpen(!isOpen)}
                      href={"/"}
                      className="text-2xl font-bold"
                    >
                      Home
                    </Link>
                  </div>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-2xl cursor-pointer"
                  >
                    &times;
                  </button>
                </div>
              )}

              {/* Main Links */}
              <motion.div
                initial={{ y: 75 }}
                animate={{ y: 0 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                className="flex-1 flex flex-col justify-center px-4"
              >
                <nav className="menu-links flex flex-col gap-8 text-3xl sm:text-4xl font-semibold">
                  {menuLinks.map((data, idx) => (
                    <motion.div
                      key={idx}
                      className="menu-link-item"
                      whileHover={{ color: "#fca311", y: -10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className="menu-link-item-holder"
                        initial={{ y: 75 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      >
                        <Link
                          href={data.path}
                          className="menu-link"
                          onClick={() => setIsOpen(false)}
                        >
                          {data.label}
                        </Link>
                      </motion.div>
                    </motion.div>
                  ))}
                </nav>

                {/* Info Section */}
                <motion.div
                  className="menu-info flex flex-col sm:flex-row justify-between mt-12 gap-6 sm:gap-0 text-base sm:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, staggerChildren: 0.1 }}
                >
                  <motion.div className="menu-info-col flex flex-col gap-2">
                    <a
                      href="https://www.linkedin.com/in/muhammad-abdul-rauf/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href="https://github.com/Abdulrauf10"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </motion.div>
                  <motion.div className="menu-info-col flex flex-col gap-2">
                    <p>abd.rauf.lamada@gmail.com</p>
                    <a href="https://wa.me/6285236375312" target="_blank">
                      +62 852-3637-5312
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Footer */}
              <motion.div
                className="menu-preview pb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <p className=" text-sm sm:text-base">
                  Wordpress | Full-stack web developer | AWS | CI/CD
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
