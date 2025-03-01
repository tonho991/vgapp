// import { MercadoPagoConfig, Payment } from "mercadopago";

import { NextResponse } from "next/server";

// const client = new MercadoPagoConfig({
//     accessToken: process.env.MP_TOKEN,
//     options: {
//         timeout: 5000,
//         idempotencyKey: "abc"
//     }
// });

// const payment = new Payment(client);

export async function POST(req) {
  console.log(req)
  const form = await req.formData();

  if (!form) {
    return NextResponse.json(
      { message: "Formulário inválido", success: false },
      { status: 400 }
    );
  }

  const { name, email, donation } = Object.fromEntries(form);

  if (!name || !email || !donation) {
    return NextResponse.json(
      { message: "Formulário inválido", success: false },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: `Doação de ${donation} recebida com sucesso!`,
    success: true,
  });
}
