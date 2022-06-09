require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { usersRoutes } = require('./routes')
const { BASE_URL, PORT } = process.env

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))
app.use('/users', usersRoutes)


app.listen(PORT, () => {
    console.log(`Server is running on ${BASE_URL}:${PORT}`)
})
