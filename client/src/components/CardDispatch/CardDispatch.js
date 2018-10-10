import React from "react";
import './CardDispatch.css';

export const CardDispatch = ({ children }) => {
    return (

        <div className="card" id="dispatch-card">
            <div className="card-body"><h1>Customer Information</h1></div>
            <ul className="list-group">
                {children}
            </ul>
        </div>

    );

};




