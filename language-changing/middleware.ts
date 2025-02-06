import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  defaultLocale: "en", // Default language
  locales: ["en", "mn"],
  localePrefix: "always", // Ensures locale is always in the URL
})

export const config = {
  matcher: "/((?!api|_next|...).*)",
}
