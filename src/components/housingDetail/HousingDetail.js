// React component for displaying details of a housing item.
// Renders a carousel of pictures, housing title, location, host details, tags, rating, and collapsible sections for description and amenities.

import React from "react";
import { useParams } from "react-router-dom";
import Housings from '../../datas/housing.json';
import './housingDetail.css'
import RateStars from "../stars/Star";
import Collapse from "../collapse/Collapse";
import Carrousel from "../carrousel/Carrousel";

function HousingDetail () {

    const {id} = useParams()
    const housing = Housings.find((housing) => housing.id === id);


    return (
        <div className="">
            <div className="flex center carrousel">
                <Carrousel pictures= {housing.pictures}/>   
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
                <div className="flex row collapse-details align-center">
                    <Collapse title="Description" className="collapse-container">
                        <p>{housing.description}</p>
                    </Collapse>
                    <Collapse title="Equipements">
                        <div>
                            {housing.equipments.map((equipment, index) => (
                                <p key={index}>{equipment}</p>
                            ))}
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    )
}

export default HousingDetail