import React from "react";
import styles from "./ItemsSection.module.css";
import CustomerFavorite from "./CustomerFavorite";

const CustomerFavoritesSection = ({customerFavoritesSection}) => {
    return (
        <div className={styles.Items}>
            {customerFavoritesSection.map((customerFavorite) => {
        return (
            <div className={styles.Item}>
                <CustomerFavorite customerFavorite={customerFavorite} 
                key={customerFavorite.name}/>
            </div>
                )
            })}
        </div>
    );
}

export default CustomerFavoritesSection;