import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import Input_reducer from '../Slice/InputSlice'
import Like_reducer from '../Slice/LikeSlice'
import Auth_reducer from '../Slice/AuthSlice'

    let store = configureStore({ 
    reducer: {
      input: Input_reducer,
      like: Like_reducer,
      auth: Auth_reducer,
    }, 
  })  
  export default store