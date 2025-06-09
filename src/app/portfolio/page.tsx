"use client"
import React from "react"
import { motion } from "framer-motion"
import SplashCursor from "@/components/SplashCursor"

const portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen w-full bg-cover bg-center bg-black/60 flex justify-center items-center"
      style={{ backgroundImage: "url('/portfolio/portfolio.png')" }}
    >
      <SplashCursor />
      <motion.h1
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-xl lg:text-3xl font-bold text-center px-4"
      >
        Under Construction
      </motion.h1>
    </motion.div>
  )
}

export default portfolio
