console.log('running script..');

const PI = 3.1415;
const radius = 5; 

// Plants double in number every week
// ====================================================================
// Objective: Predict the plant growth after a specific number of weeks
// ====================================================================

const area = PI * (radius * radius); // area where plants are contained
const plantMinSpace = 0.8;

let plantsCount = 20;
// Max Amount of Plants
const maxPlants = Math.floor(area / plantMinSpace);
console.log(`Max plants: ${maxPlants}`);

// after a week
plantsCount *= 2
console.log(plantsCount);

// If statements (Predictions):