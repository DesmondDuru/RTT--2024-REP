// this will be printed to the browser console
console.log('Hello World!');
console.log("Hello World!");

/**
 * This is a multiline comment
 * You can use backticks to print multiline text
 */

console.log(`
    Hello
    World!
`);


// ===== Variables =============

// variable declaration
var message = 'Welcome!';
let user1 = "Max";
let user2 = 'Anna';
const username = 'chris11';

// undefined variable
let userInput;

// variable assignment
userInput = 'Sara';
console.log(userInput);

// userInput = prompt('Enter you name: ');
console.log(userInput);

// constant variable
const userId = 'idx8458jjer';
console.log(userId);

// userId = 'i8rjkeuefue'; -> Error!

console.log(message);
console.log(user1);
console.log(user2);


let postViews = 0;
postViews = 1;
postViews = 2;

console.log(postViews);


// =========== Comparison Ops ===============

console.log(3 == '3');
console.log(3 === '3');

console.log(50 >= 50);

console.log('apple' === 'Apple');

console.log(30 !== '30');

// =========== Logical Ops ===============

let result1 = 3 > 2 && 6 == 6; // thisLogic is true
console.log(result1);

let result2 = 3 > 2 && 6 == 7; // thisLogic is false
console.log(result2);

let result3 = 3 > 2 || 6 == 6; // thisLogic is true
console.log(result3);

let result4 = 3 < 2 || 6 == 7; // thisLogic is true
console.log(result4);


let result5 = !(3 > 2 && 6 == 6); // thisLogic is false
console.log("Result5 ==> ", result5);

// console.log(!true);
// console.log(!false);

let result6 = !(3 > 2 || 6 == 7); // thisLogic is false


// ======== String Concatenation ========
console.log("Hello " + "World");
console.log("This is my favorite number " + 11);
console.log(10 + 20);
console.log("Hello " - "World"); // NaN

const msg = 'Hello!';
msg[0] = 'J';
console.log(msg.toLowerCase());

console.log('a' < 'b'); // true
console.log('x' < 'b'); // false


const frost =
	"Nature’s first green is gold, " +
	"Her hardest hue to hold. " +
	"Her early leaf’s a flower; " +
	"But only so an hour. " +
	"Then leaf subsides to leaf. " +
	"So Eden sank to grief, " +
	"So dawn goes down to day. " +
	"Nothing gold can stay. ";

console.log(frost);


const frost1 =
`Nature’s first green is gold,
Her hardest hue to hold.
Her early leaf’s a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

console.log(frost1);


const quote = "Quote is the day: \n\"this is the quote of the day\" "
console.log(quote);

const a = 5;
const b = 10;

console.log(`
'a' is assigned a value of "${a}," and 'b' is assigned a value of "${b}."
Therefore, 'a' plus 'b' is equal to ${a + b}.`);

let name = 'Alex'
console.log(`Hello ${name.toUpperCase()}!`);