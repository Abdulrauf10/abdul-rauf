"use client"
import React from "react"
import { motion } from "framer-motion"
import IconTooltip from "@/components/IconTooltip"
import { MdEmail } from "react-icons/md"
import { IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io"
import { FaGithubAlt } from "react-icons/fa6"

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-white min-h-screen flex flex-col justify-center items-center px-6 py-20"
    >
      {/* Headline */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Let’s work together.
        </h1>
        <p className="mt-6 text-lg text-gray-600">
          Got a project? I’d love to hear about it. Reach out via any of the
          platforms below.
        </p>
      </motion.div>

      {/* Social Icons Grid */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-4xl md:text-5xl text-gray-700"
      >
        <IconTooltip
          icon={<MdEmail />}
          label="Send me email"
          url="mailto:abd.rauf.lamada@gmail.com"
        />
        <IconTooltip
          icon={<IoLogoWhatsapp />}
          label="WhatsApp"
          url="https://wa.me/6285236375312"
        />
        <IconTooltip
          icon={<IoLogoLinkedin />}
          label="LinkedIn"
          url="https://www.linkedin.com/in/muhammad-abdul-rauf/"
        />
        <IconTooltip
          icon={<FaGithubAlt />}
          label="GitHub"
          url="https://github.com/Abdulrauf10"
        />
      </motion.div>
    </motion.section>
  )
}
