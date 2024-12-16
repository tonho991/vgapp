const recaptchaKey = process.env["RECAPTCHA_SECRET_KEY"]

const url = key =>
  `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaKey}&response=${key}`

export async function checkReCaptchaCode (key) {

  if(!key || key.trim() === ""){
    return {
      success: false,
      message: 'Falha na validação do reCaptcha',
    }
  }

  let response = await fetch(url(key), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
    },
    method: 'POST'
  })

  const validation = await response.json()

  

  return {
    success: validation.success,
    message: !validation.success ? 'Falha na validação do reCaptcha' : '',
  }
}
