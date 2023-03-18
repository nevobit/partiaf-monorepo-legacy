export interface Location {
    lat: number;
    lng: number;
}

export interface Cover{
    uuid: string;
    name: string;
    type: string;
    price: number;
    date: string;
    limit: number;
    initial_limit: number;
    hour: string;
    description: string;
    image: string;
    percentage: number;
    store: string;
    status: boolean;
    location: Location;
}