import React from "react";
import './LocationInput.css';

 export const LocationInput = props => (
    <div className="form-group">
        <label for="exampleFormControlInput1">Location</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Location" {...props} />
    </div>
);
