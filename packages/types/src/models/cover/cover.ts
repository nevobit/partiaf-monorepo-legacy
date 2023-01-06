export interface Cover{
    uuid: string;
    name: string;
    type: string;
    price: number;
    date: Date;
    limit: number;
    initial_limit: number;
    hour: string;
    description: string;
    image: string;
    peoples: any;
    store: string;
    status: boolean;
}