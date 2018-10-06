import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import {Container}  from "../../components/Container";
// import { List, ListItem } from "../../components/List";
import { NameInput, PhoneInput, TextArea } from "../../components/Form";
import Card  from "../../components/Card";
import MessBtn  from "../../components/MessBtn";

class Dispatch extends Component {


    render() {
        return (
            <div>

                <Wrapper>
                    <Navbar />
                    <Container fluid>

                        <form>
                            <Card />
                            <NameInput
                            // value={this.state.name}
                            // onChange={this.handleInputChange}
                            // name="name"
                            // placeholder="Name (required)"
                            />
                            <PhoneInput
                            // value={this.state.phone}
                            // onChange={this.handleInputChange}
                            // name="phone#"
                            // placeholder="Phone (required)"
                            />

                            <TextArea
                            // value={this.state.message}
                            // onChange={this.handleInputChange}
                            // name="message"
                            // placeholder="Message (required)"
                            />
                            <MessBtn />

                        </form>
                    </Container>

                </Wrapper>
            </div>

        );
    }
}

export default Dispatch;
