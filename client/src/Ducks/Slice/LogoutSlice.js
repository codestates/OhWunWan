import { createSlice } from "@reduxjs/toolkit";

let initialState = {logout_modal: false};

let LogoutSlice = createSlice({
  name: 'logout_modal',
  initialState,
  reducers: {
    logout_modal: (state, actions) => {
      state.logout_modal = state = actions.payload
    }
  }
})

export const { logout_modal } = LogoutSlice.actions
export default LogoutSlice.reducer