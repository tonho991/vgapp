import { NextResponse } from 'next/server'
import { templateSubscriptionTcheuBusu } from '@/utils/email-template'
import { sendMail } from '@/utils/email-sender'
import { checkReCaptchaCode } from '@/utils/recaptcha-validation'
import { saveForm } from '@/utils/firebase'

export async function POST (req) {
  try {
    const formData = await req.formData()
    const { success, errorMessage } = validateFormData(formData)

    if (!success) {
      return NextResponse.json(
        { message: errorMessage, success: false },
        { status: 400 }
      )
    }

    const {
      name,
      email,
      local,
      model,
      'g-recaptcha-response': captchaCode
    } = Object.fromEntries(formData)

    const recaptchaValidation = await checkReCaptchaCode(captchaCode)
    if (!recaptchaValidation.success) {
      return NextResponse.json(recaptchaValidation, { status: 400 })
    }

    const formResult = await saveForm(
      { name, email, local, model },
      'tcheubusu'
    )

    if (formResult.success) {
      await sendMailAsync({
        to: email,
        subject: 'Inscrição do app Tcheu Busu',
        body: templateSubscriptionTcheuBusu({ name, email, local, model })
      })
    }

    return NextResponse.json(formResult)
  } catch (error) {
    console.error('Erro no processamento da solicitação:', error)
    return NextResponse.json(
      {
        message: 'Ocorreu um erro ao processar sua solicitação.',
        success: false
      },
      { status: 500 }
    )
  }
}

function validateFormData (formData) {
  const requiredFields = [
    'name',
    'email',
    'local',
    'model',
    'g-recaptcha-response'
  ]
  for (const field of requiredFields) {
    if (!formData.get(field)) {
      return {
        success: false,
        errorMessage: `Parâmetro obrigatório ausente: ${field}`
      }
    }
  }
  return { success: true }
}

async function sendMailAsync (mailOptions) {
  return new Promise((resolve, reject) => {
    sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Erro ao enviar e-mail:', err)
        reject(new Error('Erro ao enviar e-mail.'))
      } else {
        console.log('E-mail enviado com sucesso:', info)
        resolve(info)
      }
    })
  })
}
