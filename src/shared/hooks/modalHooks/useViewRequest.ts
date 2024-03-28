import { create } from "zustand";
import { IModal } from "../../types/modalTypes";

const useViewRequest = create<IModal>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

export default useViewRequest;
