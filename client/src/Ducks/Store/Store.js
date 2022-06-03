import React from 'react';
import { configureStore } from '@reduxjs/toolkit'  
import input_reducer from '../Slice/InputSlice'

    let store = configureStore({ 
    reducer: {
      input: input_reducer,
    }, })  
  export default store