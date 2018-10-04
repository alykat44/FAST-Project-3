import React from "react";

export const TextArea = props => (
    <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" {...props} />
    </div>
);
