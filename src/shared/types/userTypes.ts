export interface IUser {
    [key: string]: number | string | boolean | FileList | File | undefined | null;
    id?: number;
    first_name: string;
    image?: File | FileList | string;
    job_title: string;
    main_company: string;
    password: string;
    role_type: string;
    surname?: string;
    username: string;
}

export interface ISendUser {
    [key: string]: number | string | boolean | FileList | File | undefined | null;
    first_name: string;
    image?: File | FileList | string;
    job_title: string;
    main_company: string;
    role_type: string;
    surname?: string;
    username: string;
    password?: string;
}

export interface IAddUser {
    [key: string]: number | string | boolean | FileList | File | undefined | null;
    first_name?: boolean;
    image?: boolean;
    job_title?: boolean;
    main_company?: boolean;
    role_type?: boolean;
    surname?: boolean;
    username?: boolean;
    password?: boolean;
}

export interface IUserGet {
    [key: string]: number | string | boolean | FileList | File | undefined | null;
    id?: number;
    first_name: string;
    image?: File | FileList | string | undefined;
    job_title: string;
    main_company: string;
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
