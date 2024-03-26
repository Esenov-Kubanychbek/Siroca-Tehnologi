import axios from "axios";
import { create } from "zustand";

interface IObject {
    id: number | undefined;
    title: string;
}

interface IJobTitle {
    jobTitleList: IObject[];
    getting: () => void;
    posting: (postState: { title: string }) => void;
}

export const jobTitleApi = create<IJobTitle>((set) => ({
    jobTitleList: [],
    getting: async () => {
        try {
            const response = await axios.get("http://16.171.68.251:80/api/v1/company/list_job-title/");
            set({ jobTitleList: response.data });
        } catch (error) {
            console.log(error, "getJobTitleError");
        }
    },
    posting: async (postState) => {
        try {
            const postResponse = await axios.post(
                "http://16.171.68.251:80/api/v1/company/create_job-title/",
                postState,
            );
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postJobTitleError");
        }
    },
}));
