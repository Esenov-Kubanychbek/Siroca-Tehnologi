import { configureStore } from "@reduxjs/toolkit";
import ModalSlice from "../../shared/slices/ModalSlice";
import ChangePasswowdSlice from "../../shared/slices/ChangePasswowdSlice";

export const store = configureStore({
   reducer: {
     modal: ModalSlice,
     changePassword: ChangePasswowdSlice,
   },
 });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
