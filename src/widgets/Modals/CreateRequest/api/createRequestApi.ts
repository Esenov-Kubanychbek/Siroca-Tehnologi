import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

export interface ICreateRequest {
    title: string;
    company: string;
}

interface IFetch {
    id: number;
    oneRequest: ICreateRequest;
    posting: (postState: ICreateRequest) => void;
}

export const createRequestApi = create<IFetch>((set) => ({
    id: 0,
    oneRequest: {
        title: "",
        company: "",
    },
    posting: async (postState) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/applications/create/`, postState, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            set({ oneRequest: postState });
            set({ id: postResponse.data.id });
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postRequestError");
        }
    },
}));
