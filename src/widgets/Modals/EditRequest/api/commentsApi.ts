import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

export interface IComments {
    text: string;
    user?: number | null;
    application: number | null;
}

interface IFetch {
    postComment: (comment: IComments) => void;
}

export const commentsApi = create<IFetch>(() => ({
    postComment: async (comment) => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/applications/comments/`, comment, {
                headers: {
                    Authorization: `JWT ${localStorage.getItem("access")}`,
                },
            });
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postCommentsError");
        }
    },
}));
