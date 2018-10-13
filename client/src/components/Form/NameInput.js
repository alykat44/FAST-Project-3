import React from "react";
import "./NameInput.css";

export const NameInput = props => (
  <div className="form-group">
    <label htmlFor="Name">Name</label>
    <input
      type="text"
      className="form-control"
      placeholder="Full Name Required"
      name="Name"
      value={props.Name}
      onChange={props.handleInputChange}
    />
  </div>
);
