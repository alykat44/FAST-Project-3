import React from "react";
import './NameInput.css';

export const NameInput = props => (
    <div className="form-group">
        <label for="exampleFormControlInput1">Name</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...props} />
    </div>
);
