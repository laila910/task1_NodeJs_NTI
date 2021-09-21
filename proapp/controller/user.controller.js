const User = require('../models/user.model')
const emailSetting = require('../helper/sendEmail.helper')


const register = async(req, res) => {
    try {
        const userData = new User(req.body)
        await userData.save()
        emailSetting(userData.email, "test email")
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
}
const addUser = async(req, res) => {
        try {

            const user = new User(req.body)

            await user.save()
            res.status(200).send({
                apiStatus: true,
                data: user,
                message: "user added successfuly"
            })
        } catch (e) {
            res.status(500).send({
                apiStatus: false,
                data: e.message,
                message: "error in added user "
            })
        }
    }
    //PROFILE
const me = async(req, res) => { res.send(req.user) }
    //EDIT PROFILE
const editProfile = async(req, res) => {

        avalUpdatates = ["name", "age", "email", "password", "position"]
        requested = Object.keys(req.body)
        isValid = requested.every(r => avalUpdatates.includes(r))
        if (!isValid) res.send('updates unavaliable')
        try {
            const updatedData = await User.findByIdAndUpdate(req.user._id, req.body, { runValidators: true })
            if (!updatedData) res.send('User not found')
            res.send('done,user updated')
        } catch (e) {
            res.send(e)
        }
    }
    //login
const login = async(req, res) => {
        try {
            let user = await User.loginUser(req.body.email, req.body.password)
            const token = await user.generateToken()
            res.status(200).send({ apiStatus: true, data: { user, token }, message: "logged in" })
        } catch (e) {
            res.status(500).send({ apiStatus: false, data: e.message, message: "cannot login" })
        }
    }
    //logout from one device
const logOut = async(req, res) => {
        try {
            req.user.tokens = req.user.tokens.filter(singleToken => {
                return singleToken.token != req.token
            })
            req.user.save()
            res.send({ apiStatus: true, data: "", message: "logged out from this device" })
        } catch (e) {
            res.status(500).send({ apiStatus: false, data: e.message, message: 'error' })
        }
    }
    //logout from all devices 
const logOutAll = async(req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send({ apiStatus: true, data: "", message: "logged out from all devices" })
    } catch (e) {
        res.status(500).send({ apiStatus: false, data: e.message, message: 'error' })
    }
}



module.exports = { register, addUser, login, logOut, logOutAll, me, editProfile }