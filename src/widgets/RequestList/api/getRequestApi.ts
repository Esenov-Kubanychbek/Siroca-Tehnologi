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
    filterState: IGetRequest[];
    now: number,
    getting: (now: number) => void;
    setFilterState: (data: []) => void;
    setNow: (num: number) => void;
    setState: (data: []) => void;
    clearFilter: () => void
}

export const getRequestApi = create<IFetchGet>((set) => ({
    getState: [],
    filterState: [],
    now: 1,
    getting: async (now: number) => {
        try {
            const getResponse = await axios.get(`${BASE_URL}/applications/form/?page=${now}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`
                }
            });
                set({ getState: getResponse.data.results.results });
        } catch (error) {
            console.log(error, "GetRequestError");
        }
    },
    setState: (data: []) => {
        set({getState: data})
    },
    setFilterState: (data: []) => {
        set({filterState: data})
    },
    setNow: (num: number) => {
        set({now: num})
    },
    clearFilter: async() => {
            try {
                const response = await axios.get(`${BASE_URL}/applications/form/?page=1`, {
                    headers: {
                        Authorization: `JWT ${localStorage.getItem("access")}`
                    }
                })
                set({getState: response.data.results.results})
            } catch (error) {
                console.log(error);
            }
    }

}));
