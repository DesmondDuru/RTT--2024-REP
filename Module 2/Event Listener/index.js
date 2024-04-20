// Elements
const taskInput = document.getElementById("task-input");
const createTaskBtn = document.getElementById("create-task-btn");
const taskListUL = document.getElementById("task-list");

// Register the event listener
createTaskBtn.addEventListener("click", addTask);
document.body.addEventListener('pointermove', handleMove);

function handleMove(event) {
  // console.log(event);
  console.log('Pointer X: ', event.x);
  console.log('Pointer Y', event.y);
}

// Event Handler
function addTask(event) {
  // console.log(this.innerText);
  console.log(event);
  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.textContent = taskInput.value;
  taskListUL.appendChild(li);
  // clear input value
  taskInput.value = "";
  // focus back to the input
  taskInput.focus();
}