// const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/myDb')

// const MyTable = new mongoose.model('MyTable', {
//     a: { type: String },
//     b: { type: Number },
//     c: { type: Boolean }
// })
// const data = new MyTable({ a: "Ahmed", b: 2, c: false })
// data.save()
//     .then(() => console.log(data))
//     .catch(e => console.log(e))
const app = require('./src/app')
app.listen(process.env.PORT, () => {
    console.log(`on localhost:${process.env.PORT}`)
})