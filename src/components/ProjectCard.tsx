// components/ProjectCard.tsx
"use client"

import { motion } from "framer-motion"
import IconTooltip from "./IconTooltip"
import { ReactNode } from "react"

interface ProjectCardProps {
  title: string
  description: string
  imgSrc: string
  techStack: string[]
  getIcon: (tech: string) => ReactNode
}

export default function ProjectCard({
  title,
  description,
  imgSrc,
  techStack,
  getIcon
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="w-[300px] h-[400px] lg:w-[240px] lg:h-[325px] bg-black/60 rounded-2xl flex flex-col justify-between items-center shadow-lg "
    >
      {/* Card Image */}
      <div className="relative w-full">
        <motion.img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <motion.h3
          initial={{ y: -10 }}
          whileHover={{ y: 0 }}
          className="text-[15px] font-bold text-white truncate -mt-5"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
          className="text-gray-300 text-[12px] line-clamp-4"
        >
          {description}
        </motion.p>

        {/* Tech Stack Icons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <IconTooltip key={index} icon={getIcon(tech)} label={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}
