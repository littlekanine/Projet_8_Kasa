import React, { useState} from "react";
import "./Collapse.css"

function Collapse ({title, children}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
      };
    
    return (
        <div className={`collapse ${isOpen ? 'open' : 'closed'} flex center column align-center`}>
            <div className="collapse-container collapse-header center" onClick={toggleCollapse}>
                {title}
            </div>
            {isOpen && (
                <div className="collapse-content flex ">
                    {children} 
                </div>
            )}
        </div>
    )
}

export default Collapse