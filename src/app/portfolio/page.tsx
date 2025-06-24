"use client"

// import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

const Portfolio = () => {
  const { t } = useLanguage()

  const portfolioItems = [
    {
      id: 1,
      title: t("project.fnb.title"),
      description: t("project.fnb.desc"),
      image: "/home/hara.png",
      tags: ["WordPress", "WooCommerce", "Elementor", "PHP"]
    },
    {
      id: 2,
      title: t("project.ocelle.title"),
      description: t("project.ocelle.desc"),
      image: "/portfolio/ocelle-2.png",
      tags: ["Next Js", "Tailwind", "Saleor", "Express"]
    },
    {
      id: 3,
      title: t("project.surge.title"),
      description: t("project.surge.desc"),
      image: "/portfolio/surge-2.png",
      tags: ["Vue Js", "Vuetify", "Vuex"]
    },
    {
      id: 4,
      title: t("project.homage.title"),
      description: t("project.homage.desc"),
      image: "/portfolio/homage-2.png",
      tags: ["Next Js", "Zustand", "Chakra UI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: t("project.teamtrics.title"),
      description: t("project.teamtrics.desc"),
      image: "/portfolio/teamtrics-2.png",
      tags: ["Next Js", "Zustand", "Chakra UI"]
    },
    {
      id: 6,
      title: t("project.rice.title"),
      description: t("project.rice.desc"),
      image: "/portfolio/truerice-2.png",
      tags: ["Nuxt Js", "Vuetify", "Vuex"]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-24 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              {t("portfolio.title")}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {t("portfolio.subtitle")}
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
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
    </div>
  )
}

export default Portfolio
