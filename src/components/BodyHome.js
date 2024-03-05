import React from "react";
import '../styles/body.css'
import landscape from '../assets/img/Image source 1.png'

function Body () {
    return (
        <div>
            <div className="container flex center align-center">
                <img className="landscape" src = {landscape} alt ="Paysage"></img>
                <h1 className="flex text">Chez vous, partout et ailleurs</h1>
            </div>
            <div className=" flex center">
                <div className="container-housing">

                </div>
                <p></p>
            </div>
        </div>
    )
}

export default Body 