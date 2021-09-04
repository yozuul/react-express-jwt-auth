import { Sequelize } from 'sequelize'
import DataTypes from 'sequelize'
import { darkGray, red } from 'ansicolor'
// Конфигурация подключения
import { pg_config } from '../configs'
// Модели
import { UserModel } from './user-model'

// Postgres
const postgres = new Sequelize(
    pg_config.database,
    pg_config.user,
    pg_config.password, {
    host: pg_config.host,
    port: pg_config.port,
    dialect: 'postgres',
    logging: false
  }
)




try {
    await postgres.authenticate();
    console.log(('\nПодключение к Postgres установлено').darkGray);
} catch (err) {
    console.log(err)
    console.error(('Ошибка подключения Postgres').red);
}

const Op = Sequelize.Op
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