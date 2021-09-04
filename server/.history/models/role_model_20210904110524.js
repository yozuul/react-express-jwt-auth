import { DataTypes } from '../utils'

const { STRING } = DataTypes

export default {
    columns: {
        name: {
            type: STRING,
            allowNull: false,
        }
    },
    settings: {
        tableName: 'roles',
        timestamps: false
    }
}