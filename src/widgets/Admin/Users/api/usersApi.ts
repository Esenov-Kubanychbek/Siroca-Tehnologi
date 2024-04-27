import axios from "axios";
import { create } from "zustand";
import { IUser, IUserGet } from "../../../../shared/types/userTypes";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";

interface IUserGetDetails {
    count: number;
    next: null;
    previous: null;
    results: IUser[];
}

interface IFetch {
    usersList: IUser[];
    usersGetDetails: IUserGetDetails;
    oneUserGet: IUserGet;
    oneUser: IUser;
    getUsersList: () => void;
    setSearchList: (searchState: string) => void;
    getOneUser: (id: number | undefined) => void;
    postUser: (user: FormData) => void;
}

export const usersApi = create<IFetch>((set, get) => ({
    usersList: [],
    usersGetDetails: {
        count: 1,
        next: null,
        previous: null,
        results: [],
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
            const response = await axios.get(`${BASE_URL}/users/profiles/?page=1`, authToken);
            set({ usersGetDetails: response.data });
            set({ usersList: response.data });
        } catch (error) {
            console.log(error, "getUsersListError");
        }
    },
    setSearchList: async (searchState) => {
        try {
            const response = await axios.get(`${BASE_URL}/users/profiles/?search=${searchState}`, authToken);
            set({ usersList: response.data });
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
    postUser: async (user) => {
        try {
            const response = await axios.post(`${BASE_URL}/users/create/`, user, authToken);
            const oldList = get().usersList;
            set({ usersList: [...oldList, response.data] });
        } catch (error) {
            console.log(error, "postUserError");
        }
    },
}));
