import React from "react";
import styles from "./SideMenuDropDown.module.css";

function SideMenuDropdown() {
    return (
        <div className={styles.DropdownMenu}>
                <select  name="More" id="tea_options" >
                <option value="Cheese Foam Tea">Cheese Foam Tea</option>
                
                </select>
        </div>
    );
}

export default SideMenuDropdown;