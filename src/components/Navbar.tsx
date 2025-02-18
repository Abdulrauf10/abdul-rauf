"use client"

import LocalSwitcher from "./LocalSwitcher"

export default function Navbar() {
  return (
    <div className="sticky top-0">
      <div className="p-[10px] bg-[#5289B1]  lg:pr-[80px] pr-[30px] w-full flex justify-end">
        <LocalSwitcher />
      </div>
    </div>
  )
}
