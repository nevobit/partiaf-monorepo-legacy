import * as yup from "yup";

const REQUIRED_MESSAGE = "Este campo es requerido";

const conctatSchema = yup.object({
    firstName: yup.string().required(REQUIRED_MESSAGE),
    lastName: yup.string().required(REQUIRED_MESSAGE),
    email:yup.string().email("Ingrese un email valido").required(REQUIRED_MESSAGE),
    message:yup.string().required(REQUIRED_MESSAGE),
  }).required();

export default conctatSchema