const date = new Date();
const year = date.getFullYear();

export const header = () => {
  return `
        <div style="background: #1E3A8A; max-width: 600px; text-align: center; padding: 20px;">
          <img src="https://vgapp.com.br/_next/image?url=%2Fstatic%2Fimages%2Fvgapp-logo-horizontal.png&w=1080&q=75" style="width: 150px; height: 100px; object-fit: contain;" alt="VGAPP Logo"/>
        </div>
      `
}

export const footer = () => {
  return `
        <div style="text-align: center; padding: 20px; background-color: #f9f9f9; color: #555;">
          <p style="font-size: 14px;">Obrigado,</p>
          <p style="font-weight: bold;">Equipe VGAPP ${year}</p>
          <p style="font-size: 12px; color: #27272A;">
            Por favor, não responda este e-mail. Em caso de dúvidas, entre em contato conosco através do e-mail: 
            <a href="mailto:contato@vgapp.com.br" style="color: #1E3A8A;">contato@vgapp.com.br</a>.
          </p>
        </div>
      `
}

const body = ({ name, email, local, model }) => {
  let fName = name.includes(' ') ? name.substring(0, name.indexOf(' ')) : name

  return `
          <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
            <h1 style="text-align: center; color: #333;">Olá, ${fName}!</h1>
            <p style="text-align: center; color: #555;">Sua inscrição para acessar o aplicativo <strong>Tcheu Busu</strong> foi enviada para análise. Você receberá uma resposta em até 24 horas. Fique Atento!</p>
            
            <div style="margin-top: 30px; border-top: 2px solid #1E3A8A; padding-top: 20px; color: #333;">
              <h4 style="margin-bottom: 10px; color: #1E3A8A;">Formulário Enviado:</h4>
              <ul style="list-style: none; padding: 0;">
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Nome:</strong> ${name}</li>
                <li><strong>Local:</strong> ${local}</li>
                <li><strong>Modelo de Celular:</strong> ${model}</li>
              </ul>
            </div>
          </div>
        `
}

export const templateSubscriptionTcheuBusu = formData =>
  `<body style="background: #0A0A0A; color: #fff;">
        ${header()}
        ${body(formData)}
        ${footer()}
      </body>`
