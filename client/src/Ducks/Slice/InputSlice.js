import { createSlice } from '@reduxjs/toolkit'

let initialState={}

let input_slice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        input:(state,actions)=>
        state = actions.payload
    }
});


console.log(input_slice.actions)
export const{ input } = input_slice.actions

export default input_slice.reducer