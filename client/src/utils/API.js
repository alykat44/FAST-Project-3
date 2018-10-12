import axios from "axios";
import nexmo from "nexmo";

export default {
  // Saves a Customer to the database
  saveCustomer: function(customerData) {
    console.log("savedcustomer API");
    console.log(customerData);
    return axios.post("/api/customers", customerData);
  },
  getCustomer: function() {
    return axios.get("/api/customers");
  },
  sendText: function(){
    return nexmo.post("/api/sms");
  }
};
