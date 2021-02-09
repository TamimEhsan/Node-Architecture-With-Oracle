const Service = require('./base').Service;

const ProblemRepository = require('../domain/repository/problem').ProblemRepository;

class ProblemService extends Service{
    constructor() {
        super();
        this.repo = new ProblemRepository();
    }

    recent = async function(){
        let topics = await this.repo.findRecent();
        return topics;
    }
    fetch = async function(id){
        let topic = await this.repo.findOne(id);
        return topic;
    }
}

exports.ProblemService = ProblemService;