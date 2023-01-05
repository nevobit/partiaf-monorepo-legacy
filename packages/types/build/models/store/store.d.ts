type Address = {
    street: string;
    city: string;
    state: string;
    zipcode: string;
};
type Geo = {
    type: string;
    latitud: string;
    longitud: string;
};
interface Location {
    address: Address;
    geo: Geo;
}
export interface Store {
    name: string;
    description: string;
    type: string;
    nit?: string;
    email: string;
    password: string;
    phone: number;
    location?: Location;
    limit: number;
    photos: Array<String>;
    status: string;
    verification_code: number;
    last_login: any;
    balance?: number;
    website?: string;
    facebook?: string;
    instagram?: string;
    tiktok?: string;
    youtube?: string;
    employes?: string;
    rating: number;
    employe_code: number;
    admin: any;
}
export {};
