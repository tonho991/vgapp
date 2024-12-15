import { Instagram, Mail } from '@mui/icons-material'
import { grey, pink } from '@mui/material/colors'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className='w-full p-5 flex items-center justify-start lg:justify-center '>
      <Image
        className={`object-contain  left-0 h-16 w-32`}
        src='/static/images/vgapp-logo-horizontal.png'
        width={1024}
        height={512}
        alt='Logo do Site VGAPP'
      />
      <div className='text-xs text-stone-500 ms-2'>
        <p>
          Email:{' '}
          <Link href='mailto:contato@vgapp.com.br'>contato@vgapp.com.br </Link>
        </p>
        <p>Copyright © {year} VGAPP</p>
      </div>
      <div className='flex ms-10'>
        <Link href='https://www.instagram.com/vgapp_/' target='blank'>
          <Instagram fontSize='medium' sx={{ color: grey[700] }} />
        </Link>
        <Link href='mailto:contato@vgapp.com.br' className='ms-2'>
          <Mail fontSize='medium' sx={{ color: grey[700] }} />
        </Link>
      </div>
    </div>
  )
}
