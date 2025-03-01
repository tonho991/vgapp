'use client'

import Input from '@/components/Input'
import { generatePix } from '@/lib/MpPix'
import { useRef } from 'react'
import CurrencyInput from 'react-currency-masked-input'
import ReCAPTCHA from 'react-google-recaptcha'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function Page () {
  const recaptchaRef = useRef(null)

  const handleSubmit = async event => {
    event.preventDefault()

    const data = {
      name: event.target[0].value,
      email: event.target[1].value,
      donation: event.target[2].value,
      recaptcha: recaptchaRef.current.getValue()
    }
    
    const result = await generatePix(data)

    console.log(result)

    const showMessage = result.success ? toast.success : toast.error
    showMessage(result.message)

    recaptchaRef.current.reset()
  }

  return (
    <div className='p-3 flex flex-col w-full items-center justify-center h-svh'>
      <div className='w-full p-3 flex flex-col bg-zinc-800 rounded-md md:w-8/12 lg:w-3/12'>
        <h1 className='text-3xl roboto-black mb-4 text-center'>Fazer Doação</h1>
        <form className='w-full' method='POST' onSubmit={handleSubmit}>
          <Input
            name='name'
            title='Nome'
            placeholder='Fulano de tal'
            required
          />
          <Input
            name='value'
            title='Email'
            type='email'
            placeholder='email'
            required
          />

          <Input
            required
            title='Valor a ser doado (R$)'
            name='donation'
            customInput={
              <CurrencyInput
                name='donation'
                className='py-3 px-4 block w-full border border-sky-400 rounded-lg text-sm 
             focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 
             disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 
             focus:bg-neutral-800'
                placeholder='R$ 00,00'
              />
            }
          />

          <div className='flex flex-col items-center'>
            <ReCAPTCHA
              ref={recaptchaRef}
              size='visible'
              sitekey='6Ldu0ZwqAAAAAPqX__L4l8XL1FVMj-1G44sP1Wsu'
              className='mt-3 mb-3'
            />
            <button
              type='submit'
              className='bg-blue-900 w-full rounded p-3 font-bold shadow hover:bg-blue-700'
            >
              Gerar PIX
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
