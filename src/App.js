import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginProcessIBM from "./pages/LoginProcessIBM";

function App() {
  const [ pkceVerifier, setPkceVerifier ] = useState("");

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<Login pkceVerifier={pkceVerifier} setPkceVerifier={setPkceVerifier} />}/>
      <Route path="/login/ibm" element={<LoginProcessIBM pkceVerifier={pkceVerifier} setPkceVerifier={setPkceVerifier} />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
  );
}

export default App;
