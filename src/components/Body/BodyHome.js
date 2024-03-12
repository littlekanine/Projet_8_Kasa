import React from "react";
import './Body.css'
import '../Banner/Banner.css'
import landscape1 from '../../assets/img/Image source 1.png'
import HousingList from "./HousingList/HousingList";
import TextBanner from "../Banner/TextBanner";
import LandscapeBanner from "../Banner/LandscapeBanner";

function Body () {
    return (
        <div>
            <div className="container flex center align-center">
                <LandscapeBanner image={ landscape1 } className="landscape-home"/>
                <TextBanner />
            </div>
            <div className=" flex center">
                <HousingList />
            </div>
        </div>
    )
}

export default Body 