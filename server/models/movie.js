const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    const Movie = sequelize.define('Movie', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ratings: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        poster: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        FreezeTableName: true,
        timestamps: true,
        schema: 'public',
        

    });
    return Movie;
} 
