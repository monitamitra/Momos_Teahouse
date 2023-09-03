import React, {useState, useEffect} from "react";
import {milkTeaSectionList} from "./MilkTeaSectionList";
import MilkTeaSection from "./MilkTeaSection";
import $ from "jquery";
import styles from "./IcedDrinksMenu.module.css";

const MilkTeaMenu = () => {
    const menuItems = (
        <div className={styles.milkTea} id="milkTeaSection">
                <h3>Milk Tea</h3>
                <MilkTeaSection milkTeaList={milkTeaSectionList}/>
        </div>
    );
    
    function MilkTeaItemsScroll() {
        const scrollPos = $(document).scrollTop();
        const menu = $('#milkTeaSection').offset().top;
        const FT = $('#fruitTeaSection').offset().top;
        const padding =  parseInt($('#fruitTeaSection').css("scroll-margin-top")) + 1;
    
        if (scrollPos >= (menu - padding) && scrollPos <= (FT - padding)) {
              $("#milkTeaButton").css('background-color', '#5a4fcf');
              $("#milkTeaButton").css('color', 'white');
        } else {
                $("#milkTeaButton").css('background-color', 'white');
                $("#milkTeaButton").css('color', '#5a4fcf');
            }
        }

    const [state] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", MilkTeaItemsScroll);
        return () => window.removeEventListener("scroll", MilkTeaItemsScroll);
    }, [state]);

        return menuItems;

}

export default MilkTeaMenu;