import React from "react";
import '../bannerStack/banner.css'
import LandscapeBanner from "../bannerStack/LandscapeBanner";
import landscape2 from '../../assets/img/Image source 2.png'
import Collapse from "./Collapse";
import TextAbout from "../../datas/textAboutData.json"

// React component for displaying collapsible sections about a topic.
// Renders a LandscapeBanner component at the top followed by collapsible sections generated from data in 'TextAbout' JSON array.$
function AboutCollapse () {
    return (
        <div className="flex align-center column">
            <div className="flex center container  column align-center widthFull ">
            <LandscapeBanner image={landscape2} className="landscape-about" />
            </div>
            <div className="flex center column width75">
                {TextAbout.map((item, index) => (
                    <Collapse title={item.title} key={index}>
                        <p >{item.content}</p>
                    </Collapse>
                ))}
            </div>
        </div>
    )
}

export default AboutCollapse