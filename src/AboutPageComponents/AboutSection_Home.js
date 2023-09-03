import React from "react";
import "./AboutSection_Home.css";
import AboutButton from "./About_Button";

function AboutSection() {
    return (
        <div className="about">
            <div className="about_image">
                <img alt="brown sugar boba" src = "https://plantbasedonabudget.com/wp-content/uploads/2022/09/Boba-Tea-Plant-Based-on-a-Budget-3-1.jpg"/>
            </div>
            <div className="about_info">
                <h2>Refreshing Your Sweet Tooth On the Go</h2>
                <p>Momo's Teahouse was created to deliver tapioca pearls of sunshine 
                        in rich milk tea sweetness right to your location. Momo's Teahouse ensures 
                        that wherever and whenever your sweet tooth has a craving, you will have 
                        a sweet tea in front of you in no time!
                </p>
                <AboutButton />
            </div>
        </div>
    );
}

export default AboutSection;