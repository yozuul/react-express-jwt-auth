import { postgres, DataTypes } from '../utils'

const { STRING, INTEGER, BOOLEAN } = DataTypes

export default UserModel = postgres.define({
    name: {
        type: STRING,
        allowNull: false
    },
    login: {
        type: STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
        isInt: {
            msg: 'Неверный формат Email'
        }
    },
    password: {
        type: STRING,
        allowNull: false,
        min: 3, max: 32
    },
    role_id: {
        type: INTEGER,
        allowNull: false
    },
    activation_link: {
        type: STRING,
        allowNull: false,
    },
    email_activated: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
}, {
    tableName: 'users',
    timestamps: false
})