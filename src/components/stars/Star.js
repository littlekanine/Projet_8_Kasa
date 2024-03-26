
// React component for displaying a star rating.
// Renders a row of stars based on the 'TotalStars' prop, with a number of filled stars determined by the 'StarsFull' prop.

import React from "react";
import './stars.css'
import star from'../../assets/vector/star.png'
import starRed from '../../assets/vector/starRed.png'

function RateStars ({ TotalStars, StarsRate }) {
    const getImage  = (index) => {
        return index < StarsRate ? starRed : star
    }

    return (
        <div className="flex rate-stars">
            {[...Array(TotalStars)].map((_, index) => {
                return (
                    <img key={index} src={getImage(index)} alt="Star"/>
                );
            })}
        </div>
    );
};

export default RateStars