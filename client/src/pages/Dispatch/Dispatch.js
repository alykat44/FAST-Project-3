import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { Container } from "../../components/Container";
import { TextArea } from "../../components/Form";
import Card from "../../components/Card";
import MessBtn from "../../components/MessBtn";
<<<<<<< HEAD
import { CardDispatch, ListCardDispatch } from "../../components/CardDispatch";


class Dispatch extends Component {
   




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
                            
                                        
                                    
                                </ListCardDispatch>

                            </CardDispatch> 

                            <MessBtn />



                            < TextArea />


                        </form>
=======
import CardDispatch from "../../components/CardDispatch";
import { List, ListItem } from "../../components/List";

import API from "../../utils/API";

class Dispatch extends Component {
  state = {
    customers: []
  };

  componentDidMount() {
    this.loadCustomers();
  }
>>>>>>> 8f0b0aec74e06d08b60d3646847afeccdca26df9

  loadCustomers = () => {
    API.getCustomers()
      .then(res => {
        console.log(res.data);
        this.setState({
          customers: res.data
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Navbar />
          <Container fluid>
            <form>
              <Card />
              <CardDispatch />
              {this.state.customers.length ? (
                <List>
                  {this.state.customers.map(customer => (
                    <ListItem key={customer._id}>
                      {customer.Name}
                      {customer.Phone}
                      {customer.Email}
                      {customer.Location}
                      {customer.Issue}
                      {customer.Message}
                    </ListItem>
                  ))}
                </List>
              ) : (
                <h3>No Work Orders At This Time</h3>
              )}

              <TextArea />
              <MessBtn />
            </form>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Dispatch;

