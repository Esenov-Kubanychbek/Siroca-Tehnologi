import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../../../shared/variables/variables";

export interface IComment {
    id?: number;
    user?: string;
    text: string;
    date_added?: string;
    application: number;
    formatted_date_added?: string;
    user_image?: string;
    user_id?: number;
}

interface IPostCommentApi {
    oneComment: IComment
    postComment: (comment: IComment) => void;
}

export const postCommentApi = create<IPostCommentApi>((set) => ({
    oneComment: {
        application: 0,
        text: ""
    },
    postComment: async (comment) => {
        try {
            const response = await axios.post(`${BASE_URL}/applications/comments/`, comment, authToken);
            console.log(response, "postCommentSuccess");
            set({oneComment: response.data})
        } catch (error) {
            console.log(error, "postCommentError");
        }
    },
}));
