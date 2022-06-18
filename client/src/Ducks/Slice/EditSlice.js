import { createSlice } from '@reduxjs/toolkit';

const initialState = {postInfo:"",category:"" };

const EditSlice = createSlice({
  name: 'edit',
  initialState: initialState,
  reducers: {
    SendPostInfo: (state,actions) => {
      state.postInfo = actions.payload;
    },
    SendCategory:(state,actions) => {
      state.category = actions.payload
    }
  }
});

export const { SendPostInfo,SendCategory  } = EditSlice.actions;

export default EditSlice.reducer;