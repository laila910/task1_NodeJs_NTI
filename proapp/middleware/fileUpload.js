const multer = require('multer')
const path = require('path')
fs = require('fs')
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        const location = path.join('images', req.user._id.toString())
        fs.mkdir(location, (err) => {})
        cb(null, location)

    },
    filename: function(req, file, cb) {
        const myFileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        cb(null, myFileName)
    }
})
const upload = multer({
    storage: storage,
    limits: ({ fileSize: 200 })
})
module.exports = upload