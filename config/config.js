const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  development: {
    // username: process.env.USERNAME,
    // password: process.env.PASSWORD,
    // database: process.env.DATABASE,
    // host: process.env.HOST,
    // dialect: process.env.DIALECT,
    username: "root",
    password: "root",
    database: "testing-db",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: process.env.DIALECT,
  },
};
