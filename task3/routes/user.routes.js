const router = require("express").Router()
const userController = require('../controller/user.controller')

router.get('/addpost', userController.addpost)
router.post('/addpost', userController.savepost)

router.get('', userController.showall)

router.get('/showsinglepost/:id', userController.getSingle)

router.get('/editpost/:id', userController.editpost)
router.post('/editpost/:id', userController.updatepost)

router.get('/del/:id', userController.deletepost)

router.get('*', userController.err404)
module.exports = router