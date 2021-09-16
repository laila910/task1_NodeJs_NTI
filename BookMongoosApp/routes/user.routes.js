const router = require('express').Router()
const userController = require('../controller/user.controller')
const User = require('../models/user.model')

router.post('/addBook', (req, res) => {
    const myData = new Book(req.body)
    myData.save()
        .then(() => res.send(myData))
        .catch(e => res.send(e))
})


router.get('/all', async(req, res) => {
    try {
        const data = await Book.find()
        res.send(data)
    } catch (e) {
        res.send(e)
    }
})
router.get('/all/:id', async(req, res) => {
    try {
        const data = await Book.findById(req.params.id)
        if (!data) res.send('Book not found')
        res.send(data)
    } catch (e) {
        res.send(e)
    }
})

router.delete('/all/:id', async(req, res) => {
    try {
        const data = await Book.findByIdAndDelete(req.params.id)
        if (!data) res.send('Book not found')
        res.send('deleted')
    } catch (e) {
        res.send(e)
    }
})
router.patch('/all/:id', async(req, res) => {
    avalUpdatates = ["name", "cat", "author"]
    requested = Object.keys(req.body)
    isValid = requested.every(r => avalUpdatates.includes(r))
    if (!isValid) res.send('updates unavaliable')
    try {
        const data = await Book.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
        if (!data) res.send('Book not found')
        res.send('done')
    } catch (e) {
        res.send(e)
    }
})
module.exports = router