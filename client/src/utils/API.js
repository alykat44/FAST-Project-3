import axios from "axios";

export default {
  // Saves a Customer to the database
  saveCustomer: function(customerData) {
    console.log("savedcustomer API");
    console.log(customerData);
    return axios.post("/api/customer", customerData);
  },

  getCustomer: function(id) {
    return axios.get("/api/customer/" + id);
  },

  
};
