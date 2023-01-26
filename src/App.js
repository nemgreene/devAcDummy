import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Stylesheets/index.scss";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Welcome from "./Components/Pages/Welcome";
import Menu from "./Components/Menu/Menu";

function App() {
  return (
    <div className="appContainer">
      <Menu />
      {/* <Routes>
        <Route path="" element={<Welcome />}></Route>
        <Route path="/otoko" element={"2"}></Route>
        <Route path="/watertrade" element={"3"}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
