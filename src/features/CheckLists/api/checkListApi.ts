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
    completed?: boolean;
    main_manager?: string;
    subtasks?: ISubtask[];
    name: string;
    application: number | null | string;
}


export interface ICreateSub{
    text: string;
    completed: boolean;
    deadline: string;
    checklist: number | undefined;
    manager: string | undefined
}

interface IFetch {
    checkLists: ICheckList[];
    oneCheckList: ICheckList;
    createCheckList: (checkList: ICheckList) => void;
    createSubTask: (data: ICreateSub) => void;
    setComplited: (data: {id: number | undefined, obj: {completed: boolean | undefined}}) => void;
    setSubCompleted: (data: {id: number | undefined, obj: {completed: boolean | undefined}}) => void;
}

export const checkListApi = create<IFetch>((set) => ({
    checkLists: [],
    oneCheckList: {
        name: "",
        application: 0
    },
    createCheckList: async (checkList) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/applications/checklist/`, checkList, authToken);
            set({oneCheckList: postResponse.data})
            console.log(postResponse, "postCheckListSuccess");
        } catch (error) {
            console.log(error, "postCheckListError");
        }
    },
    createSubTask: async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}/applications/subtask/`, data, authToken)  
            console.log(response);
        } catch (error) {
            console.log(error);
            
        }        
    },
    setComplited: async (data) => {
        try {
            const response = await axios.patch(`${BASE_URL}/applications/checklist/${data.id}/`, data.obj, authToken)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    },
    setSubCompleted:async (data) => {
        try {
            const response = await axios.patch(`${BASE_URL}/applications/subtask/${data.id}/`, data.obj, authToken)
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    },
}));
