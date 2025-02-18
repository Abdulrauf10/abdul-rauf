import { createLocalizedPathnamesNavigation } from "next-intl/navigation"
import { localePrefix, pathnames, locales } from "./config"

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    localePrefix,
    pathnames,
    locales
  })
