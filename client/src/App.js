import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

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

import OhWunWan2 from "./Components/Pages/OhWunWan2";
import OhWunWan3 from "./Components/Pages/OhWunWan3";

function App() {
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

        <Route path="/ohwunwan2" element={<OhWunWan2 />}></Route>
        <Route path="/ohwunwan3" element={<OhWunWan3 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;