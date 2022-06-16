import { configureStore } from '@reduxjs/toolkit'
import Input_reducer from '../Slice/InputSlice'
import Like_reducer from '../Slice/LikeSlice'
import Logout_reducer from '../Slice/LogoutSlice'
import Header_reducer from '../Slice/HeaderSlice'
import Auth_reducer from '../Slice/AuthSlice'
import Edit_reducer from '../Slice/EditSlice'
import Comment_reducer from '../Slice/CommentSlice'

    let store = configureStore({ 
    reducer: {
      auth: Auth_reducer,
      input: Input_reducer,
      like: Like_reducer,
      logout_modal: Logout_reducer,
      header: Header_reducer,
      edit: Edit_reducer,
      comment: Comment_reducer,
    }, 
  })  
  export default store