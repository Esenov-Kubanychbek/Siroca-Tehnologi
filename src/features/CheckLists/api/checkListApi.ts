import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../shared/variables/variables";
import { ChangeEvent } from "react";

export interface ISubtask {
    id?: number;
    text: string;
    completed?: boolean;
    deadline?: string;
    checklist: number;
    manager?: string;
}

export interface ICreateSubtask {
    text: string;
    completed?: boolean;
    deadline?: string;
    checklist: number | undefined;
    manager?: string;
}

export interface IChecklist {
    id?: number;
    completed?: boolean;
    main_manager?: string;
    subtasks?: ISubtask[];
    name: string;
    application: number | null | string;
}

interface IChecklistApi {
    oneSubtask: ISubtask;
    setOneSubtask: (subtask: ISubtask) => void;
    oneSubtaskChange: (e: ChangeEvent<HTMLInputElement>) => void;
    createSubTask: () => void;
    setSubtaskCompleted: (subtask: ISubtask) => void;
    editSubtask: () => void;
    deleteSubtask: (id: number | undefined) => void;
}

export const checkListApi = create<IChecklistApi>((set, get) => ({
    oneSubtask: {
        text: "",
        checklist: 0,
    },
    setOneSubtask: (subtask) => {
        set({ oneSubtask: subtask });
    },
    oneSubtaskChange: (e) => {
        set((prevState) => ({
            oneSubtask: {
                ...prevState.oneSubtask,
                [e.target.name]: e.target.value,
            },
        }));
    },
    createSubTask: async () => {
        try {
            const oneSubtask = get().oneSubtask
            const response = await axios.post(`${BASE_URL}/applications/subtask/`, oneSubtask, authToken);
            set({ oneSubtask: response.data });
            console.log(response, "createSubTaskSuccess");
        } catch (error) {
            console.log(error, "createSubTaskError");
        }
    },
    setSubtaskCompleted: async (subtask) => {
        const completedSubtask = {
            ...subtask,
            completed: !subtask.completed,
        };
        try {
            const response = await axios.put(
                `${BASE_URL}/applications/subtask/${subtask.id}/`,
                completedSubtask,
                authToken,
            );
            console.log(response, "setSubtaskCompletedSuccess");
        } catch (error) {
            console.log(error, "setSubtaskCompletedError");
        }
    },
    editSubtask: async () => {
        try {
            const oneSubtask = get().oneSubtask
            const response = await axios.put(`${BASE_URL}/applications/subtask/${oneSubtask.id}/`, oneSubtask, authToken);
            set({ oneSubtask: response.data });
            console.log(response, "editSubtaskSuccess");
        } catch (error) {
            console.log(error, "editSubtaskError");
        }
    },
    deleteSubtask: async (id) => {
        try {
            const response = await axios.delete(`${BASE_URL}/applications/subtask/${id}/`, authToken);
            console.log(response, "deleteSubtaskSuccess");
        } catch (error) {
            console.log(error, "deleteSubtaskError");
        }
    },
}));
