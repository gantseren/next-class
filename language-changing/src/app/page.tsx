"use client"
import LanguageSwitche from "@/components/LanguageSwitcher"
import { useTranslation } from "react-i18next"

const HomePage = () => {
  const { t } = useTranslation("common")

  return (
    <div>
      <h1>{t("greeting")}</h1>
      <p>{t("description")}</p>
      <LanguageSwitche />
    </div>
  )
}

export default HomePage
