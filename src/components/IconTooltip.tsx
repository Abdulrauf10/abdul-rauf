"use client"

import { ReactNode } from "react"

type IconTooltipProps = {
  icon: ReactNode
  label: string
  url?: string
  bgColor?: string // Optional background color
}

export default function IconTooltip({
  icon,
  label,
  url,
  bgColor
}: IconTooltipProps) {
  return (
    <div className="relative group">
      {/* Tooltip Icon Container */}
      <div
        className="text-white p-2 rounded-full flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-lg"
        style={{ backgroundColor: bgColor || "#111827" }}
      >
        <div className="transition-transform duration-300 transform group-hover:scale-110">
          <a
            href={url ? url : "#"}
            target={url ? "_blank" : "_self"}
            rel="noopener noreferrer"
          >
            {icon}
          </a>
        </div>
      </div>

      {/* Tooltip Text */}
      <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-10">
        {label}
      </div>
    </div>
  )
}
