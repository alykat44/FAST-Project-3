import axios from "axios";
import nexmo from "nexmo";

export default {
  // Saves a Customer to the database
  saveCustomer: function(customerData) {
    console.log("savedcustomer API");
    console.log(customerData);
    return axios.post("/api/customers", customerData);
  },
<<<<<<< HEAD

  getCustomer: function(id) {
    return axios.get("/api/customers/" + id);
  },

  
=======
  getCustomers: function() {
    return axios.get("/api/customers");
  },
  sendText: function(){
    return nexmo.post("/api/sms");
  }
>>>>>>> 8f0b0aec74e06d08b60d3646847afeccdca26df9
};
