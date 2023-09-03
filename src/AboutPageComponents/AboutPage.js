import React from "react";
import Footer from "../Footer";
import MainNavBar from "../NavBar";
import MenuButton from "../MenuButton";
import "./AboutPage.css";

function AboutPage() {
    return (
        <div className="aboutPage">
            <MainNavBar />
            <div className="ingredients">
                <h1>Our Ingredients</h1>
                <p>At Momo's Teahouse, we are dedicated to provide you with 
                    naturally sweet, fresh fruit and milk tea. Our fruits and milk 
                    come from handpicked farms across the globe. Our fresh tea leaves 
                    are nourished under a sunny sky with crystalline water. Momo's Teahouse
                    picks our ingredients carefully, so that all you need to do is 
                    <strong> relax, push the straw, and enjoy your tea!</strong> 
                </p>
                    <div className="mango">
                    </div>
                        <div className="teaLeaves">
                            <img alt="Loose tea leaves" src="https://teasante.com/wp-content/uploads/2019/07/top-8-loose-leaf-teas-in-brampton.jpg"/>
                        </div>
            </div>
            <div className="teaVersity">
                <h1>"Teaversity"</h1>
                <div className="Matcha">
                <img alt="matcha" src="https://cdn.loveandlemons.com/wp-content/uploads/2014/03/IMG_0145-3.jpg"/>
                </div>
                <p>Momo's Teahouse believes in <strong> TEAVERSITY. </strong> 
                    Our hand-crafted teas are meant to show our love and appreciation for 
                    our customers' cultural heritage. Our teas represent unique flavors 
                    from various different cultures. At Momo's Teahouse, every culture's 
                    flavor is appreciated: whether that be our Four Seasons Tea imported 
                    from Taiwan or our Korean Banana Milk Tea using our secret recipe. 
                    With our vast number of tea options, you can get a taste of any country's 
                    flavors your heart desires! 
                </p>
                <div className="menuButton">
                <MenuButton />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;