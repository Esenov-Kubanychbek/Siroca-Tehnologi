import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../shared/variables/variables";

export interface IGetRequest {
    task_number: string;
    title: string;
    description: string;
    status: string;
    priority: string;
    start_date: string;
    finish_date: string;
    company: number;
    main_client: number;
    main_manager: number;
}

export interface IFetchGet {
    getState: IGetRequest[];
    getting: () => void;
}

export const getRequestApi = create<IFetchGet>((set) => ({
    getState: [],
    getting: async () => {
        try {
            const getResponse = await axios.get(`${BASE_URL}/applications/form/`);
            set({ getState: getResponse.data });
        } catch (error) {
            console.log(error, "GetRequestError");
        }
    },
}));
