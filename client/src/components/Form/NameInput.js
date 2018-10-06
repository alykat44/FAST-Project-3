import React from "react";
import './NameInput.css';

export const NameInput = props => (
    <div className="form-group">
        <label for="exampleFormControlInput1">Name</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="name" {...props} />
    </div>
);
