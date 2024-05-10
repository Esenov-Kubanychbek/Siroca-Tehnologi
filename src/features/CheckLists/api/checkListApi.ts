import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../shared/variables/variables";

export interface ISubtask {
    id?: number;
    text: string;
    completed?: boolean;
    deadline?: string;
    checklist: number;
    manager?: number;
}

export interface IChecklist {
    id?: number;
    completed?: boolean;
    main_manager?: string;
    subtasks?: ISubtask[];
    name: string;
    application: number | null | string;
}

export interface ICreateSub {
    text: string;
    completed: boolean;
    deadline: string;
    checklist: number | undefined;
    manager: string | undefined;
}

interface IFetch {
    checklists: IChecklist[];
    oneChecklist: IChecklist;
    createSubTask: (data: ICreateSub) => void;
    setChecklistCompleted: (checklist: IChecklist) => void;
    setSubtaskCompleted: (subtask: ISubtask) => void;
}

export const checkListApi = create<IFetch>(() => ({
    checklists: [],
    oneChecklist: {
        name: "",
        application: 0,
    },
    createSubTask: async (data) => {
        try {
            const response = await axios.post(`${BASE_URL}/applications/subtask/`, data, authToken);
            console.log(response, "createSubTaskSuccess");
        } catch (error) {
            console.log(error, "createSubTaskError");
        }
    },
    setChecklistCompleted: async (checklist) => {
        try {
            const response = await axios.patch(
                `${BASE_URL}/applications/checklist/${checklist.id}/`,
                checklist,
                authToken,
            );
            console.log(response, "setChecklistCompletedSuccess");
        } catch (error) {
            console.log(error, "setChecklistCompletedError");
        }
    },
    setSubtaskCompleted: async (subtask) => {
        try {
            const response = await axios.patch(`${BASE_URL}/applications/subtask/${subtask.id}/`, subtask, authToken);
            console.log(response, "setSubtaskCompletedSuccess");
        } catch (error) {
            console.log(error, "setSubtaskCompletedError");
        }
    },
}));
