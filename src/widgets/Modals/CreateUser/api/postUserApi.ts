import axios from "axios";
import { create } from "zustand";
import { ChangeEvent } from "react";
import { IAddUser, ISendUser } from "@/shared/types/userTypes";
import { BASE_URL, authToken } from "@/shared/variables/variables";
import { IJobTitle } from "@/widgets/Admin/JobTitles/api/jobTitleApi";
import { transliterate as tr } from "transliteration";

interface IPostUserApi {
    postUserState: ISendUser;
    setPostUserName: (username: string) => void;
    resetPostUserState: () => void;
    jobTitleExists: boolean;
    setJobTitleExist: (jobTitlesList: IJobTitle[]) => void;
    postUserAdded: IAddUser;
    setPostUserAdded: () => void;
    postUserChange: (e: ChangeEvent<HTMLInputElement>) => void;
    postUser: () => void;
}

export const postUserApi = create<IPostUserApi>((set, get) => ({
    postUserState: {
        image: "",
        first_name: "",
        surname: "",
        role_type: "",
        username: "",
        password: "",
        main_company: "",
        job_title: "",
    },
    setPostUserName: (username) => {
        const postUserState = get().postUserState;
        set({ postUserState: { ...postUserState, username: username } });
    },
    resetPostUserState: () => {
        const postUserState = get().postUserState;
        const postUserAdded = get().postUserAdded;
        for (const key in postUserState) {
            if (Object.prototype.hasOwnProperty.call(postUserState, key)) {
                postUserState[key] = "";
            }
        }
        for (const key in postUserAdded) {
            if (Object.prototype.hasOwnProperty.call(postUserAdded, key)) {
                postUserAdded[key] = true;
            }
        }
        set({ postUserState, postUserAdded, jobTitleExists: false });
    },
    jobTitleExists: false,
    setJobTitleExist: (jobTitlesList) => {
        const postUserState = get().postUserState;
        set({
            jobTitleExists: jobTitlesList.some((jobTitle) => {
                return postUserState.job_title === jobTitle.title;
            }),
        });
    },
    postUserAdded: {
        image: true,
        first_name: true,
        surname: true,
        role_type: true,
        username: true,
        password: true,
        main_company: true,
        job_title: true,
    },
    setPostUserAdded: () => {
        const postUserState = get().postUserState;
        const postUserAdded = get().postUserAdded;
        const updatedAdded: IAddUser = { ...postUserAdded };
        Object.keys(postUserState).forEach((key) => {
            updatedAdded[key] = postUserState[key] !== "";
        });
        set({ postUserAdded: updatedAdded });
    },
    postUserChange: (e) => {
        set((prevState) => ({
            postUserState: {
                ...prevState.postUserState,
                [e.target.name]: e.target.name === "image" && e.target.files ? e.target.files[0] : e.target.value,
            },
        }));
        const { first_name, surname } = get().postUserState;
        const postUserState = get().postUserState;
        if (e.target.name === "first_name" || e.target.name === "surname") {
            const updatedFirstName = e.target.name === "first_name" ? e.target.value : first_name;
            const updatedSurname = e.target.name === "surname" ? e.target.value : surname;
            const transliteratedFirstName = tr(updatedFirstName).toLowerCase();
            const transliteratedSurname = tr(updatedSurname).toLowerCase();
            set({
                postUserState: {
                    ...postUserState,
                    username: (transliteratedFirstName + transliteratedSurname).replace(/\s+/g, ""),
                },
            });
        }
        console.log(postUserState, "postUserState");
    },
    postUser: async () => {
        const postUserState = get().postUserState;
        const resetPostUserState = get().resetPostUserState;
        try {
            const formData = new FormData();
            Object.entries(postUserState).forEach(([key, value]) => {
                formData.append(key, value as string);
            });
            const response = await axios.post(`${BASE_URL}/users/create/`, formData, authToken);
            console.log(response, "postUserSuccess");
            resetPostUserState();
        } catch (error) {
            console.log(error, "postUserError");
        }
    },
}));
