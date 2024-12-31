export const metadata = {
  title: 'VGAPP',
  description: 'Desenvolvimento de Software'
}

export default function RootLayout ({ children }) {
  return (
    <div>
      <main
        className={`antialiased flex flex-col lg:min-h-screen justify-center items-center`}
      >
        {children}
      </main>
    </div>
  )
}
