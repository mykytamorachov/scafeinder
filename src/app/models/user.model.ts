export interface IUser {
    email?: string;
    name?: string;
    mobile?: number;
    age?: number;
    gender?: string;
    favorites?: [string];
    bookings?: [{date: string, time: string, people: number, resName: string}];
    lastLoginDate?: string;
    registrationDate?: string;
    password?: string;
    confirmPassword?: string;
    image?: string;
}
