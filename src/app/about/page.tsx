"use client"

import {
  Code,
  Globe,
  Users,
  Award,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"
import Link from "next/link"

const About = () => {
  const { t } = useLanguage()

  const skills = [
    { name: "WordPress Development", level: 95 },
    { name: "WooCommerce", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 88 }
  ]

  const achievements = [
    {
      icon: <Code className="w-6 h-6" />,
      number: "10+",
      label: t("about.achievements.projects")
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "10+",
      label: t("about.achievements.clients")
    },
    {
      icon: <Globe className="w-6 h-6" />,
      number: "3",
      label: t("about.achievements.years")
    },
    {
      icon: <Award className="w-6 h-6" />,
      number: "100%",
      label: t("about.achievements.satisfaction")
    }
  ]

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-abdul-rauf/",
      color: "bg-blue-600"
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/6287749122036",
      color: "bg-green-600"
    }
    // {
    //   name: "Instagram",
    //   url: "https://instagram.com/yourprofile",
    //   color: "bg-pink-500"
    // }
  ]

  const guarantees = [
    "24-48 hour project delivery",
    "100% satisfaction guarantee",
    "Free revisions included",
    "Ongoing support & maintenance"
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
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="pt-24 pb-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* title and intro section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.h1
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-gray-900 mb-6"
            >
              {t("about.title")}
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              {t("about.intro")}
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Profile Section */}
            <motion.div
              variants={itemVariants}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="inline-block mb-8"
              >
                <Image
                  src="/home/rauf.png"
                  alt="Profile"
                  className="w-48 h-48 rounded-full object-cover border-4 border-blue-600 shadow-xl"
                  width={200}
                  height={200}
                />
              </motion.div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t("about.name")}
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-6">
                {t("about.role")}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {t("about.description")}
              </p>

              {/* Why Choose Me Section */}
              <div className="bg-blue-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Choose Me?
                </h3>
                <div className="space-y-3">
                  {guarantees.map((guarantee, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700 font-medium">
                        {guarantee}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center font-bold text-lg shadow-lg"
                >
                  🚀 Let&apos;s Work Together
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </motion.div>

              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} text-white p-3 rounded-full hover:shadow-lg transition-all`}
                  >
                    <span className="text-sm font-semibold">
                      {social.name.slice(0, 2)}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* skills section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                {t("about.skills")}
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: index * 0.2, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.2, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full shadow-inner"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* achievements section */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center "
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 15 }}
                  className="text-blue-600 mb-4 flex justify-center"
                >
                  {achievement.icon}
                </motion.div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }}
                  className="text-3xl font-bold text-gray-900 mb-2"
                >
                  {achievement.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{achievement.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default About
