import React from "react";
import { useState } from "react";
import './carrousel.css'
import slideRight from '../../assets/vector/slideRight.png'
import slideLeft from '../../assets/vector/slideLeft.png'

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
        <div className="carousel">
            <button className="back" onClick={prevSlide}>
                <img src = {slideLeft} alt="slide back"></img>
            </button>
            <button className="next" onClick={nextSlide}>
                <img src = {slideRight} alt="slide next"></img>
            </button>
            <div className="slide-container">
                {pictures.map((picture, index) => (
                    <div
                        key={index}
                        className={index === currentIndex ? "slide 'active" : "slide"}
                    >
                        {index === currentIndex && <img src={picture} alt={`Slide ${index}`} />}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carrousel;