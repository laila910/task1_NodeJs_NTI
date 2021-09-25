

let message: string = "Hello World"
console.log(message)
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



let num1: number     //defining type
let num2: number

num1 = 100
num2 = 2

console.log(num1 + num2)
let notSure: any = 4;    //defined as any
notSure = "maybe a string instead";
notSure = false;

let stillNotSure     //No Type specifued. infered as any
stillNotSure = 5
stillNotSure = "may be a strng instead"
stillNotSure = false;


let sentence: string = `Hello, welcome to the world of typescript, 
    the typed super of javascript`
console.log(sentence)

let isDone: boolean = false;

let decimal: number = 10;
let hex: number = 0xa00d;       //hexadecimal number starts with 0x
let binary: number = 0b1010;    //binary number starts with 0b 
let octal: number = 0o633;      //octal number starts with 0c


// let big1: bigint = BigInt(100); // the BigInt function
// let big2: bigint = 100n;        // a BigInt literal.  end with n


let u: undefined = undefined;
let n: null = null;

// function doSomething(): never {
//     throw new Error("Error has occurred");
// }
// doSomething()


function sayHello(): void {
    console.log('Hello!')
}
sayHello()
// Everything that isn’t a primitive type in TypeScript is a subclass of the object type.
// Examples are class, Interface, function, constructor, array, tuple, etc.



var NumberVar: number = 100;                //number
var BooleanVar: boolean = true;           //boolean
var ArrayVar: string[]                     //arrays


var cities: string[] = ['Delhi', 'New York', 'London'];
console.log(cities)
//OR

var city: Array<string> = ['Delhi', 'New York', 'London'];
console.log(city)


function add(x: number, y: number): number {
    return x + y;
}
console.log(add(8, 9))
//Anonymous Objects
var student: { id: number; name: string; };
student = { id: 100, name: "Rahul" }
//Union types

var id: string | number
// id = 6
id = "laila"
console.log(id)
//reserved words :_break	case	catch
// class	const	continue
// debugger	default delete
// do	else enum
// export	extends false
// finally	for	function
//     If	import	in
//         istanceOf	new null
// return super	switch
// this	throw true
// try	typeOf	var
// void	while	with
// as	implements	interface
// let package	private
// protected	public static
// yield

// any	boolean	constructor
// declare	get	module
// require	number	set
// string	symbol	type
// from	of