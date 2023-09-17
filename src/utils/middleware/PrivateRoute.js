import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    return sessionStorage.getItem('Authorization-Token') != null ? children : <Navigate to="/login" />
};

export default PrivateRoute;
