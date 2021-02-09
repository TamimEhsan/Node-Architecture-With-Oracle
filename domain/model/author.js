module.exports = (sequelize, Sequelize) => {
    const Authors = sequelize.define('Author', {
        author_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: Sequelize.STRING(100),
            allowNull: false
        },
        image:{
            type: Sequelize.STRING(1000),
            allowNull: false
        },
        contact:{
            type: Sequelize.STRING(1000),
            allowNull: false
        }
    }, {
        sequelize,
        timestamps: false,
        tableName: 'author'
    });
    return Authors;
}