import { GitHub, Instagram, Mail, YouTube } from '@mui/icons-material'
import { grey, pink } from '@mui/material/colors'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <div className='w-full p-5 bg-zinc-800'>
      <div className='flex justify-center'>
        <Image
          className={`h-32 w-56 object-contain`}
          src='/static/images/vgapp-logo-horizontal.png'
          width={1024}
          height={512}
          alt='Logo do Site VGAPP'
        />
      </div>
      <div>
        <div className='w-full h-0.5 bg-stone-700 mb-5'></div>
        <h1 className='roboto-bold mb-2'>Redes Sociais</h1>
        <div className='flex mb-5 '>
          <Link href='mailto:contato@vgapp.com.br'>
            <Mail
              fontSize='medium'
              sx={{ color: grey[400] }}
              className='hover:text-blue-600'
            />
          </Link>
          <Link
            href='https://www.instagram.com/vgapp_/'
            target='blank'
            className='ms-2'
          >
            <Instagram
              fontSize='medium'
              sx={{ color: grey[400] }}
              className='hover:text-blue-600'
            />
          </Link>
          <Link href='https://www.youtube.com/@vgapp_sw' className='ms-2'>
            <YouTube
              fontSize='medium'
              sx={{ color: grey[400] }}
              className='hover:text-blue-600'
            />
          </Link>
          <Link href='https://github.com/tonho991' className='ms-2'>
            <GitHub
              fontSize='medium'
              sx={{ color: grey[400] }}
              className='hover:text-blue-600'
            />
          </Link>
        </div>
      </div>

      <div className='text-xs text-center text-zinc-500 ms-2 roboto-base'>
        <Link href='mailto:contato@vgapp.com.br'>contato@vgapp.com.br </Link>
        <p>Copyright © {year} VGAPP</p>
      </div>
    </div>
  )
}
