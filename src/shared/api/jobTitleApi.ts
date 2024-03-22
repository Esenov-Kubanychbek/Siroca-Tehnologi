import axios from "axios";
import { create } from "zustand";

interface IJobTitle {
    jobTitleList: string[];
    getting: () => void;
    posting: (postState: {title: string}) => void;
}

export const jobTitleApi = create<IJobTitle>((set) => ({
    jobTitleList: [],
    getting: async () => {
        try {
            const response = await axios.get("http://16.171.68.251:80/api/v1/company/job-title/");
            console.log(response);
            set({ jobTitleList: [] });
        } catch (error) {
            console.log(error, "getJobTitleError");
        }
    },
    posting: async (postState) => {
        try {
            const postResponse = await axios.post("http://16.171.68.251:80/api/v1/company/job-title/", postState)
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postJobTitleError");
        }
    }
}));
