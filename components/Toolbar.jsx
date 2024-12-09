import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function component () {
  return (
    <div className='fixed top-0 left-0 w-full bg-blue-900 text-white shadow-lg z-50 text-center'>
      <div className='container mx-auto p-2'>
        <Link href='/'>
          <img
            className='object-cover h-16 '
            src='/static/images/vgapp-logo-horizontal.png'/>
        </Link>
      </div>
    </div>
  )
}