// Importações principais
'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Link from 'next/link'
import Icon from '@/components/Icon'

// Dados externos
const icons = [
  { name: 'java', wordmarker: true },
  { name: 'nextjs', wordmarker: true },
  { name: 'nodejs', wordmarker: true },
  { name: 'html5', wordmarker: true },
  { name: 'css3', wordmarker: true },
  { name: 'javascript', wordmarker: false },
  { name: 'tailwindcss', wordmarker: true },
  { name: 'firebase', wordmarker: true },
  { name: 'sqlite', wordmarker: true },
  { name: 'android', wordmarker: false },
  { name: 'androidstudio', wordmarker: true },
  { name: 'vscode', wordmarker: true }
]

const projects = [
  {
    name: 'API | Pesquisa de Biblioteca do Gradle',
    repo: 'https://github.com/tonho991/jcode',
    url: 'https://replit.com/@vgapp/gfind',
    icon: 'nodejs'
  },
  {
    name: 'APP | Leitor de Notificações',
    repo: 'https://github.com/tonho991/vgassist',
    url: 'https://github.com/tonho991/vgassist/releases',
    icon: 'java'
  },
  {
    name: 'Site | Donuts Delights (Projeto de Curso)',
    repo: 'https://github.com/tonho991/vgassist',
    url: 'https://donut-delights-ten.vercel.app/',
    icon: 'html5'
  },
  {
    name: 'Site | Verdão Materiais para Construção',
    repo: 'https://github.com/tonho991/verdao-materiais',
    url: 'https://verdao-materiais.vercel.app/',
    icon: 'html5'
  }
]

// Componentes reutilizáveis

const IconList = () => (
  <div className='bg-neutral-700 p-3 rounded-md mt-2 overflow-x-auto'>
    <div className='grid grid-cols-4 gap-4 md:grid-cols-5 xl:flex'>
      {icons.map((icon, index) => (
        <Icon
          key={icon.name}
          name={icon.name}
          wordmarker={icon.wordmarker}
          delay={index * 200}
        />
      ))}
    </div>
  </div>
)

const Projects = () => (
  <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:flex mt-5'>
    {projects.map((project, index) => (
      <div
        key={project.name}
        className='mb-3 flex flex-col justify-center items-center bg-stone-800 p-3 rounded-xl xl:m-5'
        data-aos='fade-right'
        data-aos-delay={index * 200}
      >
        <Icon
          name={project.icon}
          wordmarker={true}
          color='sky-600'
          className='bg-stone-700 p-2 rounded-lg'
        />
        <h1 className='text-sm w-40 text-center mt-2'>{project.name}</h1>
        <LinkButton
          href={project.repo}
          icon='github'
          text='Acessar Repositório'
        />
        <LinkButton
          href={project.url}
          icon='link'
          text='Acessar Projeto'
          from='google'
        />
      </div>
    ))}
  </div>
)

const LinkButton = ({ href, icon, text, from = 'devicon' }) => (
  <Link
    href={href}
    target='_blank'
    className='flex justify-center w-full items-center mt-2 bg-blue-800 p-2 rounded-xl hover:bg-blue-600'
  >
    <Icon name={icon} from={from} animation='none' size='1xl' sizemd='1xl' />
    <p className='text-sm ms-1'>{text}</p>
  </Link>
)

const Card = ({ title, message }) => (
  <div
    className='bg-blue-800 shadow-2xl p-3 w-72 h-80 text-center rounded-lg mb-3 flex flex-col justify-center items-center xl:m-5'
    data-aos='flip-right'
  >
    <h1 className='text-2xl roboto-bold mb-2'>{title}</h1>
    <div>{message}</div>
  </div>
)

// Componente principal
export default function Home () {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out-sine'
    })
  }, [])

  return (
    <div className='roboto-thin'>
      <main className='text-left w-full'>
        <SectionInfo />
        <SectionSobre />
        <SectionCards />
        <SectionLogo />
        <SectionTecnologias />
        <SectionProjetos />
      </main>
    </div>
  )
}

