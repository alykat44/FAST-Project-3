import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";
import { Container } from "../../components/Container";
import Card from "../../components/Card";
import SMS from "../../components/SMS/SMS.js";
import { CardDispatch } from "../../components/CardDispatch";
import { List } from "../../components/List";
import Badge from "@material-ui/core/Badge";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import NavigationIcon from "@material-ui/icons/Navigation";

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
          <AppBar position="static">
            <Tabs value={0}>
              <Tab
                label={
                  <Badge
                    color="secondary"
                    badgeContent={this.state.customers.length}
                  >
                    New Orders
                  </Badge>
                }
              />
              <Tab
                label={
                  <Badge color="secondary" badgeContent={0}>
                    Orders In Transit
                  </Badge>
                }
              />
              <Tab
                label={
                  <Badge color="secondary" badgeContent={0}>
                    Need to Bill/Complete
                  </Badge>
                }
              />
            </Tabs>
          </AppBar>

          <Container fluid>
            <Badge color="primary" badgeContent={5}>
              <Button variant="contained">Tow Trucks Available</Button>
            </Badge>
            <form>
              <Card />
              {this.state.customers.length ? (
                <CardDispatch>
                  {this.state.customers.map(customer => (
                    <List key={customer._id}>
                      <div className="card-body">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">{customer.Name}</li>
                          <li className="list-group-item">{customer.Phone}</li>
                          <li className="list-group-item">{customer.Email}</li>
                          <li className="list-group-item">
                            {customer.Location}
                          </li>
                          <li className="list-group-item">{customer.Issue}</li>
                          <li className="list-group-item">
                            {customer.Comments}
                          </li>
                          <Button
                            onClick={this.handleFormSubmit}
                            variant="contained"
                            color="secondary"
                          >
                            Delete
                            <DeleteIcon />
                          </Button>
                          <Button variant="extendedFab" aria-label="Delete">
                            <NavigationIcon />
                            Assign to tow Truck
                          </Button>
                        </ul>
                      </div>
                    </List>
                  ))}
                </CardDispatch>
              ) : (
                <h3>No Work Orders At This Time</h3>
              )}

              <SMS />
            </form>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Dispatch;
