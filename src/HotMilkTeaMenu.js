import React, {useState, useEffect} from "react";
import styles from "./HotDrinksMenu.module.css";
import HotMilkTeaSection from "./HotMilkTeaSection";
import { milkTeaSectionList } from "./HotTeaMilkSectionList"; 
import $ from "jquery";

const HotMilkTeaMenu = () => {
    const menuItems = (
        <div className={styles.hotMilkTea} id="HotMilkTeaSection">
                <h3>Hot Milk Tea</h3>
                <HotMilkTeaSection hotMilkTeaSection={milkTeaSectionList}/>
        </div>
    );

    function HotMilkTeaItemsScroll() {
        const scrollPos = $(document).scrollTop();
        const menu = $('#hotDrinksMenu').offset().top;
        const FT = $('#HotTeaSection').offset().top;
        const padding =  parseInt($('#cheeseFoamSection').css("scroll-margin-top")) + 1;
    
        if (scrollPos >= (menu - padding) && scrollPos <= (FT - padding)) {
              $("#HotMilkTeaButton").css('background-color', '#5a4fcf');
              $("#HotMilkTeaButton").css('color', 'white');
        } else {
                $("#HotMilkTeaButton").css('background-color', 'white');
                $("#HotMilkTeaButton").css('color', '#5a4fcf');
            }
        }

    const [state, setState] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", HotMilkTeaItemsScroll);
        return () => window.removeEventListener("scroll", HotMilkTeaItemsScroll);
    }, [state]);

    return menuItems;
}

export default HotMilkTeaMenu;