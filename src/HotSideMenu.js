import React, {useState, useEffect} from "react";
import styles from "./SideMenuNavBar.module.css";
import $ from "jquery";

function HotSideMenu() {
    
    const HotMilkTeaHandleClick = () => {
        const element = document.getElementById("HotMilkTeaSection");
        element.scrollIntoView({behavior: "smooth"})
      }

    const HotTeaHandleClick = () => {
        const element = document.getElementById("HotTeaSection");
        element.scrollIntoView({behavior: "smooth"})
    }

    const HotCoffeeHandleClick = () => {
        const element = document.getElementById("HotCoffeeSection");
        element.scrollIntoView({behavior: "smooth"})
    }


    const menuItems = (
        <div className={styles.navBar} id="HotMenuSideOptions">
            <button id="HotMilkTeaButton" onClick={HotMilkTeaHandleClick} className={styles.nav_button}>Hot Milk Tea</button>
            <button id="HotOGTeaButton" onClick={HotTeaHandleClick} className={styles.nav_button}>Hot Original Tea</button>
            <button id="HotOCButton" onClick={HotCoffeeHandleClick} className={styles.nav_button}>Hot Original Coffee</button>
    </div>
    );

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("HotMenuSideOptions").style.display = "none";
      });

    function changeNavBar() {
        const scrollPos = $(document).scrollTop();
        const menu = $('#HotMilkTeaSection').offset().top;
        const padding =  parseInt($('#cheeseFoamSection').css("scroll-margin-top")) + 1;
        
        if (scrollPos >= (menu - padding)) {
         $("#IcedMenuSideOptions").hide().css('visibility', 'hidden'); 
         $("#HotMenuSideOptions").show().css('visibility', 'visible'); 
        } else {
            $("#IcedMenuSideOptions").show().css('visibility', 'visible'); 
            $("#HotMenuSideOptions").hide().css('visibility', 'hidden');
        }
    
       }

    const [state] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", changeNavBar);
        return () => window.removeEventListener("scroll", changeNavBar);
    }, [state]);

    return menuItems;
}

export default HotSideMenu;