"use client"

import { useLocale } from "next-intl"
import { useRouter } from "next/navigation"
import { ChangeEvent, useTransition } from "react"

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const localeActive = useLocale()

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value
    startTransition(() => {
      router.replace(`/${nextLocale}`)
    })
  }

  return (
    <div className="relative inline-block">
      <label className="flex items-center space-x-2 border rounded-md px-4 py-2 bg-gray-50 text-gray-700 hover:shadow focus-within:ring-2 focus-within:ring-blue-500">
        <span className="sr-only">Change language</span>
        <select
          defaultValue={localeActive}
          onChange={onSelectChange}
          disabled={isPending}
          className="bg-transparent outline-none text-gray-900 py-1"
        >
          <option value="en">English 🇺🇸</option>
          <option value="ar">العربية 🇸🇦</option>
          <option value="de">Deutsch 🇩🇪</option>
          <option value="ja">日本語 🇯🇵</option>
        </select>
      </label>
    </div>
  )
}
