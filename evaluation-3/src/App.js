import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";
import Nav from "./components/Nav";
import "./App.css";
import DetailedProduct from "./components/DetailedProduct";

function App() {
  return (
    <div className="App">
      
        <Nav />
        <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<SingleProduct />} />
          <Route path="/product/:productId" element={<DetailedProduct />} />
          <Route>404 Not Found!</Route>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;