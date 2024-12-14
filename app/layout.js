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
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=link'
        />
      </head>
      <body className={`antialiased`}>
        <Toolbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
