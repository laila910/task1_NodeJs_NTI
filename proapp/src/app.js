const express = require('express')
const app = express()
    //const app = require('express')()

require('dotenv').config()
require('../models/db/connection')
const userRoutes = require('../routes/user.routes')
const postRoutes = require('../routes/post.routes')

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/user', userRoutes)
app.use('/post', postRoutes)

module.exports = app

// "bcrypt": "^5.0.1",
// "bcryptjs": "^2.4.3",
// "cors": "^2.8.5",
// "dotenv": "^10.0.0",
// "express": "^4.17.1",
// "jsonwebtoken": "^8.5.1",
// "mongoose": "^6.0.6",
// "multer": "^1.4.3",
// "nodemailer": "^6.6.3",
// "validator": "^13.6.0"