import React, {useState, useEffect} from "react";
import styles from "./IcedDrinksButton.module.css";
import $ from "jquery";

function IcedDrinksButton() {
    const IceMenuHandleClick = () => {
        const element = document.getElementById("icedDrinksMenu");
        element.scrollIntoView({behavior: "smooth"})
      }

    const menuItems =  (
        <button id="iceDrinksButton" onClick={IceMenuHandleClick} className={styles.button}>Iced Drinks Menu</button>
    );

    window.onload = changeButton;

    function changeButton() {
        const scrollPos = $(document).scrollTop();
        const padding =  parseInt($('#customerFavoritesSection').css("scroll-margin-top")) + 1;
        const OT = $('#hotDrinksMenu').offset().top;

        if (scrollPos <= OT - padding) {
         $("#iceDrinksButton").css('border-bottom-style', 'solid'); 
         $("#iceDrinksButton").css('border-bottom-color', '#5a4fcf'); 
         $("#iceDrinksButton").css('border-width', '4px'); 
         $("#iceDrinksButton").css('border-radius', '2px'); 
         $("#iceDrinksButton").css('padding-bottom', '5px'); 
        } else {
            $("#iceDrinksButton").css('border', 'none'); 
        }
    
    }

    const [state] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", changeButton);
        return () => window.removeEventListener("scroll", changeButton);
    }, [state])


    return menuItems;
}

export default IcedDrinksButton;