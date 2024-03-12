import React from "react";
import '../../Banner/Banner.css'
import LandscapeBanner from "../../Banner/LandscapeBanner";
import landscape2 from '../../../assets/img/Image source 2.png'
import Collapse from "./Collapse";
import TextAbout from "../../../datas/textAbout.json"
// import vector from "../../../assets/vector/arrow_back_ios-24px 2.png"

function AboutCollapse () {


    return (
        <div>
            <div className="flex center container column align-center ">
            <LandscapeBanner image={landscape2} className="landscape-about" />
            </div>
            <div>
            {TextAbout.map((item, index) => (
                    <Collapse title={item.title} key={index}>
                        {/* <img className="vector" src = {vector} alt="arrow"/> */}
                        <p>{item.content}</p>
                    </Collapse>
                ))}
            </div>
        </div>
    )
}

export default AboutCollapse