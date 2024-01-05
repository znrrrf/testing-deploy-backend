"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
// console.log({ config });

const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  const sequelizeConfig = config.uri
    ? {
        uri: config.uri,
        dialectModule: require("mysql2"),
        benchmark: true,
      }
    : {
        database: config.database,
        username: config.username,
        password: config.password,
        host: config.host,
        dialect: config.dialect,
        dialectModule: require("mysql2"),
        benchmark: true,
      };

  sequelize = new Sequelize(sequelizeConfig);
}

// const sequelize = new Sequelize({
//   host: "bg0gktkdgouzpen9spo9-mysql.services.clever-cloud.com",
//   username: "usepslyiyuw2ni5p",
//   password: "sw4tvwGwf4JJ7ymgR6so",
//   database: "bg0gktkdgouzpen9spo9",
//   dialect: "mysql",
//   dialectModule: require("mysql2"),
//   benchmark: true,
// });

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
