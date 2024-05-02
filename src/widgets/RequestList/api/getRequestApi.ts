import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../shared/variables/variables";

export interface IGetRequest {
    [key: string]: string | number;
    id: number;
    task_number: string;
    title: string;
    short_description: string;
    status: string;
    priority: string;
    start_date: string;
    finish_date: string;
    company: string;
    main_client: string;
    main_manager: string;
}

export interface IFetchGet {
    getState: IGetRequest[];
    filterState: IGetRequest[];
    now: number;
    getting: (now: number) => void;
    setFilterState: (data: []) => void;
    setNow: (num: number) => void;
    setState: (data: []) => void;
    clearFilter: () => void;
    setIsOpen: () => void;
    isFilterOpen: boolean;
}

export const getRequestApi = create<IFetchGet>((set, get) => ({
    getState: [],
    filterState: [],
    now: 1,
    isFilterOpen: false,
    getting: async (now: number) => {
        try {
            const getResponse = await axios.get(`${BASE_URL}/applications/form/?page=${now}`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            set({ getState: getResponse.data.data.results });
        } catch (error) {
            console.log(error, "GetRequestError");
        }
    },
    setState: (data: []) => {
        set({ getState: data });
    },
    setIsOpen: () => {
        const currentIsFilterOpen = get().isFilterOpen;
        set({ isFilterOpen: !currentIsFilterOpen });
    },
    setFilterState: (data: []) => {
        set({ filterState: data });
    },
    setNow: (num: number) => {
        set({ now: num });
    },
    clearFilter: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form/?page=1`, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            set({ getState: response.data.results });
        } catch (error) {
            console.log(error);
        }
    },
}));
