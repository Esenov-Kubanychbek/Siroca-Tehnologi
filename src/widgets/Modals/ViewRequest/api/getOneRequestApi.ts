import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

interface ILog {
    id: number;
    username: string;
    task_number: string;
    text: string;
}

interface ICheckList {
    id?: number;
    text: string;
    completed?: boolean;
    deadline: string;
    application: number;
    manager?: number;
}

interface IComments {
    id: number;
    user: string;
    text: string;
    date_added: string;
    application: number;
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
    getOneRequest: async (id) => {
        try {
            const getOneResponse = await axios.get(`${BASE_URL}/applications/form_view/${id}/`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            console.log(getOneResponse.data, "getOneRequestSuccess");
            set({ oneRequest: getOneResponse.data });
        } catch (error) {
            console.log(error, "getOneRequestError");
        }
    },
}));
