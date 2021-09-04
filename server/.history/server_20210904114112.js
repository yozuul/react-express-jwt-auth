import {} from 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import { UserModel } from './models'
import { darkGray, red } from 'ansicolor'

const app = express()

const env = process.env
const PORT = env.API_PORT
const CLIENT_URL = env.CLIENT_URL

app.use(cors({
    origin: CLIENT_URL
}))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// simple route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to bezkoder application.' })
})

app.listen(PORT, () => {
    console.log((`Сервер запущен на порту ${PORT}`).darkGray)
})