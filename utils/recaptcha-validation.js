const recaptchaSecret = "6Ldu0ZwqAAAAABOdRhrHoxHdb3do9OeHHdsENuPP";

const url = "https://www.google.com/recaptcha/api/siteverify";

export async function checkReCaptchaCode(code) {
  if (!code || code.trim() === "" || code === undefined) {
    return {
      success: false,
      message: "Falha na validação do reCaptcha, invalid code.",
    };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Accept": "*/*",
        "Cache-Control": "no-cache",
        "Accept-Encoding": "gzip, deflate",
        "Connection": "keep-alive",
      },
      body: new URLSearchParams({
        secret: recaptchaSecret,
        response: code,
      }),
    });

    const validation = await response.json();

    return {
      success: validation.success,
      message: !validation.success ? "Falha na validação do reCaptcha" : "",
    };
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
}
