import React from "react";


function LandscapeBanner ({ image, className }) {
    return (
        <img className={className} src = {image} alt ="Paysage"></img>
    )
}

export default LandscapeBanner