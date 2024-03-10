import { createSlice } from '@reduxjs/toolkit';

export interface changePassword {
    changePassword: boolean;
}

const initialState: changePassword = {
    changePassword: false,
};


const changePassword = createSlice({
  name: 'changePassword',
  initialState,
  reducers: {
    openChangePassword: (state) => {
      state.changePassword = true;
    },
    closeChangePassword: (state) => {
      state.changePassword = false;
    },  
  },
});

export const { openChangePassword, closeChangePassword } = changePassword.actions;

export default changePassword.reducer;
