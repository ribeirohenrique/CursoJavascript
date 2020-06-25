const  Sequelize = require('sequelize');
const db = require('../db/connection');

const Job = db.define("job", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    salary: {
        type:Sequelize.INTEGER,
    },
    company: {
        type:Sequelize.STRING,
    },
    email: {
        type:Sequelize.STRING,
    },
    new: {
        type:Sequelize.INTEGER,
    },
    createdat: {
        type:Sequelize.TIME,
    },
    updatedat: {
        type:Sequelize.TIME,
    }
})

module.exports = Job;
