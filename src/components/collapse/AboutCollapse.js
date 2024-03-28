import React from "react";
import '../bannerStack/banner.css'
import LandscapeBanner from "../bannerStack/LandscapeBanner";
import landscape2 from '../../assets/img/Image source 2.png'
import Collapse from "./Collapse";
import TextAbout from "../../datas/textAbout.json"

// React component for displaying collapsible sections about a topic.
// Renders a LandscapeBanner component at the top followed by collapsible sections generated from data in 'TextAbout' JSON array.


function AboutCollapse () {


    return (
        <div>
            <div className="flex center container  column align-center ">
            <LandscapeBanner image={landscape2} className="landscape-about" />
            </div>
            <div>
                {TextAbout.map((item, index) => (
                    <Collapse title={item.title} key={index} width="80%">
                        <p>{item.content}</p>
                    </Collapse>
                ))}
            </div>
        </div>
    )
}

export default AboutCollapse