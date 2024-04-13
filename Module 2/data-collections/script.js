//? ========= Arrays Definition 

const names = ['ana','john', 'alex'];

console.log(names);

console.log(names.length);

// console.log(names[0]);


for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//
const movies = ['Caddyshack', 'Interstellar', 'Scarface'];

console.log(movies);

movies[0] = 'Batman';

movies[3] = 'Toy Story';

console.log(movies);

movies[movies.length] = 'Fast 5';

console.log(movies);

// 
let firstMovie = movies[0];
console.log(firstMovie);


// movies[10] = 'Shrek';

// movies[0] = 'Batman';
// movies.length = 0;

console.log(movies);

for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}


for (let movie of movies) {
    console.log(movie.toLowerCase());

    if (movie.toLowerCase() === 'Toy Story'.toLowerCase()) {
        console.log(`Now playing ${movie}`);
    }
}


const myColors = ['red', 'blue', 'green'];
const yourColors = ['yellow', 'purple', 'pink'];


console.log(myColors);
console.log(yourColors);


const ourColors = myColors.concat(yourColors);

console.log(ourColors);


const myColorsCopy = myColors.concat(); // return a copy

myColors.push('gray');

console.log(myColors);
console.log(myColorsCopy);


const allColorsString = ourColors.join(', ');
console.log(allColorsString);

console.log(`I like ${allColorsString}`);

// Push Pop, shift, unshift ========================

const topMovies = ['Batman'];

// add to the end of the array
topMovies.push('Trading Places', 'Antitrust');

// adds to the start of the array
topMovies.unshift('Toy Story');

// remove from the end of the array
const lastMovie = topMovies.pop();
console.log(lastMovie);

// remove from the start of the array
const movieOne = topMovies.shift();
console.log(movieOne);

console.log(topMovies);