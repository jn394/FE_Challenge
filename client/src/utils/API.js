import axios from "axios";

export default {

  // Gets all employees
  search: function () {
    return axios.get("/api/employees");
  },

  //Saves a employee to the database
  enterEmployeeData: function (bookData) {
    return axios.post("/api/employees", bookData);
  },

  // Deletes a employee with the given id
  deleteEmployee: function (id) {
    return axios.delete("/api/employees/" + id);
  },
};