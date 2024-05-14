import { IUser } from "@/shared/types/userTypes";
import { create } from "zustand";

interface IAllManagersListApi {
    allManagersList: IUser[];
    filterManagers: (users: IUser[], text: string) => void;
}

export const allManagersListApi = create<IAllManagersListApi>((set) => ({
    allManagersList: [],
    filterManagers: (users, text) => {
        if (Array.isArray(users) && users.length > 0) {
            const searchWords = text.split(" ").filter((word) => word.trim() !== "");
            const filteredManagers = users.filter((user) =>
                searchWords.every(
                    (word) => user.first_name.includes(word) || (user.surname && user.surname.includes(word)),
                ),
            );
            set({ allManagersList: filteredManagers });
        } else {
            set({ allManagersList: [] });
        }
    },
}));
