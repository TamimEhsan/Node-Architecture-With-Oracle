const Repository = require('./base').Repository;
class JobRepository extends Repository{
    constructor() {
        super();
    }

    findAll = async function(){
        const query = "SELECT * FROM JOBS";
        const params = [];
        const result = await this.query(query,params);
        return result;
    }

    findOne = async function(id){
        const query = "SELECT * FROM JOBS WHERE job_id = $1";
        const params = [id];
        const result = await this.query(query,params);
        return result;
    }

}

exports.JobRepository = JobRepository;