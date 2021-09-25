var message = "Hello World";
console.log(message);
// alert(message)
//tsc.cmd start // create start.js
//tsc --init //create tsconfig.json 
//tsc -w // start watch mode to see any error 
//Ctrl+Shift+B // This will open the Execute Run Build Task window
//tsc: watch 
//This will make the TypeScript compiler to watch for changes made to the TypeScript file and run the compiler on each change
// let num1      //no type is defined.
// let num2
// num1 = 100;
// num2 = "hello"
// console.log(num1 + num2)
var num1; //defining type
var num2;
num1 = 100;
num2 = 2;
console.log(num1 + num2);
var notSure = 4; //defined as any
notSure = "maybe a string instead";
notSure = false;
var stillNotSure; //No Type specifued. infered as any
stillNotSure = 5;
stillNotSure = "may be a strng instead";
stillNotSure = false;
var sentence = "Hello, welcome to the world of typescript, \n    the typed super of javascript";
console.log(sentence);
var isDone = false;
var decimal = 10;
var hex = 0xa00d; //hexadecimal number starts with 0x
var binary = 10; //binary number starts with 0b 
var octal = 411; //octal number starts with 0c
// let big1: bigint = BigInt(100); // the BigInt function
// let big2: bigint = 100n;        // a BigInt literal.  end with n
var u = undefined;
var n = null;
// function doSomething(): never {
//     throw new Error("Error has occurred");
// }
// doSomething()
function sayHello() {
    console.log('Hello!');
}
sayHello();
// Everything that isn’t a primitive type in TypeScript is a subclass of the object type.
// Examples are class, Interface, function, constructor, array, tuple, etc.
var NumberVar = 100; //number
var BooleanVar = true; //boolean
var ArrayVar; //arrays
var cities = ['Delhi', 'New York', 'London'];
console.log(cities);
//OR
var city = ['Delhi', 'New York', 'London'];
console.log(city);
function add(x, y) {
    return x + y;
}
console.log(add(8, 9));
//Anonymous Objects
var student;
student = { id: 100, name: "Rahul" };
//Union types
var id;
// id = 6
id = "laila";
console.log(id);
