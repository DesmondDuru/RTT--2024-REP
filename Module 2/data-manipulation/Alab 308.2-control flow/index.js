// Constants
const PI = 3.1415;
const radius = 5;
const plantSpaceRequirement = 0.8;
const initialPlantCount = 20;

// Calculate the area of the circle
const areaOfCircle = PI * radius ** 2;

// Calculate the maximum number of plants that can fit in the area
const maxCapacity = areaOfCircle / plantSpaceRequirement;

// Function to predict plant count after a given number of weeks
function predictPlantCount(weeks) {
    return initialPlantCount * (2 ** weeks);
}

// Function to determine action based on plant count
function growthDecision(weeks) {
    const predictedCount = predictPlantCount(weeks);
    const percentCapacity = predictedCount / maxCapacity;

    if (percentCapacity >= 0.8) {
        return `Prune plants to manage growth. Predicted plant count: ${predictedCount}`;
    } else if (percentCapacity >= 0.5) {
        return `Monitor plants, growth rate acceptable. Predicted plant count: ${predictedCount}`;
    } else {
        return `Room to plant more. Predicted plant count: ${predictedCount}`;
    }
}

// Test the program for 1, 2, and 3 weeks
console.log("After 1 week:", growthDecision(1));
console.log("After 2 weeks:", growthDecision(2));
console.log("After 3 weeks:", growthDecision(3));

// const PI = 3.1415; --- Already Defined===
// const plantSpaceRequirement = 0.8; // space in square meters per plant

// Calculate final plant count after 10 weeks
// const initialPlantCount = 100;
const weeks = 10;
const finalPlantCount = initialPlantCount * Math.pow(2, weeks); // 100 * 2^10

// Calculate the total required area for the final plant count
const totalRequiredArea = finalPlantCount * plantSpaceRequirement;

// Calculate the radius for the required area
const requiredRadius = Math.sqrt(totalRequiredArea / PI);

console.log(`After 10 weeks with 100 initial plants and no pruning:`);
console.log(`Total Plant Count: ${finalPlantCount}`);
console.log(`Total Required Area: ${totalRequiredArea.toFixed(2)} square meters`);
console.log(`Required Radius of the New Garden: ${requiredRadius.toFixed(2)} meters`);

// ====== Errors in Judgement ======  //

// const PI = 3.1415;
// const plantSpaceRequirement = 0.8; // space in square meters per plant
// const radius = 5; // original radius of the garden in meters

try {
    // Calculate final plant count after 10 weeks
    const initialPlantCount = 100;
    const weeks = 10;
    const finalPlantCount = initialPlantCount * Math.pow(2, weeks); // 100 * 2^10

    // Calculate the total required area for the final plant count
    const totalRequiredArea = finalPlantCount * plantSpaceRequirement;

    // Check if the total required area exceeds the available area
    if (totalRequiredArea > (PI * radius ** 2)) {
        throw new Error("Insufficient space in the original garden to accommodate all the plants.");
    }

    // Calculate the radius for the required area
    const requiredRadius = Math.sqrt(totalRequiredArea / PI);

    console.log(`After 10 weeks with 100 initial plants and no pruning:`);
    console.log(`Total Plant Count: ${finalPlantCount}`);
    console.log(`Total Required Area: ${totalRequiredArea.toFixed(2)} square meters`);
    console.log(`Required Radius of the New Garden: ${requiredRadius.toFixed(2)} meters`);
} catch (error) {
    console.error(error.message);
}

// const PI = 3.1415;
// const plantSpaceRequirement = 0.8; // space in square meters per plant
// const initialPlantCount = 100;
const gardenRadius = 5; // meters

// Function to calculate the area of a circle given the radius
function calculateCircleArea(radius) {
    return PI * Math.pow(radius, 2);
}

// Main logic wrapped in a try-catch block
try {
    // Calculate the area of the current garden
    const currentGardenArea = calculateCircleArea(gardenRadius);

    // Calculate the total required area for 100 plants
    const totalRequiredArea = initialPlantCount * plantSpaceRequirement;

    // Check if the current garden area can accommodate the required area for 100 plants
    if (totalRequiredArea > currentGardenArea) {
        throw new Error("The current garden area is insufficient to accommodate 100 plants.");
    }

    console.log("The garden can successfully accommodate 100 plants.");
} catch (error) {
    console.error("Error:", error.message);
}
