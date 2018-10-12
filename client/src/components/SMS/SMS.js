import React, { Component } from "react";
import API from "../../utils/API"
import "./SMS.css";

class TextArea extends Component {
    constructor(props) {
       super(props);
       this.state = {
        text: "",
        number: "",
       };

      }

  handleInputChange = event => {
    // const { name, value } = event.target;
    // console.log(text, number);
    // this.setState({
    //   [text]: text,
    //   [number]: number
    // });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    alert("working");
    API.sms({
      text: this.state.text,
      number: this.state.number,
    })
      .then(res =>
        this.setState({
          text: "",
          number: "",
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="form-group">
      <textarea
        className="form-control"
        rows="5"
        name="Message"
        placeholder="Text Message"
        value={this.state.text}
      />
       <textarea
        className="form-control"
        rows="1"
        name="Number"
        placeholder="Phone Number"
        value={this.state.number}
      
      />
      <button type="button" className="btn btn-primary btn-block" onClick={this.handleNumberChange}> Send Text </button>
  
    </div>
        
    );
  }
}

export default TextArea;
