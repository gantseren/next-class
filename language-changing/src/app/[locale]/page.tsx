"use client"

import { useTranslations } from "next-intl"

const HomePage = () => {
  const t = useTranslations()

  return (
    <main className='flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-2xl font-bold'>{t("greeting")}</h1>
      <div>
        <p>{t("description")}</p>
      </div>
    </main>
  )
}

export default HomePage
