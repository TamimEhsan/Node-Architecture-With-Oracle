const Repository = require('./base').Repository;
const util = require('util');
//const redis = require('redis');
//const redisPort = process.env.redis_port || 6379;

const Sequelize = require('sequelize');
const Topic = require('../model/topic');
class TopicRepository extends Repository{
    constructor() {
        super();
    }

    findAll = async function(){
        let topics = await this.query('SELECT * from topic');
        return topics;
    }

    findOne = async function(id){
        //let key = `topic:${id}`;
       // let topic = await this.query_redis(key,'SELECT * FROM topic WHERE topic_id=$1',[id]);

        try{
            let topic = await Topic.findOne( { where: { topic_id: id } } );
            return topic;
        } catch (err){
           // console.log(err);
            return [];
        }
    }

}

exports.TopicRepository = TopicRepository;