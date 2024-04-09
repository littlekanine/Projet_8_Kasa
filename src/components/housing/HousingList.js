import Housings from '../../datas/housing.json';
import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/index.css'
import './housingList.css'

// React component for displaying a list of housing items.
// Renders a list of housing cards generated from data in 'housing.json', each linking to a detailed page for that housing item.
function HousingList () {
    return (
        <div className='background-container flex'>
            <div className='flex container-housings center align-center'>
                {Housings.map ((housing, index) => {
                    return (
                        <div key = {index} className='flex card align-bottom '>
                            <Link to={`/Housing/${housing.id}`} className="card-link">
                                <div className='card-image-container'>
                                    <img className='card-img flex' src={housing.cover} alt = {housing.title}/>
                                    <h3 className='card-title'>{housing.title}</h3>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default HousingList