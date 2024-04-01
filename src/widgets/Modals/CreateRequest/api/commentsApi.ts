import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

export interface IComments {
    text: string;
    user: number | null;
    application: number | null;
}
interface IFetch {
    inState: IComments[];
    posting: (postState: IComments) => void;
}

export const commentsApi = create<IFetch>(() => ({
    inState: [],
    posting: async (postState) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/applications/comments/`, postState);
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postRequestError");
        }
    },
}));
