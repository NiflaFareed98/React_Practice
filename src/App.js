import "./App.css";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Hook_using_obj from "./components/Hook_using_obj";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Welcome />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
