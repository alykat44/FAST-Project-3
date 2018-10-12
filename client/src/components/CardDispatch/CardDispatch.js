import React from "react";
import "./CardDispatch.css";

<<<<<<< HEAD
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




=======
const CardDispatch = props => (
  <div className="card" id="dispatch-card">
    <div className="card-body">
      <h1>Customer Information</h1>
    </div>
  </div>
);

export default CardDispatch;
>>>>>>> 8f0b0aec74e06d08b60d3646847afeccdca26df9
