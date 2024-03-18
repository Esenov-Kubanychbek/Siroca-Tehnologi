interface IObject {
    number: string;
    company: string;
    request: string;
    description: string;
    client: string;
    manager: string;
    begin: string;
    end: string;
    prioritet: string;
    status: string;
}

export interface IRequest {
    role: string;
    api: IObject[];
}
