import React from "react";
import {Link, useNavigate} from "react-router-dom";
import OrderOnlineButton from "./OrderOnlineButtonNL";
import styles from "./NavBar.module.css";

function MainNavBar() {
    const navigate = useNavigate();
    return (
        <div className={styles.Header}>
            <div tabIndex="1" onClick={() => {
                navigate("/");
            }} className={styles.title}>
                <h1>Momo's</h1>
                <p>Teahouse</p>
             </div>
        <div className={styles.NavBar}>
        <div className={styles.NavBar1}>
                <nav>
                        <li>
                            <Link className={styles.nav_link} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={styles.nav_link} to="/about">About</Link>
                        </li>
                        <li>
                            <Link className={styles.nav_link} to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link className={styles.nav_link} to="/locations">Locations</Link>
                        </li>
                </nav>
            </div>
            <div className={styles.NavBar2}>
                <nav>
                            <li>
                                <Link className={styles.nav_link} to="/my_account">Rewards</Link>
                            </li>
                            <li>
                                <Link className={styles.nav_link} to="/my_account">Gift Card Balance</Link>
                            </li>
                    </nav>
            </div>
            
        </div>
            <div className={styles.OrderButton}>
                <OrderOnlineButton />
            </div>
        </div>
           
    );
}

export default MainNavBar;