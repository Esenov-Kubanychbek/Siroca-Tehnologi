import { IAllUsersName } from "@/shared/types/userTypes";
import axios from "axios";
import { create } from "zustand";
import { BASE_URL, authToken } from "../../variables/variables";
import { ChangeEvent } from "react";

interface IAllUsersListApi {
    userInputState: string;
    managerInputState: string;
    companyUserInputState: string;
    userExists: boolean | null;
    managerExists: boolean | null;
    companyUserExists: boolean | null;
    allUsersList: IAllUsersName[];
    allUsersNamesList: string[];
    allManagersNamesList: string[];
    allCompanyUsersNamesList: string[];
    searchUsersNamesList: string[];
    searchManagersNamesList: string[];
    searchCompanyUsersNamesList: string[];
    setUserInputState: (userInputState: string) => void;
    setManagerInputState: (managerInputState: string) => void;
    setCompanyUserInputState: (companyUserInputState: string) => void;
    userInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    managerInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    companyUserInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    setUserExists: (notExist?: boolean) => void;
    setManagerExists: (notExist?: boolean) => void;
    setCompanyUserExists: (notExist?: boolean) => void;
    getAllUsersList: () => void;
    getCompanyUsers: (company?: string) => void;
}

export const allUsersListApi = create<IAllUsersListApi>((set, get) => ({
    userInputState: "",
    managerInputState: "",
    companyUserInputState: "",
    userExists: null,
    managerExists: null,
    companyUserExists: null,
    allUsersList: [],
    allUsersNamesList: [],
    allManagersNamesList: [],
    allCompanyUsersNamesList: [],
    searchUsersNamesList: [],
    searchManagersNamesList: [],
    searchCompanyUsersNamesList: [],
    setUserInputState: (userInputState) => {
        set({ userInputState: userInputState });
        const setUserExists = get().setUserExists;
        setUserExists();
    },
    setManagerInputState: (managerInputState) => {
        set({ managerInputState: managerInputState });
        const setManagerExists = get().setManagerExists;
        setManagerExists();
    },
    setCompanyUserInputState: (companyUserInputState) => {
        set({ companyUserInputState: companyUserInputState });
        const setCompanyUserExists = get().setCompanyUserExists;
        setCompanyUserExists();
    },
    userInputChange: (e) => {
        set({ userInputState: e.target.value });
        const allUsersNamesList = get().allUsersNamesList;
        set({ searchUsersNamesList: allUsersNamesList.filter((user) => user.includes(e.target.value)) });
        const setUserExists = get().setUserExists;
        setUserExists();
    },
    managerInputChange: (e) => {
        set({ managerInputState: e.target.value });
        const allManagersNamesList = get().allManagersNamesList;
        set({ searchManagersNamesList: allManagersNamesList.filter((user) => user.includes(e.target.value)) });
        const setManagerExists = get().setManagerExists;
        setManagerExists();
    },
    companyUserInputChange: (e) => {
        set({ companyUserInputState: e.target.value });
        const allCompanyUsersNamesList = get().allCompanyUsersNamesList;
        set({ searchCompanyUsersNamesList: allCompanyUsersNamesList.filter((user) => user.includes(e.target.value)) });
        const setCompanyUserExists = get().setCompanyUserExists;
        setCompanyUserExists();
    },
    setUserExists: (notExist) => {
        const userInputState = get().userInputState;
        const allUsersNamesList = get().allUsersNamesList;
        if (allUsersNamesList.some((user) => user === userInputState)) {
            set({ userExists: true, searchUsersNamesList: [] });
        } else if (!allUsersNamesList.some((user) => user === userInputState) && !notExist) {
            set({ userExists: false });
        }
    },
    setManagerExists: (notExist) => {
        const managerInputState = get().managerInputState;
        const allManagersNamesList = get().allManagersNamesList;
        if (allManagersNamesList.some((manager) => manager === managerInputState)) {
            set({ managerExists: true, searchManagersNamesList: [] });
        } else if (!allManagersNamesList.some((manager) => manager === managerInputState) && !notExist) {
            set({ managerExists: false });
        }
    },
    setCompanyUserExists: (notExist) => {
        const companyUserInputState = get().companyUserInputState;
        const allCompanyUsersNamesList = get().allCompanyUsersNamesList;
        if (allCompanyUsersNamesList.some((user) => user === companyUserInputState)) {
            set({ companyUserExists: true, searchCompanyUsersNamesList: [] });
        } else if (!allCompanyUsersNamesList.some((user) => user === companyUserInputState) && !notExist) {
            set({ companyUserExists: false });
        }
    },
    getAllUsersList: async () => {
        const allUsersNamesList = get().allUsersNamesList;
        if (allUsersNamesList.length === 0) {
            try {
                const response = await axios.get(`${BASE_URL}/users/name_list/`, authToken);
                set({
                    allUsersList: response.data,
                    allUsersNamesList: response.data.map((user: IAllUsersName) => user.full_name),
                    allManagersNamesList: response.data
                        .filter((user: IAllUsersName) => user.role_type === "manager")
                        .map((manager: IAllUsersName) => manager.full_name),
                    searchUsersNamesList: response.data.map((user: IAllUsersName) => user.full_name),
                    searchManagersNamesList: response.data
                        .filter((user: IAllUsersName) => user.role_type === "manager")
                        .map((manager: IAllUsersName) => manager.full_name),
                });
                console.log(response, "getAllUsersListSuccess");
            } catch (error) {
                console.log(error, "getAllUsersListError");
            }
        }
    },
    getCompanyUsers: (company) => {
        const allUsersList = get().allUsersList;
        set({
            allCompanyUsersNamesList: allUsersList
                .filter((user) => user.main_company === company && user.role_type === "client")
                .map((user) => user.full_name),
            searchCompanyUsersNamesList: allUsersList
                .filter((user) => user.main_company === company && user.role_type === "client")
                .map((user) => user.full_name),
        });
    },
}));
