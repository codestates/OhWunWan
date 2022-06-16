import { createSlice } from '@reduxjs/toolkit'

let initialState={}

let CommentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        comment:(state,actions)=>
        state = actions.payload
    }
});


export const { comment } = CommentSlice.actions

export default CommentSlice.reducer