import React from "react";
import { useParams } from "react-router-dom";
import Housings from '../../datas/housing.json';
import './housingDetail.css'
import RateStars from "./Star";

function HousingDetail () {

    const {id} = useParams()
    const housing = Housings.find((housing) => housing.id === id);


    return (
        <div className="">
            <div className="flex center carrousel">
                <img className="flex picture center align-center" src={housing.cover} alt="pouet"></img>
            </div>
            <div className="flex column center align-center">
                <div className="container-detail space-between align-center flex">
                    <div className="container-location flex column">
                        <h3>{housing.title}</h3>
                        <p>{housing.location}</p>
                    </div>
                    <div className=" flex host end row align-center">
                        <p className="flex end">{housing.host.name}</p>
                        <img src={housing.host.picture} alt="hôte" />
                    </div>
                </div>
                <div className="contain-tag-rate">
                    <div className="tags flex row align-center">
                        {housing.tags.map((tag, index) => (
                            <div key={index} className="tag flex center align-center">{tag}</div>
                        ))}
                        <div className="rate flex end">
                            <RateStars TotalStars ={5} StarsFull={housing.rating} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HousingDetail