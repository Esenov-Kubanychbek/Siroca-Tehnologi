import axios from "axios";
import { create } from "zustand";
import { axiosApi } from "../../../../axiosApi";

interface IObject {
    manager_can_delete_comments: false, 
    manager_can_get_reports: false,
    manager_can_view_profiles: false,
    manager_can_delete_application: false
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
            const response = await axios.get(`${axiosApi}/company/list/`);
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
            const postResponse = await axios.post(`${axiosApi}/company/create/`);
            console.log(postResponse);
        } catch (error) {
            console.log(error, "postCompaniesError");
        } finally {
            console.log("postCompaniesFinally");
        }
    },
}));

export default companiesApi;
