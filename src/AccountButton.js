import React from "react";
import { useUserAuth } from "./UserAuthContext";
import {useNavigate} from "react-router-dom";
import styles from "./MenuButton.module.css";

const AccountButton = () => {
    const navigate = useNavigate();
    const {user, logout} = useUserAuth();
    
    const handleLogOut = async () => {
        try {
            await logout();
            navigate("/orderonline");
        } catch (error) {
            
        }
    }

    const logoutButton = <button className={styles.button} onClick={handleLogOut}>
        Logout</button>
    const loginButton = <button className={styles.button} onClick={() => {
        navigate("/login");
    }}>Login</button>

    if (!user) {
        return loginButton;
    } else {
        return logoutButton;
    }
   
}

export default AccountButton;