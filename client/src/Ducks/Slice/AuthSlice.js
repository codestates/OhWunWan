import { createSlice } from '@reduxjs/toolkit';

const initialState = { login: false, user_info: {} };

const AuthSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    IsLogin: (state) => {
      state.login = true;
    },
    IsLogout: (state) => {
      state.login = false;
    },
    GetUserInfo: (state, actions) => {
      state.user_info = actions.payload;
    }
  }
});

export const { IsLogin, IsLogout, GetUserInfo } = AuthSlice.actions;

export default AuthSlice.reducer;