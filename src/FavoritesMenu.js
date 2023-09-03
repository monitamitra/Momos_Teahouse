import React, {useState, useEffect} from "react";
import CustomerFavoritesSection from "./CustomerFavoritesSection";
import {CustomerFavoriteList} from "./CustomerFavoriteList";
import styles from "./IcedDrinksMenu.module.css";
import $ from "jquery";


const FavoritesMenu = () => {
    const menuItems = (
        <div className={styles.favorites} id="customerFavoritesSection">
                <h3>Customer Favorites</h3>
                <CustomerFavoritesSection customerFavoritesSection={CustomerFavoriteList}/>
            </div>
    );

    function FavoriteItemsScroll() {
        const scrollPos = $(document).scrollTop();
        const menu = $('#customerFavoritesSection').offset().top;
        const MT = $('#milkTeaSection').offset().top;
        const padding =  parseInt($('#milkTeaSection').css("scroll-margin-top")) + 1;
    
        if (scrollPos >= (menu - padding) && scrollPos <= (MT - padding)) {
              $("#cusFavButton").css('background-color', '#5a4fcf');
              $('#cusFavButton').css('color', 'white');
        } else {
                $('#cusFavButton').css('background-color', 'white');
                $('#cusFavButton').css('color', '#5a4fcf');
            }
        }

        const [state, setState] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", FavoriteItemsScroll);
        return () => window.removeEventListener("scroll", FavoriteItemsScroll);
    }, [state]);

    return menuItems;
}

    export default FavoritesMenu;