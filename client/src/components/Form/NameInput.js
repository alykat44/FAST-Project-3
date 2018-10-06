import React from "react";
import "./NameInput.css";

export const NameInput = props => (
  <div className="form-group">
    <label for="Name">Name</label>
    <input
      type="text"
      className="form-control"
      placeholder="name"
      name="Name"
      value={props.Name}
      onChange={props.handleInputChange}
    />
  </div>
);
