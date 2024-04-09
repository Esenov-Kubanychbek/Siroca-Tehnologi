import { create } from "zustand";
import { IModal } from "../../types/modalTypes";

export const useEditRequest = create<IModal>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));
