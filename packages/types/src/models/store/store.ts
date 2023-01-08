type Address = {
    street: string,
    city: string,
    state: string,
    zipcode: string
}

type Geo = {
    caract: string,
    latitud: string,
    longitud: string
}

interface Location {
    address: Address;
    geo: Geo;
}

export interface Store {
    uuid: string;
    name: string;
    description: string;
    type: string;
    nit: string | "";
    email: string;
    password: string;
    phone: number;
    location?: Location;
    limit: number;
    photos: string[];
    status: string;
    verification_code: number;
    last_login: Date;
    balance: number | 0;
    website: string | "";
    facebook: string | "";
    instagram: string | "";
    tiktok: string | "";
    youtube: string | "";
    employes: string | 0;
    rating: number | 0;
    employe_code: number;
    admin: string;
}