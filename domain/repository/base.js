const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.db_user,
    host: process.env.db_host,
    database: process.env.db_db,
    password: process.env.db_pass,
    port: process.env.db_port,
});

class Repository{
    constructor() {
    }

    query = async function(query,params){
        try{
            let result = await pool.query(query,params);
            return result.rows;
        }catch (error){
            return [];
        }
    };
}

exports.Repository = Repository;