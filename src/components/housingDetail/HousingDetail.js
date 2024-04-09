import React from "react";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom"
import Housings from '../../datas/housing.JSON';
import './housingDetail.css';
import RateStars from "../stars/Star";
import Collapse from "../collapse/Collapse";
import Carrousel from "../carrousel/Carrousel";

function HousingDetail() {
    const { id } = useParams();
    const housing = Housings.find((housing) => housing.id === id);

    if (!housing) {
        return <Navigate to="/error" />;
    }

    return (
        <div className="flex center column">
            <div className="flex center carrousel">
                <Carrousel pictures={housing.pictures} />
            </div>
            <div className="flex center">
                <div className="flex space-between width90 details-responsive">
                    <div className="flex widthFull container-detail space-between column">
                        <div className="container-location flex column">
                            <h3>{housing.title}</h3>
                            <p>{housing.location}</p>
                        </div>
                        <div className="tags flex">
                            {housing.tags.map((tag, index) => (
                                <div key={index} className="tag flex center align-center">{tag}</div>
                            ))}
                        </div>
                    </div>
                    <div className="flex column responsive-host align-center">
                        <div className="flex host end row align-center">
                            <p className="flex">{housing.host.name}</p>
                            <img src={housing.host.picture} alt="hôte" />
                        </div>
                        <div className="rate flex end">
                            <RateStars TotalStars={5} StarsRate={housing.rating} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="widthFull flex center">
                <div className="flex row collapse-details align-center">
                    <Collapse width="100%" title="Description" className="collapse-container-details">
                        <p>{housing.description}</p>
                    </Collapse>
                    <Collapse width="100%" title="Equipements" className="collapse-container-details">
                        <div>
                            {housing.equipments.map((equipment, index) => (
                                <p key={index}>{equipment}</p>
                            ))}
                        </div>
                    </Collapse>
                </div>
            </div>
        </div>
    );
}

export default HousingDetail;
