require('dotenv').config()
require('../db/connection')
const bookRoutes = require('../routes/book.routes')
const express = require("express")
const app = express()




app.use(express.json())
app.use(bookRoutes)

module.exports = app