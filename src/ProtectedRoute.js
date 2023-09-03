import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

const ProtectedRoute = ({children}) => {

    let {user} = useUserAuth();
    if (!user) {
       return <Navigate to="/login"></Navigate>
    }
    return children;
}

export default ProtectedRoute;