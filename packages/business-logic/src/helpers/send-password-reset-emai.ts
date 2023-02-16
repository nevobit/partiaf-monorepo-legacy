import formData from "form-data";
import Mailgun from "mailgun.js";
import otp from "otp-generator";

const MAILGUL_KEY = process.env.MAILGUL_KEY || "anymailgunparameter";
const mailgun = new Mailgun(formData);
const DOMAIN = "partiaf-api.xyz";
const mg = mailgun.client({
  username: "Partiaf",
  key: MAILGUL_KEY,
});

export const sendPasswordResetEmail = async (
  email: string | undefined
): Promise<string | Error> => {
  const code = otp.generate(6, {
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
    specialChars: false,
  });

  const data = {
    from: "noreply@partiaf.com",
    to: email,
    subject: "Reestablecer contraseña en Partiaf",
    text: "Reestablecer contraseña en Partiaf",
    html: `
      <div style="width: 600px; background-color: #ffffff; margin: 2rem auto; font-family: sans-serif;">
      <div style="margin: 0 auto; border: 1px solid rgba(0, 0, 0, .1); display: flex; align-items: center; justify-content: center;  padding: 1rem 2rem; width:88%">
          <img src="https://i.postimg.cc/RCJDSLMR/logo-partiaf.png" width="250" alt="">
      </div>
      <div style=" padding: 1rem 2rem;">
          <h3 style="font-size: 1.2rem; color: rgba(0,0,0, 0.8);">Reestablecer contraseña en Partiaf</h3>
          <p style="font-size: 14px;">Recibimos una solicitud para reestablecer la contraseña de su cuenta Partiaf. Ingrese el siguiente código de verificación en la página correspondiente para continuar con el proceso.</p>
          <h4 style="text-align: center; margin: 0; margin-top: 2rem; margin-bottom: 5px; color: rgba(0,0,0, 0.8);">Código de verificación</h4>
          <h2 style="text-align: center; font-size: 2.2rem; margin: 0;">${code}</h2>
          <p style="text-align: center; margin: 0; margin-bottom: 1rem; font-size: 14px; margin-top: 5px;">(Este código es válido durante 1 hora)</p>
      </div>
      <div style="border-top: 1px solid rgba(0,0,0, 0.1);  padding: 1rem 2rem;">
      <p style="font-size: 14px; color:rgba(0,0,0, 0.6);">Partiaf nunca enviara un correo electronico o solicitara que revele o verifique su contrasena, tarjeta de credito o numero de cuenta bancaria.</p>
      </div>

  </div>
  <p style="max-width: 500px; margin: 0 auto; text-align: center; font-family: sans-serif; font-size: 14px; color: rgba(0,0,0, 0.6);">Partiaf, Inc,. &copy; 2023, Partiaf. Todos los derechos reservados. Partiaf es una marca comercial registrada de Partiaf.com</p>

      `,
  };

  mg.messages
    .create(DOMAIN, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
      throw new Error(error.message);
    });

  return code;
};
