import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../variables/variables";
import { ChangeEvent } from "react";
import { IAllCompaniesName } from "../types/companyTypes";

interface IAllCompaniesListApi {
    companyInputState: string;
    companyExists: boolean;
    allCompaniesNamesList: string[];
    companyInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    setCompanyExists: (notExist?: boolean) => void;
    getAllCompaniesList: () => void;
}

export const allCompaniesListApi = create<IAllCompaniesListApi>((set, get) => ({
    companyInputState: "",
    companyExists: false,
    allCompaniesList: [],
    allCompaniesNamesList: [],
    companyInputChange: (e) => {
        set({ companyInputState: e.target.value });
        const allCompaniesNamesList = get().allCompaniesNamesList;
        set({ allCompaniesNamesList: allCompaniesNamesList.filter((company) => company.includes(e.target.value)) });
        const setCompanyExists = get().setCompanyExists;
        setCompanyExists();
    },
    setCompanyExists: (notExist) => {
        const companyInputState = get().companyInputState;
        const allCompaniesNamesList = get().allCompaniesNamesList;
        if (allCompaniesNamesList.some((company) => company === companyInputState)) {
            set({ companyExists: true });
        } else if (!allCompaniesNamesList.some((company) => company === companyInputState) && !notExist) {
            set({ companyExists: false });
        }
    },
    getAllCompaniesList: async () => {
        const allCompaniesNamesList = get().allCompaniesNamesList;
        if (allCompaniesNamesList.length === 0) {
            try {
                const response = await axios.get(`${BASE_URL}/company/name_list/`, authToken);
                set({ allCompaniesNamesList: response.data.map((company: IAllCompaniesName) => company.name) });
                console.log(response, "getAllUsersListSuccess");
            } catch (error) {
                console.log(error, "getAllUsersListError");
            }
        }
    },
}));
