import './globals.css'
import 'animate.css'

import localFont from 'next/font/local'

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const oswald = localFont({
  src: '../public/webfonts/Oswald-VariableFont_wght.ttf',
  variable: '--font-oswald'
})

const hauora = localFont({
  src: '../public/webfonts/Hauora-Regular.otf',
  variable: '--font-hauora'
})

const nordique = localFont({
  src: '../public/webfonts/FontsFree-Net-Nordique-Pro-Bold.ttf',
  variable: '--font-nordique'
})


export const metadata = {
  title: 'Welcome to Aleph coffee van',
  description: 'Aleph Coffee Van is open for all bookings now. You can book with us by sending an email or a text message. ☕️',
  keywords: 'aleph, coffee, van, booking',
  viewport: 'width=device-width, initial-scale=1.0, minimum-scale=1.0' 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      </head>
      <body className={'bg-jud-beige'}>{children}</body>
    </html>
  )
}
