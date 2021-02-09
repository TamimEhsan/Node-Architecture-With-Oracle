const Sequelize = require("sequelize");
const db = require('./base');
const Series = db.define( 'series' ,{
    series_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    topic_id: {
        // foreign key from topic table
        type: Sequelize.INTEGER,

    },
    islive:{
        type: Sequelize.BOOLEAN
    },
    name:{
        type: Sequelize.STRING(100)
    },
    description:{
        type: Sequelize.STRING(1000)
    },
    logo:{
        type: Sequelize.STRING(1000)
    },
    serial:{
        type: Sequelize.INTEGER
    },
    nproblem:{
        type: Sequelize.INTEGER
    }
} )

/*  {
  // topic_id: i,
  // name: 'DummyName53',
  // subject: 'DummySubject',
  // islive: true,
  // logo: 'http://example.jpg',
  // nseries: 0,
  // nproblem: 0,
  // description: 'dummy description',
  // serial: 1,
  // lang: 'en'
}*/
module.exports = Series;