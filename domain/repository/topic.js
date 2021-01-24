const Repository = require('./base').Repository;
const util = require('util');
const redis = require('redis');
const redisPort = process.env.redis_port || 6379;
class TopicRepository extends Repository{
    constructor() {
        super();
    }

    findAll = async function(){
        let topics = await this.query('SELECT * from topic');
        return topics;
    }

    findOne = async function(id){
        let key = `topic:${id}`;
        let topic = await this.query_redis(key,'SELECT * FROM topic WHERE topic_id=$1',[id]);
        return topic;
    }

}

exports.TopicRepository = TopicRepository;