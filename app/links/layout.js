import Toolbar from '@/components/Toolbar'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify'

export const metadata = {
  title: 'VGAPP',
  description: 'Desenvolvimento de Software'
}

export default function RootLayout ({ children }) {
  return (<div>
    <main className={`antialiased flex flex-col min-h-screen justify-center items-center`}>
      {children}
    </main>
  </div>)
}
