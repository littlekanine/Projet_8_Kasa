import React, { useState} from "react";
import vector from "../../assets/vector/arrow_back_ios-24px 2.png"
import "./Collapse.css"

function Collapse ({title, children}) {
    const [isOpen, setIsOpen] = useState(false);
    const [isRotated, setIsRotated] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };

    const handleVectorClick = () => {
        setIsRotated(!isRotated);
        toggleCollapse()
    };
    
      return (
        <div className="collapse flex center column align-center">
            <div className={`flex collapse-container collapse-header center space-between align-center ${isOpen ? 'open' : 'closed'}`}>
                {title}
                <img className={`vector ${isRotated ? 'rotate-center' : ''}`} src = {vector} alt="vector" onClick={handleVectorClick} />
            </div>
            <div className={`collapse-content flex ${isOpen ? 'slidein' : 'slideout'}`}>
                {children} 
            </div>
        </div>
    )
}

export default Collapse