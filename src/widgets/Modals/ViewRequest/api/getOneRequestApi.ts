import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

interface ILog {
    id: number;
    username: string;
    task_number: string;
    text: string;
}

interface IObject {
    id: number;
    logs: ILog[];
    company: string;
    task_number: string;
    title: string;
    description: string;
    short_description: string;
    files: null;
    jira: null;
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
        id: 1,
        logs: [],
        company: "",
        task_number: "",
        title: "",
        description: "",
        short_description: "",
        files: null,
        jira: null,
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
            const getOneResponse = await axios.get(`${BASE_URL}/applications/form_view/${id}/`);
            console.log(getOneResponse.data, "getOneRequestSuccess");
            set({ oneRequest: getOneResponse.data });
        } catch (error) {
            console.log(error, "getOneRequestError");
        }
    },
}));
