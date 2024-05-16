import { IUser } from "@/shared/types/userTypes";
import { create } from "zustand";

interface IAllManagersListApi {
    managerState: string;
    setManagerState: (managerState: string) => void;
    managerExists: boolean;
    setManagerExists: (inputState: string) => void;
    allManagersList: IUser[];
    searchManagersList: IUser[];
    filterManagers: (users: IUser[], text: string) => void;
}

export const allManagersListApi = create<IAllManagersListApi>((set, get) => ({
    managerState: "",
    setManagerState: (managerState) => {
        set({ managerState: managerState });
    },
    managerExists: false,
    setManagerExists: (inputState) => {
        const allManagersList = get().allManagersList;
        const searchWords = inputState.split(" ").filter((word) => word.trim() !== "");
        const firstWordIsFirstName = allManagersList.some((manager) => {
            return manager.first_name === searchWords[0];
        });
        const secondWordIsFirstName = allManagersList.some((manager) => {
            return manager.first_name === searchWords[1];
        });
        const firstWordIsSurName = allManagersList.some((manager) => {
            return manager.surname === searchWords[0];
        });
        const secondWordIsSurName = allManagersList.some((manager) => {
            return manager.surname === searchWords[1];
        });
        if ((firstWordIsFirstName && secondWordIsSurName) || (firstWordIsSurName && secondWordIsFirstName)) {
            set({ managerExists: true });
        }
    },
    allManagersList: [],
    searchManagersList: [],
    filterManagers: (users, text) => {
        const allManagersList = get().allManagersList;
        if (Array.isArray(users) && users.length > 0) {
            const allList = users.filter((user) => user.role_type === "manager");
            const searchWords = text.split(" ").filter((word) => word.trim() !== "");
            const filteredManagers = allList.filter((user) =>
                searchWords.every(
                    (word) => user.first_name.includes(word) || (user.surname && user.surname.includes(word)),
                ),
            );
            set({ allManagersList: allList, searchManagersList: filteredManagers });
        } else if (allManagersList.length > 0) {
            set({ searchManagersList: [] });
        } else {
            set({ allManagersList: [], searchManagersList: [] });
        }
    },
}));
