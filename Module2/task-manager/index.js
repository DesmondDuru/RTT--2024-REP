console.log(this); // global window object

const signInForm = document.getElementById('signin');
console.log(signInForm);

const user = {
    email: 'user1@gmail.com',
    username: 'user1',
    role: 'default',
}

function updateUserName(userObject, newUsername) {
    userObject.username = newUsername
}

updateUserName(user, 'powerUser');

console.log(user)


class User {
    username = 'user33';

    email = 'user33@gmail.com';

    role = 'admin';

    updateusername = function() {
        console.log('......');
    };

    printUserInfo = function () {
        console.log('....');
    }

}

const user33 = new User();
const user34 = new User();
console.log(user33);
console.log(user34);

console.log(user33 === user34);






// ============== PERSON OBJECT ============
const person = {
    name: {
        first: 'Elyin',
        Last: 'kemble',
    },
    age: 32,
    location: {
        city: 'Garland',
        state: 'Texas',
        zip: 75040
    },
    occupation: 'Front-End Developer'
}

function introduce() {
    console.log(this);
    console.log('Hello, my name is ${this.name.first} ${tis.name.last}, and')
}