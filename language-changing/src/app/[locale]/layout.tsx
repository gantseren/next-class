import LanguageSwitcher from "@/components/LanguageSwitcher"
import { NextIntlClientProvider } from "next-intl"

import { getMessages, setRequestLocale } from "next-intl/server"

export default async function LocaleLayout({
  children,

  params: { locale },
}: {
  children: React.ReactNode

  params: { locale: string }
}) {
  setRequestLocale(locale)

  const messages = await getMessages()

  return (
    <html lang={locale || "mn"}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <LanguageSwitcher />

          <main>{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
