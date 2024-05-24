import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "@/shared/variables/variables";
import { ISendUser, IUserDetails,  } from "@/shared/types/userTypes";
import { ChangeEvent } from "react";

interface IFetch {
    editUserState: ISendUser;
    setEditState: (user: ISendUser | IUserDetails) => void;
    editUserChange: (e: ChangeEvent<HTMLInputElement>) => void;
    editUser: (id?: number) => void;
}

export const editUserApi = create<IFetch>((set, get) => ({
    editUserState: {
        image: "",
        first_name: "",
        surname: "",
        role_type: "",
        username: "",
        job_title: "",
        main_company: "",
        password: ""
    },
    setEditState: (user) => {
        set({
            editUserState: user,
        });
    },
    editUserChange: (e) => {
        set((prevState) => ({
            editUserState: {
                ...prevState.editUserState,
                [e.target.name]: e.target.name === "image" && e.target.files ? e.target.files[0] : e.target.value,
            },
        }));
        const state = get().editUserState;
        console.log(state, "editUsertState");
    },
    editUser: async (id) => {
        try {
            const state = get().editUserState;
            if (typeof state.image === "string") {
                delete state.image;
            }
            const formData = new FormData();
            Object.entries(state).forEach(([key, value]) => {
                formData.append(key, value as string);
            });
            const response = await axios.put(`${BASE_URL}/users/edit/${id}/`, formData, authToken);
            console.log(response, "editRequestSuccess");
        } catch (error) {
            console.log(error, "editUserError");
        }
    },
}));
