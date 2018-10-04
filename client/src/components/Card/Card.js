import React from "react";
import './Card.css';

export const Card = props => (

    <div className="card" {...props}>
        <img className="card-img-top" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/10/13/tokyo-main.jpg?w968h681" width= "300px" height= "450px" alt="Map spot"{...props}></img>
        <div className="card-body">
            <h5 className="card-title"{...props}>Card title</h5>
            <p className="card-text"{...props}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush"{...props}>
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
        </ul>

    </div>
);