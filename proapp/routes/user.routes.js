const router = require('express').Router()
const auth = require('../middleware/auth')
const userController = require('../controller/user.controller')
    // const upload = require('../middleware/fileUpload')
router.post('/addUser', userController.addUser)
router.post('/me', auth, userController.me)
router.patch('/me', auth, userController.editProfile)
router.post('/register', userController.register)

router.post('/login', userController.login)
router.post('/logout', auth, userController.logOut)
router.post('/logoutAll', auth, userController.logOutAll)

// router.post('/addPImg', auth, upload.single('img'), userController.addPImg)

module.exports = router
    // - edit profile
    // - deactivate 
    // - activate