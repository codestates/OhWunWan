import { BrowserRouter as Router, Routes, Route,useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux" 
import axios from 'axios';
import { IsLogin, IsLogout, GetUserInfo } from "./Ducks/Slice/AuthSlice.js"


// GlobalStyle
import GlobalStyle from "./Styled";

// Page
import Welcome from "./Components/Pages/Welcome";
import Login from "./Components/Pages/Login";
import OhWunWan from "./Components/Pages/OhWunWan";
import Onerm from "./Components/Pages/Onerm";
import Feedback from "./Components/Pages/Feedback";
import PostCategory from "./Components/Pages/PostCategory";
import PostOhwunwan from "./Components/Pages/PostOhwunwan";
import Post1rm from "./Components/Pages/Post1rm"
import PostFeedback from "./Components/Pages/PostFeedback";
import Mypage from "./Components/Pages/Mypage";
import UserInfo from "./Components/Pages/UserInfo";
import Menu from "./Components/Pages/Menu"

function App() {
  
  const is_login = useSelector((state)=>state.auth.login)
  const user_info = useSelector((state)=>state.auth.user_info)
  // stor에서 state를 가져온다
  
  const dispatch = useDispatch()
  const url = new URL(window.location.href); // 새로운 객체를 생성해준다
  const code = url.searchParams.get('code')  // url의 code를 가져온다 


  // 서버가 카카오로부터 받은 유저의 정보를 가져오고 로그인으로 바꿔주는 함수 
  const authentication = async () => {
    try {
      const res = await axios.get('https://localhost:4000/auth',{withCredentials:true})  // 
      

      // 유저의 정보가 DB에 있을 때 
      if (res.data.data.user_info) {  
        dispatch(IsLogin());  // 로그인 상태를 true로 변경 
        dispatch(GetUserInfo(res.data.data.user_info)); // 유저의 정보를 저장
      } else {
        // 유저의 정보가 DB에 없을 때
        dispatch(IsLogout()); // 로그인 상태를 false로 유지 
      }
    } catch (err) {
      // 에러
      console.log("에러",err)
      dispatch(IsLogout());
    }
  };


  // 카카오로부터 auth code를 받을때 한번 실행되는 함수 
  const redirect= ()=> {
    axios.post('https://localhost:4000/auth/kakao',{code})
    .then((res)=>window.location.replace("https://localhost:3000/ohwunwan")) 
  }

  // 페이지가 렌더링 될때 마다 실행
  useEffect(() => {
    authentication();
    if(code)redirect()
  }, []);
  
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/oauth/kakao" element={<Login />}></Route>
        <Route path="/ohwunwan" element={<OhWunWan />}></Route>
        <Route path="/1rm" element={<Onerm />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>
        <Route path="/post" element={<PostCategory />}></Route>
        <Route path="/post/ohwunwan" element={<PostOhwunwan />}></Route>
        <Route path="/post/1rm" element={<Post1rm />}></Route>
        <Route path="/post/feedback" element={<PostFeedback />}></Route>
        <Route path="/user" element={<Mypage />}></Route>
        <Route path="/userinfo" element={<UserInfo />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </Router>
  );
}

export default App