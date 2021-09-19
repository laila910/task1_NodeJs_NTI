const router = require('express').Router()
const User = require('../models/user.model')

// - register
router.post('/register', async(req, res) => {
        try {
            const userData = new User(req.body)
            await userData.save()
            res.status(200).send({
                apiStatus: true,
                data: userData,
                message: "data added successfuly"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error in register"
            })
        }
    })
    //add addresses
router.post('/addAddr/:id', async(req, res) => {
        try {
            const user = await User.findById(req.params.id)
            const addr = req.body
            user.addresses.push(addr)
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "data added successfuly"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error in register"
            })
        }
    })
    // - login

router.post('/login', async(req, res) => {
        try {
            let user = await User.loginUser(req.body.email, req.body.password)
            res.status(200).send({ apiStatus: true, data: user, message: "logged in " })
        } catch (e) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "cann't login " })
        }
    })
    // - logout
    // - profile
    // - edit profile
    // - deactivate 
    // - activate


module.exports = router