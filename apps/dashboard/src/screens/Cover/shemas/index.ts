import { object, string, number, boolean } from "yup";

const ThereAreNumber= (value: string | undefined) => {
  if (value) {
    const regex = new RegExp(/\d+/g);
    const tes= regex.test(value) && value!=="0"
    return tes;
  }
  return true;
}

const coverShemas=object({
    name: string().required("El nombre es requerido"),
    type: string().required("El tipo es requerido"),
    date: string().required("La fecha es requerida"),
    limit: string().test("there-are-a-number", "El cupo total es requerido", (value)=> ThereAreNumber(value)).required("El cupo total es requerido"),
    initial_limit: string().required("El limite inicial es requerido"),
    hour: string().required("La hora es requerida"),
    description: string().required("La descripción es requerida"),
    image: string().optional().test("is-a-imahe-jpg-svg-png", "La imagen debe estar en formato .jpg, .svg o .png", (value)=> Boolean(value === undefined) || value?.includes("jpg") || value?.includes("webp") || value?.includes("svg") || value?.includes("png") || value?.includes("jpeg")).optional(),
    percentage: string().test("there-are-number", "El porcentaje es requerido", (value)=> ThereAreNumber(value)).required("El porcentaje es requerido"),
    status: boolean().required("El estado es requerido"),
    location:object( { lat: number(), lng: number() }).required("La ubicación es requerida"),
    price: string().test("there-are-a-number", "El precio es requerido",(value)=> ThereAreNumber(value)).required( "El precio es requerido"),
    store: string(),
    uuid: string(),
  })

export default coverShemas
