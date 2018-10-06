import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import {Container} from "../../components/Container";
import SubBtn from "../../components/SubBtn";
// import { List, ListItem } from "../../components/List";
import { NameInput, PhoneInput, EmailInput, LocationInput, TextArea, Options} from "../../components/Form";

class Customer extends Component {


    render() {
        return (
            <div>
                
                <Wrapper>
                    <Navbar />
                    <Container fluid>
                        <form>
                            <NameInput
                                // value={this.state.name}
                                // onChange={this.handleInputChange}
                                // name="name"
                                // placeholder="Name (required)"
                            />
                            <PhoneInput
                                // value={this.state.phone}
                                // onChange={this.handleInputChange}
                                name="phone#"
                                placeholder="Phone (required)"
                            />
                            <EmailInput
                                // value={this.state.email}
                                // onChange={this.handleInputChange}
                                // name="email"
                                // placeholder="Email (required)"
                            />
                            <LocationInput
                                // value={this.state.location}
                                // onChange={this.handleInputChange}
                                // name="location"
                                // placeholder="Location (required)"
                            />
                            <Options />
                            <TextArea
                                // value={this.state.message}
                                // onChange={this.handleInputChange}
                                // name="message"
                                // placeholder="Message (required)"
                            />
                            <SubBtn />

                        </form>
                    </Container>

                </Wrapper>
            </div>
            
        );
    }
}

export default Customer;
