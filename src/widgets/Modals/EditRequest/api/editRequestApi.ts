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
    },
    setRequestData: (request) => {
        set({
            requestState: {
                id: request.id,
                title: request.title,
                company: request.company,
                task_number: request.task_number,
                description: request.description,
                short_description: request.short_description,
                jira: request.jira,
                files: request.files,
                status: request.status,
                payment_state: request.payment_state,
                priority: request.priority,
                application_date: request.application_date,
                confirm_date: request.confirm_date,
                offer_date: request.offer_date,
                start_date: request.start_date,
                finish_date: request.finish_date,
                deadline_date: request.deadline_date,
                main_client: request.main_client,
                main_manager: request.main_manager,
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
            Object.entries(state).forEach(([key, value]) => {
                formData.append(key, value as string);
            });
            console.log(formData);
            const editResponse = await axios.put(`${BASE_URL}/applications/form_edit/${id}/`, formData, authToken);
            console.log(editResponse, "editRequestSuccess");
        } catch (error) {
            console.log(error, "editRequestError");
        }
    },
}));
