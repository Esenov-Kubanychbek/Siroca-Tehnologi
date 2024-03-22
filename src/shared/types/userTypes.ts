export interface IUser {
    first_name: string;
    image: null;
    job_title: string | null;
    main_company: string | null | number;
    password: string;
    role_type: string;
    surname: string;
    username: string;
}

export interface IUserId {
    id: number;
    first_name: string;
    image?: null;
    job_title: string | null;
    main_company: string | null | number;
    password: string;
    role_type: string;
    surname?: string;
    username: string;
}
