import Toolbar from '@/components/Toolbar'
import './globals.css'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'VGAPP',
  description: 'Desenvolvimento de Software'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='pt-br'>
      <head>
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
        <script
          src='https://kit.fontawesome.com/e54515a2cc.js'
          crossOrigin='anonymous'
        ></script>
      </head>
      <body className={`antialiased`}>
        <Toolbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
