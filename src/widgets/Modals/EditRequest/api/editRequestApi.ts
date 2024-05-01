import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";
import { IRequest } from "../types/types";
import { ChangeEvent } from "react";

interface IFetch {
    requestState: IRequest;
    setRequestData: (request: IRequest) => void;
    requestChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    requestFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
    editRequest: (id: number | undefined) => void;
}

export const editRequestApi = create<IFetch>((set, get) => ({
    requestState: {
        id: 0,
        title: "",
        company: "",
        task_number: "",
        description: "",
        short_description: "",
        jira: "",
        status: "",
        payment_state: "",
        priority: "",
        application_date: "",
        confirm_date: "",
        offer_date: "",
        start_date: "",
        finish_date: "",
        deadline_date: "",
        main_client: "",
        main_manager: "",
        files: [],
    },
    setRequestData: (request) => {
        set({
            requestState: {
                id: request.id,
                title: request.title,
                company: request.company,
                task_number: request.task_number,
                status: request.status,
                priority: request.priority,
                payment_state: request.payment_state,
                jira: request.jira === null ? "" : request.jira,
                files: request.files === null ? [] : request.files,
                main_client: request.main_client === null ? "" : request.main_client,
                main_manager: request.main_manager === null ? "" : request.main_manager,
                description: request.description === null ? "" : request.description,
                short_description: request.short_description === null ? "" : request.short_description,
                application_date: request.application_date === null ? "" : request.application_date,
                confirm_date: request.confirm_date === null ? "" : request.confirm_date,
                offer_date: request.offer_date === null ? "" : request.offer_date,
                start_date: request.start_date === null ? "" : request.start_date,
                finish_date: request.finish_date === null ? "" : request.finish_date,
                deadline_date: request.deadline_date === null ? "" : request.deadline_date,
            },
        });
    },
    requestChange: (e) => {
        set((prevState) => ({
            requestState: {
                ...prevState.requestState,
                [e.target.name]: e.target.value,
            },
        }));
        const state = get().requestState;
        console.log(state, "requestState");
    },
    requestFileChange: (e: ChangeEvent<HTMLInputElement>) => {
        set((prevState) => ({
            requestState: {
                ...prevState.requestState,
                files: e.target.files ? e.target.files : null,
            },
        }));
        const state = get().requestState;
        console.log(state, "requestState");
    },
    editRequest: async (id) => {
        try {
            const state = get().requestState;
            const formData = new FormData();
            const filesFormData = new FormData()            
            if (Array.isArray(state.files)) {
                state.files.map((file) => {
                    filesFormData.append("files", file)
                })
            }
            Object.entries(state).forEach(([key, value]) => {
                if (value !== null && value !== undefined && !Array.isArray(value)) {
                    formData.append(key, value);
                }
            });
            console.log(state);
            const editResponse = await axios.put(`${BASE_URL}/applications/form_edit/${id}/`, filesFormData, authToken);
            console.log(editResponse, "editRequestSuccess");
        } catch (error) {
            console.log(error, "editRequestError");
        }
    },
}));
