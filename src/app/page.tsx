"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"
import { FaReact, FaVuejs, FaNodeJs, FaWordpress } from "react-icons/fa"
import {
  SiNextdotjs,
  SiNuxtdotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiNestjs
} from "react-icons/si"
import IconTooltip from "@/components/IconTooltip"
import SplashCursor from "@/components/SplashCursor"

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white w-screen text-gray-800 flex flex-col justify-center items-center pt-[50px] pb-[100px]"
    >
      <SplashCursor />
      <div className="lg:max-w-[50%] w-[80%]">
        {/* Hero Section */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white text-gray-800"
        >
          {/* Hero Section */}
          <div className="max-w-6xl mx-auto w-full px-6 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center md:items-start gap-6"
            >
              <Image
                src="/home/me.jpg"
                alt="Muhammad Abdul Rauf"
                width={150}
                height={150}
                className="rounded-full shadow-md"
              />
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  👋 Hi, I&apos;m Rauf
                </h1>
                <p className="text-lg md:text-xl max-w-xl mt-4 leading-relaxed">
                  I build reliable, scalable, and user-focused web applications
                  — fast. With 3+ years of full-stack experience, I turn complex
                  ideas into clean, maintainable code that teams can trust and
                  users love.
                </p>
              </div>
            </motion.div>

            <div className="flex gap-6 mt-8 w-full">
              {/* Hire me Button */}
              <a
                href="mailto:abd.rauf.lamada@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-6 py-3  rounded-full font-semibold hover:bg-gray-800 transition-all"
              >
                Hire me
              </a>

              {/* Open to Opportunities Button */}
              <p className="bg-green-100 text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-green-200 hover:scale-105 transform transition-all w-fit">
                <span className="mr-2">•</span>
                <span className="hidden sm:inline">Open to Opportunities</span>
                <span className="inline sm:hidden">Available</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Technologies Section */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 text-center md:text-left mt-[20px]"
        >
          Technologies I Work With
        </motion.h2>

        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap gap-10 text-4xl justify-center lg:justify-start"
        >
          <IconTooltip icon={<FaReact />} label="React JS" bgColor="#060110" />
          <IconTooltip
            icon={<SiNextdotjs />}
            label="Next.js"
            bgColor="#060110"
          />
          <IconTooltip icon={<FaVuejs />} label="Vue.js" bgColor="#3FB27F" />
          <IconTooltip
            icon={<SiNuxtdotjs />}
            label="Nuxt.js"
            bgColor="#2F445A"
          />
          <IconTooltip icon={<FaNodeJs />} label="Node.js" bgColor="#519942" />
          <IconTooltip icon={<SiExpress />} label="Express" />
          <IconTooltip
            icon={<SiPostgresql />}
            label="PostgreSQL"
            bgColor="#2F5E8E"
          />
          <IconTooltip icon={<SiMongodb />} label="MongoDB" bgColor="#4CA53F" />
          <IconTooltip icon={<SiNestjs />} label="Nest.js" bgColor="#DA224B" />
          <IconTooltip
            icon={<FaWordpress />}
            label="Wordpress"
            bgColor="#046F95"
          />
        </motion.div>

        {/* Offer Section */}

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl text-center lg:text-left md:text-left font-semibold mb-8 mt-[70px]"
        >
          If you’re looking for an engineer who can own problems, move fast, and
          consistently deliver — I’m ready.
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 text-lg text-gray-700 text-center lg:text-left md:text-left"
        >
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-500">✔</span>
            Proven ability to take features from idea to deployment
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-500">✔</span>
            Strong communication, fast ramp-up, and team-first mindset
          </li>
          <li className="flex items-start">
            <span className="mr-2 mt-1 text-blue-500">✔</span>
            Comfortable across modern stacks — from React and TypeScript to
            Node.js and SQL
          </li>
        </motion.ul>
      </div>
    </motion.div>
  )
}
