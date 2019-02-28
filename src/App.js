import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <form>
        <h1>Enter your Employee Information</h1>
        <div class="form-group">
          <label for="employeeID">ID</label>
          <input type="number" class="form-control" id="employeeID" aria-describedby="idHelp" placeholder="12345" />
        </div>
        <div class="form-group">
          <label for="employeeType">Employee Type</label>
          <input type="text" class="form-control" id="employeeType" placeholder="Software Developer" />
        </div>
        <div class="form-group">
          <label for="employeeTypeID">Type ID</label>
          <input type="number" class="form-control" id="employeeTypeID" aria-describedby="idHelp" placeholder="54321" />
        </div>
        <div class="form-group">
          <label for="employeeFirstName">First Name</label>
          <input type="text" class="form-control" id="employeeFirstName" placeholder="John" />
        </div>
        <div class="form-group">
          <label for="employeeLastName">Last Name</label>
          <input type="text" class="form-control" id="employeeLastName" placeholder="Doe" />
        </div>
        <div class="form-group">
          <label for="employeeLocation">Location</label>
          <input type="text" class="form-control" id="employeeLocation" placeholder="Philadelphia" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default App;
