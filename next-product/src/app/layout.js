import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Menu from "@/components/Menu"

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div>
          <header>
            <Menu />
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
