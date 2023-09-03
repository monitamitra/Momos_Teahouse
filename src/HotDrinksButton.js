import React, {useState, useEffect} from "react";
import styles from "./IcedDrinksButton.module.css";
import $ from "jquery";

function HotDrinksButton() {
    const HotMenuHandleClick = () => {
        const element = document.getElementById("hotDrinksMenu");
        element.scrollIntoView({behavior: "smooth"})
      }
    const menuItems = (
        <button id="hotDrinksButton" onClick={HotMenuHandleClick} className={styles.button}>Hot Drinks Menu</button>
    );

    function changeButton() {
        const scrollPos = $(document).scrollTop();
        const menu = document.getElementById("newItemsSection").scrollTop;
        const padding =  parseInt($('#customerFavoritesSection').css("scroll-margin-top")) + 1;
        const OT = $('#hotDrinksMenu').offset().top;

        if (scrollPos >= (OT - padding)) {
         $("#hotDrinksButton").css('border-bottom-style', 'solid'); 
         $("#hotDrinksButton").css('border-bottom-color', '#5a4fcf'); 
         $("#hotDrinksButton").css('border-width', '4px'); 
         $("#hotDrinksButton").css('border-radius', '2px'); 
         $("#hotDrinksButton").css('padding-bottom', '5px'); 
        } else {
            $("#hotDrinksButton").css('border', 'none'); 
        }
    
    }

    const [state, setState] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", changeButton);
        return () => window.removeEventListener("scroll", changeButton);
    }, [state]);


    return menuItems;
}

export default HotDrinksButton;