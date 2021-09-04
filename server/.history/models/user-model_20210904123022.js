import { postgres, DataTypes } from '../utils'

const { STRING, INTEGER, BOOLEAN } = DataTypes

export default postgres.define('users', {
    name: {
        type: STRING,
        defaultValue: null
    },
    login: {
        type: STRING,
        allowNull: true,
        unique: true
    },
    email: {
        type: STRING,
        allowNull: false,
        unique: true,
        isEmail: true,
        isInt: { msg: 'Неверный формат Email' }
    },
    password: {
        type: STRING,
        allowNull: false,
        min: 3, max: 32,
        isInt: { msg: 'Пароль должен быть от 3 до 32 символов' }
    },
    role_id: {
        type: INTEGER,
        allowNull: false
    },
    activation_link: {
        type: STRING,
        allowNull: false,
        defaultValue: false
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