import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginProcessIBM from "./pages/LoginProcessIBM";
import SignedInHome from "./pages/SignedInHome";
import PrivateRoute from "./utils/middleware/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/login/ibm" element={<LoginProcessIBM />}/>
      <Route path="/register" element={<Register />}/>

      <Route path="/home" element={
        <PrivateRoute>
          <SignedInHome />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;
