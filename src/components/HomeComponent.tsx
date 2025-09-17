import { motion } from "framer-motion"
import { Code, Database, Server, Cloud, User, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import Navbar from "./Navbar"

const HomeComponent = () => {
  const route = useRouter()
  const technologies = [
    { name: "React", icon: Code, color: "text-blue-500" },
    { name: "Next.js", icon: Code, color: "text-gray-800" },
    { name: "Node.js", icon: Server, color: "text-green-500" },
    { name: "Nest.js", icon: Server, color: "text-red-500" },
    { name: "Express", icon: Server, color: "text-gray-600" },
    { name: "PostgreSQL", icon: Database, color: "text-blue-600" },
    { name: "MongoDB", icon: Database, color: "text-green-600" },
    { name: "CI/CD", icon: Code, color: "text-orange-500" },
    { name: "AWS", icon: Cloud, color: "text-yellow-600" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const techVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  }

  const portfolioItems = [
    {
      id: 1,
      title: "Company: HaraChicken - Company Profile",
      description:
        "Company profile website for a food & beverage brand built with WordPress.",
      image: "/home/hara.png",
      tags: ["WordPress", "Elementor"]
    },
    {
      id: 2,
      title: "Company: Atech Solution - Ocelle",
      description: "A web app to plan personalized diets for dogs",
      image: "/portfolio/ocelle-2.png",
      tags: ["Next Js", "Tailwind", "Saleor", "Zustand"]
    },
    {
      id: 3,
      title: "Company: SL2 - Surge",
      description: "AI-powered curriculum generator for schools",
      image: "/portfolio/surge-2.png",
      tags: ["Vue Js", "Vuetify", "Vuex"]
    },
    {
      id: 4,
      title: "Company: Atech Solution - Homage",
      description: "Hospital management system for admin and patients",
      image: "/portfolio/homage-2.png",
      tags: ["Next Js", "Zustand", "Chakra UI", "Jitsi Meet", "Apex Chart"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Company: Atech Solution - Teamtrics",
      description: "Time tracking app for remote workers",
      image: "/portfolio/teamtrics-2.png",
      tags: ["Next Js", "Zustand", "Chakra UI", "OpenAi API"]
    },
    {
      id: 6,
      title: "Company: SL2 - True rice",
      description: "AI-based tool to identify rice quality",
      image: "/portfolio/truerice-2.png",
      tags: ["Nuxt Js", "Tailwind", "Vuex"]
    }
  ]

  const containerVariants2 = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants2 = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
        {/* Hero Section */}
        <motion.section
          className="min-h-screen flex items-center justify-center px-4 relative"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Animated background elements */}
          <motion.div
            className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="text-center z-10 max-w-4xl mx-auto">
            {/* Profile Photo */}
            <motion.div variants={itemVariants} className="mb-8">
              <motion.div
                className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
                  <Image
                    src={"/home/rauf.png"}
                    width={500}
                    height={500}
                    alt="Muhammad Abdul Rauf"
                    className=" rounded-full"
                  />
                  <span className="sr-only">Rauf&apos;s Photo</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <motion.h1
                className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Hi, I&apos;m Rauf
              </motion.h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.p
                className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                A passionate{" "}
                <span className="text-blue-600 font-semibold">
                  Full-Stack Web Developer
                </span>{" "}
                who crafts
                <br />
                beautiful, scalable, and user-friendly digital experiences
              </motion.p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-blue-500/25 transition-all duration-300"
                  onClick={() => route.push("/portfolio")}
                >
                  <User className="mr-2 h-5 w-5" />
                  View Portfolio
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                  onClick={() => route.push("/contact")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="animate-bounce">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-gray-500"
              >
                ↓ Scroll to explore ↓
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* curent projects section */}
        <motion.section
          className="py-20 px-4 bg-gray-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl text-center font-bold mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Recent Projects
            </motion.h2>

            <motion.div
              variants={containerVariants2}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {portfolioItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants2}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* <div className="flex gap-3">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={item.liveUrl}
                        className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-lg text-sm transition-colors"
                      >
                        <ExternalLink size={14} />
                        {t("portfolio.liveDemo")}
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={item.githubUrl}
                        className="flex items-center gap-1 bg-gray-800 hover:bg-gray-900 px-3 py-2 rounded-lg text-sm transition-colors"
                      >
                        <Github size={14} />
                        {t("portfolio.code")}
                      </motion.a>
                    </div> */}
                    </div>
                  </div>

                  {/* Default Card Content */}
                  <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Technologies Section */}
        <motion.section
          className="py-20 px-4 bg-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Technologies I Use
            </motion.h2>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={techVariants}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  className="group"
                >
                  <div className="p-6 bg-white border-gray-200 text-center hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                    <tech.icon
                      className={`h-12 w-12 mx-auto mb-3 ${tech.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                    <p className="font-semibold text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {tech.name}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Call to Action Section */}
        <motion.section
          className="py-20 px-4 bg-gradient-to-br from-blue-50 to-purple-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready to Build Something Amazing?
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 mb-12"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let&apos;s collaborate and bring your vision to life with
              cutting-edge technology and creative solutions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-purple-500/25 transition-all duration-300"
                  onClick={() => route.push("/portfolio")}
                >
                  <User className="mr-3 h-6 w-6" />
                  Explore My Work
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-10 py-5 text-xl font-semibold shadow-xl hover:shadow-pink-500/25 transition-all duration-300"
                  onClick={() => route.push("/contact")}
                >
                  <Mail className="mr-3 h-6 w-6" />
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </>
  )
}

export default HomeComponent
