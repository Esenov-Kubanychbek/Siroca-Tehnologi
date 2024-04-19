import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

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
    checklist?: ICheckList[];
    comments?: IComments[];
    task_number?: string;
    title?: string;
    description?: string;
    short_description?: string;
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
    deadline_date?: string;
    company?: string;
    main_client?: number | null;
    main_manager?: number | null;
}

interface IFetch {
    editRequest: (request: IRequest, id: number) => void;
}

export const editRequestApi = create<IFetch>(() => ({
    editRequest: async (request, id) => {
        try {
            const editResponse = await axios.put(`${BASE_URL}/applications/form_edit/${id}/`, request, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            console.log(editResponse, "editRequestSuccess");
        } catch (error) {
            console.log(error, "editRequestError");
        }
    },
}));
