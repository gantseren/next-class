export default function Layout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}
