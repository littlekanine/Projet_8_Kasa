import Housings from '../datas/housing.json';
import React from "react";
import '../styles/index.css'
import '../styles/housingList.css'
import '../styles/index.css'

function HousingList () {
    return (
        <div className='background-container flex'>
            <div className='flex container-housings center'>
                {
                Housings.map (housing => {
                    return (
                        <div className='flex card align-bottom '>
                            {housing.title}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default HousingList