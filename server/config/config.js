const dotenv = require('dotenv');
dotenv.config();

console.log("process.env.DATABASE_USERNAME =", process.env.DATABASE_USERNAME)

const development = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
  port: process.env.DATABASE_PORT,
};

const test = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
  port: process.env.DATABASE_PORT,
};

const production = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DATABASE,
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
  port: process.env.DATABASE_PORT,
};

module.exports = { development, test, production };

// 기존 config.json 파일 당시 설정
// {
//   "development": {
//     "username": "admin",
//     "password": "1234",
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
