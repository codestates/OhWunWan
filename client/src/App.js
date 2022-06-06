import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// GlobalStyle
import GlobalStyle from "./Styled";

// Page
import Login from "./Components/Pages/Login";
import OhWunWan from "./Components/Pages/OhWunWan";
import Oauth from "./Components/Pages/Oauth";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/ohwunwan" element={<OhWunWan />}></Route>
        <Route path="/oauth/kakao" element={<Oauth />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
