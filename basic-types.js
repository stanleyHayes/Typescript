//Boolean data type which typescript calls boolean. boolean has only two valid values. true and false
var isValid = true;
var hasCompleted = false;
console.log("isValid: " + isValid);
console.log("hasCompleted: " + hasCompleted);
//All numbers in typescript are floating point values. 
var count = 20;
var speed = 13.6;
var binaryTwo = 2;
var octalNine = 9;
var hexTwenty = 0x14;
console.log("20 in decimal is " + count);
console.log("The initial speed of the vehicle was " + speed);
console.log("0b10 in decimal is " + binaryTwo);
console.log("0o11 in octal is " + octalNine);
console.log("0x14 in decimal is " + hexTwenty);
//Typescript uses string to represent textual data. The textual data can either be surrounded with single quote (') or double quote (")
//Typescript also used templated strings that can span multiple lines and can contain expressions of the form ${expression}. Such textual data are surrounded by backticks (`)
var fullName = "Stanley Hayford";
var preferredName = "Userma'atre Setepenre";
var favoriteQuote = 'If you stop learning, you start dying';
console.log("I am " + fullName + " but prefer to be called " + preferredName + ". My favorite quote is \"" + favoriteQuote + "\"");
//Arrays can be written in one of two forms, first you use the type of elements followed by [] to denote an array of that element type
//The second way uses a generic array type Array<elemType>
var names = ["Zeus", "Jupiter", "Ra", "Userma'atre", "Setepenre"];
var roleModels = ["Adolf Hitler", "Alan Turing", "Cristiano Ronaldo"];
//Tuples allow an array of fixed number of elements whose types are known but need not e same
var studentMark = ["Stanley Hayford", 98];
//Enum is a way to give friendly names to numeric values
var Day;
(function (Day) {
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
    Day[Day["Sunday"] = 7] = "Sunday";
})(Day || (Day = {}));
;
var firstDayOfWeek = Day.Sunday;
console.log(firstDayOfWeek);
//The generic name of a certain numeric value can e acquired using its numeric value;
var nameOfFirstDayOfWeek = Day[firstDayOfWeek];
console.log(nameOfFirstDayOfWeek);
//If the type of data is unknown, you could disable type checking during compile time with a type of any
var notSure = 5;
notSure = "Now String wth";
notSure = true;
console.log(notSure);
//void is the absence of having any type at all. This is commonly used as the return type of functions
function printFullName(firstName, lastName) {
    console.log(firstName + " " + lastName);
}
printFullName("Userma'atre", "Setepenre");
//there is also the null and undefined types which are not very useful on their own
var nullValue = null;
var undefinedValue = undefined;
//object is a type that represents the non-primitive type, 
//Type assertions are a ay to tell the compiler that you know what you're doing.
//A type assertion is like a type cast in other languages, but performs no special checking or
//reconstructing of data.
//Type assertions come in 2 forms angle-bracket syntax and the as syntax
var someValue = "this is a string";
var stringLength = someValue.length;
var strlen = someValue.length;
