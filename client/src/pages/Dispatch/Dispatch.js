import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
// import { List, ListItem } from "../../components/List";
import { TextArea } from "../../components/Form";
import Card from "../../components/Card";
import SMS from "../../components/SMS/SMS.js";
import CardDispatch from "../../components/CardDispatch"

class Dispatch extends Component {


    render() {
        return (
            <div>

                <Wrapper>
                    <Navbar />
                    <Container fluid>

                        <form>
                            <Card />
                            <CardDispatch />
                            <SMS />
                        </form>

                    </Container>

                </Wrapper>
            </div>

        );
    }
}

export default Dispatch;
