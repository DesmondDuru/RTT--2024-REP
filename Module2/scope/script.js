// Global Scope
let z = 1;

// {
//     var x = 1;

//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }

//     console.log(x);  // 2
//   }

// {
//   let x = 1;
//   {
//     let x = 2; // different variable
//     console.log(x); // 2
//     console.log(username);
//   }
//   console.log(x); // 1
// }

// let x = 10;
// let y = 5;

// {
//   let z = x + y;
//   console.log(z);
//   {
//     console.log(z);
//     {
//       console.log(z);
//     }
//   }
// }

// let w = 10;

// {
// 	let y = 5;
// 	{
// 		let z = w + y;
// 		console.log(z);
// 	}
// }

let x = 10;
let username = "max";

{
  let y = 5;
  {
    let z = x + y;
    // console.log(z);
  }
  console.log(z);
}

if (x > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}

if (username === "max") {
  console.log("Hello Max!");
}

let email = "";
console.log(email);

if (email) {
  console.log(`User email is ${email}`);
}

//let userAge = prompt('Enter your age: ');

//userAge = parseInt(userAge);// makes data to number type
//console.log(typeof userAge);

// if (userAge >= 18) {

//     if (email) {
//         console.log('you can come in');
//     } else {
//         console.log('please provide an email');
//     }

// } else {
//     console.log('get out!');
// }

// Else if =======
// if (userAge >= 18) {
//     console.log('you can come in');

// } else if (userAge < 18 && userAge >= 15) {
//     console.log('please call you mom');

// } else {
//     console.log('get out!');
// }

// ============ Switch =======================
let value = "3";

switch (value) {
  
  case "1":
    console.log(`the value is ${value}`);
    break;

  case "2":
    console.log(`the value is ${value}`);
    break;

    case "3":
        console.log(`Value is ${value}`);
        break;

  default:
    console.log(`Default the value is ${value}`);
    break;
}


// let num1 = prompt('Enter a number: ');
// let op = prompt('Enter an operator: ');
// let num2 = prompt('Enter another number: ');
// let result;

// num1 = parseInt(num1);
// num2 = parseInt(num2);

// switch (op) {
//     case '+':
//         result = num1 + num2;
//         break;
//     case '-':
//         result = num1 - num2;
//         break;

//     default:
//         result = `The operator ${op} is not valid!`;

// }

// console.log(result);


// ============= Ternary Operator ==============
let grade = 55;

let result = grade > 65 ? 'pass' : 'fail';

console.log(result);


let num3 = 1;

let isPositive = num3 > 0 ? true : false;

console.log(isPositive);

// User Prompt =============
// let adminUser = prompt('Enter you user name: ');

// adminUser = adminUser.toLowerCase().trim();
// console.log(adminUser);

// const message = adminUser === 'sara' ? 'Hello Sara!' : 'Hello User!';

// console.log(message);


// ============= Error (throw) ===================

// let y = 6;

// try {

//     if (y < 0) {
//         console.log("Negative!");
//     } else {
//         throw "Error - I don't know what I'm doing.";
//     }

// } catch(error) {

//     console.log(error);
//     alert('Please try again!')

// } finally {

//     // optional
//     console.log('Ready to go again!');
// }

// console.log("Does this log?");


let b = 10;

try {
	if (b > 0) {
		let isEven = (b % 2 === 0) ? true : false;
	} else if (b <= 0) {
		throw "Error - Value of 0 or below.";
	}

	console.log(isEven);
} catch (err) {
	console.log(err);
} finally {
	console.log(b);
}

// console.log(novairble);