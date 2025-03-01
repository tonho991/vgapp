import { checkReCaptchaCode } from '@/utils/recaptcha-validation'
import { NextResponse } from 'next/server'

export async function POST (req) {
  try {
    if (req.method != 'POST') {
      return new NextResponse(
        (
          <>
            <h1>405</h1>
            <p>Not Allowed</p>
          </>
        ),
        { status: 405 }
      )
    }
    const body = await req.json()
    const { code } = body

    const recaptchaValidation = await checkReCaptchaCode(code)
    return NextResponse.json(recaptchaValidation)
  } catch (e) {
    console.error(e)
    return NextResponse.json(
      {
        message: 'Ocorreu um erro ao processar sua solicitação.',
        success: false
      },
      { status: 500 }
    )
  }
}
