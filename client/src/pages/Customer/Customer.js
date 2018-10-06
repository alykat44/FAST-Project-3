import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
import SubBtn from "../../components/SubBtn";
// import { List, ListItem } from "../../components/List";
import {
  NameInput,
  PhoneInput,
  EmailInput,
  LocationInput,
  TextArea,
  Options
} from "../../components/Form";

import API from "../../utils/API";

class Customer extends Component {
  state = {
    Name: "",
    Phone: 0,
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

  handleFormSubmit = event => {
    event.preventDefault();
    alert("working");
    API.saveCustomer({
      Name: this.state.Name,
      Phone: this.state.Phone,
      Email: this.state.Email,
      Location: this.state.Location,
      Issue: this.state.Issue,
      Comments: this.state.Comments
    })
      .then(res =>
        this.setState({
          Name: "",
          Phone: 0,
          Email: "",
          Location: "",
          Issue: "",
          Comments: ""
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Navbar />
          <Container fluid>
            <form>
              <NameInput
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                Name={this.state.Name}
              />
              <PhoneInput
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                Name={this.state.Phone}
              />
              <EmailInput
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                Name={this.state.Email}
              />
              <LocationInput
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                Name={this.state.Location}
              />
              <Options
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                Name={this.state.Issue}
              />
              <TextArea
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                Name={this.state.Message}
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
