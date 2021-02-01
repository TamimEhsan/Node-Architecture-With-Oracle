const Pool = require('pg').Pool;
const util = require('util');
const redis = require('redis');
const redisPort = process.env.redis_port || 6379;

const pool = new Pool({
    user: process.env.db_user,
    host: process.env.db_host,
    database: process.env.db_db,
    password: process.env.db_pass,
    port: process.env.db_port,
});
//let client = redis.createClient(redisPort);
//client.get = util.promisify(client.get);
//console.log("habijani");
class Repository{
    constructor() {
        //  this.client = redis.createClient(redisPort);
        //   this.client.get = util.promisify(this.client.get);
    }

    query = async function(query,params){
        try{
            let result = await pool.query(query,params);
            return result.rows;
        }catch (error){
            return [];
        }
    };
   /* query_redis = async function(key,query,params){
        let data = await client.get(key);
        if( data!==null ) {
            let dataToJson = JSON.parse(data);
            return dataToJson;
        }
        let rows = await this.query(query,params);
        if( !rows.length ) return [];
        let dataToString = JSON.stringify(rows);
        client.setex(key,3600,dataToString);
        return rows;
    }*/
}

exports.Repository = Repository;