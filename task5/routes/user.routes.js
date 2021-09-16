const router = require('express').Router()
const userController = require('../controller/user.controller')
const User = require('../models/user.model')

router.post('/addUser', (req, res) => {
    const myData = new User(req.body)
    myData.save()
        .then(() => res.send(myData))
        .CATCH(E => res.send(e))
})
router.get('/all', async(req, res) => {
    try {
        const data = await User.find()
        res.send(data)
    } catch (e) {
        res.send(e)
    }
})
router.get('all/:id', async(req, res) => {
    try {
        const data = await User.findById(req.params.id)
        if (!data) res.send('user not found')
        res.send(data)
    } catch (e) {
        res.send(e)
    }
})
module.exports = router