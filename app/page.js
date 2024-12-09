import Image from 'next/image'

export default function Home () {
  return (
    <div className='mt-20 roboto-thin'>
      <main className='text-left w-full'>
        <section className='flex items-center w-full p-8' id='info'>
          <div>
            <h1 className='text-4xl roboto-black'>VGAPP</h1>
            <h2 className='text-2xl roboto-black'>
              Desenvolvimento de Software
            </h2>
            <p className='mt-3 text-wrap w-96'>
              Crie seu aplicativo e site com a nossa empresa, garantindo
              soluções inovadoras e personalizadas para atender às suas
              necessidades e impulsionar seu sucesso. VGAPP - Desenvolvimento de
              software ágil e de alta qualidade.
            </p>
          </div>
          <div className='w-full flex justify-end me-10'>
            <img
              className='object-cover w-96 h-60'
              src='/static/images/app-tamplate.png'
              alt='Aplicativo Tcheu Busu'
            />
          </div>
        </section>
        <section
          className='flex items-center w-full bg-gray-800 p-8'
          id='sobre'
        >
          <h1 className='text-2xl roboto-black text-end me-20'>
            QUEM
            <br />
            SOMOS?
          </h1>
          <div className='w-full'>
            <p className='text-wrap w-7/12'>
              A VGAPP foi fundada em 2021 com o propósito de revolucionar o
              mercado de desenvolvimento de software, trazendo soluções digitais
              que atendem às necessidades reais de nossos clientes.
            </p>
            <p className='text-wrap w-7/12 mt-3'>
              Na VGAPP, transformamos ideias em soluções digitais inovadoras.
              Somos especializados no desenvolvimento de aplicativos para
              Android e web, sempre com foco na eficiência, funcionalidade e
              satisfação dos nossos clientes. Nossa missão é simplificar o
              cotidiano das pessoas e empresas através da tecnologia.
            </p>
          </div>
        </section>
        <section id='logo'>
          <div className='bg-code-image parallax flex items-center justify-center p-8'>
          <img
              className='object-contain w-96 h-60  z-10'
              src='/static/images/vgapp-logo.png'
              alt='Aplicativo Tcheu Busu'
            />
        </div>
        </section>
      </main>
    </div>
  )
}
