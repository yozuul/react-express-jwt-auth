import { postgres, DataTypes } from '../utils'

const { STRING } = DataTypes

export default TokenModel = postgres.define({
    name: {
        type: STRING,
        allowNull: false,
    }
}, {
    tableName: 'tokens',
    timestamps: false
})