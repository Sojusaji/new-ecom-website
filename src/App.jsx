import Header from "./components/header/Header";
import { BrowserRouter as Router,Routes,Route, Form } from "react-router-dom";
import Home from "./pages/home";
import Help from "./components/help/Help";

function App() {


  return (
    <>
      <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/help" element={<Help/>}></Route>
      </Routes>

      </Router>
    </>
  )
}

export default App
