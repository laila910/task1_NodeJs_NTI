const mongoose = require('mongoose')
try {
    mongoose.connect(process.env.dbUrl)
} catch (e) {
    console.log("db error => ", e)
}