import React, { Component } from 'react';
import './App.css';
import API from './utils/API';
import EmployeeForm from './components/EmployeeForm';
import EmployeesComp from './components/EmployeesComp';
import Card from './components/Card';

class App extends Component {

  state = {
    employeeID: '',
    employeeType: '',
    employeeTypeID: '',
    firstName: '',
    lastName: '',
    location: '',
    list: []
  }

  componentDidMount() {
    this.loadEmployees();
  };

  // Changes state of the input
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // Submit button 
  submitBTN = event => {
    event.preventDefault();

    // Sends a post request to Mongo
    API.enterEmployeeData({
      employee: {
        id: this.state.employeeID,
        employeeType: this.state.employeeType,
        employeeTypeID: this.state.employeeTypeID,
        firstName: this.state.firstName,
        lastName: this.state.lastName
      },
      location: this.state.location
    })
      // Runs a promise to load the page again to see the updated employee list
      .then(this.loadEmployees());
  }

  // Function to load the employees in the list
  loadEmployees = () => {
    // Sends a get request to Mongo
    API.search()
      // Runs a promise to empty the state
      .then(res => this.setState({
        employeeID: '',
        employeeType: '',
        employeeTypeID: '',
        firstName: '',
        lastName: '',
        location: '',
        list: res.data
      }))
      .catch(err => console.log(err));
  }

  // Delete Button
  deleteBTN = id => {
    // Sends a delete request to Mongo
    API.deleteEmployee(id)
      // Runs a promise to load the page again to see the updated employee list
      .then(res => this.loadEmployees())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <EmployeeForm
          employeeID={this.state.employeeID}
          employeeType={this.state.employeeType}
          employeeTypeID={this.state.employeeTypeID}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          location={this.state.location}
          handleInputChange={this.handleInputChange}
          submitBTN={this.submitBTN}
        />
        <div className='container'>
        {console.log(this.state.list)}
          <EmployeesComp>
            <h2>Employee List:</h2>
            {this.state.list.map(employee => (
              <Card key={employee._id}>
                <div className="card-body">
                  <span id='deleteBTN' onClick={() => this.deleteBTN(employee._id)}>x</span>
                  <div>Created: {employee.created.split('T')[0]}</div>
                  <div>Employee:
                    <ul>
                      <li> Employee Type: {employee.employee.employeeType} </li>
                      <li>  ID2: {employee.employee.employeeTypeID} </li>
                      <li>  First Name: {employee.employee.firstName} </li>
                      <li>  ID1: {employee.employee.id} </li>
                      <li>  Last Name: {employee.employee.lastName} </li>
                    </ul>
                  </div>
                  <div>Location: {employee.location}</div>
                </div>
              </Card>
            ))}
          </EmployeesComp>
        </div>
      </div>
    );
  }
}

export default App;