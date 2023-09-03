import React, {useState, useEffect} from "react";
import IceSideMenu from "./IceSideMenu";
import HotSideMenu from "./HotSideMenu";
import $ from "jquery";

function NavBar() {

            const menuItems = (
                <div>
                   <IceSideMenu />
                   <HotSideMenu />
                </div>
            );

            function changeNavBar() {
                const scrollPos = $(document).scrollTop();
                const menu = $('#HotMilkTeaSection').offset().top;
                const padding =  parseInt($('#cheeseFoamSection').css("scroll-margin-top")) + 1;
                
                
                if (scrollPos >= (menu - padding)) {
                 $("#IcedMenuSideOptions").hide().css('visibility', 'hidden'); 
                 $("#HotMenuSideOptions").show().css('visibility', 'visible'); 
                } else {
                    $("#IcedMenuSideOptions").show().css('visibility', 'visible'); 
                    $("#HotMenuSideOptions").hide().css('visibility', 'hidden');
                }
            
               }

    const [state] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", changeNavBar);
        return () => window.removeEventListener("scroll", changeNavBar);
    }, [state]);



    return menuItems;
}

export default NavBar;