import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";
import { Container } from "../../components/Container";
import SubBtn from "../../components/SubBtn";
import {
  NameInput,
  PhoneInput,
  EmailInput,
  LocationInput,
  TextArea,
  Options
} from "../../components/Form";

class Customer extends Component {
  state = {
    customer: [],
    Name: "",
    Phone: "",
    Email: "",
    Location: "",
    Issue: "",
    Comments: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    console.log(name);
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = () => {
    // event.preventDefault();
    API.sendEmail({
      name: this.state.Name,
      email: this.state.Email,
      issue: this.state.Issue
    }).then(res => {
      if (res.data.msg === "success") {
        console.log("Message Sent.");
      } else if (res.data.msg === "fail") {
        console.log("Message failed to send.");
      }
    });
    API.saveCustomer({
      Name: this.state.Name,
      Phone: this.state.Phone,
      Email: this.state.Email,
      Location: this.state.Location,
      Issue: this.state.Issue,
      Comments: this.state.Message
    })
      .then(res =>
        this.setState({
          Customer: res.data,
          Name: "",
          Phone: "",
          Email: "",
          Location: "",
          Issue: "",
          Message: ""
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Container fluid>
            <form>
              <NameInput
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                handleEmail={this.handleEmail}
                Name={this.state.Name}
              />
              <PhoneInput
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                Phone={this.state.Phone}
              />
              <EmailInput
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                handleEmail={this.handleEmail}
                Email={this.state.Email}
              />
              <LocationInput
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                Location={this.state.Location}
              />
              <Options
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                Issue={this.state.Issue}
              />
              <TextArea
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                Comments={this.state.Message}
              />

              <SubBtn onClick={this.handleFormSubmit} />
            </form>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Customer;
