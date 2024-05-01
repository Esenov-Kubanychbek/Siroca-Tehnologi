import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";
import { ChangeEvent } from "react";

export interface ICreateRequest {
    [key: string]: string | number | null | boolean | undefined;
    id?: number;
    title: string;
    company: string;
    task_number?: string;
}

interface IFetch {
    oneRequest: ICreateRequest;
    resetOneRequest: () => void;
    createRequestChange: (e: ChangeEvent<HTMLInputElement>) => void;
    createRequest: () => void;
}

export const createRequestApi = create<IFetch>((set, get) => ({
    oneRequest: {
        id: 0,
        title: "",
        company: "",
        task_number: "",
    },
    resetOneRequest: () => {
        set({
            oneRequest: {
                id: 0,
                title: "",
                company: "",
                task_number: "",
            },
        });
    },
    createRequestChange: (e) => {
        set((prevState) => ({
            oneRequest: {
                ...prevState.oneRequest,
                [e.target.name]: e.target.value,
            },
        }));
        const state = get().oneRequest
        console.log(state, "oneRequest");
    },
    createRequest: async () => {
        try {
            const state = get().oneRequest;
            const response = await axios.post(`${BASE_URL}/applications/create/`, state, authToken);
            set({ oneRequest: response.data });
            console.log(response, "createRequestSuccess");
        } catch (error) {
            console.log(error, "createRequestError");
        }
    },
}));
