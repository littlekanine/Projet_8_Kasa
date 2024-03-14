import React from "react";
import './Body.css'
import '../bannerStack/banner.css'
import landscape1 from '../../assets/img/Image source 1.png'
import HousingList from "../housing/HousingList.js"
// import TextBanner from "../banner/TextBanner.js";
import LandscapeBanner from "../bannerStack/LandscapeBanner.js";

function Body () {
    return (
        <div>
            <div className="container flex center align-center">
                <LandscapeBanner image={ landscape1 } className="landscape-home" />
                <h1 className="flex text">Chez vous, partout et ailleurs</h1>
            </div>
            <div className=" flex center">
                <HousingList />
            </div>
        </div>
    )
}

export default Body 