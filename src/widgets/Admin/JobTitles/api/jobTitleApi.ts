import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";
import { ChangeEvent } from "react";

interface IObject {
    id?: number | undefined;
    title: string;
}

interface IJobTitle {
    jobTitleList: IObject[];
    oneJobTitle: IObject;
    setJobTitle: (e: ChangeEvent<HTMLInputElement>) => void;
    getJobTitleList: () => void;
    postJobTitle: (postState: { title: string }) => void;
    deleteJobTitle: (id: number) => void;
}

export const jobTitleApi = create<IJobTitle>((set, get) => ({
    jobTitleList: [],
    oneJobTitle: {
        title: "",
    },
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
            const response = await axios.get(`${BASE_URL}/company/list_job-title/?limit=12&offset=0`);
            set({ jobTitleList: response.data.results });
        } catch (error) {
            console.log(error, "getJobTitleError");
        }
    },
    postJobTitle: async (postState) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/company/create_job-title/`, postState);
            console.log(postResponse);
            const oldList = get().jobTitleList;
            set({
                jobTitleList: [...oldList, postState],
            });
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
            const deleteResponse = await axios.delete(`${BASE_URL}/company/destroy_job-title/${id}/`);
            const oldList = get().jobTitleList;
            oldList.map((card, i) => {
                if (card.id === id) {
                    const secondList = oldList.slice(0, i).concat(oldList.slice(i + 1));
                    set({ jobTitleList: secondList });
                }
            });
            console.log(deleteResponse);
        } catch (error) {
            console.log(error, "deleteJobTitleError");
        }
    },
}));
