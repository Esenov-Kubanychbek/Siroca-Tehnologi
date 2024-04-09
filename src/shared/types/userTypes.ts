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
    image?: string | undefined;
    job_title: number | null;
    main_company: string | null;
    password: string;
    role_type: string;
    surname?: string;
    username: string;
}
export interface iGetUser {
    id?: number;
    first_name: string;
    image?: string | undefined;
    job_title: string | number | readonly string[] | undefined;
    main_company: string | number | readonly string[] | undefined;
    password: string;
    role_type: string;
    surname?: string;
    username: string;
}