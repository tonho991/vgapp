import Icon from '@/components/Icon'
import LinkButton from '@/components/LinkButton'
import { Facebook, Instagram } from '@mui/icons-material'
import { grey } from '@mui/material/colors'
import Image from 'next/image'

export default function Page () {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Image
        className='object-contain w-48 h-32'
        src='/static/images/vgapp-logo-horizontal.png'
        width={300}
        height={300}
        alt='VGAPP Logo'
      />

      <div>
        <LinkButton
          title='Instagram'
          description='Siga nos no Instagram'
          href='https://www.instagram.com/vgapp_'
          icon={<Instagram fontSize='large' sx={{ color: grey[600] }} />}
        />
        <LinkButton
          title='Facebook'
          description='Siga nossa párgina no Facebook'
          href='https://www.facebook.com/profile.php?id=61570739618589'
          icon={<Facebook fontSize='large' sx={{ color: grey[600] }} />}
        />
        <LinkButton
          title='Tcheu Busu'
          description='Inscreva-se para o acesso ao Tcheu Busu'
          href='/tcheu-busu'
          icon={
            <Icon
              name='directions_bus'
              from='google'
              size='4xl'
              animation='none'
              color='#757575'
            />
          }
        />
        <LinkButton
          title='Site'
          description='Conheça nosso site'
          href='/'
          icon={
            <Icon
              name='language'
              from='google'
              size='4xl'
              animation='none'
              color='#757575'
            />
          }
        />
         <LinkButton
          title='Entre em contato'
          description='Fale conosco'
          href='mailto:contato@vgapp.com.br'
          icon={
            <Icon
              name='mail'
              from='google'
              size='4xl'
              animation='none'
              color='#757575'
            />
          }
        />
      </div>
    </div>
  )
}
