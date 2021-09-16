// const fs = require('fs')
// const { render } = require('../src/app')
// const readJsonFile = () => {
//     let allcustomers
//     try {
//         allcustomers = JSON.parse(fs.readFileSync('models/customers.json').toString())
//         if (!Array.isArray(allcustomers)) throw new Error()
//     } catch (e) {
//         allcustomers = []
//     }
//     return allcustomers
// }
// const saveJsonFile = (allcustomers) => {
//     fs.writeFileSync('models/customers.json', JSON.stringify(allcustomers))
// }
const ObjectId = require('mongodb').ObjectId
const dbCon = require('../models/dbConnection')


const addcustomer = (req, res) => {
    // if(req.query.name){
    //     let user = req.query
    //     // console.log(allUsers)
    //     allUsers.push(user)
    //     saveJsonFile(allUsers)
    // }
    res.render('addcustomer', {
        pageTitle: "add customer"
    })
}
const savecustomer = (req, res) => {
    // // res.send(req.body)
    // let allcustomers = readJsonFile()
    // let customer = {
    //     status: false,
    //     accNum: Date.now(),
    //     ...req.body
    // }
    // allcustomers.push(customer)
    // saveJsonFile(allcustomers)
    // res.redirect('/')
    let customer = {
        status: false,
        ...req.body
    }
    dbCon((err, db) => {
        if (err) res.send(err)
        db.collection('customer').insertOne(customer, (error, result) => {
            if (error) res.send(error)
            res.redirect('/')
        })
    })
}
const showall = (req, res) => {
        // let allcustomers = readJsonFile()
        //     // let customerIndex = searchcustomer(allcustomers, req.params.accNum)
        // res.render('showall', {
        //     pageTitle: "all customers",
        //     data: allcustomers,
        //     isEmpty: allcustomers.length == 0 ? true : false,
        //     // isactivate: allcustomers[customerIndex].status == false ? true : false

        // })
        dbCon((error, db) => {
            if (error) res.send(error)
            db.collection('customer').find().toArray((err, allcustomers) => {
                if (err) res.send(err)
                res.render('showall', {
                    pageTitle: "all customers",
                    data: allcustomers,
                    isEmpty: allcustomers.length == 0 ? true : false
                })

            })
        })
    }
    // searchcustomer = (allcustomers, accNum) => {
    //     let index = allcustomers.findIndex(ele => {
    //         return ele.accNum == accNum
    //     })
    //     return index
    // }
