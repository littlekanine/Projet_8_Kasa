import React, { useState} from "react";
import vector from "../../assets/vector/arrow_back_ios-24px 2.png"
import "./collapse.css"

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isRotated, setIsRotated] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
        setIsRotated(!isRotated); // Inverser l'état de rotation à chaque clic
    };

    return (
        <div className="collapse flex center column align-center">
            <div className={`flex collapse-container collapse-header space-between align-center ${isOpen ? 'open' : 'closed'}`}>
                {title}
                <img className={`vector flex ${isRotated ? 'rotate-center' : 'rotate-back'}`} src={vector} alt="vector" onClick={toggleCollapse} />
            </div>
            <div className={`collapse-content flex ${isOpen ? 'slidein' : 'slideout'}`}>
                {children} 
            </div>
        </div>
    );
}

export default Collapse