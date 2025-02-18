import { getRequestConfig } from "next-intl/server"

export default getRequestConfig(async ({ locale }) => {
  // if (!locales.includes(locale)) notFound()

  return {
    timeZone: "Asia/Jakarta",
    messages: (await import(`./messages/${locale}.json`)).default
  }
})
