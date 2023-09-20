import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoginProcessIBM from "./pages/LoginProcessIBM";
import SignedInHome from "./pages/SignedInHome";
import PrivateRoute from "./utils/middleware/PrivateRoute";
import SignedInSession from "./pages/SignedInSession";
import LoginIBMPA from "./pages/LoginIBMPA";
import Pricing from "./pages/Pricing";
import SignedInBilling from "./pages/SignedInBilling";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/login/ibm" element={<LoginProcessIBM />}/>
      <Route path="/login/ibm/pa" element={<LoginIBMPA />} />
      <Route path="/register" element={<Register />}/>
      <Route path="/pricing" element={<Pricing />} />

      <Route path="/home" element={
        <PrivateRoute>
          <SignedInHome />
        </PrivateRoute>
      } />
      <Route path="/sessions" element={
        <PrivateRoute>
          <SignedInSession />
        </PrivateRoute>
      } />
      <Route path="/billings" element={
        <PrivateRoute>
          <SignedInBilling />
        </PrivateRoute>
      } />
    </Routes>
  );
}

export default App;
