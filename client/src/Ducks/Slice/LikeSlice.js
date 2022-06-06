import { createSlice } from "@reduxjs/toolkit";

let initialState = {like: 0}

let LikeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    like: (state, actions) => state = console.log(state)
    // like: (state, actions) => state = {like: like++}
  }
})

export const { like } = LikeSlice.actions
export default LikeSlice.reducer