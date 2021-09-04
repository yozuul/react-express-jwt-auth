import pgSync from '../utils'

import UserModel from './user-model'
import TokenModel from './token-model'
import RoleModel from './role-model'

UserModel.hasOne(TokenModel, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})
UserModel.belongsTo(RoleModel, {
    foreignKey: 'role_id',
    onDelete: 'CASCADE'
})

TokenModel.removeAttribute('id')

pgSync({
    RoleModel: RoleModel,
    UserModel: UserModel
})

export { UserModel, TokenModel, RoleModel }