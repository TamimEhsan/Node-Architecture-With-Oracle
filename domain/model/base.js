const { Sequelize } = require('sequelize');
const db = new Sequelize(process.env.db_db, process.env.db_user, process.env.db_pass, {
    host: process.env.db_host,
    dialect: 'postgres',
    define: {
        timestamps: false, // true by default
        freezeTableName: true
    }
});
module.exports = db;

