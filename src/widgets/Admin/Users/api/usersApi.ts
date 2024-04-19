import axios from "axios";
import { create } from "zustand";
import { iGetUser, IUser, IUserGet } from "../../../../shared/types/userTypes";
import { BASE_URL } from "../../../../shared/variables/variables";

interface IUserGetDetails {
    count: number
    next: null;
    previous: null;
    results: IUser[];
}

interface IFetch {
    usersList: IUser[];
    usersGetDetails: IUserGetDetails;
    oneUserGet: IUserGet;
    oneUser: IUser;
    userProfile: iGetUser;
    getUsersList: () => void;
    setSearchList: (searchState: string) => void;
    userProfileAdded: () => void;
    getOneUser: (id: number | undefined) => void;
    putting: (postState: IUser, id: number | undefined) => void;
    postUser: (user: FormData) => void;
}

export const usersApi = create<IFetch>((set, get) => ({
    usersList: [],
    usersGetDetails: {
        count: 1,
        next: null,
        previous: null,
        results: []
    },
    userProfile: {
        first_name: "",
        job_title: 0,
        main_company: 0,
        password: "",
        role_type: "",
        surname: "",
        username: "",
    },
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
        main_company: "",
        password: "",
        role_type: "",
        surname: "",
        username: "",
    },
    getUsersList: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/users/profiles/?page=1`);
            set({usersGetDetails: response.data})
            set({ usersList: response.data.results });
        } catch (error) {
            console.log(error, "getUsersListError");
        }
    },
    setSearchList: async (searchState) => {
        try {
            const response = await axios.get(`${BASE_URL}/users/profiles/?search=${searchState}`);
            set({ usersList: response.data.results });
        } catch (error) {
            console.log(error, "getUsersListError");
        }
    },
    userProfileAdded: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/users/${localStorage.getItem("id")}/`);
            console.log(response);
            set({
                userProfile: response.data,
            });
        } catch (error) {
            console.log(error);
        }
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
    postUser: async (user) => {
        try {
            const response = await axios.post(`${BASE_URL}/users/create/`, user);
            const oldList = get().usersList;
            set({ usersList: [...oldList, response.data] });
        } catch (error) {
            console.log(error, "postUserError");
        }
    },
}));
