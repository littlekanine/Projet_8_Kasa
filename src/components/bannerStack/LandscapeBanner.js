import React from "react";


function LandscapeBanner ({ image, className }) {
    return (
        <div className="flex center widthFull ">
            <img className={className} src = {image} alt ="Paysage" ></img>
        </div>
        
    )
}

export default LandscapeBanner