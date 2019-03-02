const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    created: { type: Date, default: Date.now },
    employee: {
        id: { type: String},
        firstName: { type: String},
        employeeType: { type: String},
        employeeTypeID: { type: String},
        lastName: { type: String}
    },
    location: { type: String}
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;
