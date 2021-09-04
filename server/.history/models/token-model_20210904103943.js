import { DataTypes } from '../utils'

const { INTEGER, TEXT } = DataTypes

export default {
    columns: {
        user_id: {
            type: INTEGER,
            allowNull: false,
        },
        refresh_token: {
            type: TEXT,
            allowNull: false,
        }
    },
    settings: {
        tableName: 'tokens',
        timestamps: false
    }
}