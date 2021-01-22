const Repository = require('./base').Repository;
const util = require('util');
const redis = require('redis');
const redisPort = process.env.redis_port || 6379;
class TopicRepository extends Repository{
    constructor() {
        super();
        this.client = redis.createClient(redisPort);
        this.client.get = util.promisify(this.client.get);
    }

    findAll = async function(){
        let topics = await this.query('SELECT * from topic');
        return topics;
    }

    findOne = async function(id){

        let key = `topic:${id}`;
        let data = await this.client.get(key);
        if( data!==null ) {
            let dataToJson = JSON.parse(data);
            return dataToJson;
        }
        let rows = await this.query('SELECT * FROM topic WHERE topic_id=$1',[id]);
        if( !rows.length ) return null;
        let dataToString = JSON.stringify(rows[0]);
        this.client.setex(key,3600,dataToString);
        return rows[0];
    }

}

exports.TopicRepository = TopicRepository;