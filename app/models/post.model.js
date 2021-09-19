const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const postSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true
    },
    file: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true,
        enum: ["image", "video", "txt"]
    },
    // user:[]
    comments: [{
        user: {
            type: String,
            trim: true
        },
        details: {
            type: String,
            trim: true
        }
    }],
    likes: [{
        user: {
            type: String,
            trim: true
        }
    }]



    // addresses: [{
    //     addrType: {
    //         type: String,
    //         trim: true
    //     },
    //     addrDetails: {
    //         type: String,
    //         trim: true
    //     }
    // }],

}, { timestamps: true })

// userSchema.pre('save', async function() {
//     const user = this
//     if (user.isModified('password')) {
//         user.password = await bcrypt.hash(user.password, 12)
//     }
// })

const Post = mongoose.model('Post', postSchema)

module.exports = Post