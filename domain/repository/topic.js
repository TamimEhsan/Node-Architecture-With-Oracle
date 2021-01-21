const Repository = require('./base').Repository;

class TopicRepository extends Repository{
    constructor() {
        super();
    }

    findAll = async function(){
        let topics = await this.query('SELECT * from topic');
        return topics;
    }

}

exports.TopicRepository = TopicRepository;