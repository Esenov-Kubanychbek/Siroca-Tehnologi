import { IUser } from "@/shared/types/userTypes";
import { create } from "zustand";

interface IAllUsersListApi {
    userState: string;
    setUserState: (userState: string) => void;
    userExists: boolean;
    setUserExists: (inputState: string) => void;
    allUsersList: IUser[];
    searchUsersList: IUser[];
    filterUsers: (users: IUser[], text: string) => void;
}

export const allUsersListApi = create<IAllUsersListApi>((set, get) => ({
    userState: "",
    setUserState: (userState) => {
        set({ userState: userState });
    },
    userExists: false,
    setUserExists: (inputState) => {
        const allManagersList = get().allUsersList;
        const searchWords = inputState.split(" ").filter((word) => word.trim() !== "");
        const firstWordIsFirstName = allManagersList.some((user) => {
            return user.first_name === searchWords[0];
        });
        const secondWordIsFirstName = allManagersList.some((user) => {
            return user.first_name === searchWords[1];
        });
        const firstWordIsSurName = allManagersList.some((user) => {
            return user.surname === searchWords[0];
        });
        const secondWordIsSurName = allManagersList.some((user) => {
            return user.surname === searchWords[1];
        });
        if ((firstWordIsFirstName && secondWordIsSurName) || (firstWordIsSurName && secondWordIsFirstName)) {
            set({ userExists: true });
        }
    },
    allUsersList: [],
    searchUsersList: [],
    filterUsers: (users, text) => {
        const allUsersList = get().allUsersList;
        if (Array.isArray(users) && users.length > 0) {
            const searchWords = text.split(" ").filter((word) => word.trim() !== "");
            const filteredUsers = users.filter((user) =>
                searchWords.every(
                    (word) => user.first_name.includes(word) || (user.surname && user.surname.includes(word)),
                ),
            );
            set({ allUsersList: users, searchUsersList: filteredUsers });
        } else if (allUsersList.length > 0) {
            set({ searchUsersList: [] });
        } else {
            set({ allUsersList: [], searchUsersList: [] });
        }
    },
}));
