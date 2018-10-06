import React from "react";
import './PhoneInput.css';

export const PhoneInput = props => (
    <div className="form-group">
        <label for="exampleFormControlInput1">Phone</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="phone#" {...props} />
    </div>
);
