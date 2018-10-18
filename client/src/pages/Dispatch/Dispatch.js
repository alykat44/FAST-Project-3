import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Container } from "../../components/Container";
// import { List, ListItem } from "../../components/List";
// import { TextArea } from "../../components/Form";
import Card from "../../components/Card";

import SMS from "../../components/SMS/SMS.js";
// import MessBtn from "../../components/MessBtn";
import { CardDispatch } from "../../components/CardDispatch";
import { List } from "../../components/List";



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
          <Container fluid>
            <form>
              <Card />

              {this.state.customers.length ? (
                <CardDispatch>
                  {
                    this.state.customers.map(customer => (
                      <List key={customer._id}>
                        <div className="card-body">
                          <ul className="list-group list-group-flush">
                            <li className="list-group-item">{customer.Name}</li>
                            <li className="list-group-item">{customer.Phone}</li>
                            <li className="list-group-item">{customer.Email}</li>
                            <li className="list-group-item">{customer.Location}</li>
                            <li className="list-group-item">{customer.Issue}</li>
                            <li className="list-group-item">{customer.Comments}</li>
                          </ul>
                        </div>
                      </List>
                    ))
                  }
                </CardDispatch>
              ) : (
                  <h3>No Work Orders At This Time</h3>
                )}


              <SMS />
            </form>
          </Container>
        </Wrapper>
      </div >

    );
  }
}

export default Dispatch;
