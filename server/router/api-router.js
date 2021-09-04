import { Router } from 'express'
import { apiController } from '../controllers'
import { authMiddleware } from '../middlewares'

const apiRouter = new Router()

apiRouter.get('/users', authMiddleware, apiController.getUsers)

export { apiRouter }