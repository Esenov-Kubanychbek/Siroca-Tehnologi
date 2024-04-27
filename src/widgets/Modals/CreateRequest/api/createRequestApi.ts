import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";
import { ChangeEvent } from "react";

export interface ICreateRequest {
    id?: number;
    title: string;
    company: string;
    task_number?: string;
}

interface IFetch {
    oneRequest: ICreateRequest;
    requestChange: (e: ChangeEvent<HTMLInputElement>) => void;
    postRequest: (postState: ICreateRequest) => void;
}

export const createRequestApi = create<IFetch>((set) => ({
    oneRequest: {
        id: 0,
        title: "",
        company: "",
        task_number: "",
    },
    requestChange: (e) => {
        set((prevState) => ({
            oneRequest: {
                ...prevState.oneRequest,
                [e.target.name]: e.target.value,
            },
        }));
    },
    postRequest: async (postState) => {
        try {
            const response = await axios.post(`${BASE_URL}/applications/create/`, postState, authToken);
            set({ oneRequest: response.data });
            console.log(response, "postRequestSuccess");
        } catch (error) {
            console.log(error, "postRequestError");
        }
    },
}));
