import React from "react";

export const Options = props => (
    <div className="form-group">
        <label for="exampleFormControlSelect1">Emergency Services</label>
        <select className="form-control" id="exampleFormControlSelect1" {...props}>
            <option>Towing</option>
            <option>Need Gas</option>
            <option>Need A Jumpstart</option>
            <option>Unlock Vehicle</option>
            <option>Change A Tire</option>
        </select>
    </div>
);