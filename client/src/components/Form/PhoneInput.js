import React from "react";
import './PhoneInput.css';

export const PhoneInput = props => (
    <div className="form-group">
        <label htmlfor="exampleFormControlInput1">Phone</label>
        <input 
        type="text" 
        className="form-control" 
        name="Phone" 
        placeholder="phone#"
        value={props.Phone}
        onChange={props.handleInputChange} />
    </div>
);
