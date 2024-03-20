import React from "react";
import '../bannerStack/banner.css'
import LandscapeBanner from "../bannerStack/LandscapeBanner";
import landscape2 from '../../assets/img/Image source 2.png'
import Collapse from "./Collapse";
import TextAbout from "../../datas/textAbout.json"

function AboutCollapse () {


    return (
        <div>
            <div className="flex center container column align-center ">
            <LandscapeBanner image={landscape2} className="landscape-about" />
            </div>
            <div>
                {TextAbout.map((item, index) => (
                    <Collapse title={item.title} key={index}>
                        <p>{item.content}</p>
                    </Collapse>
                ))}
            </div>
        </div>
    )
}

export default AboutCollapse