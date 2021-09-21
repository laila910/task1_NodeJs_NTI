const Task = require('../models/task.model')


const addTask = async(req, res) => {
    try {
        if (req.user.position == "manager") {
            task = new Task({
                ...req.body,

                userId: req.user._id

            })
        }
        await task.save()
        res.status(200).send({ apiStatus: true, data: task, message: "data added" })
    } catch (e) {
        res.status(500).send({ apiStatus: false, data: e.message, message: "error adding post data" })
    }
}

const assignTask = async(req, res) => {
    try {
        if (req.user.position == "manager") {
            const task = await Task.findById(req.params.id)
            const assigned = req.body
            task.assigned.push(assigned)
            await task.save()


            res.status(200).send({
                apiStatus: "true",
                data: task,
                message: "comment added "
            })
        }
    } catch (e) {
        res.send(500).send({
            apiStatus: "false",
            data: e.message,
            message: "can not assign Task ,Error :("
        })

    }
}
const response = async(req, res) => {
        try {
            if (req.user.position == "emp") {
                const task = await Task.findById(req.params.id)
                const response = {
                    userId: req.user._id,
                    file: req.file.path
                }
                task.response.push(response)
                await task.save()


                res.status(200).send({
                    apiStatus: "true",
                    data: task,
                    message: "response added :)"
                })
            }
        } catch (e) {
            res.status(500).send({
                apiStatus: "false",
                data: e.message,
                message: "can not add response  ,Error :("
            })

        }
    }
    // const addPImg = async(req, res) => {
    //     res.status(200).send({ data: 'uploaded' })
    // }
module.exports = { addTask, assignTask, response }