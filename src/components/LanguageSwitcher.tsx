import React from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/context/LanguageContext"

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-gray-100 rounded-full p-1">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === "en"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        EN
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("id")}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          language === "id"
            ? "bg-white text-blue-600 shadow-sm"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        ID
      </motion.button>
    </div>
  )
}

export default LanguageSwitcher
