"use client"

import dynamic from "next/dynamic"

const HomeComponentDynamic = dynamic(() => import("@/components/HomeComponent"))

export default function Home() {
  return <HomeComponentDynamic />
}
