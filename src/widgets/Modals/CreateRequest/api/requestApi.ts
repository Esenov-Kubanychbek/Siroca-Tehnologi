import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

export interface IRequest {
    task_number?: string;
    title?: string;
    description?: string;
    files?: string | null;
    jira?: string;
    status?: string;
    payment_state?: string;
    priority?: string;
    application_date?: string;
    confirm_date?: string;
    offer_date?: string;
    start_date?: string;
    finish_date?: string;
    company?: number;
    main_client?: number | null;
    main_manager?: number | null;
}

interface IFetch {
    inState: IRequest[];
    posting: (postState: IRequest) => void;
}

export const requestApi = create<IFetch>(() => ({
    inState: [],
    posting: async (postState) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/applications/create/`, postState);
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postRequestError");
        }
    },
}));
