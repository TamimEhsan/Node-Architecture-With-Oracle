const Sequelize = require("sequelize");
const db = require('./base');
const Topic = db.define( 'topic' ,{
    topic_id: {
        // fk in series table
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING(100)
    },
    subject:{
        type:Sequelize.STRING(100)
    },
    islive:{
        type: Sequelize.BOOLEAN
    },
    logo:{
        type: Sequelize.STRING
    },
    nseries:{
        type: Sequelize.INTEGER
    },
    nproblem:{
        type: Sequelize.INTEGER
    },
    description:{
        type: Sequelize.STRING(1000)
    },
    serial:{
        type: Sequelize.INTEGER
    },
    lang:{
        type: Sequelize.STRING(20)
    },
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
module.exports = Topic;