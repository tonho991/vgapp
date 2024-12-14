import Image from 'next/image'

export default function Footer () {
    const date = new Date();
    const year = date.getFullYear();

  return (
    <div className='w-full p-5 flex items-center justify-center '>
      <Image
        className={`object-contain  left-0 h-16 w-32`}
        src='/static/images/vgapp-logo-horizontal.png'
        width={1024}
        height={512}
        alt='Logo do Site VGAPP'
      />
      <div className='flex flex-col text-xs text-stone-500 ms-2'>
        <p>Email: contato@vgapp.com.br </p>
        <p>Copyright © {year} VGAPP</p>
      </div>
    </div>
  )
}
