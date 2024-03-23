import axios from "axios";
import { create } from "zustand";

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
            const postResponse = await axios.post("http://16.171.68.251:80/api/v1/applications/comments/", postState);
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postRequestError");
        }
    },
})); 