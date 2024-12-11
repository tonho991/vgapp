import Image from 'next/image'

export default function Home () {
  return (
    <div className="roboto-thin">
      <main className='text-left w-full'>
        <section className='flex w-full flex-col p-8 items-center md:flex-row' id='info'>
          <div>
            <h1 className='text-4xl roboto-black'>VGAPP</h1>
            <h2 className='text-2xl roboto-black'>
              Desenvolvimento de Software
            </h2>
            <p className='mt-3 w-full md:w-96'>
              Crie seu aplicativo e site com a nossa empresa, garantindo
              soluções inovadoras e personalizadas para atender às suas
              necessidades e impulsionar seu sucesso. VGAPP - Desenvolvimento de
              software ágil e de alta qualidade.
            </p>
          </div>
          <div className='w-full flex justify-center me-0 md:flex-row md:me-10 md:justify-end'>
            <Image
              className='object-cover w-96 h-60'
              src='/static/images/app-tamplate.png'
              alt='Aplicativo Tcheu Busu'
              width={1024}
              height={512}
            />
          </div>
        </section>
        <section
          className='flex flex-col items-center w-full bg-gray-800 p-8 md:flex-row md:items-center'
          id='sobre'
        >
          <h1 className='text-2xl roboto-black text-center mb-3 md:text-end md:me-20 md:mb-0'>
            QUEM
            <br />
            SOMOS?
          </h1>
          <div className='w-full flex flex-col items-center md:items-start text-center md:text-start'>
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
          <div className='bg-code-image bg-fixed flex items-center justify-center p-8'>
            <Image
              className='object-contain w-96 h-60  z-10'
              src='/static/images/vgapp-logo.png'
              alt='Aplicativo Tcheu Busu'
              width={200}
              height={200}
            />
          </div>
        </section>
        
      </main>
    </div>
  )
}
