import React from "react";
import MainNavBar from "./NavBar";
import AboutSection from "./AboutPageComponents/AboutSection_Home";
import PopularItems from "./PopularPicks";
import Footer from "./Footer";
import styles from "./HomePage.module.css";

function HomePage() {
    return (
    <div>
        <div className={styles.NavBarBackground}>
                <MainNavBar />
        </div >
            <AboutSection />
            <PopularItems />
            <Footer />
    </div>
    );
}

export default HomePage;