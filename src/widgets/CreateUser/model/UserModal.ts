import { create } from "zustand";

interface IModal {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const userModal = create<IModal>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

export default userModal;