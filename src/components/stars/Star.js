import React from "react";
import './stars.css'
import star from'../../assets/vector/star.png'
import starRed from '../../assets/vector/starRed.png'

function RateStars ({ TotalStars, StarsFull }) {
    const getImage  = (index) => {
        return index < StarsFull ? starRed : star
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