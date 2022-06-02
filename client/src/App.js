import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// Page
import Welcome from "./OAuth/Welcome";
import Loding from "./OAuth/Loding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/oauth/callback/kakao" element={<Loding />}></Route>
      </Routes>
  </Router>
  );
}

export default App;