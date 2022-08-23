import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home";
import Register from "./components/Shared/Login/Register/Register";
import Login from "./components/Shared/Login/Login/Login";
import Description from "./components/Description/Description";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/tour/:id" element={<Description />}></Route>
      </Routes>
    </div>
  );
}

export default App;
