import axios from "axios";

export default {
  // Saves a Customer to the database

  saveCustomer: function (customerData) {

    console.log(customerData);
    return axios.post("/api/customers", customerData);
  },
  getCustomers: function () {
    return axios.get("/api/customers");
  },
<<<<<<< HEAD
 
=======
>>>>>>> e863bbafef3de85d92c02ba274a9092e7cd6c740
  sendEmail: function (data) {
    console.log(data);
    return axios.post("/send", data);
  },
  sendText: function (data) {
    return axios.post("/api/sms", data);
<<<<<<< HEAD

  
=======
  },
  sendEmail: function (data) {
    console.log(data);
    return axios.post("/send", data);
>>>>>>> e863bbafef3de85d92c02ba274a9092e7cd6c740
  }
};
