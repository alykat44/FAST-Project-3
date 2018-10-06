import axios from "axios";

export default {
  // Saves a Customer to the database
  saveCustomer: function(customerData) {
    console.log("savecustomer API");
    console.log(customerData);
    return axios.post("/api/customers", customerData);
  },
  getCustomer: function() {
    return axios.get("/api/customers");
  }
};
