import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";
import { ISendUser } from "../../../../shared/types/userTypes";
import { ChangeEvent } from "react";

interface IFetch {
    createUserState: ISendUser;
    createUserChange: (e: ChangeEvent<HTMLInputElement>) => void;
    createUser: () => void;
}

export const createUserApi = create<IFetch>((set, get) => ({
    createUserState: {
        first_name: "",
        image: "",
        job_title: "",
        main_company: "",
        role_type: "",
        surname: "",
        username: "",
    },
    createUserChange: (e) => {
        set((prevState) => ({
            createUserState: {
                ...prevState.createUserState,
                [e.target.name]: e.target.name === "image" && e.target.files ? e.target.files[0] : e.target.value,
            },
        }));
        const state = get().createUserState;
        console.log(state, "editUsertState");
    },
    createUser: async () => {
        try {
            const state = get().createUserState;
            console.log(state.image);
            
            const formData = new FormData();
            Object.entries(state).forEach(([key, value]) => {
                formData.append(key, value as string);
            });
            const response = await axios.post(`${BASE_URL}/users/create/`, formData, authToken);
            console.log(response, "createUserSuccess");
            console.log(formData);
            
        } catch (error) {
            console.log(error, "createUserError");
        }
    },
}));
