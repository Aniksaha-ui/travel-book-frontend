import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home";
import TourDescription from "./components/TourDescription/TourDescription";
import Register from "./components/Shared/Login/Register/Register";
import Login from "./components/Shared/Login/Login/Login";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tour/:id" element={<TourDescription />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
