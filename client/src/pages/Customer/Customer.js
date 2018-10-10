import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";
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

// import API from "../../utils/API";

class Customer extends Component {
  state = {
    customer: [],
    Name: "",
    Phone: "",
    Email: "",
    Location: "",
    Issue: "",
    Message: ""
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
    // alert("working");
    API.saveCustomer({
      Name: this.state.Name,
      Phone: this.state.Phone,
      Email: this.state.Email,
      Location: this.state.Location,
      Issue: this.state.Issue,
      Message: this.state.Message
    })
      .then(res =>
        this.setState({
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
                Phone={this.state.Phone}
              />
              <EmailInput
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
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
                Message={this.state.Message}
              />
              
              <SubBtn onClick={this.handleFormSubmit} />
              {/* <SubBtn onClick={<Link> to={"/customers/" + customer._id}</Link>} /> */}
              
            </form>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Customer;
