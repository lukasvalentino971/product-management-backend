const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Types = sequelize.define('Type', {
    // id, name, desc

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2, 100]
        }
    },
    desc: {
        type: DataTypes.TEXT,
        allowNull: true
    }

}, {
    tableName: 'types',
    timestamps: true
});

module.exports = Type;