// Subcomponentes de Seção
const SectionInfo = () => (
  <section className='flex flex-col p-8 items-center md:flex-row' id='info'>
    <div>
      <h1 className='text-4xl roboto-black'>VGAPP</h1>
      <h2 className='text-2xl roboto-black'>Desenvolvimento de Software</h2>
      <p className='mt-3 w-full md:w-96'>
        Crie seu aplicativo e site com a nossa empresa, garantindo soluções
        inovadoras e personalizadas para atender às suas necessidades.
      </p>
    </div>
    <div className='w-full flex justify-center md:justify-end'>
      <Image
        className='object-cover w-96 h-60'
        src='/static/images/app-tamplate.png'
        alt='Aplicativo Tcheu Busu'
        width={1024}
        height={512}
        data-aos='fade-left'
      />
    </div>
  </section>
)

const SectionSobre = () => (
  <section
    className='flex flex-col items-center w-full bg-zinc-800 p-8 md:flex-row'
    id='sobre'
    data-aos='fade-right'
  >
    <h1 className='text-2xl roboto-black text-center mb-3 '>QUEM SOMOS?</h1>
    <div className='flex flex-col items-center text-center xl:text-start'>
      <p className='text-wrap w-7/12'>
        A VGAPP foi fundada em 2021 com o propósito de revolucionar o mercado de
        desenvolvimento de software, trazendo soluções digitais que atendem às
        necessidades reais de nossos clientes.
      </p>
      <p className='text-wrap w-7/12 mt-3'>
        Na VGAPP, transformamos ideias em soluções digitais inovadoras. Somos
        especializados no desenvolvimento de aplicativos para Android e web,
        sempre com foco na eficiência, funcionalidade e satisfação dos nossos
        clientes. Nossa missão é simplificar o cotidiano das pessoas e empresas
        através da tecnologia.
      </p>
    </div>
  </section>
)

const SectionCards = () => (
  <section
    id='visao'
    className='p-5 w-full flex flex-col justify-center mt-16 mb-16 lg:flex-row'
  >
    <Card
      title='Visão'
      message='Ser referência local em desenvolvimento de aplicativos, reconhecida pela excelência e inovação.'
    />
    <Card
      title='Missão'
      message='Oferecer soluções digitais criativas e funcionais, conectando pessoas e empresas, sempre com um compromisso com a qualidade, agilidade e impacto positivo na sociedade.'
    />
    <Card
      title='Valores'
      message={
        <ul className='list-inside list-disc text-start'>
          <li>Inovação</li>
          <li>Qualidade</li>
          <li>Compromisso</li>
          <li>Parceria</li>
        </ul>
      }
    />
  </section>
)

const SectionLogo = () => (
  <section id='logo'>
    <div className='bg-code-image bg-fixed flex items-center justify-center p-8'>
      <Image
        className='object-contain w-96 h-60  z-10'
        src='/static/images/vgapp-logo.png'
        alt='Aplicativo Tcheu Busu'
        width={200}
        height={200}
        data-aos='flip-left'
      />
    </div>
  </section>
)

const SectionTecnologias = () => (
  <section
    id='languages'
    className='p-10 flex flex-col items-center justify-center w-full mt-10 mb-10'
  >
    <h1 className='roboto-bold text-stone-400 text-center'>
      TECNOLOGIAS UTILIZADAS POR NÓS
    </h1>
    <IconList />
  </section>
)

const SectionProjetos = () => (
  <section
    id='projetos'
    className='p-2 flex flex-col items-center justify-center w-full mt-10 mb-10'
  >
    <h1 className='roboto-bold text-stone-400 text-center'>
      PROJETOS DESENVOLVIDOS
    </h1>
    <Projects />
  </section>
)
