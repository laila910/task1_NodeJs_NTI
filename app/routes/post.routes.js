const router = require('express').Router()
const Post = require('../models/post.model')

// router.post('/register', async(req, res) => {
//         try {
//             const userData = new User(req.body)
//             await userData.save()
//             res.status(200).send({
//                 apiStatus: true,
//                 data: userData,
//                 message: "data added successfuly"
//             })
//         } catch (e) {
//             res.status(500).send({
//                 apiStatus: false,
//                 data: e.message,
//                 message: "error in register"
//             })
//         }
//     })
//     //add addresses
// router.post('/addAddr/:id', async(req, res) => {
//         try {
//             const user = await User.findById(req.params.id)
//             const addr = req.body
//             user.addresses.push(addr)
//             res.status(200).send({
//                 apiStatus: true,
//                 data: user,
//                 message: "data added successfuly"
//             })
//         } catch (e) {
//             res.status(500).send({
//                 apiStatus: false,
//                 data: e.message,
//                 message: "error in register"
//             })
//         }
//     })


module.exports = router