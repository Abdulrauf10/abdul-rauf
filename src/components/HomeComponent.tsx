"use client"

import { motion } from "framer-motion"
import React from "react"
import {
  ArrowRight,
  Code,
  Zap,
  Globe,
  ShoppingCart,
  Palette,
  CheckCircle,
  Star
} from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"
import Link from "next/link"

export default function Home() {
  const { t } = useLanguage()

  const portfolioItems = [
    {
      id: 1,
      title: t("project.fnb.title"),
      description: t("project.fnb.desc"),
      image: "/home/hara.png",
      tags: ["WordPress", "Elementor"]
    },
    {
      id: 2,
      title: t("project.ocelle.title"),
      description: t("project.ocelle.desc"),
      image: "/portfolio/ocelle-2.png",
      tags: ["Next Js", "Tailwind", "Saleor"]
    }
  ]

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "WordPress Development",
      description: t("home.services.wordpress")
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
      title: "WooCommerce Setup",
      description: t("home.services.woocommerce")
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-600" />,
      title: "Landing Pages",
      description: t("home.services.landing")
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Full-Stack Development",
      description: t("home.services.fullstack")
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Optimization",
      description: t("home.services.optimization")
    }
  ]

  const technologies = [
    "WordPress",
    "WooCommerce",
    "Elementor",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Nest.js",
    "PostgreSQL"
  ]

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t("home.hero.response")
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t("home.hero.experience")
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t("home.hero.satisfaction")
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: t("home.hero.consultation")
    }
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
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-32 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden"
      >
        {/* Animated Background Sparkles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate="animate"
              className="absolute text-blue-400/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></motion.div>
          ))}
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              rotate: [0, -180, -360]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-20 w-6 h-6 bg-purple-400/20 rounded-full"
          />
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 20, 0]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-40 left-1/4 w-3 h-3 bg-indigo-400/20 rotate-45"
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl sm:text-7xl font-bold text-gray-900 mb-8 leading-tight"
            >
              {t("home.hero.title")}
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2"
              >
                {t("home.hero.subtitle")}
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              {t("home.hero.description")}
            </motion.p>

            {/* Enhanced Benefits List */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    stiffness: 150
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex flex-col items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-white/50"
                >
                  <div className="p-2 bg-green-100 rounded-full">
                    {benefit.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 inline-flex items-center justify-center text-lg font-bold shadow-xl hover:shadow-2xl"
                >
                  <span className="mr-3 text-2xl">🚀</span>
                  {t("home.hero.startProject")}
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/portfolio"
                  className="group bg-white/80 backdrop-blur-sm text-blue-600 border-2 border-blue-200 px-10 py-5 rounded-2xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 text-lg font-bold shadow-lg hover:shadow-xl"
                >
                  {t("home.hero.viewPortfolio")}
                </Link>
              </motion.div>
            </motion.div>

            {/* Enhanced Urgency Element */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-8 py-4 rounded-full text-base font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Star className="w-5 h-5" />
              </motion.div>
              Limited spots available this month - Book now!
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Technologies */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("home.technologies.title")}
            </h2>
            <p className="text-gray-600">{t("home.technologies.subtitle")}</p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Enhanced Services Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("home.services.title")}
            </h2>
            <p className="text-gray-600 mb-6">{t("home.services.subtitle")}</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold"
            >
              ⚡ Ready to start in 24 hours
            </motion.div>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all cursor-pointer group"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  className="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group-hover:translate-x-2 transition-transform"
                >
                  Get Quote Now →
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Portfolio Preview */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("home.portfolio.title")}
            </h2>
            <p className="text-gray-600">{t("home.portfolio.subtitle")}</p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
          >
            {portfolioItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-200 mb-3 line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: tagIndex * 0.1 }}
                        className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/portfolio"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                {t("home.portfolio.seeMore")}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* New Strong CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business Online?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don&apos;t let your competitors get ahead. Get a professional,
              high-converting website that brings results in just 24-48 hours.
            </p>

            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center font-bold text-lg shadow-xl"
                >
                  💬 Get FREE Quote Now
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://wa.me/6287749122036"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center font-bold text-lg"
                  target="_blank"
                >
                  📱 WhatsApp Me
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-full font-bold"
            >
              🔥 Special Offer: 20% OFF This Month Only!
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
