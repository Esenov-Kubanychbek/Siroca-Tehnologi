import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "@/shared/variables/variables";
import { ChangeEvent } from "react";

interface IJobTitle {
    id?: number;
    title: string;
}

interface IJobTitleApi {
    jobTitleList: IJobTitle[];
    searchList: IJobTitle[];
    oneJobTitle: IJobTitle;
    setJobTitle: (e: ChangeEvent<HTMLInputElement>) => void;
    getJobTitleList: () => void;
    setSearchList: (searchState: IJobTitle[]) => void;
    postJobTitle: (postState: { title: string }) => void;
    deleteJobTitle: (id: number) => void;
}

export const jobTitleApi = create<IJobTitleApi>((set, get) => ({
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
            console.log(response, "getJobTitlesListSuccess");
        } catch (error) {
            console.log(error, "getJobTitleListError");
        }
    },
    setSearchList: (searchState) => {
        set({ searchList: searchState });
    },
    postJobTitle: async (postState) => {
        try {
            const response = await axios.post(`${BASE_URL}/company/create_job-title/`, postState, authToken);
            console.log(response, "postJobTitleSuccess");
            set((prevState) => ({
                jobTitleList: [...prevState.jobTitleList, response.data],
                oneJobTitle: { title: "" },
            }));
        } catch (error) {
            console.log(error, "postJobTitleError");
        }
    },
    deleteJobTitle: async (id) => {
        try {
            const deleteResponse = await axios.delete(`${BASE_URL}/company/delete_job-title/${id}/`, authToken);
            const newJobTitlesList = get().jobTitleList.filter((jobTitle) => jobTitle.id !== id);
            set({ jobTitleList: newJobTitlesList, searchList: newJobTitlesList });
            console.log(deleteResponse, "deleteJobTitleSuccess");
        } catch (error) {
            console.log(error, "deleteJobTitleError");
        }
    },
}));
