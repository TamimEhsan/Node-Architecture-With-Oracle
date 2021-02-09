const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.db_db, process.env.db_user, process.env.db_pass, {
    host: process.env.db_host,
    dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.authors = require('../domain/model/author')(sequelize,Sequelize);
db.problems = require('../domain/model/problem')(sequelize,Sequelize);

// Association
db.problems.belongsTo(db.authors,{
    foreignKey:'author_id'
});
db.authors.hasMany(db.problems,{
    foreignKey:'author_id'
});

module.exports = db;