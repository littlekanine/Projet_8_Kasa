import React from "react";
import './stars.css'
import star from'../../assets/vector/star.png'

function RateStars ({ TotalStars, StarsFull }) {

    return (
        <div className="flex rate-stars">
            {[...Array(TotalStars)].map((_, index) => {
                return (
                    <img key={index} src={index < StarsFull ? star : star} alt="Star"className="star-image"/>
                );
            })}
        </div>
    );
};

export default RateStars