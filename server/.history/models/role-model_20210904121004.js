import { postgres, DataTypes } from '../utils'

const { STRING, INTEGER } = DataTypes

export default postgres.define('roles', {
    id: {
        type: INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: STRING,
        allowNull: false
    }
}, {
    tableName: 'roles',
    timestamps: false
})