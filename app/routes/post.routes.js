const Post = require('../models/post.model')

const addPost = async(req, res) => {
    try {
        const post = new Post({
            ...req.body,
            userId: req.user._id
        })
        await post.save()
        res.status(200).send({ apiStatus: true, data: post, message: "data added" })
    } catch (e) {
        res.status(500).send({ apiStatus: false, data: e.message, message: "error adding post data" })
    }
}
const myPosts = async(req, res) => {
    try {
        await req.user.populate({
            path: "myPosts"
        }).execPopulate()
        res.status(200).send({ apiStatus: true, data: req.user.myPosts, message: "data added" })
    } catch (e) {
        res.status(500).send({ apiStatus: false, data: e.message, message: "error adding post data" })
    }
}

const singlePost = async(req, res) => {
    try {
        const singlepost = await Post.findById(req.params.id)
        if (!singlepost) res.send('post not found')
        await req.user.populate(
            "myPosts"
        )
        res.status(200).send({ apiStatus: true, data: req.user.myPosts, message: "data added" })
    } catch (e) {
        res.status(500).send({ apiStatus: false, data: e.message, message: "error adding post data" })
    }




}
const addComment = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        const comments = {
            ...req.body,
            userId: req.user._id
        }
        post.comments.push(comments)
        await post.save()
        res.status(200).send({
            apiStatus: "true",
            data: post,
            message: "comment added "
        })
    } catch (e) {
        res.send(500).send({
            apiStatus: "false",
            data: e.message,
            message: "can not add comment,Error :("
        })

    }
}
const addlike = async(req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        post.likes.push(req.user._id)
        await post.save()
        res.status(200).send({
            apiStatus: "true",
            data: post,
            message: "like added "
        })
    } catch (e) {
        res.send(500).send({
            apiStatus: "false",
            data: e.message,
            message: "can not add like ,Error :("
        })

    }
}

module.exports = { addPost, myPosts, singlePost, addComment, addlike }