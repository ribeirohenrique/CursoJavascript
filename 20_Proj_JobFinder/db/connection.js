const Sequelize = require('sequelize');
const sequelize = new Sequelize('job_finder', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql' //Mecessário instalar o pacote mysql2
});

module.exports = sequelize;

