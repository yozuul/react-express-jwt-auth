import { pgConfig } from '../configs'
import Sequelize from 'sequelize'


const postgresDB = [ pgConfig.USER, pgConfig.PASS, pgConfig.DB ]

const postgres = new Sequelize(...postgresDB, {
    host: pgConfig.PG_HOST,
    dialect: 'postgres'
  }
)

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