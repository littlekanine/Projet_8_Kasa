// React component for a carousel/slider that displays a series of pictures with navigation buttons.
// Accepts a single prop 'pictures' which is an array of image URLs to be displayed in the carousel.

import React from "react";
import { useState } from "react";
import './carrousel.css'
import slideRight from '../../assets/vector/slideRight.png'
import 
slideLeft from '../../assets/vector/slideLeft.png'

function Carrousel({pictures}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carrousel flex column">
            <div className="slide-container flex center">
                {pictures.map((picture, index) => (
                    <div
                        key={index}
                        className={index === currentIndex ? "slide active" : "slide"}
                    >
                        {index === currentIndex && <img src={picture} alt={`Slide ${index}`} />}
                    </div>
                ))}
                <div className="button-container flex space-between center ">
                    <button className="back" onClick={prevSlide}>
                        <img src = {slideLeft} alt="slide back"></img>
                    </button>
                    <button className="next" onClick={nextSlide}>
                        <img src = {slideRight} alt="slide next"></img>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Carrousel;