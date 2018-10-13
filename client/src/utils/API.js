import axios from "axios";

export default {
  // Saves a Customer to the database
  saveCustomer: function(customerData) {
    console.log("savedcustomer API");
    console.log(customerData);
    return axios.post("/api/customers", customerData);
  },
  getCustomers: function() {
    return axios.get("/api/customers");
  },
  sendemail: function() {
    return axios.get("/send");
  }
};
