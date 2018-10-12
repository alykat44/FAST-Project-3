import React from "react";
import './MessBtn.css';
import TextArea from '../Form/TextArea.js';

const MessBtn = props => (
 
    <button type="button" className="btn btn-primary btn-block" {...props}> Send Message </button>

)

export default MessBtn;