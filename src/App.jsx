import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import '../src/styles/app.scss'
import ProductDetail from "./components/ProductDetail";


function App() {
  return <>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productdetail" element={<ProductDetail />} />
    </Routes>
  </Router>
  </>
}

export default App;
