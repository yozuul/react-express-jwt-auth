import { postgres, DataTypes } from '../utils'

const { STRING, INTEGER } = DataTypes

export default postgres.define('roles', {
    name: {
        type: STRING,
        allowNull: false
    }
}, {
    tableName: 'roles',
    timestamps: false
})