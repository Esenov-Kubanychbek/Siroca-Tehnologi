import { create } from "zustand";
import { IUser } from "../../../../shared/types/userTypes";

interface IFetch {
    clientList: string[];
    managersList: string[];
    setClients: (result: IUser[]) => void;
    setManagers: (result: IUser[]) => void;
}

export const usersRoleTypeApi = create<IFetch>((set) => ({
    clientList: [],
    managersList: [],
    setClients: (result) => {
        const clientsFiltered = result.filter((client) => client.role_type === "client");
        const clientsName = clientsFiltered.map((client) => client.username);
        set({ clientList: clientsName });
    },
    setManagers: (result) => {
        const managersFiltered = result.filter(
            (manager) => manager.role_type === "manager" || manager.role_type === "",
        );
        const managersName = managersFiltered.map((manager) => manager.username);
        set({ managersList: managersName });
    },
}));
