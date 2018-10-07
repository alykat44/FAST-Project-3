import React from "react";
import "./TextArea.css";

export const TextArea = props => (
  <div className="form-group">
    <label htmlfor="Message">Message</label>
    <textarea
      className="form-control"
      rows="5"
      name="Message"
      value={props.Message}
      onChange={props.handleInputChange}
    />
  </div>
);
