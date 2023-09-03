import React from "react";
import styles from "./LoginButton.module.css";
import {useNavigate} from "react-router-dom";
import { useUserAuth } from "./UserAuthContext";

function MyAccountButton() {
    const {user} = useUserAuth();
    const navigate = useNavigate();
    return (
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {user && <button onClick={() => {
                navigate("/my_account");
            }} className={styles.button}><i className="fa fa-user-circle-o"></i></button>}
        </div>
    );
}

export default MyAccountButton;