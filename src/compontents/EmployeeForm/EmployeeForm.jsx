import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function EmployeeForm(props) {
    return (
        <form>
            <h1>Enter your Employee Information</h1>
            <div className="form-group">
                <label htmlFor="employeeID">ID</label>
                <input
                    value={props.employeeID}
                    onChange={props.handleInputChange}
                    name="employeeID"
                    type="text"
                    className="form-control"
                    id="employeeID"
                    aria-describedby="idHelp"
                    placeholder="12345"
                />
            </div>
            <div className="form-group">
                <label htmlFor="employeeType">Employee Type</label>
                <input
                    value={props.employeeType}
                    onChange={props.handleInputChange}
                    name="employeeType"
                    type="text"
                    className="form-control"
                    id="employeeType"
                    placeholder="Software Developer"
                />
            </div>
            <div className="form-group">
                <label htmlFor="employeeTypeID">Type ID</label>
                <input
                    value={props.employeeTypeID}
                    onChange={props.handleInputChange}
                    name="employeeTypeID"
                    type="text"
                    className="form-control"
                    id="employeeTypeID"
                    aria-describedby="idHelp"
                    placeholder="54321"
                />
            </div>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                    value={props.firstName}
                    onChange={props.handleInputChange}
                    name="firstName"
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="John"
                />
            </div>
            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                    value={props.lastName}
                    onChange={props.handleInputChange}
                    name="lastName"
                    type="text"
                    className="form-control"
                    id="lastName"
                    placeholder="Doe"
                />
            </div>
            <div className="form-group">
                <label htmlFor="location">Location</label>
                <input
                    value={props.location}
                    onChange={props.handleInputChange}
                    name="location"
                    type="text"
                    className="form-control"
                    id="location"
                    placeholder="Philadelphia"
                />
            </div>
            <button type="submit" className="btn btn-primary" onClick={props.submitBTN}>Submit</button>
        </form>
    );
}

export default EmployeeForm;