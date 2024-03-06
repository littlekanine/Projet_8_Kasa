import {housing} from '../datas/housing';
import React from "react";
import '../styles/housingList.css'


function HousingList () {
    return (
        <div className="container-housing">
            <ul>
                {housing.map((house) => (
                    <li>{house}</li>
                ))}
            </ul>

        </div>
    )
}

export default HousingList