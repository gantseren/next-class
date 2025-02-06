"use client"
import { Locale, usePathname, useRouter } from "@/i18n/routing"

import { useLocale } from "next-intl"

import { useParams } from "next/navigation"

const locales = ["en", "mn"] // Supported locales directly here

export default function LanguageSwitcher() {
  const locale = useLocale() // Get current locale

  const router = useRouter()

  const pathname = usePathname() // Get current path

  const params = useParams()

  const handleLanguageChange = (lang: string) => {
    const nextLocale = lang as Locale

    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`

      // are used in combination with a given `pathname`. Since the two will

      // always match for the current route, we can skip runtime checks.

      { pathname, params },

      { locale: nextLocale }
    )
  }

  return (
    <div className='flex space-x-4'>
      {locales.map((lang) => (
        <button
          key={lang}
          onClick={() => handleLanguageChange(lang)}
          className={`px-4 py-2 rounded ${
            locale === lang ? "bg-blue-600" : "bg-gray-500 hover:bg-gray-600"
          } text-white`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
