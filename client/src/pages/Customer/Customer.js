import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
// import { List, ListItem } from "../../components/List";
import { Input, TextArea, Options } from "../../components/Form";

class Customer extends Component {


    render() {
        return (
            <div>
                
                <Wrapper>
                    <Navbar />
                    <Container fluid>
                        <form>
                            <Input
                                // value={this.state.name}
                                // onChange={this.handleInputChange}
                                // name="name"
                                // placeholder="Name (required)"
                            />
                            <Input
                                // value={this.state.phone}
                                // onChange={this.handleInputChange}
                                // name="phone#"
                                // placeholder="Phone (required)"
                            />
                            <Input
                                // value={this.state.email}
                                // onChange={this.handleInputChange}
                                // name="email"
                                // placeholder="Email (required)"
                            />
                            <Input
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

                        </form>
                    </Container>

                </Wrapper>
            </div>
            
        );
    }
}

export default Customer;
