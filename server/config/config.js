require("dotenv").config();

const env = process.env;

const development = {
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_DATABASE,
  host: env.DATABASE_HOST,
  dialect: "mysql",
};

const test = {
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_DATABASE,
  host: env.DATABASE_HOST,
  dialect: "mysql",
};

const production = {
  username: env.DATABASE_USERNAME,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_DATABASE,
  host: env.DATABASE_HOST,
  dialect: "mysql",
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
