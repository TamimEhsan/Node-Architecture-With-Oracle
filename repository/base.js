const oracledb = require('oracledb');

class Repository {
    constructor() {
        this.connection = undefined;
    }

    query = async function (query, params) {
        if (this.connection === undefined) {
            this.connection = await oracledb.getConnection({
                user: "c##tamim",
                password: "password",
                connectionString: "localhost/orcl"
            });
        }
        try {
            let result = await this.connection.execute(query, params);
            return {
                success:true,
                data: result.rows
            }

        } catch (error) {
            return {
                success:false,
                error
            }
        }
    };
}

exports.Repository = Repository;