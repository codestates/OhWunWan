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
import PostingBlock from './Components/Organism/PostingBlock';

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<PostingBlock></PostingBlock>}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
