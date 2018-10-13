import React from "react";
import "./LocationInput.css";

export const LocationInput = props => (
  <div className="form-group">
    <label htmlFor="Location">Location</label>
    <input
      type="text"
      className="form-control"
      placeholder="Location"
      value={props.Location}
      onChange={props.handleInputChange}
      name="Location"
    />
  </div>
);
