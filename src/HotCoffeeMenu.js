import React, {useState, useEffect} from "react";
import styles from "./HotDrinksMenu.module.css";
import HotCoffeeSection from "./HotCoffeeSection";
import { OriginalCoffeeList } from "./HotCoffeeList";
import $ from "jquery";

const HotCoffeeMenu = () => {
    const menuItems = (
        <div className={styles.hotCoffee} id="HotCoffeeSection">
                <h3>Hot Original Coffee</h3>
                <HotCoffeeSection hotCoffeeSection={OriginalCoffeeList}/>
        </div>
    );

    function HotCoffeeItemsScroll() {
        const scrollPos = $(document).scrollTop();
        const menu = $('#HotTeaSection').offset().top;
        const FT = document.getElementById("HotTeaHeader").scrollHeight;
       
        if (scrollPos >= (menu - FT)) {
              $("#HotOCButton").css('background-color', '#5a4fcf');
              $("#HotOCButton").css('color', 'white');
        } else {
                $("#HotOCButton").css('background-color', 'white');
                $("#HotOCButton").css('color', '#5a4fcf');
            }
        }

    const [state, setState] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", HotCoffeeItemsScroll);
        return () => window.removeEventListener("scroll", HotCoffeeItemsScroll);
    }, [state]);

    return menuItems;
}

export default HotCoffeeMenu;