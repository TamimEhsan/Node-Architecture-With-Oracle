const Service = require('./base').Service;

const EmployeeRepository = require('../repository/employee').EmployeeRepository;

class EmployeeService extends Service{
    constructor() {
        super();
        this.repo = new EmployeeRepository();
    }

    list = async function(){
        var employees = await this.repo.findAll();
        return employees;
    }
    fetch = async function(id){
        let employee = await this.repo.findOne(id);
        return employee;
    }
}

exports.EmployeeService = EmployeeService;