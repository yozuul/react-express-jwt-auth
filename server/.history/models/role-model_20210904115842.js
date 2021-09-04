import { postgres, DataTypes } from '../utils'

const { STRING } = DataTypes

export default postgres.define('roles', {
    name: {
        type: STRING,
        allowNull: false,
        // set() {
        //     this.setDataValue('name', ['admin', user]);
        // }
    }
}, {
    tableName: 'roles',
    timestamps: false
})