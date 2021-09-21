const router = require('express').Router()
const auth = require('../middleware/auth')
const taskController = require('../controller/task.controller')
const upload = require('../middleware/fileUpload')



router.post('/addTask', auth, taskController.addTask)
router.post('/assignTask/:id', auth, taskController.assignTask)
router.post('/response/:id', auth, upload.single('file'), taskController.response)




module.exports = router