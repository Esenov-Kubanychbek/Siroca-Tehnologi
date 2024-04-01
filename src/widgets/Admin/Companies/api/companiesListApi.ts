import axios from "axios";
import { create } from "zustand";
import { BASE_URL } from "../../../../shared/variables/variables";

interface IObject {
    id: number | null;
    count_users: string | null;
    users: string | null;
    name: string | null;
    company_code: string | null;
    country: string | null;
    created_at: string | null;
    main_manager: number | null;
    managers: number | null | [];
}

interface ICompanies {
    initialState: IObject[];
    getting: () => void;
    posting: () => void;
}

const companiesApi = create<ICompanies>((set) => ({
    initialState: [],
    getting: async () => {
        try {
            const response = await axios.get(`${BASE_URL}/company/list/`);
            set({ initialState: response.data });
            console.log(response);
        } catch (error) {
            console.log(error, "getCompaniesError");
        } finally {
            console.log("getCompaniesFinally");
        }
    },
    posting: async () => {
        try {
            const postResponse = await axios.post(`${BASE_URL}/company/create/`);
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postCompaniesError");
        } finally {
            console.log("postCompaniesFinally");
        }
    },
}));

export default companiesApi;
