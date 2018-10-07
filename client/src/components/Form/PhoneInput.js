import React from "react";
import "./PhoneInput.css";

export const PhoneInput = props => (
  <div className="form-group">
    <label htmlfor="exampleFormControlInput1">Phone</label>
    <input
      type="text"
      className="form-control"
      name="Phone"
      placeholder="Phone Number Required (No Dashes or Special Characters)"
      value={props.Phone}
      onChange={props.handleInputChange}
    />
  </div>
);
