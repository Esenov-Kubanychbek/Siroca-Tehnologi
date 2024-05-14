import axios from "axios";
import { create } from "zustand";
import { ChangeEvent } from "react";
import { ISubtask } from "./checkListApi";
import { BASE_URL, authToken } from "@/shared/variables/variables";

interface ICreateSubtaskApi {
    createSubtaskState: ISubtask;
    setCreateSubtaskState: (subtask: ISubtask) => void;
    addManagerToCreateSubtask: (manager: string) => void;
    addUserToCreateSubtask: (user: string) => void
    createSubtaskChange: (e: ChangeEvent<HTMLInputElement>) => void;
    createSubTask: () => void;
}

export const createSubtaskApi = create<ICreateSubtaskApi>((set, get) => ({
    createSubtaskState: {
        text: "",
        checklist: 0,
    },
    setCreateSubtaskState: (subtask) => {
        set({ createSubtaskState: subtask });
    },
    addManagerToCreateSubtask: (manager) => {
        set((prevState) => ({
            createSubtaskState: {
                ...prevState.createSubtaskState,
                manager: manager,
            },
        }));
    },
    addUserToCreateSubtask:(user)=>{
        const text = get().createSubtaskState.text
        set((prevState) => ({
            createSubtaskState: {
                ...prevState.createSubtaskState,
                text: `${text} @${user}`,
            },
        }));
    },
    createSubtaskChange: (e) => {
        set((prevState) => ({
            createSubtaskState: {
                ...prevState.createSubtaskState,
                [e.target.name]: e.target.value,
            },
        }));
        const createSubtaskState = get().createSubtaskState;
        console.log(createSubtaskState, "changing");
    },
    createSubTask: async () => {
        try {
            const createSubtaskState = get().createSubtaskState;
            const response = await axios.post(`${BASE_URL}/applications/subtask/`, createSubtaskState, authToken);
            set({ createSubtaskState: response.data });
            console.log(response, "createSubtaskSuccess");
        } catch (error) {
            console.log(error, "createSubtaskError");
        }
    }
}));
