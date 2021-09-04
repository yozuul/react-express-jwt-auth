import { DataTypes } from '../utils'

const { STRING, INTEGER, BOOLEAN } = DataTypes

export default {
    columns: {
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
    },
    settings: {
        tableName: 'users',
        timestamps: false
    }
}