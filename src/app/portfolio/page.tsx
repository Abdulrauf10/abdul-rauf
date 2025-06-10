"use client"
import React from "react"
import { motion } from "framer-motion"
import { SiNextdotjs, SiNuxtdotjs, SiChakraui, SiVuetify } from "react-icons/si"
import { FaVuejs } from "react-icons/fa"
import { RiTailwindCssLine } from "react-icons/ri"
import ProjectCard from "@/components/ProjectCard"

const portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Homage",
      des: "Homage is a modern, user-friendly hospital management system designed to streamline patient registration and appointment scheduling.",
      img: "/portfolio/homage.png",
      iconList: ["Next Js", "Chakra UI"]
    },
    {
      id: 2,
      title: "Surge",
      des: "Surge is an innovative web application designed to empower educators by simplifying the lesson planning process.",
      img: "/portfolio/surge.png",
      iconList: ["Vue Js", "Vuetify"]
    },
    {
      id: 3,
      title: "Ocelle",
      des: "Ocelle is an innovative web application dedicated to creating personalized diet plans for dogs.",
      img: "/portfolio/ocelle.png",
      iconList: ["Next Js", "Tailwind"]
    },
    {
      id: 4,
      title: "Teamtrics",
      des: "Teamtrics is a dynamic web application designed to revolutionize employee time management through a blend of efficiency and engagement. At its core, Teamtrics provides robust time-tracking capabilities, allowing employees to log work hours, request leaves, and manage tasks seamlessly.",
      img: "/portfolio/teamtrics.png",
      iconList: ["Next Js", "Chakra UI"]
    },
    {
      id: 5,
      title: "Truerice",
      des: "Truerice is a web app that uses AI to analyze and assess the quality of rice. By uploading images, users can quickly get accurate insights into rice grade, purity, and overall quality.",
      img: "/portfolio/truerice.png",
      iconList: ["Nuxt Js", "Tailwind"]
    }
  ]

  const getIcon = (tech: string) => {
    switch (tech) {
      case "Next Js":
        return <SiNextdotjs />
      case "Vue Js":
        return <FaVuejs />
      case "Nuxt Js":
        return <SiNuxtdotjs />
      case "Chakra UI":
        return <SiChakraui />
      case "Tailwind":
        return <RiTailwindCssLine />
      case "Vuetify":
        return <SiVuetify />
      default:
        return <SiNextdotjs />
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen w-full bg-cover bg-center bg-black/60 flex justify-center items-center"
      style={{ backgroundImage: "url('/portfolio/portfolio.png')" }}
    >
      <motion.div
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-6xl px-4 mt-10"
      >
        {/* Responsive Scroll Container (mobile/tablet only) */}
        <div
          className="block md:hidden snap-y snap-mandatory hide-scrollbar w-full"
          style={{
            maxHeight: "70vh",
            overflowY: "auto",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none" // IE/Edge
          }}
        >
          <div className="flex flex-col items-center justify-center gap-6 w-full px-4">
            {projects.map((project, idx) => (
              <motion.div key={idx}>
                <ProjectCard
                  title={project.title}
                  description={project.des}
                  imgSrc={project.img}
                  techStack={project.iconList}
                  getIcon={getIcon}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Grid Layout (no scroll, full view) */}
        <div className="hidden md:flex justify-center items-center gap-2">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              description={project.des}
              imgSrc={project.img}
              techStack={project.iconList}
              getIcon={getIcon}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default portfolio
