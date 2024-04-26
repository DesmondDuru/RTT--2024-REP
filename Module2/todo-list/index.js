const app = document.getElementById('app');
const ul = document.createElement('ul');


// LIs
const li = document.createElement('li');
li.textContent = 'Learn the DOM';


const li2 = document.createElement('li')
li2.textContent = 'Learn HTML';

const li3 = document.createElement('li');
li3.textContent = 'Learn JS';

// Appending
ul.appendChild(li); // adds to the end
ul.prepend(li2); // adds to the beginning
ul.insertBefore(li3, ul.firstChild.nextSibling); // insert before the selected child
app.appendChild(ul);



console.log(app);

// =============================================================
const comments = document.querySelector('#comments');
const commentsUl = document.createElement('ul');


const userComments = ['amazing!', 'great work!', 'super!'];

for (let i = 0; i < userComments.length; i++) {
    const li = document.createElement('li');
    li.textContent = userComments[i];
    commentsUl.appendChild(li);
}

comments.appendChild(commentsUl);

// ========== Replacing Child Elements ==============
const newComment = document.createElement('li');
newComment.textContent = 'Hello!';
console.log(newComment);

commentsUl.replaceChild(newComment, commentsUl.firstChild);

// ========= innerHTML vs textContent ========================
const liWithHTML = document.createElement('li');
liWithHTML.innerHTML = '<b>This Amazing!</b>';

console.log(liWithHTML);
commentsUl.appendChild(liWithHTML)

console.dir(commentsUl)
commentsUl.style.backgroundColor = 'royalblue';
commentsUl.style.padding = '15px';
commentsUl.style.color = '#fff';

// ==== Attributes =====================================
const img = document.createElement('img');
// set attribute
img.setAttribute('src', 'https://images.unsplash.com/photo-1713283365745-a727fb26c52f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8');

img.setAttribute('alt', 'not my home');

// check if attribute exist
console.log(img.hasAttribute('alt'));

document.body.appendChild(img);

// ===
const a = document.createElement('a');

// SET Attribute
a.setAttribute('href', 'https://www.unsplash.com');
a.setAttribute('target', '_blank');
a.textContent = 'See more photos';

console.log(a.hasAttribute('src'));

// GET Attribute
const url = a.getAttribute('href');
console.log(url);

document.body.appendChild(a);

// ============= ClassList =========================

document.body.classList.add('container');
document.body.classList.remove('container');
document.body.classList.toggle('container');
console.log(document.body.classList.contains('wrapper'));
// ===
document.body.classList.replace('container', 'wrapper');

console.log(document.body.classList);
// document.body.setAttribute('class', 'container');
// document.body.setAttribute('class', '');

// =========== Remove Elements ======= 
// while(commentsUl.firstChild) {
//     commentsUl.removeChild(commentsUl.firstChild);
// }