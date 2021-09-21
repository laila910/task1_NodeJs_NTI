const router = require('express').Router()
const auth = require('../middleware/auth')
const userController = require('../controller/user.controller')

router.post('/addUser', userController.addUser)
router.get('/me', auth, userController.me)
router.patch('/me', auth, userController.editProfile)
router.post('/register', userController.register)

router.post('/login', userController.login)
router.post('/logout', auth, userController.logOut)
router.post('/logoutAll', auth, userController.logOutAll)



module.exports = router