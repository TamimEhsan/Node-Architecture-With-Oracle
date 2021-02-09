module.exports = (sequelize, DataTypes) => {
    const Problems = sequelize.define('Problem', {
        problem_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        series_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        logo: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        islive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        difficulty: {
            type: DataTypes.STRING(6),
            allowNull: false
        },
        grade: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        timestp: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        serial: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        data: {
            type: DataTypes.JSON,
            allowNull: false
        },
        doc_id: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        author_id: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    }, {
        sequelize,
        timestamps: false,
        tableName: 'problem'
    });
    return Problems;
}