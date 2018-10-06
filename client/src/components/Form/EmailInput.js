import React from "react";
import "./EmailInput.css";

export const EmailInput = props => (
  <div className="form-group">
    <label for="Email">Email</label>
    <input
      type="Email"
      className="form-control"
      placeholder="name@example.com"
      name="Email"
      value={props.Email}
      onChange={props.handleInputChange}
    />
  </div>
);
