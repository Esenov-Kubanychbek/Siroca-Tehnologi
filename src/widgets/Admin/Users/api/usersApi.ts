import axios from "axios";
import { create } from "zustand";
import { IUser, IUserGet } from "../../../../shared/types/userTypes";
import { ChangeEvent } from "react";
import { BASE_URL } from "../../../../shared/variables/variables";

interface IFetch {
    inState: IUser[];
    oneUserGet: IUserGet;
    oneUser: IUser;
    setOneUser: (e: ChangeEvent<HTMLInputElement>) => void;
    getOneUser: (id: number | undefined) => void;
    putting: (postState: IUser, id: number | undefined) => void;
    getting: () => void;
    posting: (postState: IUser) => void;
}

export const usersApi = create<IFetch>((set) => ({
    inState: [],
    oneUser: {
        first_name: "",
        job_title: 3,
        main_company: 3,
        password: "",
        role_type: "",
        surname: "",
        username: "",
    },
    oneUserGet: {
        first_name: "",
        image: "",
        job_title: 3,
        main_company: 3,
        password: "",
        role_type: "",
        surname: "",
        username: "",
    },
    setOneUser: (e) => {
        set((prevState) => ({
            oneUser: {
                ...prevState.oneUser,
                [e.target.name]: e.target.name === "image" ? e.target.files[0] : e.target.value,
            },
        }));
    },
    getOneUser: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/users/${id}/`);
            set({ oneUserGet: response.data });
        } catch (error) {
            console.log(error, "getOneUserError");
        }
    },
    putting: async (postState, id) => {
        try {
            const response = await axios.put(`${BASE_URL}/users/${id}/`, postState);
            console.log(response.data);
        } catch (error) {
            console.log(error, "putOneUserError");
        }
    },
    getting: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/users/profiles/?limit=12&offset=0`);
            set({ inState: response.data.results });
        } catch (error) {
            console.log(error, "getUserError");
        }
    },
    posting: async (postState) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/users/create/`, postState);
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postUserError");
        }
    },
}));
