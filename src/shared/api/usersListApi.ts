import axios from "axios";
import { create } from "zustand";
import { axiosApi } from "../../axiosApi";
import { IUser } from "../types/userTypes";

interface IFetch {
    inState: IUser[];
    oneUser: IUser;
    getOneUser: (id: number) => void;
    putting: (postState: IUser, id: number) => void;
    getting: () => void;
    posting: (postState: IUser) => void;
}

export const usersApi = create<IFetch>((set) => ({
    inState: [],
    oneUser: {
        first_name: "",
        image: null,
        job_title: null,
        main_company: null,
        password: "",
        role_type: "",
        surname: "",
        username: "",
    },
    getOneUser: async (id) => {
        try {
            const response = await axios.get(`${axiosApi}/users/${id}/`);
            set({ oneUser: response.data });
        } catch (error) {
            console.log(error, "getOneUserError");
        }
    },
    putting: async (postState, id) => {
        try {
            const response = await axios.put(`${axiosApi}/users/${id}/`, postState);
            console.log(response.data);
        } catch (error) {
            console.log(error, "getOneUserError");
        } finally {
            console.log("putUserFinally");
        }
    },
    getting: async () => {
        try {
            const response = await axios.get(`${axiosApi}/users/profiles/`);
            set({ inState: response.data });
        } catch (error) {
            console.log(error, "getUserError");
        }
    },
    posting: async (postState) => {
        try {
            const postResponse = await axios.post(`${axiosApi}/users/create/`, postState);
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postUserError");
        }
    },
}));
