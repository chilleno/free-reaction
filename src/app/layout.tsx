import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    template: '%s - Reaction Free',
    default: "Reaction Free - Allow your subscribers to watch your reactions in real-time meanwhile they're watching the original video.",
  },
  description:
    'Discover a platform designed for content creators who value integrity and originality. Explore Reaction Free and unleash your creativity without fear of copyright infringement.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col scroll-smooth">
        {children}
        
      </body>
      <Script src="https://cdn.luckat.me/luckatme.js"></Script>
      <Script id="customscript-luckatme">
        {`
          window.onload = function() {
            initLuckatMe(
                "Hello there! My name is Antonio Gonzalez A.K.A Chilleno, creator of Reaction-free, I hope you like this tool and If you have any questions or suggestions, please click on the link below.",
                "follow me on x!",
                "https://x.com/chillenow",
                "https://avatars.githubusercontent.com/u/127969843?v=4",
            );
          };
        `}
      </Script>
      <Analytics />
    </html>
  )
}
