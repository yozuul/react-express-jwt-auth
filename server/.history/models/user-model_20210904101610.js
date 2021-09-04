import { DataTypes } from './index'
const { STRING, INTEGER, BOOLEAN } = DataTypes

const UserModel = {
    Schema: {
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
            unique: true
        },
        password: {
            type: STRING,
            allowNull: false,
        },
        roleId: {
            type: INTEGER,
            allowNull: false
        },
        activationLink: {
            type: STRING,
            allowNull: false,
        },
        emailActivated: {
            type: BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    }
}

export { UserModel }