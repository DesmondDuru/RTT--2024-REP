// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 12;
const n4 = 13;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);


  // ===Check if all numbers are divisible by 5. Cache the result in a variable ===/

  // The initial numbers that must be verified.
// const n1 = 10;
// const n2 = 15;
// const n3 = 12;
// const n4 = 13;

// Check if all numbers are divisible by 5
const isDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;

// Cache the result in a variable
const allDivisibleBy5 = isDivisibleBy5;

// Log the result
console.log(allDivisibleBy5);

// Check if the first number is larger than the last
const isFirstLargerThanLast = n1 > n4;

// Cache the result in a variable
const firstLargerThanLast = isFirstLargerThanLast;

// Log the result
console.log(firstLargerThanLast);


// Subtract the first number from the second number
const subtractResult = n2 - n1;

// Multiply the result by the third number
const multiplyResult = subtractResult * n3;

// Find the remainder of dividing the result by the fourth number
const remainder = multiplyResult % n4;

// Log the final result
console.log("Result:", remainder);


// Check if any number is over 25
const isUnderOrEqualTo25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;

// Log the result
console.log(isUnderOrEqualTo25);


//===== More Practical Maths===//
// Constants
const distance = 1500; // Total distance of the trip in miles
const fuelBudget = 175; // Fuel budget in dollars
const fuelCostPerGallon = 3; // Average cost of fuel per gallon in dollars

// Fuel efficiency at different speeds
const fuelEfficiency = {
    55: 30, // miles per gallon
    60: 28,
    75: 23
};

// Function to calculate fuel needed for the entire trip
function calculateTotalFuel(speed) {
    return distance / fuelEfficiency[speed];
}

// Function to calculate trip duration in hours
function calculateTripDuration(speed) {
    return distance / speed;
}

// Function to check if budget is enough to cover the fuel expense
function isBudgetEnough(speed) {
    const fuelNeeded = calculateTotalFuel(speed);
    const fuelExpense = fuelNeeded * fuelCostPerGallon;
    return fuelExpense <= fuelBudget;
}

// Main function to answer the questions
function planRoadTrip() {
    const speeds = [55, 60, 75];

    speeds.forEach(speed => {
        const fuelNeeded = calculateTotalFuel(speed);
        const duration = calculateTripDuration(speed);
        const budgetEnough = isBudgetEnough(speed);

        console.log(`At ${speed} mph:`);
        console.log(`- Fuel needed: ${fuelNeeded.toFixed(2)} gallons`);
        console.log(`- Trip duration: ${duration.toFixed(2)} hours`);
        console.log(`- Budget enough: ${budgetEnough ? 'Yes' : 'No'}`);
        console.log();
    });
}

// Run the main function
planRoadTrip();


