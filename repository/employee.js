const Repository = require('./base').Repository;
class EmployeeRepository extends Repository{
    constructor() {
        super();
    }

    findAll = async function(){
        const query = "SELECT * FROM EMPLOYEES";
        const params = [];
        const result = await this.query(query,params);
        return result;
    }

    findOne = async function(id){
        const query = "SELECT * FROM EMPLOYEES WHERE id = $1";
        const params = [id];
        const result = await this.query(query,params);
        return result;
    }

}

exports.EmployeeRepository = EmployeeRepository;