const addbalance = (req, res) => {
    let allcustomers = readJsonFile()
    let customerIndex = searchcustomer(allcustomers, req.params.accNum)


    res.render('addbalance', {
        pageTitle: "addbalance ",
        customer: allcustomers[customerIndex]
    })

}
const savedbalance = (req, res) => {
    // res.send(req.body)
    let allcustomers = readJsonFile()
    let customerIndex = searchcustomer(allcustomers, req.params.accNum)

    allcustomers[customerIndex].balance = parseInt(allcustomers[customerIndex].balance) + parseInt(req.body.amount)
    saveJsonFile(allcustomers)
    res.redirect('/')
}
const withdraw = (req, res) => {
    let allcustomers = readJsonFile()
    let customerIndex = searchcustomer(allcustomers, req.params.accNum)


    res.render('withdraw', {
        pageTitle: "withdrawbalance",
        customer: allcustomers[customerIndex]
    })

}
const savedwithdraw = (req, res) => {
    // res.send(req.body)
    let allcustomers = readJsonFile()
    let customerIndex = searchcustomer(allcustomers, req.params.accNum)

    allcustomers[customerIndex].balance = allcustomers[customerIndex].balance - req.body.amount


    saveJsonFile(allcustomers)
    res.redirect('/')
}
searchcustomerdata = (req, res) => {

    res.render('search', {
        pageTitle: "search customer",

    })
}
returnsearchcustomerdata = (req, res) => {

    let allcustomers = readJsonFile()
    if (req.body.search) {
        customerIndex = allcustomers.findIndex(customer => {
            return customer.accNum == req.body.search
        })
        res.render('showcustomer', {

            customer: allcustomers[customerIndex]
        })
    }


}
const getSingle = (req, res) => {
    // let allcustomers = readJsonFile()
    // let customerIndex = searchcustomer(allcustomers, req.params.accNum)
    // if (customerIndex == -1) res.render('err404', {
    //     pageTitle: "customer Not Found",
    //     err: `No customer With id ${req.params.accNum}`
    // })
    // else {
    //     res.render('showcustomer', {
    //         pageTitle: "Single customer",
    //         customer: allcustomers[customerIndex]
    //     })
    // }
    dbCon((err, db) => {
        if (err) res.send(err)
        db.collection('customer').findOne({ _id: new ObjectId(req.params.id) }, (e, data) => {
            if (e) res.send(e)
            if (!data) res.render('err404', {
                pageTitle: "User Not Found",
                err: `No user With id ${req.params.id}`
            })
            res.render('showcustomer', {
                pageTitle: "Single User",
                customer: data
            })

        })
    })
}
const editcustomer = (req, res) => {
    // let allcustomers = readJsonFile()
    // let customerIndex = searchcustomer(allcustomers, req.params.accNum)
    // if (customerIndex == -1) res.render('err404', {
    //     pageTitle: "customer Not Found",
    //     err: `No customer With id ${req.params.accNum}`
    // })
    // else {
    //     res.render('updatecustomer', {
    //         pageTitle: "update post",
    //         customer: allcustomers[customerIndex]
    //     })
    // }
    dbCon((err, db) => {
        if (err) res.send(err)
        db.collection('customer').findOne({ _id: new ObjectId(req.params.id) }, (e, data) => {
            if (e) res.send(e)
            if (!data) res.render('err404', {
                pageTitle: "User Not Found",
                err: `No user With id ${req.params.id}`
            })
            res.render('updatecustomer', {
                pageTitle: "Single User",
                customer: data
            })

        })
    })
}
const updatecustomer = (req, res) => {
    // let allcustomers = readJsonFile()
    // let customerIndex = searchcustomer(allcustomers, req.params.accNum)
    // allcustomers[customerIndex].name = req.body.name
    // allcustomers[customerIndex].balance = req.body.balance
    // allcustomers[customerIndex].status = req.body.status

    // saveJsonFile(allcustomers)
    // res.redirect('/')
    dbCon((error, db) => {
        if (error) res.send(error)
        db.collection('customer').updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body })
            .then(() => res.redirect('/'))
            .catch((e) => res.send(e))
    })
    res.redirect('/')
}
const activatestatus = (req, res) => {
    let allcustomers = readJsonFile()
    let customerIndex = searchcustomer(allcustomers, req.params.accNum)
    allcustomers[customerIndex].status = true
    saveJsonFile(allcustomers)
    res.redirect('/')

}
const deletecustomer = (req, res) => {
    // let allcustomers = readJsonFile()
    // let customerIndex = searchcustomer(allcustomers, req.params.accNum)

    // if (customerIndex == -1) res.render('err404', {
    //     pageTitle: "customer Not Found",
    //     err: `No customer With id ${req.params.accNum}`
    // })
    // else {
    //     allcustomers.splice(customerIndex, 1)
    //     saveJsonFile(allcustomers)
    //     res.redirect('/')
    // }
    dbCon((error, db) => {
        if (error) res.send(error)
        db.collection('customer').deleteOne({ _id: new ObjectId(req.params.id) })
            .then(() => res.redirect('/'))
            .catch(e => res.send(e))
    })
}
const err404 = (req, res) => {
    res.render('err404', {
        pageTitle: "Error Page",
        err: "not found"
    })
}
module.exports = {
    addcustomer,
    showall,
    savecustomer,
    err404,
    // searchcustomer,
    editcustomer,
    updatecustomer,
    deletecustomer,
    getSingle
    // activatestatus,
    // searchcustomerdata,
    // addbalance,
    // withdraw,
    // savedwithdraw,
    // savedbalance,
    // returnsearchcustomerdata

}