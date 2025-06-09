"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "motion/react"

const sections = [
  { id: "introduction", name: "INTRODUCTION" },
  { id: "tech", name: "TECHNOLOGIES" },
  { id: "offer", name: "OFFER" }
]

type Props = {
  scrollYProgress: any
}

export default function ProgressSidebar({ scrollYProgress }: Props) {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest: number) => {
      const totalSections = sections.length
      const sectionHeight = 1 / totalSections
      const index = Math.min(
        totalSections - 1,
        Math.floor(latest / sectionHeight)
      )
      setActiveIndex(index)
    })

    return () => unsubscribe()
  }, [scrollYProgress, sections.length])

  return (
    <div className="hidden sm:block fixed top-0 right-0 w-fit mr-[40px] mt-[200px] h-[65vh] text-white overflow-hidden z-50">
      <div className="relative flex flex-col items-center justify-between h-full py-10 px-2">
        {/* Vertical Progress Line */}
        <motion.div
          className="absolute right-0 w-px bg-white -z-10"
          style={{
            height: `${scrollYProgress.get() * 100}%`,
            originY: "top"
          }}
        />

        {/* Section Links */}
        {sections.map((section, index) => (
          <Link
            key={section.id}
            href={`#${section.id}`}
            className={`relative z-10 flex items-center justify-center w-full h-16 text-center transition-colors duration-300 rounded-full mr-[15px] ${
              index === activeIndex ? " text-yellow-400 font-bold" : ""
            }`}
          >
            <span className="text-xs md:text-sm whitespace-nowrap">
              {section.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
