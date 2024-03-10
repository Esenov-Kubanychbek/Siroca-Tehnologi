// modalSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store/store';
interface ModalState {
  isModalOpen: boolean;
  modalContent: string | null;
}

const initialState: ModalState = {
  isModalOpen: false,
  modalContent: null,
};


const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.modalContent = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
      state.modalContent = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export const selectModal = (state: RootState) => state.modal;

export default modalSlice.reducer;
