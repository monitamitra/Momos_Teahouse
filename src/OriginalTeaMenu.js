import React, {useState, useEffect} from "react";
import styles from "./IcedDrinksMenu.module.css";
import OriginalTeaSection from "./OriginalTeaSection";
import { OriginalTeas } from "./OriginalTeaList";
import $ from "jquery";

const OriginalTeaMenu = () => {
    const menuItems = (
        <div className={styles.originalTeas} id="originalTeaSection">
                <h3>Original Teas</h3>
                <OriginalTeaSection originalTeaSection={OriginalTeas}/>
        </div>
    );

    function OriginalTeaItemsScroll() {
        const scrollPos = $(document).scrollTop();
        const menu = $('#originalTeaSection').offset().top;
        const OC = $('#originalCoffeeSection').offset().top;
        const padding =  parseInt($('#originalCoffeeSection').css("scroll-margin-top")) + 1;
    
        if (scrollPos >= (menu - padding) && scrollPos <= (OC - padding)) {
              $("#originalTeaButton").css('background-color', '#5a4fcf');
              $('#originalTeaButton').css('color', 'white');
        } else {
                $('#originalTeaButton').css('background-color', 'white');
                $('#originalTeaButton').css('color', '#5a4fcf');
            }
        }

    const [state, setState] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", OriginalTeaItemsScroll);
        return () => window.removeEventListener("scroll", OriginalTeaItemsScroll);
    }, [state]);

        return menuItems;
}

export default OriginalTeaMenu;