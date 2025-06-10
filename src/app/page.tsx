"use client"

import ProgressSidebar from "@/components/ProgressSidebar"
import { motion, useScroll } from "framer-motion"
import Image from "next/image"
import React, { useRef } from "react"
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
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: containerRef
  })

  return (
    <>
      <div
        ref={containerRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <SplashCursor />
        <Section
          id="introduction"
          className={`snap-start h-screen flex items-center justify-center w-full`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-screen w-full bg-cover bg-center bg-black/30"
            style={{ backgroundImage: "url('/home/home.png')" }}
          >
            <div className="flex flex-col items-center justify-center bg-black/65 p-5 w-full h-full">
              <Image
                src="/home/me.jpg"
                alt="Muhammad Abdul Rauf"
                width={200}
                height={200}
                className=" rounded-xl mb-2"
              />
              <motion.h1
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-xl lg:text-3xl font-bold text-center px-4"
              >
                👋 Hi, I&apos;m Rauf
              </motion.h1>
              <motion.p
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-[15px] max-w-[50rem] md:max-w-[30rem] lg:text-[20px] font-bold text-center px-4"
              >
                I build reliable, scalable, and user-focused web applications —
                fast. With 3+ years of full-stack experience, I turn complex
                ideas into clean, maintainable code that teams can trust and
                users love.
              </motion.p>
            </div>
          </motion.div>
        </Section>

        <Section
          id="tech"
          className={`snap-start h-screen flex items-center justify-center w-full`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-screen w-full bg-cover bg-center bg-black/30"
            style={{ backgroundImage: "url('/home/technology.png')" }}
          >
            <div className="h-screen w-full flex items-center justify-center bg-black/40">
              <motion.div
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-white text-4xl md:text-6xl font-bold text-center px-4"
              >
                <IconTooltip icon={<FaReact />} label="React JS" />
                <IconTooltip icon={<SiNextdotjs />} label="Next.js" />
                <IconTooltip icon={<FaVuejs />} label="Vue.js" />
                <IconTooltip icon={<SiNuxtdotjs />} label="Nuxt.js" />
                <IconTooltip icon={<FaNodeJs />} label="Node.js" />
                <IconTooltip icon={<SiExpress />} label="Express" />
                <IconTooltip icon={<SiPostgresql />} label="PostgreSQL" />
                <IconTooltip icon={<SiMongodb />} label="MongoDB" />
                <IconTooltip icon={<SiNestjs />} label="Nest.js" />
                <IconTooltip icon={<FaWordpress />} label="Wordpress" />
              </motion.div>
            </div>
          </motion.div>
        </Section>

        <Section
          id="offer"
          className={`snap-start h-screen flex items-center justify-center w-full`}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-screen w-full bg-cover bg-center bg-black/30"
            style={{ backgroundImage: "url('/home/offer.png')" }}
          >
            <div className="h-full flex flex-col items-center justify-center bg-black/60">
              <motion.h1
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-[15px] md:text-[20px] lg:text-[30px] lg:max-w-[55rem] md:max-w-[30rem] font-bold text-center px-4"
              >
                If you’re looking for an engineer who can own problems, move
                fast, and consistently deliver — I’m ready.
              </motion.h1>
              <motion.p
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-[15px] md:text-[15px] lg:text-[20px] lg:max-w-[55rem] md:max-w-[30rem] font-bold text-center px-4"
              >
                Proven ability to take features from idea to deployment
              </motion.p>
              <motion.p
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-[15px] md:text-[15px] lg:text-[20px] lg:max-w-[55rem] md:max-w-[30rem] font-bold text-center px-4"
              >
                Strong communication, fast ramp-up, and team-first mindset
              </motion.p>
              <motion.p
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white text-[15px] md:text-[15px] lg:text-[20px] lg:max-w-[55rem] md:max-w-[30rem] font-bold text-center px-4"
              >
                Comfortable across modern stacks — from React and TypeScript to
                Node.js and SQL
              </motion.p>
            </div>
          </motion.div>
        </Section>
      </div>

      <ProgressSidebar scrollYProgress={scrollYProgress} />
    </>
  )
}

function Section({
  id,
  children,
  style,
  className
}: {
  id: string
  children?: React.ReactNode
  style?: any
  className?: any
}) {
  return (
    <section style={style} id={id} className={className}>
      {children}
    </section>
  )
}
