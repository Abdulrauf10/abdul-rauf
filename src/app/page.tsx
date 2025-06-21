"use client"

import Image from "next/image"
import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const HomeComponentDynamic = dynamic(() => import("@/components/HomeComponent"))

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center  flex-col">
        <Image
          src="/home/totoro.gif"
          alt="Loading..."
          width={500}
          height={500}
          className="object-contain"
        />
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    )
  }

  return <HomeComponentDynamic />
}
