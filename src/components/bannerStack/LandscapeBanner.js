import React from "react";


function LandscapeBanner ({ image, className, text }) {
    return (
        <div className="flex center widthFull ">
            <img className={className} src = {image} alt ="Paysage" ></img>
            <h1 className="flex text">{text}</h1>
        </div>
        
    )
}

export default LandscapeBanner