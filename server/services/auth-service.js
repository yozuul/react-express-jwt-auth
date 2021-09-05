import { v4 as uuidv4 } from 'uuid';

import { UserModel } from '../models'
import { tokenService, mailService } from './index'
import { AuthError } from '../exeptions'
import { HashPassword } from '../utils/database'

class Auth {
    // РЕГСИТРАЦИЯ
    async register(name, login, email, password) {
        // Ищем указанные данные в БД:
        // Ищем по email
        const isEmailExist = await UserModel.findOne({
            where: { email: email }
        })
        // Если находим, бросаем ошибку
        if (isEmailExist) {
            throw AuthError.BadRequest(`Пользователь с таким email уже зарегистрирован`)
        }
        // Если указан логин:
        if(login) {
            // Ищем по логину
            const isLoginExist = await UserModel.findOne({
                where: { login: login }
            })
            // Если находим, бросаем ошибку
            if (isLoginExist) {
                throw AuthError.BadRequest(`Пользователь с таким логином уже зарегистрирован`)
            }
        }
        // Если ничего не нашли:
        // Создаём запись в БД
        const activationLink = uuidv4()
        const newUser = await UserModel.create({
            name: name || null,
            login: login || null,
            email,
            password: HashPassword.encrypt(password),
            role_id: 2,
            activation_link: activationLink
        })
        const userData = newUser.toJSON()
        // Генерируем токены
        const authTokens = tokenService.generateAuthTokens(userData)
        await tokenService.saveAuthToken(userData.id, authTokens.refreshToken)
        // Отправляем ссылку на активацию
        mailService.sendActivationMail(
            email, `${process.env.CLIENT_URL}/account/activate/${activationLink}`
        )
        return {...authTokens, user: userData }
    }
    // АКТИВАЦИЯ АККАУНТА
    async activate(activationLink) {
        const user = await UserModel.findOne({
            where: { activation_link: activationLink }
        })
        if (!user) {
            throw AuthError.BadRequest('Неккоректная ссылка активации')
        }
        user.email_activated = true
        user.activation_link = false
        user.save()
        return { message: 'Аккаунт активирован' }
    }
    // АВТОРИЗАЦИЯ
    async login(login, password, method) {
        // console.log(password)
        // Ищем пользователя по методу логина (email / login)
        const user = await UserModel.findOne({
            where: { [method]: login }
        })
        if(!user) {
            // Если не находим - бросаем ошибку
            const errMsg = { email: 'email', login: 'логином' }
            throw AuthError.BadRequest(`Пользователь с таким ${errMsg[method]} не зарегистрирован`)
        }
        const userData = user.toJSON()
        // Если находим:
        // Проверяем пароль
        const isPassEquals = HashPassword.compare(password, userData.password);
        if (!isPassEquals) {
            throw AuthError.BadRequest('Неверный пароль');
        }
        // Генерируем токены
        const authTokens = tokenService.generateAuthTokens(userData);
        await tokenService.saveAuthToken(userData.id, authTokens.refreshToken);

        return {...authTokens, user: userData}
    }
    // ВЫХОД
    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }
    // ОБНОВЛЕНИЕ ТОКЕНА
    async refresh(refreshToken) {
        if (!refreshToken || refreshToken === 'undefined') {
            throw AuthError.UnauthorizedUser()
        }

        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userToken || !tokenFromDb) {
            throw AuthError.UnauthorizedUser()
        }

        const user = await UserModel.findOne({
            where: { id: userData.id }
        })
        const foundedUser = user.toJSON()
        const tokens = tokenService.generateAuthTokens(foundedUser)

        await tokenService.saveAuthToken(foundedUser.id, tokens.refreshToken)
        return {...tokens, user: foundedUser}
    }
}

export const authService = new Auth()