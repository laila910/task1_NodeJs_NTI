const router = require('express').Router()
const bookController = require('../controller/book.controller')


const book = require('../models/book.model')

router.post('/addBook', (req, res) => {
    const myData = new book(req.body)
    myData.save()
        .then(() => res.send(myData))
        .catch(e => res.send(e))
})


router.get('/allBook', async(req, res) => {
    try {
        const allbook = await book.find()
        if (!allbook) res.send('books Not Found')
        res.send(allbook)
    } catch (e) {
        res.send(e)
    }
})
router.get('/allBook/:id', async(req, res) => {
    try {
        const singleBook = await book.findById(req.params.id)
        if (!singleBook) res.send('Book not found')
        res.send(singleBook)
    } catch (e) {
        res.send(e)
    }
})

router.delete('/allBook/:id', async(req, res) => {
    try {
        const deletedBook = await book.findByIdAndDelete(req.params.id)
        if (!deletedBook) res.send('Book not found')
        res.send('Done,Book deleted')
    } catch (e) {
        res.send(e)
    }
})
router.patch('/allBook/:id', async(req, res) => {
    avalUpdatates = ["name", "cat", "author"]
    requested = Object.keys(req.body)
    isValid = requested.every(r => avalUpdatates.includes(r))
    if (!isValid) res.send('updates unavaliable')
    try {
        const updatedData = await book.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
        if (!updatedData) res.send('Book not found')
        res.send('done,book updated')
    } catch (e) {
        res.send(e)
    }
})
module.exports = router