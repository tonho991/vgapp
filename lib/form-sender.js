export async function sendForm ({
  formData = {},
  path = '',
  recaptcha = {
    value: '',
    required: false
  },
  requiredFields = [null]
}) {
  try {
    if (!path) {
      return {
        success: false,
        message: 'Ocorreu um erro ao processar sua solicitação.'
      }
    }

    if (!formData) {
      return {
        success: false,
        message: 'Ocorreu um erro ao processar sua solicitação.'
      }
    }

    if (recaptcha.required && !recaptcha.value) {
        return {
          success: false,
          message: 'Por favor, complete o reCaptcha.'
        }
      }

  
    if (requiredFields) {
      const validation = validateFields(formData, requiredFields)
      if (!validation.success) {
        return validation
      }
    }

    const response = await fetch(`/api/forms/${path}`, {
      method: 'POST',
      body: formData
    })

    const result = await response.json()

    return result
  } catch (error) {
    console.error('Erro no processamento da solicitação:', error)
    return {
      success: false,
      message: `Ocorreu um erro ao processar sua solicitação.\n${error}`
    }
  }
}

export function validateFields (fields, requiredFields) {
  for (const field of requiredFields) {
    if (!fields.get(field)) {
      return {
        success: false,
        message: 'Por favor, preencha todos os campos obrigatórios.'
      }
    }
  }
  return { success: true }
}
