import React from "react";
import './TextArea.css';

export const TextArea = props => (
    <div className="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" {...props} />
    </div>
);
