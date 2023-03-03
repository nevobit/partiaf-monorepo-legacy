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

export interface StoreLocation {
    lat: number;
    lng: number;
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
    location?: StoreLocation;
    limit: number;
    photos: string[];
    status: string;
    verification_code: number;
    last_login: Date;
    balance: number | 0;
    tables: number | 0;
    max_per_table: number;
    min_per_table: number;
    chairs_per_table: number;
    chairs: number | 0;
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