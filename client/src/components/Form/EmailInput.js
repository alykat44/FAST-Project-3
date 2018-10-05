import React from "react";
import './EmailInput.css';

export const EmailInput = props => (
    <div className="form-group">
        <label for="exampleFormControlInput1">Email</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" {...props} />
    </div>
);
