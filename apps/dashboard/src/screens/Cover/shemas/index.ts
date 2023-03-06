import { object, string, number, boolean } from "yup";

const coverShemas=object({
    name: string().required("El nombre es requerido"),
    type: string().required("El tipo es requerido"),
    date: string().required("La fecha es requerida"),
    limit: number().required("El limite es requerido"),
    initial_limit: number().required("El limite inicial es requerido"),
    hour: string().required("La hora es requerida"),
    description: string().required("La descripción es requerida"),
    image: string().optional(),
    percentage: number().required("El porcentaje es requerido"),
    status: boolean().required("El estado es requerido"),
    location:object( { lat: number(), lng: number() }).required("La ubicación es requerida"),
    store: string(),
    uuid: string(),
  })

export default coverShemas