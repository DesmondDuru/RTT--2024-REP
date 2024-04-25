//
const input = document.getElementById('speed-input');
const startgameBtn = document.getElementById("start-game");
const p = document.querySelector("P");
// const form = document.querySelector('form');

/** 
 * User Input (textarea)
 * /
 input.addEventListener("keypress", function (e) {
    //     
 }


input.addEventListener('keydown', function(e) {
    
    if (e.key !== 'Backspace') {
        console.log(e.key);
    } else {
        e.preventDefault();
    }
});

console.log(input);

form.addEventListener('submit', function(e) {
    e.preventDefault()
    console.log('sending data....');
})