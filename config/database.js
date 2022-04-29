require('dotenv').config();
const { Sequelize } = require('sequelize');

const devDBString = 'postgres://postgres:admin@localhost:5432/stemswiftfinal';
module.exports = new Sequelize(process.env.NODE_ENV == 'production' ? process.env.DATABASE_URL : devDBString);