// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
//const ObjectID =mongodb.ObjectID
const { MongoClient, ObjectId } = require('mongodb')

const dbURL = "mongodb://127.0.0.1:27017"
const dbName = "g10DB"

MongoClient.connect(dbURL, {}, (err, client) => {
    if (err) return console.log('unable to connect to db')

    const db = client.db(dbName)

    //     db.collection('students').insertMany([{ name: "marwa", age: 36 }, { name: "laila", age: 45 }, { name: "ahmed", age: 57 }],
    //         (error, result) => {
    //             if (error) return console.log("error inserting data")
    //             console.log('inserted success')
    //             console.log(result.insertedCount)
    //         })



    // db.collection('students').find().toArray((err, res) => {
    //     console.log(res)
    // })

    // db.collection('students').findOne({ _id: new ObjectId("6141b39b2aed6c601cdf7186") },
    //     ((err, res) => { console.log(res) })
    // )


    db.collection('students').updateMany({ name: "marwa" }, { $set: { name: "mahmoud" } }

        )
        .then((res) => {
            console.log(res)
        })
        .catch(e => {
            e => console.log(e)
        })
})