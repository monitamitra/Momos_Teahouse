import React, {useState, useEffect} from "react";
import styles from "./IcedDrinksMenu.module.css";
import OriginalCoffeeSection from "./OriginalCoffeeSection";
import { OriginalCoffeeList } from "./OriginalCoffeeList";
import $ from "jquery";

const OriginalCoffeeMenu = () => {
    const menuItems = (
        <div className={styles.originalCoffees} id="originalCoffeeSection">
                <h3>Original Coffees</h3>
                <OriginalCoffeeSection originalCoffeeSection={OriginalCoffeeList}/>
        </div>
    );

    function CoffeeItemsScroll() {
        const scrollPos = $(document).scrollTop();
        const menu = $('#originalCoffeeSection').offset().top;
        const OT = $('#hotDrinksMenu').offset().top;
        const padding =  parseInt($('#originalTeaSection').css("scroll-margin-top")) + 1;
    
        if (scrollPos >= (menu - padding) && scrollPos <= (OT - padding)) {
              $("#originalCoffeeButton").css('background-color', '#5a4fcf');
              $("#originalCoffeeButton").css('color', 'white');
        } else {
                $("#originalCoffeeButton").css('background-color', 'white');
                $("#originalCoffeeButton").css('color', '#5a4fcf');
            }
        }

    const [state, setState] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", CoffeeItemsScroll);
        return () => window.removeEventListener("scroll", CoffeeItemsScroll);
    }, [state]);

        return menuItems;

}

export default OriginalCoffeeMenu;