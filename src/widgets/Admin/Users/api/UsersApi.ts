import axios from "axios";
import { create } from "zustand";
import { axiosApi } from "../../../../axiosApi";

interface IObject {
    first_name: string;
    image: null;
    job_title: string | null;
    main_company: string | null;
    password: string;
    role_type: string;
    surname: string;
    username: string;
}

interface IFetch {
    inState: IObject[];
    getting: () => void;
    posting: (postState: Record<string, unknown>) => void;
}

const usersApi = create<IFetch>((set) => ({
    inState: [],
    getting: async () => {
        try {
            const response = await axios.get(`${axiosApi}/users/profiles/`);
            set({ inState: response.data });
        } catch (error) {
            console.log(error, "getUserError");
        }
    },
    posting: async (postState: Record<string, unknown>) => {
        try {
            const postResponse = await axios.post(`${axiosApi}/users/create/`, postState);
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postUserError");
        }
    },
}));

export default usersApi;
