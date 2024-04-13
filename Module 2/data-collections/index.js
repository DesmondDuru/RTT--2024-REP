//? ============ Concat
let yourMovies = ["Caddyshack", "Interstellar", "Scarface"];
let myMovies = ["Batman", "The Count of Monte Cristo", "Shrek"];

const ourMovies = myMovies.concat(yourMovies);
console.log(ourMovies);

//? ============ Join
const movieString = yourMovies.join(" and ");
console.log(movieString);

//? ========= Push & Unshift

yourMovies.push("Trading Places", "Antitrust");

yourMovies.unshift("Star Wars", "Batman");
console.log(yourMovies);

//? ========= Pop & Shift
yourMovies.pop();
const lastMovie = yourMovies.pop();
console.log(lastMovie);

yourMovies.shift();
const firstMovie = yourMovies.shift();
console.log(firstMovie);
console.log(yourMovies);

const movies = ["Caddyshack", "Interstellar", "Scarface", "Trading Places"];

//? ========== Splice
const removedMovies = movies.splice(1, 0, "Spaceballs", "Alien");
console.log(removedMovies);

console.log(movies);

//? ========== Slice
const middleMovies = movies.slice(1, 3);
console.log(middleMovies);
console.log(movies);

//? ========== At
// const myMovie = movies[movies.length -1];
const myMovie = movies.at(-1);
console.log(myMovie);

//? ====== reverse
console.log(movies);
console.log(movies.reverse());

//? ========= Flat
const numsArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(numsArray[0]);
console.log(numsArray[0][2]);

console.log(numsArray[1][1]);

console.log(numsArray.flat());

let numArray = [
  [1, 2, 3],
  [4, 5, 6],
  [
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15],
  ],
];
// console.log(numArray.flat().flat());
// const singleArr = numArray.flat().flat();
const singleArr = numArray.flat(2);

console.log(singleArr);
console.log(numArray);

console.log(numArray[2][2][0]);

//? ======== Sort

const nums = [4, 8, 1, 0, -14, 22, 77, 1388, 20];

// const sortedNums = nums.toSorted((a, b) => a - b);
const sortedNums = nums.sort((a, b) => a - b);

console.log(sortedNums);

let newMovies = [
  "Shrek",
  "Caddyshack",
  "Batman",
  "Interstellar",
  "Shrek",
  "Scarface",
  "Spaceballs",
  "Alien",
  "The Count of Monte Cristo",
];

// console.log(newMovies.sort());
console.log(newMovies);

//? ======== IndexOf

// const indexOfMovie = newMovies.indexOf('Shrek');
const indexOfMovie = newMovies.lastIndexOf('Shrek');
console.log(indexOfMovie);

const shrek = newMovies.splice(indexOfMovie, 1);

// console.log(shrek);
console.log(newMovies);



//? ========= forEach 

newMovies.forEach( (movie, index) => {
    console.log(movie);

    //! Illegal Break
    // if (movie === 'Batman') break;

    console.log(`The ${movie} is number ${index} in the US!`);
});

for (let movie of newMovies) {
    console.log(movie);
    if (movie === 'Batman') break;
}


//? ========== Find ==================
const found = newMovies.find(movie => movie.toLowerCase() === 'alien');
console.log(`we found ${found}`);


//? Spread Operator

const aprilMovies = ['Spaceballs', 'The Sting', 'Alien'];

const copyOfAprilMovies = [...aprilMovies];

aprilMovies.push('Fast 27');
console.log(aprilMovies);

console.log(copyOfAprilMovies);



const names  = ["Maria", "Peter", "Elon", 'Elisa', 'Annie',"Elian"];
// console.log(names.sort());
console.log(names.sort((a,b) => a.localeCompare(b)));