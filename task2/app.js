const students = require('./myModules/students.js')
const yargs = require('yargs')

yargs.command({
    command: 'addstudent',
    describe: 'add new student',
    builder: {
        id: {
            type: Number,
            demandOption: true
        },
        name: {
            type: String,
            demandOption: true
        },
        className: {
            type: Number,
            demandOption: true
        },
        subjects: {
            type: Array

        }


    },
    handler: function(argv) {

        students.addStudent(argv.id, argv.name, argv.className);

    }
})
yargs.command({
    command: 'addsubject',
    describe: 'add new subject',
    builder: {
        id: {
            type: Number,
            demandOption: true
        },
        subName: {
            type: String,
            demandOption: true
        },
        subGrade: {
            type: Number,
            demandOption: true
        }
    },
    handler: function(argv) {

        students.addSubject(argv.id, argv.subName, argv.subGrade);

    }
})

yargs.command({
    command: 'getallstudents',
    describe: 'get all Students',

    handler: function(argv) {

        students.getAllStudents();

    }
})
yargs.command({
    command: 'getstudentbyId',
    describe: 'get student by Id',
    builder: {
        id: {
            type: Number,
            demandOption: true
        }
    },
    handler: function(argv) {

        students.getStudentbyId(argv.id);

    }
})
yargs.command({
    command: 'gettotaldegrees',
    describe: 'get totaldegrees for students',

    handler: function(argv) {

        students.getTotalDegreeforStudents();

    }
})

yargs.argv