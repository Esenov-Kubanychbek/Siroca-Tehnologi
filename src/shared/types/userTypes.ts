export interface IUserDetails {
    [key: string]: number | string;
    main_company: string;
    job_title: string;
    first_name: string;
    role_type: string;
    username: string;
    password: string;
    surname: string;
    image: string;
    id: number;
}

export interface IUsersListUser {
    [key: string]: number | string | undefined | boolean | null;
    main_company: string;
    job_title: string;
    full_name: string;
    role_type: string;
    username: string;
    id?: number;
}

export interface IAllUsersName {
    [key: string]: number | string;
    id: number;
    full_name: string;
    main_company: string
    role_type: string;
}

export interface ISendUser {
    [key: string]: number | string | File | undefined | null;
    main_company: string;
    job_title: string;
    first_name: string;
    role_type: string;
    username: string;
    password: string;
    surname: string;
    image?: File | string;
}

export interface IAddUser {
    [key: string]: boolean | undefined;
    first_name?: boolean;
    image?: boolean;
    job_title?: boolean;
    main_company?: boolean;
    role_type?: boolean;
    surname?: boolean;
    username?: boolean;
    password?: boolean;
}
