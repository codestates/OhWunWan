const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    username: process.env.development_database_username,
    password: process.env.development_database_password,
    database: process.env.development_database_name,
    host: process.env.development_database_host,
    dialect: 'mysql'
  },
  test: {
    username: process.env.test_database_username,
    password: process.env.test_database_password,
    database: process.env.test_database_name,
    host: process.env.test_database_host,
    dialect: 'mysql'
  },
  production: {
    username: process.env.production_database_username,
    password: process.env.production_database_password,
    database: process.env.production_database_name,
    host: process.env.production_database_host,
    dialect: 'mysql'
  }
};