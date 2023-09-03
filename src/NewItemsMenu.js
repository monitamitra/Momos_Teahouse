import React, {useState, useEffect} from "react";
import styles from "./IcedDrinksMenu.module.css";
import NewItemsSection from "./NewItemsSection";
import {NewItemList} from "./NewItemList";
import $ from "jquery";

const NewItemsMenu = () => {

    const menuItems = (
        <div className={styles.newItems} id="newItemsSection">
                    <h3>New Items</h3>
                    <NewItemsSection newItems={NewItemList}/>
            </div>
    );

   
    window.onload = NewItemsScroll;
    function NewItemsScroll() {
        const scrollPos = $(document).scrollTop();
        const menu = document.getElementById("newItemsSection").scrollTop;
        const CF = $('#customerFavoritesSection').offset().top;
        const padding =  parseInt($('#customerFavoritesSection').css("scroll-margin-top")) + 1;
    
            if (scrollPos >= (menu - padding) && scrollPos <= (CF - padding)) {
              $('#newItemsButton').css('background-color', '#5a4fcf');
              $('#newItemsButton').css('color', 'white');
            } else {
                $('#newItemsButton').css('background-color', 'white');
                $('#newItemsButton').css('color', '#5a4fcf');
            }
        }
        const [state, setState] = useState(0);

        useEffect(() => {
            window.addEventListener("scroll", NewItemsScroll);
            return () => window.removeEventListener("scroll", NewItemsScroll);
        }, [state]);


    return menuItems;
}

export default NewItemsMenu;