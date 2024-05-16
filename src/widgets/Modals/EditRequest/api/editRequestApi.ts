import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";
import { IRequest } from "../types/types";
import { ChangeEvent } from "react";

interface IFile {
    id?: number;
    file: string;
    application: number;
    file_name?: string;
}

interface IFetch {
    requestState: IRequest;
    setRequestData: (request: IRequest) => void;
    setFile: (file: IFile) => void;
    requestChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    editRequest: () => void;
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
                jira: request.jira,
                main_client: request.main_client,
                main_manager: request.main_manager,
                description: request.description,
                short_description: request.short_description,
                application_date: request.application_date,
                confirm_date: request.confirm_date,
                offer_date: request.offer_date,
                start_date: request.start_date,
                finish_date: request.finish_date,
                deadline_date: request.deadline_date,
                files: request.files,
            },
        });
    },
    setFile: (file) => {
        set((prevState) => ({
            requestState: {
                ...prevState.requestState,
                files: [...prevState.requestState.files, file],
            },
        }));
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
    editRequest: async () => {
        try {
            const requestState = get().requestState;
            console.log(requestState, "requestState");
            const editResponse = await axios.put(
                `${BASE_URL}/applications/form_edit/${requestState.id}/`,
                requestState,
                authToken,
            );
            console.log(editResponse, "editRequestSuccess");
        } catch (error) {
            console.log(error, "editRequestError");
        }
    },
}));
