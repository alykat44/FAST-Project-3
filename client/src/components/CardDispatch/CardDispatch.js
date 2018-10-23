import React from "react";
import './CardDispatch.css';

export const CardDispatch = ({ fluid, children }) => {
    return (
        <div className={`container${fluid ? "-fluid" : ""}`}>
            <h1>Customer Information</h1>

            {children}
        </div>


    );

};


