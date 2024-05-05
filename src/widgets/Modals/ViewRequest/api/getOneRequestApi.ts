import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";
import { IGetOneRequestApi } from "../types/getOneRequestTypes";

export const getOneRequestApi = create<IGetOneRequestApi>((set) => ({
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
    setChecklist: (data) => {
        set((prev) => ({
            oneRequest: {
                ...prev.oneRequest,
                checklists: [...prev.oneRequest.checklists, data],
            },
        }));
    },
    setFile: (file) => {
        set((prevState) => ({
            oneRequest: {
                ...prevState.oneRequest,
                files: [...prevState.oneRequest.files, file],
            },
        }));
    },
    getOneRequest: async (id) => {
        try {
            const getOneResponse = await axios.get(`${BASE_URL}/applications/form_view/${id}/`, authToken);
            console.log(getOneResponse.data, "getOneRequestSuccess");
            set({ oneRequest: getOneResponse.data });
        } catch (error) {
            console.log(error, "getOneRequestError");
        }
    },
}));
