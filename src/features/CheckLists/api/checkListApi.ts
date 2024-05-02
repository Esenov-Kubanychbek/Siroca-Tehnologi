import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../shared/variables/variables";

interface ISubtask {
    id?: number;
    text: string;
    completed?: boolean;
    deadline?: string;
    checklist: number;
    manager?: number;
}

export interface ICheckList {
    id?: number;
    main_manager?: string;
    subtasks?: ISubtask[];
    name: string;
    application: number | null | string;
}

interface IFetch {
    checkLists: ICheckList[];
    oneCheckList: ICheckList;
    createCheckList: (checkList: ICheckList) => void;
}

export const checkListApi = create<IFetch>((set) => ({
    checkLists: [],
    oneCheckList: {
        name: "",
        application: 0,
    },
    createCheckList: async (checkList) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/applications/checklist/`, checkList, authToken);
            set({ oneCheckList: postResponse.data });
            console.log(postResponse, "postCheckListSuccess");
        } catch (error) {
            console.log(error, "postCheckListError");
        }
    },
}));
