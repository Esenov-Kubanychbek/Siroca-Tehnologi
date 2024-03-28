import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

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
        } catch (error) {
            console.log(error, "postJobTitleError");
        }
    },
}));
