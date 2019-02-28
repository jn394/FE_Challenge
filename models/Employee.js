const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    created: { type: Date, default: Date.now },
    employee: {
        id: { type: Number, required: true },
        firstname: { type: String, required: true },
        employeeType: { type: String, required: true },
        id2: { type: Number, required: true },
        lastname: { type: String, required: true }
    },
    location: { type: String, required: true }
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;