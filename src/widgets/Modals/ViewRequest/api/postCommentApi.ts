import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";

export interface IComments {
    text: string;
    user?: number | null;
    application: number | null;
}

interface IFetch {
    postComment: (comment: IComments) => void;
}

export const postCommentApi = create<IFetch>(() => ({
    postComment: async (comment) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/applications/comments/`, comment, authToken);
            console.log(postResponse, "postCommentSuccess");
        } catch (error) {
            console.log(error, "postCommentSuccess");
        }
    },
}));
