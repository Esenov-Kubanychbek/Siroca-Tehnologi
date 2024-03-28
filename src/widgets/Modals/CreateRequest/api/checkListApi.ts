import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

export interface ICheckList {
    text: string;
    completed: boolean;
    deadline: string;
    application: number | null;
    manager: number | null;
}

interface IFetch {
    inState: ICheckList[];
    posting: (postState: ICheckList) => void;
}

export const checkListApi = create<IFetch>(() => ({
    inState: [],
    posting: async (postState) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/applications/checklist/`, postState);
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postCheckListError");
        }
    },
}));
