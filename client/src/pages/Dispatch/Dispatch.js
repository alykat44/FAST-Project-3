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
let Truck = 5;
let Available = 0;
let Transit = 0;
class Dispatch extends Component {
  Truck = 5;
  Available = 0;
  Transit = 0;
  state = {
    customers: []
  };

  componentDidMount() {
    this.loadCustomers();
  }

  deleteCustomer = id => {
    API.deleteCustomer(id)
      .then(res => this.loadCustomers())
      .catch(err => console.log(err));
  };

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

  assignTruck = () => {
    Available = Truck - 1;
    Truck = Available;
    let Working = Transit + 1;
    Transit = Working;
    console.log(Available);
  };

  addTruck = () => {
    let Added = Available + 1;

    Available = Added;

    console.log(Available);
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
                  <Badge color="secondary" badgeContent={Transit}>
                    Orders In Transit
                  </Badge>
                }
              />
              <Tab
                label={
                  <Badge color="secondary" badgeContent={0}>
                    Need to Complete
                  </Badge>
                }
              />
            </Tabs>
          </AppBar>

          <Container fluid>
            <Badge
              onClick={this.addTruck}
              color="primary"
              badgeContent={this.Available}
            >
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
                        </ul>
                        <Button
                          onClick={() => this.deleteCustomer(customer._id)}
                          variant="contained"
                          color="secondary"
                        >
                          Delete
                            <DeleteIcon />
                        </Button>
                        <Button
                          onClick={this.assignTruck}
                          variant="extendedFab"
                          aria-label="Delete"
                        >
                          <NavigationIcon />
                          Assign to tow Truck
                          </Button>

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
