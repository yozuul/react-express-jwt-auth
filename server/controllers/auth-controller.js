import { authService } from '../services'

class Auth {
    async register(req, res, next) {
        try {
            // Если всё ок, регаем и сохраняем рефреш токен в куки
            const { name, login, email, password } = req.body
            const userData = await authService.register(name, login, email, password)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true
            })
            // console.log(userData)
            return res.json(userData)
        } catch (err) {
            next(err)
        }
    }

    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            const response = await authService.activate(activationLink)
            res.redirect(process.env.CLIENT_URL)
            return response
        } catch (err) {
            next(err)
        }
    }

    async login(req, res, next) {
        try {
            const { login, password, method } = req.body
            const userData = await authService.login(login, password, method)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true
            })
            return res.json(userData)
        } catch (err) {
            next(err)
        }
    }

    async logout(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const token = await authService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (err) {
            next(err)
        }
    }

    async refresh(req, res, next) {
        try {
            const { refreshToken } = req.cookies
            const userData = await authService.refresh(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true
            })
            return res.json(userData)
        } catch (err) {
            next(err)
        }
    }
}

export const authController = new Auth()