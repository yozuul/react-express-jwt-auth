import { postgres } from './db-connect'
import { HashPassword } from './crypt-password'
import { darkGray, red } from 'ansicolor'

const pgSync = async (models) => {
    try {
        const { RoleModel, UserModel } = models
        await postgres.sync()
        await (async () => {
            const defaultRoles = ['admin', 'user']
            const hashPass = HashPassword.encrypt('admin')
            const defaultUser = {
                name: 'admin', login: 'admin', email: 'admin@admin.ru', password: hashPass, role_id: 1, email_activated: true
            }

            const existRole = await RoleModel.findAll()
            if(existRole.length === 0) {
                for(let role of ['admin', 'user']) {
                    await RoleModel.create({ name: role })
                }
            }

            const existUser = await UserModel.findOne({
                where: { login: 'admin'}
            })
            if(!existUser) {
                UserModel.create(defaultUser)
            }
        })()

    } catch (err) {
        console.log(err)
        console.log(('Ошибка синхронизации таблиц').red)
    }
}

export default pgSync