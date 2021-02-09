const Repository = require('./base').Repository;
const Sequelize = require('sequelize');
const db = require('../../config/database');

class ProblemRepository extends Repository{
    constructor() {
        super();
    }

  /*  findAll = async function(){
        let topics = await this.query('SELECT * from topic');
        return topics;
    }*/
    findRecent = async function(){
        try{
            let problems = await db.problems.findAll({
                limit: 3,
                order: [[ 'timestp', 'DESC']],
                include: [
                {
                    model:db.authors,
                    attributes:[ 'author_id' ]
                }
            ]
            });
            return problems;
        } catch (err){
            console.log(err);
            return [];
        }
    }
  /*  findOne = async function(id){
        //let key = `topic:${id}`;
        // let topic = await this.query_redis(key,'SELECT * FROM topic WHERE topic_id=$1',[id]);

        try{
            let topic = await Topic.findOne( { where: { topic_id: id } } );
            return topic;
        } catch (err){
            // console.log(err);
            return [];
        }
    }*/

}

exports.ProblemRepository = ProblemRepository;