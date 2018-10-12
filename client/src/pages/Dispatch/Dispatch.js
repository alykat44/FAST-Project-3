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
import MessBtn from "../../components/MessBtn";
import CardDispatch from "../../components/CardDispatch";
import { List, ListItem } from "../../components/List";
import API from "../../utils/API";

                <Wrapper>
                    <Navbar />
                    <Container fluid>

                        <form>
                            <Card />
                            <CardDispatch />
                            <SMS />
                        </form>
class Dispatch extends Component {
  state = {
    customers: []
  };

  componentDidMount() {
    this.loadCustomers();
  }


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
