import * as React from 'react'
import type { Metadata } from 'next'
import '@shared/styles/globals.css'
import { config, sharedMetadata } from '@shared/libs'
import { Analytics as VercelAnalytics } from '@vercel/analytics/react'
import { ThemeProvider, PosthogProvider } from '@shared/providers'
import { Footer, Header, Toaster, CenteredLayout } from '@shared/components'
import { fonts } from '@shared/fonts'

export const metadata: Metadata = {
  title: 'Stunning Website Templates - Creevoo',
  description:
    'Get free and use stunning website template for your landing page, blog, portfolio and business',
  openGraph: {
    ...sharedMetadata.openGraph,
    title: 'Stunning Website Templates - Creevoo',
    description:
      'Get free and use stunning website template for your landing page, blog, portfolio and business',
  },
  twitter: {
    ...sharedMetadata.twitter,
    title: 'Stunning Website Templates - Creevoo',
    description:
      'Get free and use stunning website template for your landing page, blog, portfolio and business',
  },
  applicationName: 'Explore Stunning Website Templates - Creevoo',
  keywords: [
    'Website templates',
    'Landing page templates',
    'Blog templates',
    'Portfolio templates',
    'Business templates',
    'Framer templates',
    'Tailwind templates',
    'React templates',
    'Next templates',
    'Webflow templates',
    'Custom templates',
    'Framer',
    'Webflow',
    'Wix',
    'Shopify',
    'Templates',
  ],
  authors: [{ name: 'Nyoman Sunima', url: 'https://www.nyomansunima.one' }],
  publisher: 'Nyoman Sunima',
  creator: 'Nyoman Sunima',
  metadataBase: new URL(config.app.host),
  verification: {
    google: config.verification.google,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fonts.inter.variable}`}
    >
      <PosthogProvider>
        <body suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem={false}
            disableTransitionOnChange
          >
            <CenteredLayout>
              <Header />
              <main className="min-h-screen tablet:pt-10 pb-28 tablet:pb-56">
                {children}
              </main>
              <Footer />
            </CenteredLayout>

            <Toaster />
          </ThemeProvider>

          <VercelAnalytics />
        </body>
      </PosthogProvider>
    </html>
  )
}
