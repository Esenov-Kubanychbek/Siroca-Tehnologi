export interface IUser {
    id?: number;
    first_name: string;
    image?: File | FileList | string;
    job_title: number | null;
    main_company: number;
    password: string;
    role_type: string;
    surname?: string;
    username: string;
}

export interface IUserGet {
    id?: number;
    first_name: string;
    image?: string;
    job_title: number;
    main_company: number;
    password: string;
    role_type: string;
    surname?: string;
    username: string;
}
