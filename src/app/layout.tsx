import type { Metadata } from "next"
import "@shared/styles/globals.css"
import { config, sharedMetadata, fonts } from "@shared/libs"
import { PosthogProvider } from "@shared/providers"
import { Footer, Header, Toaster } from "@shared/components"

export const metadata: Metadata = {
  title: "Stunning Website Templates & Components | Creevoo",
  description:
    "Kickstart your website with prebuilt templates with premium quality that easily to customise and support multiple platform includig framer, webflow, wordpress, shopify and custom code.",
  openGraph: {
    ...sharedMetadata.openGraph,
    title: "Stunning Website Templates & Components | Creevoo",
    description:
      "Kickstart your website with prebuilt templates with premium quality that easily to customise and support multiple platform includig framer, webflow, wordpress, shopify and custom code.",
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: "Stunning Website Templates & Components | Creevoo",
    description:
      "Kickstart your website with prebuilt templates with premium quality that easily to customise and support multiple platform includig framer, webflow, wordpress, shopify and custom code.",
  },
  applicationName: "Explore curated website templates & components - Creevoo",
  keywords: [
    "Website templates",
    "Landing page templates",
    "Blog templates",
    "Portfolio templates",
    "Business templates",
    "Framer templates",
    "Tailwind templates",
    "React templates",
    "Next templates",
    "Webflow templates",
    "Custom templates",
    "Framer",
    "Webflow",
    "Wix",
    "Shopify",
    "Templates",
    "Components",
    "Website component",
    "Sections",
  ],
  authors: [{ name: "Nyoman Sunima", url: "https://www.nyomansunima.one" }],
  publisher: "Nyoman Sunima",
  creator: "Nyoman Sunima",
  alternates: {
    canonical: new URL(config.app.host),
  },
  category: "Website",
  generator: "Next.js",
  robots: "index, follow",
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.inter.variable} ${fonts.jetBrainsMono.variable}`}
    >
      <PosthogProvider>
        <body>
          <Header />
          <main className="min-h-screen pt-10 pb-28 tablet:pb-56">
            {children}
          </main>
          <Footer />
          <Toaster />
        </body>
      </PosthogProvider>
    </html>
  )
}
