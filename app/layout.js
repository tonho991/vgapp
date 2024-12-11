import Toolbar from '@/components/Toolbar'
import './globals.css'

export const metadata = {
  title: 'VGAPP',
  description: 'Desenvolvimento de Software'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='pt-br'>
      <body className={`antialiased`}>
        <Toolbar />
        {children}
      </body>
    </html>
  )
}
