import axios from "axios";
import { create } from "zustand";
import { ChangeEvent } from "react";
import { authToken, BASE_URL } from "../../../../shared/variables/variables";

export interface user {
    id?: string | null;
    first_name: string;
    image?: File | FileList | string | undefined;
    job_title: string;
    main_company: string;
    surname?: string;
    username: string;
}
interface IFetchs {
    users: user;
    getOneUser: (id: string | undefined) => void;
    changeInputUser: (e: ChangeEvent<HTMLInputElement>) => void;
    setDatas: (data: user) => void;
    putOneUser: (data: user, newData: user) => Promise<void>;
}

export const profile = create<IFetchs>((set) => ({
    users: {
        id: null,
        first_name: "",
        image: "",
        job_title: "",
        main_company: "",
        surname: "",
        username: "",
    },
    getOneUser: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/users/edit/${id}/`, authToken);
            set({ users: response.data });
        } catch (error) {
            console.log(error, "getOneUserError");
        }
    },
    changeInputUser: (e) => {
        set((prevState) => ({
            users: {
                ...prevState.users,
                [e.target.name]: e.target.name === "image" && e.target.files ? e.target.files[0] : e.target.value,
            },
        }));
    },
    setDatas: (data) => {
        set({ users: data });
    },
    putOneUser: async (data, newData) => {
        try {
            const putData =
                newData.image === data.image
                    ? {
                          first_name: newData.first_name,
                          job_title: newData.job_title,
                          main_company: newData.main_company,
                          surname: newData.surname,
                          username: newData.username,
                      }
                    : {
                          first_name: newData.first_name,
                          image: newData.image,
                          job_title: newData.job_title,
                          main_company: newData.main_company,
                          surname: newData.surname,
                          username: newData.username,
                      };

            if (putData !== undefined) {
                const formData = new FormData();
                Object.entries(putData).forEach(([key, value]) => {
                    formData.append(key, value as string);
                });
                const response = await axios.put(`${BASE_URL}/users/edit/${data.id}/`, formData, authToken);
                set({ users: response.data });
            }
        } catch (error) {
            console.log(error, "getOneUserError");
        }
    },
}));
