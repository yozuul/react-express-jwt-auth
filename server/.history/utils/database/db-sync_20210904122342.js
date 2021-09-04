import { postgres } from './db-connect'
import { darkGray, red } from 'ansicolor'

export default async (UserModel, RoleModel) => {
    try {
        await postgres.sync()
        await (async () => {
            const defaultRoles = ['admin', 'user']
            const defaultUser = {
                name: 'admin', email: 'admin@admin.ru', password: 'admin', role: 1
            }
            const existRole = await RoleModel.findAll()
            if(existRole.length === 0) {
                defaultRoles.map((role) => RoleModel.create({ name: role }))
            }
            const existUser = await UserModel.findOne({ name: 'admin'})
            if(!existUser) {
                UserModel.create(defaultUser)
            }
        })()

    } catch (err) {
        console.log(err)
        console.log(('Ошибка синхронизации таблиц').red)
    }
}