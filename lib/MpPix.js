import { checkReCaptchaCode } from "@/utils/recaptcha-validation";
import { MercadoPagoConfig, Payment } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_TOKEN,
  options: { timeout: 5000, idempotencyKey: "abc" },
});
const payment = new Payment(client);

export async function generatePix({
  name = "",
  email = "",
  donation = "",
  recaptcha = "",
}) {
  // const recaptchaValidation = await checkReCaptchaCode(recaptcha);
  // if (!recaptchaValidation.success) {
  //   return recaptchaValidation;
  // }


  const body = {
    transaction_amount: parseFloat(donation),
    description: "Doação",
    payment_method_id: "pix",
    payer: {
      email: email,
    },
  }

  const data = await payment.create(body);

  return {
    success: true,
    message: "Pix gerado com sucesso",
    data
  };
}
