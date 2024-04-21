

// let learner1Scores = [10, 20, 0, -10, 15, 28, -1000, 42, 7];
// let learner2Scores = [8, 5, 0, -10, 15, 28, -1000, 42, 7];
// let learner3Scores = [10, 45, 0, -105, 15, 28, -1000, 42, 7];


// function returnEven(array) {
//     for (let i in array) {
//         if (array[i] % 2 !== 0) {
//             array.splice(i, 1);
//         }
//     }

//     return array;
// }

// console.log(returnEven(learner1Scores));
// console.log(returnEven(learner2Scores));
// console.log(returnEven(learner3Scores));

// console.log(learner1Scores);
// =========================================

let numArray = [
    { value: 10 },
    { value: 20 },
    { value: 0 },
    { value: -10 }, 
    { value: 15 }, 
    { value: 28 }, 
    { value: -1000 },
    { value: 42 },
    { value: 7 }
];

function returnEven(array) {
    let newArray = [];

    array.forEach((element) => {
        if (element.value % 2 == 0) {
            newArray.push(element);
        }
    });

    return newArray;
}

// console.log(returnEven(numArray));
let newArray = returnEven(numArray);

newArray[0].value += 10;
numArray[2].value = 10000000

console.log(newArray === numArray);
console.log(numArray);
console.log(newArray);

const nums = [1,2,3];
const newNums = [...nums]


const numsArray = [ [1], [2], [3]];

const newArr = [...numsArray];

// console.log(newArr[0][0]);
newArr[0][0] = 100;
console.log(numsArray);

// =============

const myPerson = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

function copyPerson(personToCopy) {
    const personString = JSON.stringify(personToCopy);
    console.log(personString);
    return JSON.parse(personString)
}

const copiedPerson = copyPerson(myPerson);

console.log(myPerson === copiedPerson);
console.log(myPerson === myPerson);