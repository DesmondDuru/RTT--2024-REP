document.title = 'Intro to the DOM';

const h1 = document.querySelector('#heading-1'); // id
const navbar = document.querySelector('.navbar'); // class
const h2 = document.querySelector('h2'); // element name
const ul = document.getElementById('todo-list'); // ids only
const lis = document.querySelectorAll('li'); // returns all matching elements


const visitedLinks = document.querySelectorAll('nav > a');

const footer = ul.nextElementSibling;

console.log(footer);

console.log(h1.innerText);
console.log(ul);
console.log(navbar);
console.log(h2);
console.log(lis);

console.log(visitedLinks);


// NodeList
visitedLinks.forEach(el => console.log(el));
console.log(visitedLinks.length);

// Array
const visitedLinksArr = Array.from(visitedLinks);
visitedLinksArr.map(el => console.log(el));