import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

export interface ICreateRequest {
    id?: number;
    title: string;
    company: number;
}

interface IFetch {
    oneRequest: ICreateRequest
    posting: (postState: ICreateRequest) => void;
}

export const requestApi = create<IFetch>((set) => ({
    oneRequest: {
        title: "",
        company: 1
    },
    posting: async (postState) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/applications/create/`, postState, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            set({oneRequest: postState})
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postRequestError");
        }
    },
}));
