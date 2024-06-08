import React, { useState } from "react";
// import "./App.css"
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import SearchItem from "./components/SearchItem";
import Cart from "./components/Cart";
import { product } from "./components/Data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./services/ProtectedRoute";

function App() {
  const [data, setData] = useState([...product]);
  const [cart, setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          // transition:Bounce
        />
        <NavBar cart={cart} setData={setData} />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<ProtectedRoute/>}>
          <Route
            path="/"
            element={<Products product={data} cart={cart} setCart={setCart} />}
          />
          <Route
            path="/product/:id"
            element={<ProductDetail cart={cart} setCart={setCart} />}
          />
          <Route
            path="/search/:term"
            element={<SearchItem cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
// Log to console
console.log("Hello console");
