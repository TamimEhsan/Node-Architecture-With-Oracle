const Controller = require('./base').Controller;
const EmployeeRepository = require("../repository/employee").EmployeeRepository;
const employeeRepository = new EmployeeRepository();

class EmployeeController extends Controller {
    constructor() {
        super();
    }

    list = async (req, res, next) => {
        let employees = await employeeRepository.findAll();
        if (!employees.success)
            return res.status(500).json({code: "E0001", description: "Internal Error"});
        else
            return res.status(200).json(employees.data);
    };
    fetch = async (req, res, next) => {
        let id = req.params.id;
        let employee = await employeeRepository.findOne(id);
        if (!employee.success)
            return res.status(404).json({code: "E0002", description: "Internal Server Error"});
        else if (employee.data.length === 0)
            return res.status(500).json({code: "E0002", description: "Employee with id:" + id + " not found."});
        else
            return res.status(200).json(employee.data);
    };
};


exports.EmployeeController = EmployeeController;