import axios from "axios";

export default {
  // Saves a Customer to the database
  saveCustomer: function(customerData) {
    console.log(customerData);
    return axios.post("/api/customers", customerData);
  },
  getCustomers: function() {
    return axios.get("/api/customers");
  },
  sendEmail: function(data) {
    console.log(data);
    return axios.post("/send", data);
  }
};
