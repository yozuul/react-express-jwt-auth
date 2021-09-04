// import UserModel from './user-model'
// import TokenModel from './token-model'
// import RoleModel from './role-model'
//
// UserModel.hasOne(TokenModel, {
//     foreignKey: 'user_id',
//     // onDelete: 'CASCADE',
//     // through: 'TokenModel',
// })
// // UserModel.belongsTo(RoleModel, {
// //     foreignKey: 'role_id',
// //     onDelete: 'CASCADE',
// //     through: 'RoleModel',
// // })
//
// UserModel.sync()
//
//
// export { UserModel, TokenModel, RoleModel }
//
// const initRole = async () => {
//     const d = await RoleModel.findAll()
//     console.log(d)
// }

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