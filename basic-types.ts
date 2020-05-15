//Boolean data type which typescript calls boolean. boolean has only two valid values. true and false
var isValid: boolean = true;
var hasCompleted: boolean = false;

console.log(`isValid: ${isValid}`);
console.log(`hasCompleted: ${hasCompleted}`);

//All numbers in typescript are floating point values. 
var count: number = 20;
var speed: number = 13.6;
var binaryTwo: number = 0b10;
var octalNine: number = 0o11;
var hexTwenty: number = 0x14;

console.log(`20 in decimal is ${count}`);
console.log(`The initial speed of the vehicle was ${speed}`);
console.log(`0b10 in decimal is ${binaryTwo}`);
console.log(`0o11 in octal is ${octalNine}`);
console.log(`0x14 in decimal is ${hexTwenty}`);

//Typescript uses string to represent textual data. The textual data can either be surrounded with single quote (') or double quote (")
//Typescript also used templated strings that can span multiple lines and can contain expressions of the form ${expression}. Such textual data are surrounded by backticks (`)
var fullName: string = "Stanley Hayford";
var preferredName: string = "Userma'atre Setepenre";
var favoriteQuote: string = 'If you stop learning, you start dying';

console.log(`I am ${fullName} but prefer to be called ${preferredName}. My favorite quote is "${favoriteQuote}"`);


//Arrays can be written in one of two forms, first you use the type of elements followed by [] to denote an array of that element type
//The second way uses a generic array type Array<elemType>

let names : Array<string> = ["Zeus", "Jupiter", "Ra", "Userma'atre", "Setepenre"];

let roleModels: string[] = ["Adolf Hitler", "Alan Turing", "Cristiano Ronaldo"];


//Tuples allow an array of fixed number of elements whose types are known but need not e same

let studentMark: [string, number] = ["Stanley Hayford", 98];

//Enum is a way to give friendly names to numeric values

enum Day {Monday = 1, Tuesday = 2, Wednesday = 3, Thursday = 4, Friday = 5, Saturday = 6, Sunday = 7};

let firstDayOfWeek = Day.Sunday;
console.log(firstDayOfWeek);

//The generic name of a certain numeric value can e acquired using its numeric value;
let nameOfFirstDayOfWeek = Day[firstDayOfWeek];
console.log(nameOfFirstDayOfWeek);


//If the type of data is unknown, you could disable type checking during compile time with a type of any

let notSure: any = 5;
notSure = "Now String wth";
notSure = true;

console.log(notSure);


//void is the absence of having any type at all. This is commonly used as the return type of functions

function printFullName(firstName: string, lastName: string): void{
    console.log(`${firstName} ${lastName}`);
}

printFullName("Userma'atre", "Setepenre");

//there is also the null and undefined types which are not very useful on their own
let nullValue: null = null;
let undefinedValue: undefined = undefined;

//object is a type that represents the non-primitive type, 


//Type assertions are a ay to tell the compiler that you know what you're doing.
//A type assertion is like a type cast in other languages, but performs no special checking or
//reconstructing of data.
//Type assertions come in 2 forms angle-bracket syntax and the as syntax

let someValue: any = "this is a string";
let stringLength: number = (<string>someValue).length;

let strlen: number = (someValue as string).length;