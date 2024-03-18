import React from "react";
import { useParams } from "react-router-dom";
import Housings from '../../datas/housing.json';
import './housingDetail.css'

function HousingDetail () {

    const {id} = useParams()
    const housing = Housings.find((housing) => housing.id === id);


    return (
        <div className="">
            <div className="flex center carrousel">
                <img className="flex picture center align-center" src={housing.cover} alt="pouet"></img>
            </div>
            <div className="container-detail">
                <h2>{housing.title}</h2>
                <p></p>
            </div>
        </div>
    )
}

export default HousingDetail