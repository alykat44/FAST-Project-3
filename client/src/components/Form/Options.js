import React from "react";
import "./Options.css";

export const Options = props => (
  <div className="form-group">
    <label htmlfor="Issue">Emergency Services</label>
    <select
      className="form-control"
      name="Issue"
      value={props.Issue}
      onChange={props.handleInputChange}
    >
      <option>What Do You Need Help With? (Select One)</option>
      <option>Towing</option>
      <option>Need Gas</option>
      <option>Need A Jumpstart</option>
      <option>Unlock Vehicle</option>
      <option>Change A Tire</option>
    </select>
  </div>
);
