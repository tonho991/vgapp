'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

export default function Toolbar () {
  const [isScrolled, setScrollY] = useState([true])

  const onScroll = useCallback(event => {
    const { scrollY } = window
    setScrollY(scrollY >= 120)
  })

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })


    return () => {
      window.removeEventListener('scroll', onScroll, { passive: true })
    }
  }, [onScroll])

  return (
    <div
      className={`sticky top-0 left-0 w-full text-white flex items-center roboto-thin ${
        isScrolled ? 'bg-blue-900 shadow-lg z-50' : ''
      }`}
    >
      <div
        className={`p-1 w-full flex ${
          isScrolled ? 'justify-start' : 'justify-center'
        }`}
      >
        <Link href='/'>
          <Image
            className={`object-contain  left-0 h-16 w-32`}
            src='/static/images/vgapp-logo-horizontal.png'
            width={1024}
            height={512}
            alt='Logo do Site VGAPP'
    
          />
        </Link>
      </div>
      <div
        className={`w-full flex justify-end me-3 md:me-20 ${
          isScrolled ? 'visible' : 'hidden'
        }`}
      >
        <Link href='mailto:contato@vgapp.com.br'>
          <div
            className={`bg-white p-1.5 w-40 text-center rounded-full  shadow-md hover:bg-gray-200 hover:shadow-lg`}
          >
            <p className='roboto-medium text-black'>Fale Conosco</p>
          </div>
        </Link>
      </div>
    </div>
  )
}
