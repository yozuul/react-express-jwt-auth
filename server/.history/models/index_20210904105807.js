import { postgres } from '../utils'
import UserSchema from './user-schema'
import TokenSchema from './token-schema'
import RoleSchema from './role-schema'

// Определение моделей
// const UserModel = postgres.define(
//     UserSchema.settings.tableName, UserSchema.columns
// )
// const TokenModel = postgres.define(
//     TokenSchema.settings.tableName, TokenSchema.columns
// )
// const RoleSchema = postgres.define(
//     RoleSchema.settings.tableName, RoleSchema.columns
// )

const UserProject = sequelize.define('user_project', {
    role: Sequelize.STRING
  });
  User.belongsToMany(Project, { through: UserProject });
  Project.belongsToMany(User, { through: UserProject });
  // through is required!

  user.addProject(project, { through: { role: 'manager' }});

// UserModel.hasOne(TokenModel, {
//     foreignKey: 'user_id'
// })


export { UserProject }

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