import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";
import { ChangeEvent } from "react";

interface IDescriptionApi {
    opened: boolean;
    setOpened: (opened: boolean) => void;
    descriptionState: {
        description: string;
    };
    setDescriptionState: (description: string) => void;
    descriptionChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    putDescription: (id: number | undefined) => void;
    clearDescription: (id: number | undefined) => void;
}

export const descriptionApi = create<IDescriptionApi>((set, get) => ({
    opened: false,
    setOpened: (opened) => {
        set({ opened: opened });
    },
    descriptionState: {
        description: "",
    },
    setDescriptionState: (description) => {
        set({
            descriptionState: {
                description: description,
            },
        });
    },
    descriptionChange: (e) => {
        set({
            descriptionState: {
                description: e.target.value,
            },
        });
        const description = get().descriptionState;
        console.log(description);
    },
    putDescription: async (id) => {
        try {
            const descriptionState = get().descriptionState;
            const setDescriptionState = get().setDescriptionState;
            const response = await axios.put(
                `${BASE_URL}/applications/description/${id}/`,
                descriptionState,
                authToken,
            );
            console.log(response, "putDescriptionSuccess");
            setDescriptionState(response.data.description);
        } catch (error) {
            console.log(error, "putDescriptionError");
        }
    },
    clearDescription: (id) => {
        set({ descriptionState: { description: "" } });
        const putDescription = get().putDescription;
        putDescription(id);
    },
}));
