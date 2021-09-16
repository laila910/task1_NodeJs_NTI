const mongoose = require('mongoose')
mongoose.connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedToplogy: true,
    useCreateIndex: true
})