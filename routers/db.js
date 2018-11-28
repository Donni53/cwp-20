const exp = {};
const Sequelize = require('sequelize');
const config = require('../config.json');
exp.db = require('../models')(Sequelize, config);

module.exports = exp;