import { postgres } from '../utils'
import UserModel from './user-model'
import TokenModel from './token-model'
import RoleModel from './role-model'
import { darkGray, red } from 'ansicolor'

UserModel.hasOne(TokenModel, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
    through: 'TokenModel',
})
RoleModel.belongsTo(UserModel, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
    through: 'RoleModel',
})

TokenModel.removeAttribute('id')

try {
    await postgres.sync()
    await (async () => {
        const role = await RoleModel.findAll()
        const rolesDefault = ['admin', 'user']
        rolesDefault.map((r) => {
            RoleModel.create({ name: r })
        })
        // if(role.length === 0) RoleModel.create([
        //     'admin', 'user'
        // ])
    })()
} catch (err) {
    console.log(err)
    console.log(('Ошибка синхронизации таблиц').red)
}


export { UserModel, TokenModel, RoleModel }




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