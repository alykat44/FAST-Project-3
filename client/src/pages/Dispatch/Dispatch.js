import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";
import { Container } from "../../components/Container";
import { TextArea } from "../../components/Form";
import Card from "../../components/Card";
import MessBtn from "../../components/MessBtn";
import { CardDispatch, ListCardDispatch } from "../../components/CardDispatch";


class Dispatch extends Component {
    state = {
        
        customer: {}
    };

    componentDidMount() {
        API.getCustomer(this.props.match.params.id)
            .then(res => this.setState({ customers: res.data })) 
            .catch(err => console.log(err));
            
    }




    render() {
        return (
            <div>

                <Wrapper>
                    <Navbar />
                    <Container fluid>

                        <form>

                            <Card />

                            <CardDispatch>

                                <ListCardDispatch> 
                            
                                        {this.state.customer.Name}
                                        {this.state.customer.Phone}
                                        {this.state.customer.Email}
                                        {this.state.customer.Location}
                                        {this.state.customer.Issue}
                                        {this.state.customer.Message}
                                    
                                </ListCardDispatch>

                            </CardDispatch> 

                            <MessBtn />



                            < TextArea />


                        </form>

                    </Container>

                </Wrapper>
            </div>

        );
    }
}

export default Dispatch;

