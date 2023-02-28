import { Collection, getModel } from "@partiaf/constant-definitions";
import { User, UserSchemaMongo } from "@partiaf/types";
import twilio from 'twilio';
import otpGenerator from 'otp-generator'

const accountSid = "AC3427e300863332c60901d6618b308d23";
const authToken = "9cf19a9c944467c89d3daef3864326fa";

const client = new twilio.Twilio (accountSid, authToken)
type PartialUser = Partial<User>;

export const resetPassword = async ({phone}: PartialUser): Promise<any> => {
    const model = await getModel(Collection.USERS, UserSchemaMongo)

    const user = await model.findOne({phone: phone});

    const code = otpGenerator.generate(6, {specialChars: false, digits: true, lowerCaseAlphabets: false, upperCaseAlphabets: false})
    
    
    if(user){
        user.verification_code = code;
        await user.save();
        client.messages.create({body: `Tu codigo de verificacion es ${code}`, from: "+12763294616", to: `+57${phone}`}).then(message => console.log(message.sid))
        return "Codigo enviado"
    }else{
        throw new Error("Usuario no encontrado")
    }
}