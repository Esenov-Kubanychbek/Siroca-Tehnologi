import axios from "axios";
import { create } from "zustand";
import { IUser, IUserGet } from "@/shared/types/userTypes";
import { BASE_URL, authToken } from "@/shared/variables/variables";

interface IUsersApi {
    count: number;
    usersList: IUser[];
    oneUserGet: IUserGet;
    getUsersList: (page: number) => void;
    setSearchList: (searchState: string) => void;
    getOneUser: (id: number | undefined) => void;
}

export const usersApi = create<IUsersApi>((set) => ({
    count: 1,
    usersList: [],
    oneUserGet: {
        first_name: "",
        image: "",
        job_title: "",
        main_company: "",
        password: "",
        role_type: "",
        surname: "",
        username: "",
    },
    getUsersList: async (page) => {
        try {
            const response = await axios.get(`${BASE_URL}/users/profiles/?page=${page}`, authToken);
            set({ usersList: response.data.data, count: response.data.count });
            console.log(response, "getUsersListSuccess");
        } catch (error) {
            console.log(error, "getUsersListError");
        }
    },
    setSearchList: async (searchState) => {
        try {
            const response = await axios.get(`${BASE_URL}/users/profiles/?search=${searchState}`, authToken);
            set({ usersList: response.data.data });
        } catch (error) {
            console.log(error, "getUsersListError");
        }
    },
    getOneUser: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/users/${id}/`, authToken);
            set({ oneUserGet: response.data });
        } catch (error) {
            console.log(error, "getOneUserError");
        }
    },
}));
