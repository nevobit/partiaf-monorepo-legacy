export interface Admin {
    uuid: string;
    name: string;
    lastname: string;
    email: string;
    identification_type: string;
    identification: number;
    age: number;
    phone: number;
    birthdate: string;
    status?: boolean;
    gender: string;
    address: string;
    password: string;
    photo: string;
    verification_code: number;
    last_login?: Date;
    notifications?: boolean;
}
