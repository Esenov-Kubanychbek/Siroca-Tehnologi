import axios from "axios";
import { create } from "zustand";

export interface ICheckList {
    text: string;
    completed: boolean,
    deadline: string,
    application: number | null,
    manager: number | null,
}

interface IFetch {
    inState: ICheckList[];
    posting: (postState: ICheckList) => void;
}

export const checkListApi = create<IFetch>(() => ({
    inState: [],    
    posting: async (postState) => {
        try {
            const postResponse = await axios.post("http://16.171.68.251:80/api/v1/applications/checklist/", postState);
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postCheckListError");
        }
    },
})); 