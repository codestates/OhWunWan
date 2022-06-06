import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// GlobalStyle
import GlobalStyle from "./Styled";

// Page
import Login from "./Components/Pages/Login";
import OhWunWan from "./Components/Pages/OhWunWan";

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/ohwunwan" element={<OhWunWan />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
