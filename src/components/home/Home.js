import React from "react";
import './home.css'
import '../bannerStack/banner.css'
import landscape1 from '../../assets/img/Image source 1.png'
import HousingList from "../housing/HousingList.js"
import LandscapeBanner from "../bannerStack/LandscapeBanner.js";

// React component for the main body content of the homepage.
// Displays a LandscapeBanner component with a title and image, followed by a list of housing items.

function Body () {
    return (
        <div>
            <div className="container flex center align-center">
                <LandscapeBanner image={ landscape1 } className="landscape-home" text = "Chez vous, partout et ailleurs" />
            </div>
            <div className=" flex center">
                <HousingList />
            </div>
        </div>
    )
}

export default Body 