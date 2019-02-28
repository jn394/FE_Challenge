import React, { Component } from 'react';
import './App.css';
import EmployeeForm from './compontents/EmployeeForm';
import EmployeesComp from './compontents/EmployeesComp';

class App extends Component {

  state = {
    employeeID: '',
    employeeType: '',
    employeeTypeID: '',
    firstName: '',
    lastName: '',
    location:'',
    list: []
  }

  componentDidMount() {

  };

  // Changes state of the search
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  submitBTN = event => {
    event.preventDefault();
    console.log(this.state.employeeID)
    console.log(this.state.employeeType)
    console.log(this.state.employeeTypeID)
    console.log(this.state.firstName)
    console.log(this.state.lastName)
    console.log(this.state.location)
    // Sends data to Mongo
    // Callback should be a list of employees
    // Set the state to the new list
  }

  // initialCheck = query => {
  //   API.search(query)
  //     .then(res => this.setState({ list: res.data }))
  //     .catch(err => console.log(err));
  //   // Checks for the lastest list of employees in mongo
  //   // Set the state to the lastest list
  // }

  render() {
    return (
      <div className='container'>
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
        <EmployeesComp
          list={this.state.list}
        />
      </div>
    );
  }
}

export default App;
