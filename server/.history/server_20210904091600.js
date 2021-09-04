import {} from 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import { darkGray, red } from 'ansicolor'

const app = express()
const PORT = process.env.PORT
const corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions))

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