import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home";
import Register from "./components/Shared/Login/Register/Register";
import Login from "./components/Shared/Login/Login/Login";
import Description from "./components/Description/Description";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/tour/:id" element={<Description />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
      </Routes>
    </div>
  );
}

export default App;
