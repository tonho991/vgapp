'use client'

import { useState, useRef } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Image from 'next/image'
import ReCAPTCHA from 'react-google-recaptcha'
import Loading from '@/components/Loading'
import Link from 'next/link'

export default function Page () {
  const [loading, setLoading] = useState(false)
  const recaptchaRef = useRef(null)

  const VGInput = ({
    title = '',
    type = '',
    placeholder = '',
    name = '',
    required = false
  }) => (
    <div className='flex flex-col mb-3'>
      <label className='ms-1 font-medium'>
        {required && <span className='me-1 text-red-700'>*</span>}
        {title}
      </label>
      <input
        className='py-3 px-4 block w-full border border-sky-400 rounded-lg text-sm 
                  focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 
                  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 
                  focus:bg-neutral-800'
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
      />
    </div>
  )

  const handleSubmit = async event => {
    event.preventDefault()
    setLoading(true);
    const formData = new FormData(event.target)

    try {
      const recaptchaValue = recaptchaRef.current.getValue()
      if (!recaptchaValue) {
        toast.error('Por favor, complete o ReCaptcha!')
        setLoading(false)
        return
      }

      const response = await fetch('/api/subscription/tcheubusu', {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      const showMessage = result.success ? toast.success : toast.error
      showMessage(result.message)

      if (result.success) {
        event.target.reset()
        recaptchaRef.current.reset()
      }
    } catch (error) {
      console.error('Erro no envio:', error)
      toast.error('Ocorreu um erro ao enviar os dados.')
    } finally {
      setLoading(false)
      recaptchaRef.current.reset()
    }
  }

  return (
    <div className='p-3'>
      <div className='flex flex-col lg:flex-row'>
        <div className='w-full'>
          <h1 className='roboto-black text-3xl text-center lg:text-start lg:text-4xl'>
            Tcheu Busu
          </h1>
          <h3 className='text-1xl text-center lg:text-start'>
            De olho no busão, no tempo certo pra você!
          </h3>

          <h1 className='roboto-black text-xl lg:text-2xl mt-10'>
            O que é Tcheu Busu?
          </h1>
          <p className='text-base lg:w-7/12 mt-2 mb-5 text-zinc-200'>
            &nbsp;O <strong>Tcheu Busu</strong> é um aplicativo desenvolvido
            para facilitar a localização de ônibus em tempo real. Ele permite
            que passageiros compartilhem sua localização enquanto estão dentro
            do ônibus, ajudando outras pessoas a acompanhar o trajeto e o tempo
            estimado de chegada. A ideia principal é promover praticidade e
            eficiência para quem depende do transporte público, reduzindo a
            incerteza sobre horários e trajetos. O app será publicado na Play
            Store e está em fase final de desenvolvimento.
          </p>
          <h1 className='roboto-black text-xl lg:text-2xl mt-10'>
            Quais são os requisitos para ser aprovado?
          </h1>
          <p className='text-base lg:w-7/12 mt-2 mb-5'>
            &nbsp;Para ser um testador do Aplicativo <strong>Tcheu Busu</strong>
            , você deve cumprir os seguintes requisitos:
            <ul className='list-inside list-disc text-zinc-200 pl-5'>
              <li>Celular com Android superior ao 8.1.</li>
              <li>Morar na região de Santo Antônio de Leveger.</li>
              <li>Estar a disposição para realizar testes no aplicativo.</li>
              <li>Preencher todas as informações corretamente.</li>
            </ul>
          </p>
        </div>
        <Image
          className='object-cover w-96 h-60'
          src='/static/images/app-tamplate.png'
          alt='Aplicativo Tcheu Busu'
          width={1024}
          height={512}
          data-aos='fade-left'
        />
      </div>
      <div className='flex flex-col mt-5 w-full items-center'>
        <div className='bg-zinc-800 p-2 w-full rounded-md m-2 lg:w-96 mt-10 shaddow'>
          <h1 className='roboto-black text-2xl text-center m-3'>
            FAZER PRÉ INSCRIÇÃO
          </h1>

          <form className='flex flex-col' method='POST' onSubmit={handleSubmit}>
            <VGInput
              title='Email'
              placeholder='Ex: contato@vgapp.com.br'
              type='email'
              name='email'
              required
            />
            <VGInput
              title='Nome e Sobrenome'
              placeholder='Ex: Fulano de Tal'
              type='text'
              name='name'
              required
            />
            <VGInput
              title='Onde você mora?'
              placeholder='Ex: Varginha'
              type='text'
              name='local'
              required
            />
            <VGInput
              title='Qual é o modelo do seu celular?'
              placeholder='Ex: Samsung Galaxy S24'
              type='text'
              name='model'
              required
            />

            <div className='flex flex-col justify-center items-center'>
              <ReCAPTCHA
                ref={recaptchaRef}
                size='visible'
                sitekey='6Ldu0ZwqAAAAAPqX__L4l8XL1FVMj-1G44sP1Wsu'
                className='mt-3 mb-3'
              />

              <p className='text-xs text-stone-300 text-center mb-3'>
                Ao clicar em "Enviar", você concorda com nossa <br />
                <Link
                  href='/forms/politica-de-privacidade'
                  className='text-blue-500 hover:underline'
                >
                  Política de Privacidade
                </Link>{' '}
                para formulários.
              </p>

              {!loading && (
                <button
                  type='submit'
                  className='bg-blue-900 w-full rounded p-3 font-bold shadow hover:bg-blue-700'
                  disabled={loading}
                >
                  Enviar
                </button>
              )}
              {loading && <Loading />}
            </div>
            <p className='mt-2 text-sm text-stone-300'>
              <span className='me-0.5 text-red-700'>*</span> Obrigatório.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
