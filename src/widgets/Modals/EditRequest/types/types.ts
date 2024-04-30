import { Dispatch, SetStateAction } from "react";
<<<<<<< HEAD
import { ICreateRequest } from "../../CreateRequest/api/createRequestApi";

export interface IEditRequest {
    request: ICreateRequest;
    setModal: Dispatch<SetStateAction<boolean>>;
    setRequest: Dispatch<SetStateAction<ICreateRequest>>;
=======

export interface IEditRequest {
    requestFrom: "CreateRequest" | "ViewRequest";
    setModal: Dispatch<SetStateAction<boolean>>;
}

interface ICheckList {
    text?: string;
    completed?: boolean;
    deadline?: string;
    application?: number | null;
    manager?: number | null;
}

interface IComments {
    text?: string;
    application?: number | null;
}

export interface IRequest {
    id?: number;
    checklist?: ICheckList[];
    comments?: IComments[];
    task_number?: string;
    title?: string;
    description?: string;
    short_description?: string;
    files?: string | null | File | FileList;
    jira?: string;
    status?: string;
    payment_state?: string;
    priority?: string;
    application_date?: string;
    confirm_date?: string;
    offer_date?: string;
    start_date?: string;
    finish_date?: string;
    deadline_date?: string;
    company?: string;
    main_client?: string;
    main_manager?: string;
>>>>>>> ced31a6d8c3e35c1f8e310ee2026f58a7f9b5acc
}
