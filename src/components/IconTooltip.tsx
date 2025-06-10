"use client"

import { ReactNode } from "react"

type IconTooltipProps = {
  icon: ReactNode
  label: string
  url?: string
}

export default function IconTooltip({ icon, label, url }: IconTooltipProps) {
  return (
    <div className="relative group">
      <div className="text-white p-2 rounded-full bg-gray-800 flex items-center justify-center min-w-4 min-h-4 transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-lg">
        <div className="transition-transform duration-300 transform group-hover:scale-110">
          <a href={`${url ? url : "#"}`} target={url ? "_blank" : "_self"}>
            {icon}
          </a>
        </div>
      </div>

      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
        {label}
      </div>
    </div>
  )
}
