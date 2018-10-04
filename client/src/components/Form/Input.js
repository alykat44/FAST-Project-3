import React from "react";
import './Input.css';

export const Input = props => (
    <div className="form-group">
        <label for="exampleFormControlInput1">Name</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...props} />
    </div>
);
