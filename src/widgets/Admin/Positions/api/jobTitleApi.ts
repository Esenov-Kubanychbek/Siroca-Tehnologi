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
    getting: () => void;
    posting: (postState: { title: string }) => void;
    deleting: (id: number) => void;
}

export const jobTitleApi = create<IJobTitle>((set) => ({
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
    getting: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/company/list_job-title/?limit=12&offset=0`);
            set({ jobTitleList: response.data.results });
        } catch (error) {
            console.log(error, "getJobTitleError");
        }
    },
    posting: async (postState) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/company/create_job-title/`, postState);
            console.log(postResponse);
            set({
                oneJobTitle: {
                    title: "",
                },
            });
        } catch (error) {
            console.log(error, "postJobTitleError");
        }
    },
    deleting: async (id) => {
        try {
            const deleteResponse = await axios.delete(`${BASE_URL}/company/destroy_job-title/${id}/`);
            console.log(deleteResponse);
        } catch (error) {
            console.log(error, "deleteJobTitleError");
        } finally {
            console.log("deleteJObTitleFinally");
        }
    },
}));
