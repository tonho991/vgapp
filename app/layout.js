import Toolbar from '@/components/Toolbar'
import '@/styles/globals.css'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'
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
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
      </head>
      <body className={`antialiased`}>
        <ToastContainer
          position='top-right'
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Toolbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
