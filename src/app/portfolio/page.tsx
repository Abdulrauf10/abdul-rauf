"use client"
import React from "react"
import { motion } from "framer-motion"
import { SiNextdotjs, SiNuxtdotjs, SiChakraui, SiVuetify } from "react-icons/si"
import { FaVuejs } from "react-icons/fa"
import { RiTailwindCssLine } from "react-icons/ri"
import ProjectCard from "@/components/ProjectCard"

const Portfolio = () => {
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
      transition={{ duration: 0.6 }}
      className="w-full bg-white text-gray-800 py-[150px] px-4 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.h1
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My Previous Professional Projects
        </motion.h1>

        {/* Responsive Scroll Container (Mobile/Tablet) */}
        <div className="block md:hidden w-full">
          <div className="flex flex-col gap-8 items-center">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
              >
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

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center w-full max-w-5xl mx-auto">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
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
    </motion.div>
  )
}

export default Portfolio
