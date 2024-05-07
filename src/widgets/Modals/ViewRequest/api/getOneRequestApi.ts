import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";

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

interface IObject {
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
    files: string;
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

interface IFetch {
    oneRequest: IObject;
    setChecklist: (data: ICheckList) => void;
    getOneRequest: (id: number | undefined) => void;
}

export const getOneRequestApi = create<IFetch>((set) => ({
    oneRequest: {
        id: 0,
        logs: [],
        company: "",
        main_client: "",
        main_manager: "",
        checklists: [],
        comments: [],
        task_number: "",
        title: "",
        description: "",
        short_description: "",
        files: "",
        jira: "",
        status: "",
        payment_state: "",
        priority: "",
        application_date: "",
        confirm_date: "",
        offer_date: "",
        start_date: "",
        finish_date: "",
        deadline_date: "",
    },
    setChecklist: (data) => {
        set((prev) => ({
            oneRequest: {
                ...prev.oneRequest,
                checklists: [...prev.oneRequest.checklists, data],
            },
        }));
    },
    getOneRequest: async (id) => {
        try {
            const getOneResponse = await axios.get(`${BASE_URL}/applications/form_view/${id}/`, authToken);
            console.log(getOneResponse.data, "getOneRequestSuccess");
            set({ oneRequest: getOneResponse.data });
        } catch (error) {
            console.log(error, "getOneRequestError");
        }
    },
}));
