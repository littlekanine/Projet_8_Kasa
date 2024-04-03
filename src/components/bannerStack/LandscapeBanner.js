import React from "react";

// React component for displaying a landscape banner with image and text.
// Accepts three props: 'image' for the URL of the image to display, 'className' for additional CSS class, and 'text' for the text content of the banner.
function LandscapeBanner ({ image, className, text }) {
    return (
        <div className="flex center widthFull ">
            <img className={className} src = {image} alt ="Paysage" ></img>
            <h1 className="flex text">{text}</h1>
        </div>
        
    )
}

export default LandscapeBanner