import Housings from '../../../datas/housing.json';
import React from "react";
import '../../../styles/index.css'
import './HousingList.css'

function HousingList () {
    return (
        <div className='background-container flex'>
            <div className='flex container-housings center align-center'>
                {Housings.map ((housing, index) => {
                    return (
                        <div key = {index} className='flex card align-bottom '>
                            <div className='card-image-container'>
                                <img className='card-img flex' src={housing.cover} alt = {housing.title}/>
                                <h3 className='card-title'>{housing.title}</h3>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default HousingList