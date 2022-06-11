import { BrowserRouter as Router, Routes, Route,useNavigate} from "react-router-dom";
import { useEffect } from 'react';
import {useSelector, useDispatch} from "react-redux" 
import axios from 'axios';
import { IsLogin, IsLogout, GetUserInfo } from "./Ducks/Slice/AuthSlice"


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
  const dispatch = useDispatch()
  const url = new URL(window.location.href);
  const code = url.searchParams.get('code')

  const authentication = async () => {
    try {
      const res = await axios.get('https://localhost:4000/auth',{withCredentials:true})
      console.log("get요청에 대한 서버응답",res.data.data.user_info)

      if (res.data.data.user_info) {
        dispatch(IsLogin());
        dispatch(GetUserInfo(res.data.data.user_info));
      } else {
        dispatch(IsLogout());
      }
    } catch (err) {
      dispatch(IsLogout());
    }
  };

  const redirect= ()=> {
    axios.post('https://localhost:4000/auth/kakao',{code})
    .then((res)=>{console.log("post요청에 대한 서버응답",res.data.data.user_info);return res.data.data.user_info})
    .then((res)=>{window.location.replace("https://localhost:3000/ohwunwan")})
  }


  //1번실행
  useEffect(() => {
    authentication();
    if(code)redirect()
  }, []);
  
  console.log("로그인",is_login)
  console.log("리덕스에 저장된 유저정보",user_info)
  
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

export default App;
