const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({
    userAdded: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: function() { return userType == "manager" }
        required: true
    },
    assigned: [{
        type: String,
        required: true,
        enum: ['txt', 'img', 'vid'],
        trim: true
    }],
    taskTitle: {
        type: String,
        required: true
    },
    taskContent: {
        type: String,
        required: true
    },
    response: [

        {
            text: {
                type: Number,
                trim: true
            },
            userId: {
                type: Number,
                trim: true
            }
        }
    ]
}, { timeStamps: true })

const Task = mongoose.model('Task', taskSchema)
module.exports = Task