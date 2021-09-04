import { postgres, DataTypes } from '../utils'

const { TEXT } = DataTypes

export default postgres.define('tokens', {
    refresh_token: {
        type: TEXT,
        allowNull: false,
    }
}, {
    tableName: 'tokens',
    timestamps: false
})

