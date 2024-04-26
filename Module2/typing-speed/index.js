// Global variables
const input = document.getElementById("speed-input");
const startGameBtn = document.getElementById("start-game");
const p = document.querySelector("p");
const displayTimer = document.getElementById("display-timer");
let timer;
let intervalId;


// compares the target text and the user text
function compareText(e) {
  console.dir(e.target.value);
  console.log(e.target.value === p.innerText);
  // check
  if (e.target.value === p.innerText) {
      clearInterval(intervalId); //stops timer
  }
}


// Start game
function startGame(event) {
    console.log("start....");
    p.style.display = "block"; // show the hidden text
  
    const start = Date.now(); // create new date

    // set a interval for every second (1000 milliseconds)
     intervalId = setInterval(() => {
      const milliSecs = Date.now() - start; 
      displayTimer.innerHTML = `<h3>Time: ${Math.floor(milliSecs / 1000)}</h3>`
    }, 1000);
  }


// ===== Event Listeners
input.addEventListener("input", compareText); // <-- input event runs every time the value changes / no need for setTimeout 
startGameBtn.addEventListener("click", startGame);