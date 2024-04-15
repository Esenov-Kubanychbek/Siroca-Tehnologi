import { create } from "zustand";

export interface IRolesId {
    [key: string]: boolean | string;
}
interface IFetch {
    rolesState: IRolesId | null;
    setRoles: (data: IRolesId | null) => void;
}

export const RolesIdState = create<IFetch>((set) => ({
    rolesState: null,
    setRoles: (data) => {
        set({ rolesState: data });
    },
}));
