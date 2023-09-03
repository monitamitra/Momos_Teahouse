import React, {useState, useEffect} from "react";
import styles from "./HotDrinksMenu.module.css";
import HotTeaSection from "./HotTeaSection";
import {OriginalTeas} from "./HotTeaList";
import $ from "jquery";

const HotTeaMenu = () => {
    const menuItems = (
        <div className={styles.hotTea} id="HotTeaSection">
            <h3 id="HotTeaHeader">Hot Original Tea</h3>
            <HotTeaSection hotTeaSection={OriginalTeas}/>
    </div>
    );

    function HotTeaItemsScroll() {
        const scrollPos = $(document).scrollTop();
        const menu = $('#HotTeaSection').offset().top;
        const FT = document.getElementById("HotTeaHeader").scrollHeight;

        const HotTeaMenu = $('#HotTeaSection').offset().top;
        const padding =  parseInt($('#cheeseFoamSection').css("scroll-margin-top")) + 1;
    
        if (scrollPos >= (HotTeaMenu - padding) && scrollPos <= (menu - FT)) {
              $("#HotOGTeaButton").css('background-color', '#5a4fcf');
              $("#HotOGTeaButton").css('color', 'white');
        } else {
                $("#HotOGTeaButton").css('background-color', 'white');
                $("#HotOGTeaButton").css('color', '#5a4fcf');
            }
        }

    const [state] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", HotTeaItemsScroll);
        return () => window.removeEventListener("scroll", HotTeaItemsScroll);
    }, [state]);

    return menuItems;
}

export default HotTeaMenu;