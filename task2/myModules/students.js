//call modules
const fs = require('fs')
const chalk = require('chalk')
const validator = require('validator')
    //read data from json file
readDataFromJsonFile = () => {
        let data
        try {
            data = JSON.parse(fs.readFileSync('./students.json').toString())
            if (!Array.isArray(data)) throw new Error('msh array')
        } catch (e) {
            data = []
        }
        return data
    }
    //write data to Json File
writeDataToJsonFile = (data) => {
    try {
        fs.writeFileSync('./students.json', JSON.stringify(data))
    } catch (e) {
        console.log(chalk.red('error writing data'))
    }
}


//add new task
var counter = 0;
addStudent = (name, className, [{ subName, grade }]) => {
    let students = readDataFromJsonFile()

    if (className != 'a' || className != 'b' || className != 'c') {
        return console.log(chalk.red('className is invalid'))
    }
    let student = {
        id: ++counter,
        name: name,
        className: className,
        subjects: [
            { subName: subName, grade: grade }

        ]
    }
    students.push(student)
    writeDataToJsonFile(students)
    console.log(chalk.green(`data inserted successfuly `))
}
module.exports = {
    addStudent
}