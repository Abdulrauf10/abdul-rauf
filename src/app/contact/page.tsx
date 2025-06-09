"use client"
import React from "react"
import { motion } from "framer-motion"
import IconTooltip from "@/components/IconTooltip"
import { MdEmail } from "react-icons/md"
import { IoLogoLinkedin, IoLogoWhatsapp } from "react-icons/io"
import { FaGithubAlt } from "react-icons/fa6"

const contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center items-center h-screen w-full bg-cover bg-center gap-10 bg-black/30 text-4xl"
      style={{ backgroundImage: "url('/contact/contact.png')" }}
    >
      <IconTooltip
        icon={<MdEmail />}
        label="Send me email"
        url="mailto:abd.rauf.lamada@gmail.com"
      />
      <IconTooltip
        icon={<IoLogoWhatsapp />}
        label="Whatsapp"
        url="https://wa.me/6285236375312"
      />
      <IconTooltip
        icon={<IoLogoLinkedin />}
        label="Linkedin"
        url="https://www.linkedin.com/in/muhammad-abdul-rauf/"
      />
      <IconTooltip
        icon={<FaGithubAlt />}
        label="Github"
        url="https://github.com/Abdulrauf10"
      />
    </motion.div>
  )
}

export default contact
