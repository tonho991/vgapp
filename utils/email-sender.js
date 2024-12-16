import nodemailer from 'nodemailer'

export async function sendMail ({ to, subject, body }, callback) {
  const email = process.env['NOREPLY_EMAIL']
  const password = process.env['NOREPLY_PASSWORD']

  let transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    secure: true,
    port: 465,
    auth: { user: email, pass: password }
  })

  console.log({
    user: email,
    pass: password
  })

  const mailOptions = {
    from: `"VGAPP" <${email}>`,
    to: to,
    subject: subject,
    html: body
  }

  return await transporter.sendMail(mailOptions, callback)
}