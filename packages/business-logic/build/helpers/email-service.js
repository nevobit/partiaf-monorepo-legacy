"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const tslib_1 = require("tslib");
const form_data_1 = tslib_1.__importDefault(require("form-data"));
const mailgun_js_1 = tslib_1.__importDefault(require("mailgun.js"));
const otp_generator_1 = tslib_1.__importDefault(require("otp-generator"));
const mailgun = new mailgun_js_1.default(form_data_1.default);
<<<<<<< HEAD
const DOMAIN = 'realvisionenterprise.com';
const mg = mailgun.client({ username: 'nevobit', key: 'd9ccea9dc3536d3c9366a12a2c993180-523596d9-45da8666' });
=======
const DOMAIN = "nevobit.com";
const mg = mailgun.client({
    username: "nevobit",
    key: "ac76199118f70c0259504fd1dda1ee06-cc9b2d04-8b77b1e9",
});
>>>>>>> b07058b4b9098763529241d613d1277467d67f3e
const sendEmail = async (email) => {
    const code = otp_generator_1.default.generate(6, {
        lowerCaseAlphabets: false,
        upperCaseAlphabets: false,
        specialChars: false,
    });
<<<<<<< HEAD
    const data = {
        from: "noreply@partiaf.com",
        to: email,
        subject: "no-reply",
=======
    console.log({ code });
    const data = {
        from: "noreply@partiaf.com",
        to: email,
        subject: "Verificación del correo electrónico de Partiaf",
>>>>>>> b07058b4b9098763529241d613d1277467d67f3e
        text: "Verificación del correo electrónico de Partiaf",
        html: `
        <div style="width: 600px; background-color: #ffffff; margin: 2rem auto; font-family: sans-serif;">
        <div style="margin: 0 auto; border: 1px solid rgba(0, 0, 0, .1); display: flex; align-items: center; justify-content: center;  padding: 1rem 2rem;">
            <img src="https://i.postimg.cc/ZYdg63tH/logo-part.png" alt="">
        </div>
        <div style=" padding: 1rem 2rem;">
            <h3 style="font-size: 1.2rem; color: rgba(0,0,0, 0.8);">Verificar la direccion de correo electronico</h3>
            <p style="font-size: 14px;">Gracias por iniciar el proceso de creacion de la nueva cuenta de Partiaf. Queremos asegurarnos de que es realmente usted. Ingrese el sigueinte codigo de verificacion cuando se lo solicite. Si no desea crear una cuenta, puede omitir este mensaje</p>
            <h4 style="text-align: center; margin: 0; margin-top: 2rem; margin-bottom: 5px; color: rgba(0,0,0, 0.8);">Codigo de verificacion</h4>
            <h2 style="text-align: center; font-size: 2.2rem; margin: 0;">${code}</h2>
            <p style="text-align: center; margin: 0; margin-bottom: 1rem; font-size: 14px; margin-top: 5px;">(Este codigo es valido durante 1 hora)</p>
        </div>
        <div style="border-top: 1px solid rgba(0,0,0, 0.1);  padding: 1rem 2rem;">
            <p style="font-size: 14px; color:rgba(0,0,0, 0.6);">Partiaf nunca enviara un correo electronico o solicitara que revele o verifique su contrasena, tarjeta de credito o numero de cuenta bancaria.</p>
        </div>

    </div>
    <p style="max-width: 500px; margin: 0 auto; text-align: center; font-family: sans-serif; font-size: 14px; color: rgba(0,0,0, 0.6);">Partiaf, Inc,. &copy; 2023, Partiaf. Todos los derechos reservados. Partiaf es una marca comercial registrada de Partiaf.com</p>

        `,
    };
<<<<<<< HEAD
    mg.messages.create(DOMAIN, data).then((response) => {
        console.log(response);
    }).catch((error) => {
=======
    mg.messages
        .create(DOMAIN, data)
        .then((response) => {
        console.log(response);
        return code;
    })
        .catch((error) => {
>>>>>>> b07058b4b9098763529241d613d1277467d67f3e
        console.error(error);
    });
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=email-service.js.map