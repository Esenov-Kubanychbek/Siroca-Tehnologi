import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";
import { ChangeEvent } from "react";

interface IObject {
    id?: number | undefined;
    title: string;
}

interface IJobTitle {
    jobTitleList: IObject[];
    searchList: IObject[];
    oneJobTitle: IObject;
    setJobTitle: (e: ChangeEvent<HTMLInputElement>) => void;
    getJobTitleList: () => void;
    setSearchList: (searchState: IObject[]) => void;
    postJobTitle: (postState: { title: string }) => void;
    deleteJobTitle: (id: number) => void;
}

export const jobTitleApi = create<IJobTitle>((set, get) => ({
    jobTitleList: [],
    oneJobTitle: {
        title: "",
    },
    searchList: [],
    setJobTitle: (e) => {
        set((prevState) => ({
            oneJobTitle: {
                ...prevState.oneJobTitle,
                [e.target.name]: e.target.value,
            },
        }));
    },
    getJobTitleList: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/company/list_job-title/?limit=12&offset=0`, authToken);
            set({ jobTitleList: response.data });
            set({ searchList: response.data });
        } catch (error) {
            console.log(error, "getJobTitleError");
        }
    },
    setSearchList: (searchState) => {
        set({ searchList: searchState });
    },
    postJobTitle: async (postState) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/company/create_job-title/`, postState, authToken);
            console.log(postResponse, "postJobTitleSuccess");
            set({
                oneJobTitle: {
                    title: "",
                },
            });
        } catch (error) {
            console.log(error, "postJobTitleError");
        }
    },
    deleteJobTitle: async (id) => {
        try {
            const deleteResponse = await axios.delete(`${BASE_URL}/company/delete_job-title/${id}/`, authToken);
            const oldList = get().jobTitleList;
            oldList.map((card, i) => {
                if (card.id === id) {
                    const secondList = oldList.slice(0, i).concat(oldList.slice(i + 1));
                    set({ jobTitleList: secondList });
                }
            });
            console.log(deleteResponse, "deleteJobTitleSuccess");
        } catch (error) {
            console.log(error, "deleteJobTitleError");
        }
    },
}));
