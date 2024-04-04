import React, { useState } from "react";
import vector from "../../assets/vector/arrow_back_ios-24px 2.png";
import "./collapse.css";

function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    const handleAnimationEnd = () => {
        setInitialAnimationComplete(true);
    };

    return (
        <div className="collapse flex center column align-center width90">
            <div className={`flex collapse-container collapse-header space-between align-center ${isOpen ? 'open' : 'closed'}`}>
                {title}
                <img className={`vector flex ${isOpen ? 'rotate-center' : 'rotate-back'}`} src={vector} alt="vector" onClick={toggleCollapse} />
            </div>
            <div className={`collapse-content flex ${initialAnimationComplete ? '' : 'hidden'} ${isOpen ? 'slidein' : 'slideout'}`} onAnimationEnd={handleAnimationEnd}>
                {children} 
            </div>
        </div>
    );
}

export default Collapse;