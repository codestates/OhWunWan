import { createSlice } from '@reduxjs/toolkit';

const initialState = {postInfo:"" };

const EditSlice = createSlice({
  name: 'edit',
  initialState: initialState,
  reducers: {
    SendPostInfo: (state,actions) => {
      state.postInfo = actions.payload;
    },
  }
});

export const { SendPostInfo  } = EditSlice.actions;

export default EditSlice.reducer;