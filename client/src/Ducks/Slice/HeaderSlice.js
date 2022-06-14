import { createSlice } from '@reduxjs/toolkit'

let initialState = {header: 'ohwunwan'}

let HeaderSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    header: (state,actions) =>
      state = actions.payload
  }
});


export const { header } = HeaderSlice.actions
export default HeaderSlice.reducer