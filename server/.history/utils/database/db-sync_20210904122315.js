import { postgres } from './db-connect'
import { darkGray, red } from 'ansicolor'

export default async (UserModel, RoleModel) => {
    try {
        await postgres.sync()
        await (async () => {
            const defaultRoles = ['admin', 'user']
            const defaultUser = {
                name: 'test', email: 'test@test.ru', password: 'test'
            }
            const existRole = await RoleModel.findAll()
            if(existRole.length === 0) {
                defaultRoles.map((role) => RoleModel.create({ name: role }))
            }
            const existUser = await UserModel.findOne({ name: 'test'})
            if(!existUser) {
                UserModel.create(defaultUser)
            }
        })()

    } catch (err) {
        console.log(err)
        console.log(('Ошибка синхронизации таблиц').red)
    }
}