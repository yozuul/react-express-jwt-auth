import { Sequelize } from 'sequelize'
import DataTypes from 'sequelize'
import { darkGray, red } from 'ansicolor'
// Конфигурация подключения
import { pgConfig } from '../configs'
// Модели
import { UserModel } from './user-model'

const Op = Sequelize.Op

// Postgres
const pgDatabse = [ pgConfig.DB, pgConfig.USER, pgConfig.PASS ]
console.log(...pgDatabse)
const postgres = new Sequelize(...pgDatabse, {
    host: pgConfig.PG_HOST,
    dialect: 'postgres'
  }
)


try {
    await postgres.authenticate();
    console.log(('Подключение к Postgress установлено').darkGray);
} catch (err) {
    console.log(err)
    console.error(('Ошибка подключения Postgress').red);
}

export { DataTypes, postgres, Op, UserModel }

// const db = {}
//
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;
//
// db.user = require("../models/user.model.js")(sequelize, Sequelize);
// db.role = require("../models/role.model.js")(sequelize, Sequelize);
//
// db.role.belongsToMany(db.user, {
//   through: "user_roles",
//   foreignKey: "roleId",
//   otherKey: "userId"
// });
// db.user.belongsToMany(db.role, {
//   through: "user_roles",
//   foreignKey: "userId",
//   otherKey: "roleId"
// });
//
// db.ROLES = ["user", "admin", "moderator"];
//
// module.exports = db;