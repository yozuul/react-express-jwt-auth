import { postgres, DataTypes } from '../utils'

const { INTEGER, TEXT } = DataTypes

export default postgres.define('tokens', {
    user_id: {
        type: INTEGER,
        allowNull: false,
    },
    refresh_token: {
        type: TEXT,
        allowNull: false,
    }
}, {
    tableName: 'tokens',
    timestamps: false
})