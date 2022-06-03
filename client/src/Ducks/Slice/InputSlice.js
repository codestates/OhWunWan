import { createSlice } from '@reduxjs/toolkit'

let initialState={}

let InputSlice = createSlice({
    name: 'name',
    initialState,
    reducers: {
        input:(state,actions)=>
        state = actions.payload
    }
});


export const { input } = InputSlice.actions

export default InputSlice.reducer