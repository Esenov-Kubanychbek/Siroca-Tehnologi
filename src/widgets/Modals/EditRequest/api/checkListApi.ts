import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

export interface ICheckList {
    text?: string;
    completed?: boolean | string;
    deadline?: string;
    application?: number | null;
    manager?: string;
}

interface IFetch {
    posting: (postState: ICheckList) => void;
}

export const checkListApi = create<IFetch>(() => ({
    posting: async (postState) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/applications/checklist/`, postState, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            console.log(postResponse, "postCheckListSuccess");
        } catch (error) {
            console.log(error, "postCheckListError");
        }
    },
}));
