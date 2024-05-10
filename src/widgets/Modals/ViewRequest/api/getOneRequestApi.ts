import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";
import { IGetOneRequestApi } from "../types/getOneRequestTypes";

export const getOneRequestApi = create<IGetOneRequestApi>((set, get) => ({
    oneRequest: {
        id: 0,
        logs: [],
        company: "",
        main_client: "",
        main_manager: "",
        checklists: [],
        comments: [],
        task_number: "",
        title: "",
        description: "",
        short_description: "",
        files: [],
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
    },
    setChecklist: (checklist) => {
        set((prevState) => ({
            oneRequest: {
                ...prevState.oneRequest,
                checklists: [...prevState.oneRequest.checklists, checklist],
            },
        }));
    },
    setCompletedFromChecklists: (id) => {
        const checklists = get().oneRequest.checklists
        console.log(id, checklists);
    },
    deleteChecklistFromChecklists: (id) => {
        set((prevState) => ({
            oneRequest: {
                ...prevState.oneRequest,
                checklists: prevState.oneRequest.checklists.filter((checklist) => checklist.id !== id),
            },
        }));
    },
    setSubTask: () => {},
    setFile: (file) => {
        set((prevState) => ({
            oneRequest: {
                ...prevState.oneRequest,
                files: [...prevState.oneRequest.files, file],
            },
        }));
    },
    deleteFileFromFiles: (id) => {
        set((prevState) => ({
            oneRequest: {
                ...prevState.oneRequest,
                files: prevState.oneRequest.files.filter((file) => file.id !== id),
            },
        }));
    },
    setComment: (comment) => {
        set((prevState) => ({
            oneRequest: {
                ...prevState.oneRequest,
                comments: [...prevState.oneRequest.comments, comment],
            },
        }));
    },
    deleteCommentFromComments: (id) => {
        set((prevState) => ({
            oneRequest: {
                ...prevState.oneRequest,
                comments: prevState.oneRequest.comments.filter((comment) => comment.id !== id),
            },
        }));
    },
    getOneRequest: async (id) => {
        try {
            const response = await axios.get(`${BASE_URL}/applications/form_view/${id}/`, authToken);
            console.log(response.data, "getOneRequestSuccess");
            set({ oneRequest: response.data });
        } catch (error) {
            console.log(error, "getOneRequestError");
        }
    },
}));
