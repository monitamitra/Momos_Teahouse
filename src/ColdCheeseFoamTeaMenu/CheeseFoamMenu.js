import React, {useState, useEffect} from "react";
import CheeseFoamSection from "../CheeseFoamSection";
import { cheeseFoamSectionList } from "../CheeseFoamSectionList";
import styles from "../IcedDrinksMenu.module.css";
import $ from "jquery";

const CheeseFoamMenu = () => {
    const menuItems = (
        <div className={styles.cheeseFoam} id="cheeseFoamSection"> 
                <h3>Cheese Foam</h3>
                <CheeseFoamSection cheeseFoamSection={cheeseFoamSectionList}/>
            </div>
    );

    function CheeseFoamItemsScroll() {
        const scrollPos = $(document).scrollTop();
        const menu = $('#cheeseFoamSection').offset().top;
        const OT = $('#originalTeaSection').offset().top;
        const padding =  parseInt($('#originalTeaSection').css("scroll-margin-top")) + 1;
    
        if (scrollPos >= (menu - padding) && scrollPos <= (OT - padding)) {
              $("#cheeseFoamButton").css('background-color', '#5a4fcf');
              $('#cheeseFoamButton').css('color', 'white');
        } else {
                $('#cheeseFoamButton').css('background-color', 'white');
                $('#cheeseFoamButton').css('color', '#5a4fcf');
            }
        }

        const [state, setState] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", CheeseFoamItemsScroll);
        return () => window.removeEventListener("scroll", CheeseFoamItemsScroll);
    }, [state]);


        return menuItems;
}

export default CheeseFoamMenu;