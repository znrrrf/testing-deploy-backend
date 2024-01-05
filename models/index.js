"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];

const db = {};

let sequelize;

if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else if (config.uri) {
  sequelize = new Sequelize(config.uri, {
    dialectModule: require("mysql2"),
    benchmark: true,
  });
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, {
    ...config,
    dialectModule: require("mysql2"),
    benchmark: true,
  });
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
console.log("Loaded models:", Object.keys(db));
console.log("Sequelize instance:", sequelize);
module.exports = db;
