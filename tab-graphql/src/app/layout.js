"use client"

import "./globals.css"
import { ApolloProvider } from "@apollo/client"
import client from "@/lib/apolloClient"
import "bootstrap/dist/css/bootstrap.min.css"

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`antailiased`}>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </body>
    </html>
  )
}
