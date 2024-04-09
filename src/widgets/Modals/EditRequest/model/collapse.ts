import { create } from "zustand";

interface DisplayStore {
    display: "block" | "none";
    toggleDisplay: () => void;
}

const useDisplayStore = create<DisplayStore>((set) => ({
    display: "none",
    toggleDisplay: () =>
        set((state) => ({
            display: state.display === "none" ? "block" : "none",
        })),
}));

export default useDisplayStore;
