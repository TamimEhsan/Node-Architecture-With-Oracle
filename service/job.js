const Service = require('./base').Service;

const JobRepository = require('../repository/job').JobRepository;

class JobService extends Service{
    constructor() {
        super();
        this.repo = new JobRepository();
    }

    recent = async function(){
        let jobs = await this.repo.findRecent();
        return jobs;
    }
    fetch = async function(id){
        let job = await this.repo.findOne(id);
        return job;
    }
}

exports.JobService = JobService;