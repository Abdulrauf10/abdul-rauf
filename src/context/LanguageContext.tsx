"use client"
import React, { createContext, useContext, useState, ReactNode } from "react"

type Language = "en" | "id"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Contact",

    // Home page
    "home.hero.title": "Transform Your Business with",
    "home.hero.subtitle": "Professional Web Solutions",
    "home.hero.description":
      "I create stunning, high-converting websites and web applications that drive real results for your business. From WordPress to full-stack development.",
    "home.hero.viewPortfolio": "View My Work",
    "home.hero.startProject": "Start Your Project Today",
    "home.hero.getInTouch": "Get Free Quote",
    "home.hero.response": "Fast 24-48 hour turnaround",
    "home.hero.experience": "3 years proven experience",
    "home.hero.satisfaction": "100% satisfaction guarantee",
    "home.hero.consultation": "Free consultation & quote",

    "home.technologies.title": "Technologies I Master",
    "home.technologies.subtitle":
      "Using cutting-edge tools to build your perfect solution",

    "home.services.title": "Services That Drive Results",
    "home.services.subtitle":
      "Comprehensive web solutions tailored to your business needs",
    "home.services.wordpress":
      "Custom WordPress websites that convert visitors into customers",
    "home.services.woocommerce":
      "Professional e-commerce stores that maximize sales",
    "home.services.landing": "High-converting landing pages for your campaigns",
    "home.services.fullstack": "Custom web applications and admin dashboards",
    "home.services.optimization":
      "Speed, SEO, and mobile optimization for better performance",

    "home.portfolio.title": "Recent Success Stories",
    "home.portfolio.subtitle": "See how I've helped businesses grow online",
    "home.portfolio.seeMore": "View All Projects",

    // Projects
    "project.fnb.title": "F&B - Hara Chicken",
    "project.fnb.desc":
      "Company profile website for a food & beverage brand built with WordPress.",
    "project.ocelle.title": "Ocelle",
    "project.ocelle.desc": "A web app to plan personalized diets for dogs",
    "project.surge.title": "Surge",
    "project.surge.desc": "AI-powered curriculum generator for schools",
    "project.homage.title": "Homage",
    "project.homage.desc": "Hospital management system for admin and patients",
    "project.rice.title": "True rice",
    "project.rice.desc": "AI-based tool to identify rice quality",
    "project.teamtrics.title": "Teamtrics",
    "project.teamtrics.desc": "Time tracking app for remote workers",

    // About page
    "about.title": "About Me",
    "about.intro":
      "Passionate web developer with 3 years of experience creating digital solutions that make a difference.",
    "about.name": "Muhammad Abdul Rauf",
    "about.role": "Full-Stack Web Developer & Designer",
    "about.description":
      "With 3 years of hands-on experience, I specialize in creating websites and web applications that not only look amazing but deliver real business results.",
    "about.skills": "Technical Expertise",
    "about.achievements.projects": "Projects Completed",
    "about.achievements.clients": "Happy Clients",
    "about.achievements.years": "Years Experience",
    "about.achievements.satisfaction": "Client Satisfaction",

    // Portfolio page
    "portfolio.title": "My Portfolio",
    "portfolio.subtitle":
      "Showcasing successful projects that drive business growth",

    // Contact page
    "contact.title": "Let's Work Together",
    "contact.subtitle":
      "Ready to transform your business? Get in touch for a free consultation and quote.",
    "contact.info": "Get In Touch",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.linkedin": "LinkedIn",
    "contact.whatsapp": "WhatsApp",
    "contact.location": "Location",
    "contact.locationText": "Available worldwide (Remote)",
    "contact.form.title": "Send Message",
    "contact.form.name": "Your Name",
    "contact.form.namePlaceholder": "Enter your full name",
    "contact.form.email": "Email Address",
    "contact.form.emailPlaceholder": "your@email.com",
    "contact.form.subject": "Project Type",
    "contact.form.subjectPlaceholder":
      "WordPress, E-commerce, Custom App, etc.",
    "contact.form.message": "Project Details",
    "contact.form.messagePlaceholder":
      "Tell me about your project requirements...",
    "contact.form.send": "Send Message & Get Quote",
    "contact.cta.title": "Ready to Start Your Project?",
    "contact.cta.subtitle":
      "Get a free consultation and detailed quote within 24 hours",
    "contact.cta.email": "Email Me",
    "contact.cta.whatsapp": "WhatsApp Now"
  },
  id: {
    // Navigation
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.portfolio": "Portfolio",
    "nav.contact": "Kontak",

    // Home page
    "home.hero.title": "Transformasi Bisnis Anda dengan",
    "home.hero.subtitle": "Solusi Web Profesional",
    "home.hero.description":
      "Saya menciptakan website dan aplikasi web yang memukau dan mengkonversi untuk mendorong hasil nyata bagi bisnis Anda. Dari WordPress hingga pengembangan full-stack.",
    "home.hero.viewPortfolio": "Lihat Karya Saya",
    "home.hero.startProject": "Bangun bisnis anda sekarang",
    "home.hero.getInTouch": "Dapatkan Konsultasi Gratis",
    "home.hero.response": "Waktu penyelesaian cepat 24-48 jam",
    "home.hero.experience": "3 tahun pengalaman terbukti",
    "home.hero.satisfaction": "Jaminan kepuasan 100%",
    "home.hero.consultation": "Konsultasi & penawaran gratis",

    "home.technologies.title": "Teknologi yang Saya Kuasai",
    "home.technologies.subtitle":
      "Menggunakan tools terdepan untuk membangun solusi sempurna Anda",

    "home.services.title": "Layanan yang Menghasilkan",
    "home.services.subtitle":
      "Solusi web komprehensif yang disesuaikan dengan kebutuhan bisnis Anda",
    "home.services.wordpress":
      "Website WordPress custom yang mengkonversi pengunjung menjadi pelanggan",
    "home.services.woocommerce":
      "Toko e-commerce profesional yang memaksimalkan penjualan",
    "home.services.landing":
      "Landing page berkonversi tinggi untuk kampanye Anda",
    "home.services.fullstack": "Aplikasi web custom dan dashboard admin",
    "home.services.optimization":
      "Optimisasi kecepatan, SEO, dan mobile untuk performa lebih baik",

    "home.portfolio.title": "Kisah Sukses Terbaru",
    "home.portfolio.subtitle":
      "Lihat bagaimana saya membantu bisnis berkembang online",
    "home.portfolio.seeMore": "Lihat Semua Proyek",

    // Projects
    "project.fnb.title": "F&B - Hara Chicken",
    "project.fnb.desc": "Website profil perusahaan F&B dibuat dengan WordPress",
    "project.ocelle.title": "Ocelle",
    "project.ocelle.desc":
      "Aplikasi web untuk merencanakan diet khusus untuk anjing",
    "project.surge.title": "Surge",
    "project.surge.desc": "Generator kurikulum untuk sekolah berbasis AI",
    "project.homage.title": "Homage",
    "project.homage.desc":
      "Sistem manajemen rumah sakit untuk admin dan pasien",
    "project.rice.title": "True rice",
    "project.rice.desc":
      "Web app berbasis AI untuk mengidentifikasi kualitas beras",
    "project.teamtrics.title": "Teamtrics",
    "project.teamtrics.desc":
      "Aplikasi pencatat waktu kerja untuk pekerja remote.",

    // About page
    "about.title": "Tentang Saya",
    "about.intro":
      "Web developer passionate dengan 3 tahun pengalaman menciptakan solusi digital yang membuat perbedaan.",
    "about.name": "Muhammad Abdul Rauf",
    "about.role": "Full-Stack Web Developer & Designer",
    "about.description":
      "Dengan 3 tahun pengalaman hands-on, saya spesialisasi dalam menciptakan website dan aplikasi web yang tidak hanya terlihat menakjubkan tapi memberikan hasil bisnis nyata.",
    "about.skills": "Keahlian Teknis",
    "about.achievements.projects": "Proyek Selesai",
    "about.achievements.clients": "Klien Puas",
    "about.achievements.years": "Tahun Pengalaman",
    "about.achievements.satisfaction": "Kepuasan Klien",

    // Portfolio page
    "portfolio.title": "Portfolio Saya",
    "portfolio.subtitle":
      "Menampilkan proyek sukses yang mendorong pertumbuhan bisnis",

    // Contact page
    "contact.title": "Mari Bekerja Sama",
    "contact.subtitle":
      "Siap transformasi bisnis Anda? Hubungi saya untuk konsultasi dan penawaran gratis.",
    "contact.info": "Hubungi Saya",
    "contact.email": "Email",
    "contact.phone": "Telepon",
    "contact.linkedin": "LinkedIn",
    "contact.whatsapp": "WhatsApp",
    "contact.location": "Lokasi",
    "contact.locationText": "Tersedia di seluruh dunia (Remote)",
    "contact.form.title": "Kirim Pesan",
    "contact.form.name": "Nama Anda",
    "contact.form.namePlaceholder": "Masukkan nama lengkap",
    "contact.form.email": "Alamat Email",
    "contact.form.emailPlaceholder": "email@anda.com",
    "contact.form.subject": "Jenis Proyek",
    "contact.form.subjectPlaceholder":
      "WordPress, E-commerce, Aplikasi Custom, dll.",
    "contact.form.message": "Detail Proyek",
    "contact.form.messagePlaceholder":
      "Ceritakan tentang kebutuhan proyek Anda...",
    "contact.form.send": "Kirim Pesan & Dapatkan Penawaran",
    "contact.cta.title": "Siap Mulai Proyek Anda?",
    "contact.cta.subtitle":
      "Dapatkan konsultasi gratis dan penawaran detail dalam 24 jam",
    "contact.cta.email": "Email Saya",
    "contact.cta.whatsapp": "WhatsApp Sekarang"
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    )
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
