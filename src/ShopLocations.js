import React from "react";
import MainNavBar from "./NavBar";
import Footer from "./Footer";
import Locations from "./Locations";
import {LocationList} from "./LocationList";
import styles from "./ShopLocations.module.css";

function ShopLocations() {
    return (
        <div>
            <MainNavBar />
            <h1 className={styles.title}>Locations</h1>
            <Locations locations={LocationList}/>
            <Footer />
        </div>
    );
}

export default ShopLocations;