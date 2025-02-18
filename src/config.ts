import { LocalePrefix, Pathnames } from "next-intl/routing"

export const locales = ["en", "de", "ar", "ja"] as const

export type Locales = typeof locales

export const pathnames: Pathnames<Locales> = {
  "/": "/",
  "/contact": "/contact"
}

export const localePrefix: LocalePrefix<Locales> = "always"
