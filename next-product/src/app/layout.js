import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Menu from "@/components/Menu"

export const metadata = {
  title: "my product",
  description: "you do buy my store ",
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='description' content='This is an awesome Next.js app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content='My Awesome Next.js App' />
        <meta
          property='og:description'
          content='This is an awesome Next.js app'
        />
        <meta property='og:image' content='/product.png' />
        <meta property='og:url' content='' />
        <link rel='icon' href='/favicon.ico' type='image/x-icon' sizes='any' />
        <link
          rel='stylesheet'
          type='text/css'
          charset='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </head>
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
