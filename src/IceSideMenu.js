import React,{useState, useEffect} from "react";
import styles from "./SideMenuNavBar.module.css";
import $ from "jquery";

function IceSideMenu() {

  const favoritesHandleClick = () => {
    const element = document.getElementById("customerFavoritesSection");
    element.scrollIntoView({behavior:"smooth"});
  }

  const newItemsHandleClick = () => {
    const element = document.getElementById("newItemsSection")
    element.scrollIntoView({behavior: "smooth"})
  }

  const milkTeaHandleClick = () => {
    const element = document.getElementById("milkTeaSection");
    element.scrollIntoView({behavior: "smooth"})
  }

  const fruitTeaHandleClick = () => {
    const element = document.getElementById("fruitTeaSection");
    element.scrollIntoView({behavior: "smooth"})
  }

  const coffeeHandleClick = () => {
    const element = document.getElementById("originalCoffeeSection");
    element.scrollIntoView({behavior: "smooth"})
  }

  const teaHandleClick = () => {
    const element = document.getElementById("originalTeaSection");
    element.scrollIntoView({behavior: "smooth"})
  }

  const cheeseFoamHandleClick = () => {
    const element = document.getElementById("cheeseFoamSection");
    element.scrollIntoView({behavior: "smooth"})
  }

  const sideMenu = (
    <div className={styles.navBar} id="IcedMenuSideOptions">
  <div className={styles.temp}>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <button id="newItemsButton" onClick={newItemsHandleClick} className={styles.nav_button} >New Items</button>
        <button id="cusFavButton" onClick={favoritesHandleClick} className={styles.nav_button}>Customer Favorites</button>
        <button id="milkTeaButton" onClick={milkTeaHandleClick} className={styles.nav_button}>Milk Tea</button>
        <button id="fruitTeaButton" onClick={fruitTeaHandleClick} className={styles.nav_button}>Fruit Tea</button>
  </div>
    <div className={styles.dropdown}>
        <button id="moreButton" className={styles.more} > <i class="fa fa-caret-down"> </i> More</button>
        <div className={styles.dropdownContent}>
                    <h2>Menu Categories</h2>
            <div className={styles.dropdownPills}>
                 <button id="originalCoffeeButton" onClick={coffeeHandleClick} className={styles.nav_linkDropdown}>Original Coffees</button>
                 <button id="originalTeaButton" onClick={teaHandleClick} className={styles.nav_linkDropdown}>Original Teas</button>
                 <button id="cheeseFoamButton" onClick={cheeseFoamHandleClick} className={styles.nav_linkDropdown}>Cheese Foam</button>
            </div>   
        </div>
    </div>
</div>
  );

  function MoreItemsScroll() {
    const scrollPos = $(document).scrollTop();
    const menu = $('#cheeseFoamSection').offset().top;
    const MT = $('#hotDrinksMenu').offset().top;
    const padding =  parseInt($('#milkTeaSection').css("scroll-margin-top")) + 1;

    if (scrollPos >= (menu - padding) && scrollPos <= (MT - padding)) {
          $("#moreButton").css('background-color', '#5a4fcf');
          $('#moreButton').css('color', 'white');
    } else {
            $('#moreButton').css('background-color', 'white');
            $('#moreButton').css('color', '#5a4fcf');
        }
    }

    const [state] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", MoreItemsScroll);
        return () => window.removeEventListener("scroll", MoreItemsScroll);
    }, [state]);
      
    return sideMenu;
}

export default IceSideMenu;