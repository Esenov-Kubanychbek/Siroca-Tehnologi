interface ILog {
    field: string,
    formatted_created_at: string;
    id: number;
    initially: string;
    new: string;
    user: string;
    task_number: string;
}

interface ISubtask {
    id?: number;
    text: string;
    completed?: boolean;
    deadline?: string;
    checklist: number;
    manager?: number;
}

interface ICheckList {
    id?: number;
    main_manager?: string;
    subtasks?: ISubtask[];
    name: string;
    application: number | null | string;
}

interface IComments {
    id: number;
    user: string;
    text: string;
    date_added: string;
    application: number;
    formatted_date_added: string;
    user_image: string;
    user_id: number;
}

interface IFile {
    id?: number
    file: string
    application: number
    file_name?: string
}

interface IOneRequest {
    id: number;
    logs: ILog[];
    company: string;
    main_client: string;
    main_manager: string;
    checklists: ICheckList[];
    comments: IComments[];
    task_number: string;
    title: string;
    description: string;
    short_description: string;
    files: IFile[];
    jira: string;
    status: string;
    payment_state: string;
    priority: string;
    application_date: string;
    confirm_date: string;
    offer_date: string;
    start_date: string;
    finish_date: string;
    deadline_date: string;
}

export interface IGetOneRequestApi {
    oneRequest: IOneRequest;
    setChecklist: (data: ICheckList) => void;
    setFile: (file: IFile) => void
    deleteFileFromFiles: (id?: number) => void
    getOneRequest: (id: number | undefined) => void;
}