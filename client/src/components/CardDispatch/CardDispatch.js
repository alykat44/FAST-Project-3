import React from "react";
import './CardDispatch.css';

const CardDispatch = props => (

    <div className="card" id="dispatch-card">
    <div className="card-body"><h1>Customer Information</h1></div>
        <ul
            className="list-group list-group-flush"
            name="DispatchInfo"
            value={props.DispatchInfo}
            onChange={props.handleInputChange}
        >

            <li className="list-group-item">Example1</li>
            <li className="list-group-item">Example2</li>
            <li className="list-group-item">Example3</li>
            <li className="list-group-item">Example4</li>
            <li className="list-group-item">Example5</li>
            <li className="list-group-item">Example6</li>
        </ul>
        <div className="card-body">Whateva</div>
    </div>

);

export default CardDispatch;




