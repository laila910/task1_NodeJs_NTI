const fs = require('fs')
const readJsonFile = () => {
    let allposts
    try {
        allposts = JSON.parse(fs.readFileSync('models/posts.json').toString())
        if (!Array.isArray(allposts)) throw new Error()
    } catch (e) {
        allposts = []
    }
    return allposts
}
const saveJsonFile = (allposts) => {
    fs.writeFileSync('models/posts.json', JSON.stringify(allposts))
}

const addpost = (req, res) => {
    // if(req.query.name){
    //     let user = req.query
    //     // console.log(allUsers)
    //     allUsers.push(user)
    //     saveJsonFile(allUsers)
    // }
    res.render('addpost', {
        pageTitle: "add post"
    })
}
const savepost = (req, res) => {
    // res.send(req.body)
    let allposts = readJsonFile()
    let post = {
        id: Date.now(),
        ...req.body
    }
    allposts.push(post)
    saveJsonFile(allposts)
    res.redirect('/showall')
}
const showall = (req, res) => {
    let allposts = readJsonFile()
    res.render('showall', {
        pageTitle: "all posts",
        data: allposts,
        isEmpty: allposts.length == 0 ? true : false
    })
}
searchpost = (allposts, id) => {
    let index = allposts.findIndex(ele => {
        return ele.id == id
    })
    return index
}
const getSingle = (req, res) => {
    let allposts = readJsonFile()
    let postIndex = searchpost(allposts, req.params.id)
    if (postIndex == -1) res.render('err404', {
        pageTitle: "post Not Found",
        err: `No post With id ${req.params.id}`
    })
    else {
        res.render('showsinglepost', {
            pageTitle: "Single post",
            post: allposts[postIndex]
        })
    }
}
const deletepost = (req, res) => {
    let allposts = readJsonFile()
    let postIndex = searchpost(allposts, req.params.id)
    if (postIndex == -1) res.render('err404', {
        pageTitle: "post Not Found",
        err: `No post With id ${req.params.id}`
    })
    else {
        allposts.splice(postIndex, 1)
        saveJsonFile(allposts)
        res.redirect('/showall')
    }
}

const editpost = (req, res) => {
    let allposts = readJsonFile()
    let postIndex = searchpost(allposts, req.params.id)
    if (postIndex == -1) res.render('err404', {
        pageTitle: "post Not Found",
        err: `No post With id ${req.params.id}`
    })
    else {
        res.render('editpost', {
            pageTitle: "Edit post",
            post: allposts[postIndex]
        })
    }
}
const updatepost = (req, res) => {
    let allposts = readJsonFile()
    let postIndex = searchpost(allposts, req.params.id)
    allposts[postIndex].title = req.body.title
    allposts[postIndex].description = req.body.description
    allposts[postIndex].category = req.body.category

    saveJsonFile(allposts)
    res.redirect('/showall')
}

const err404 = (req, res) => {
    res.render('err404', {
        pageTitle: "Error Page",
        err: "not found"
    })
}
module.exports = {
    addpost,
    showall,
    getSingle,
    editpost,
    savepost,
    err404,
    deletepost,
    updatepost
}