import { postgres, DataTypes } from '../utils'

const { INTEGER, TEXT } = DataTypes

export default TokenModel = postgres.define({
    refresh_token: {
        type: TEXT,
        allowNull: false,
    }
}, {
    tableName: 'tokens',
    timestamps: false
})


