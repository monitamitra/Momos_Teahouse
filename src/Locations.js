import React from "react";
import styles from "./Locations.module.css";
import Location from "./Location";


const Locations = ({locations}) => {
    return (
        <div className={styles.locations}>
            {locations.map((location) => {
                return <Location location={location} key={location.city}/>
            })}
        </div>
    );
}

export default Locations;