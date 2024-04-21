

// For Loop

// for (let i = 0; i <= 10; i++) {
//     console.log(`i is: ${i}`);
// }

// for (let counter = 10; counter > 0; counter--) {
//     console.log(`counter is: ${counter}`);
// }

// for (let i = 1; i <= 10; i +=2) {
//     console.log(`Odd number: ${i}`);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         console.log(`Odd number: ${i}`);
//     }
// }

// for (let i = 1; i <= 10; i++) {
    
//     if (i % 2 === 0 ) {
//         console.log(`Even: ${i}`);

//     } else if (i % 2 !== 0) {
//         console.log(`Odd: ${i}`);
//     }
// }

// for (let i = 6; i <= 60; i +=3) {
//     console.log(`${i}`);
// }

// for (let hash = 1; hash <= 7; hash++) {
//     console.log('#'.repeat(hash));
// }


// let hash = '';

// for (let i = 1; i <= 7; i++) {
//     // hash += '#';
//     hash = hash + "#";
//     console.log(hash);
// }


// =============== Loop over Strings ====

const msg = 'Hello World!!';

// console.log(msg.length);
// console.log(msg[0]);

// for (let index = 0; index < msg.length; index++) {
//     console.log(msg[index]);
// }


// For in Loop (objects)
for (const i in msg) {
    // console.log(i);
    // console.log(msg[i]);
}

// For of Loop (strings, arrays)
for (const i of msg) {
    // console.log(i);
}



//? ===== Looping over an object with (For in)

const user = {
    username: 'Alex',
    role: 'admin',
    age: 20,
    isVerified: true,
}

// console.log(user);

// for (const key in user) {
//     console.log(` ${key}: ${user[key]}`);
// }

//? ======= Looping over arrays (For of)

const fruits = ['apple', 'banana', 'mango'];

console.log(fruits);

for (const fruit of fruits) {
    // console.log(fruit);
}


// ==== Continue Keyword
const str = "Hello World";

for (let i = 0; i < str.length; i++) {
	if (str[i] == "l") {
		continue; // jumps to incrementor
        console.log('hi');
	}

	// console.log(str[i]);
}

for (const i in str) {
	if (str[i] == "l") {
		continue; // jumps to next iteration
	}

	// console.log(str[i]);
}

for (const c of str) {
	if (c == "l") {
		continue; // jumps to next iteration
	}

	// console.log(c);
}


//? =========== While Loops =================

let x = 30;

while (x > 0) {
	x /= 2;
	x--;
	
	if (x % 1 != 0) {
		break;
	}
	
	// console.log(x);
}

let i = 0;

while (i <= 10) {
	console.log(i);
    i++; // <====== increment
}

let j = 0;

while (j <= 20) {
	if (j % 2 === 0) {
		console.log(`${j} is even`);
    } else {
		console.log(`${j} is odd`);
    }
	
    j++;
}

//? =========== Do While Loops =================

let c = 10;

do {
	c--;
	console.log(c);
	
	if (c === 5) {
		c--;
		continue
	}
	console.log('Hello');
	
} while (c > 50);




//? =========== Labeled While Loops =================

let d = 1;
let y = 1;

myLoop: while (true) {
	console.log(`Outer loop ${d}.`);
	d++;

	while (true) {
		console.log(`Inner loop ${y}.`);
		y++;

		if (d == 5 && y % 5 == 0) {
			break myLoop;
		} else if (y % 5 == 0) {
			break;
		}
	}
}