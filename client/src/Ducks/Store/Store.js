import React from 'react';
import { configureStore } from '@reduxjs/toolkit'
import Input_reducer from '../Slice/InputSlice'
import Like_reducer from '../Slice/LikeSlice'
import Auth_reducer from  '../Slice/AuthSlice'
import Post_reducer from '../Slice/PostSlice'

    let store = configureStore({ 
    reducer: {
      input: Input_reducer,
      like: Like_reducer,
      auth: Auth_reducer,
      post: Post_reducer,
    }, 
  })  
  export default store