import React, {useState, useEffect} from "react";
import FruitTeaSection from "./FruitTeaSection";
import { fruitTeaList } from "./FruitTeaSectionList";
import styles from "./IcedDrinksMenu.module.css";
import $ from "jquery";

const FruitTeaMenu = () => {
    const menuItems = (
        <div className={styles.fruitTea} id="fruitTeaSection"> 
                <h3>Fruit Tea</h3>
                <FruitTeaSection fruitTeaSection={fruitTeaList}/>
            </div>
    );
    
    function FruitTeaItemsScroll() {
        const scrollPos = $(document).scrollTop();
        const menu = $('#fruitTeaSection').offset().top;
        const FT = $('#cheeseFoamSection').offset().top;
        const padding =  parseInt($('#cheeseFoamSection').css("scroll-margin-top")) + 1;
    
        if (scrollPos >= (menu - padding) && scrollPos <= (FT - padding)) {
              $("#fruitTeaButton").css('background-color', '#5a4fcf');
              $('#fruitTeaButton').css('color', 'white');
        } else {
                $('#fruitTeaButton').css('background-color', 'white');
                $('#fruitTeaButton').css('color', '#5a4fcf');
            }
        }

    const [state] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", FruitTeaItemsScroll);
        return () => window.removeEventListener("scroll", FruitTeaItemsScroll);
    }, [state]);

        
    return menuItems;
}

export default FruitTeaMenu;