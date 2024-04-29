import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";
import { ISendUser } from "../../../../shared/types/userTypes";
import { ChangeEvent } from "react";

interface IFetch {
    editUserState: ISendUser;
    setEditState: (user: ISendUser) => void;
    editUserChange: (e: ChangeEvent<HTMLInputElement>) => void;
    editUser: (id: number | undefined) => void;
}

export const editUserApi = create<IFetch>((set, get) => ({
    editUserState: {
        first_name: "",
        job_title: "",
        main_company: "",
        role_type: "",
        surname: "",
        username: "",
    },
    setEditState: (user) => {
        set({
            editUserState: {
                first_name: user.first_name,
                job_title: user.job_title,
                main_company: user.main_company,
                role_type: user.role_type,
                surname: user.surname,
                username: user.username,
            },
        });
    },
    editUserChange: (e) => {
        set((prevState) => ({
            editUserState: {
                ...prevState.editUserState,
                [e.target.name]: e.target.value,
            },
        }));
        const state = get().editUserState;
        console.log(state, "editUsertState");
    },
    editUser: async (id) => {
        try {
            const state = get().editUserState;
            const formData = new FormData();
            Object.entries(state).forEach(([key, value]) => {
                formData.append(key, value as string);
            });
            console.log(formData);
            const response = await axios.put(`${BASE_URL}/users/${id}/`, formData, authToken);
            console.log(response, "editRequestSuccess");
        } catch (error) {
            console.log(error, "editUserError");
        }
    },
}));
