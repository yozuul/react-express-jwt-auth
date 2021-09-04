import { Router } from 'express'
import { authController } from '../controllers'

const authRouter = new Router()

authRouter.post('/register', authController.register)
authRouter.get('/activate/:link', authController.activate)
authRouter.get('/refresh', authController.refresh)
authRouter.post('/login', authController.login)
authRouter.post('/logout', authController.logout)

export { authRouter }