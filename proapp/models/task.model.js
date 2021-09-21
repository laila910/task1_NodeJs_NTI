const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        // required: function() { return userType == "manager" }
        required: true
    },
    assigned: [{
        userId: {
            type: String,

            trim: true
        }
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
            file: {
                type: String,
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