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
    main_manager?: string;
    role_type?: string;
}
export interface adminContacts {
    email: string,
    phone_number: number | null,
    whatsapp_number: number | null
}
interface IFetchs {
    users: user;
    adminContacts: adminContacts,
    getOneUser: (id: string | undefined) => void;
    changeInputUser: (e: ChangeEvent<HTMLInputElement>) => void;
    setDatas: (data: user) => void;
    putOneUser: (data: user, newData: user) => Promise<void>;
    getAdminContacts: () => Promise<void>;
    putAdminContacts: (data: adminContacts) => Promise<void>;
    changeAdminContacts: (e : ChangeEvent<HTMLInputElement>) => void;
}

const getProfiles = async (id: string | undefined) => {
    try {
        const response = await axios.get(`${BASE_URL}/users/${id}/`, authToken);
        return response.data;
    } catch (error) {
        console.log(error, "getOneUserError");
    }
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
        main_manager: "",
        role_type: ""
    },
    adminContacts: {
        email: '',
        phone_number: null,
        whatsapp_number: null
    },
    getAdminContacts: async() => {
        try {
            const response = await axios.get(`${BASE_URL}/users/admin_contacts/`, authToken)
            console.log(response);
            
            set({ adminContacts: response.data});
        } catch (error) {
            console.log(error);
            
        }
    },
    putAdminContacts: async(data) => {
        try {
            const response = await axios.put(`${BASE_URL}/users/admin_contacts/`, data,  authToken);
            console.log(response);

            set({ adminContacts: response.data});
        } catch (error) {
            console.log(error);
            
        }
    },
    changeAdminContacts(e) {
        set((prevState) => ({
            adminContacts: {
                ...prevState.adminContacts,
                [e.target.name]: e.target.value
            }
        }))
    },
    getOneUser: async (id) => {
        const data = await getProfiles(id);
        set({ users: data });

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
                        surname: newData.surname,
                        username: newData.username,
                        main_company: newData.main_company
                    }
                    : {
                        first_name: newData.first_name,
                        image: newData.image,
                        surname: newData.surname,
                        username: newData.username,
                        main_company: newData.main_company

                    };

            if (putData !== undefined) {
                const formData = new FormData();
                Object.entries(putData).forEach(([key, value]) => {
                    formData.append(key, value as string);
                });
                const response = await axios.put(`${BASE_URL}/users/edit/${data.id}/`, formData, authToken);
                console.log(response);

                set({ users: response.data });
            }
        } catch (error) {
            console.log(error, "getOneUserError");
        }
    },
}));
