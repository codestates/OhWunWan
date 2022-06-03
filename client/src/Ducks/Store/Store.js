import React from 'react';
import { configureStore } from '@reduxjs/toolkit'  
import Input_reducer from '../Slice/InputSlice'

    let store = configureStore({ 
    reducer: {
      input: Input_reducer,
    }, })  
  export default store