import React from "react";
import "./Footer.css";

function Footer() {
    const menuItems = (
        <div id="OrderOnlineFooter" className="footer">
            <p id="footHeader">Momo's Teahouse</p>
            <p id="trademark">copyright © 2023 | "Momo's Teahouse" is a registered 
            trademark of the Momo Teahouse corporation | all rights reserved</p>
        </div>
    );

    return menuItems;
}

export default Footer;