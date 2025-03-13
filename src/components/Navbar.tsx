"use client"

import LocalSwitcher from "./LocalSwitcher"

export default function Navbar() {
  return (
    <div className="sticky top-0">
      <div className="p-[15px] bg-black border-white border-b-[0.5px] lg:pr-[80px] pr-[30px] w-full flex z-50 justify-end">
        <LocalSwitcher />
      </div>
    </div>
  )
}
