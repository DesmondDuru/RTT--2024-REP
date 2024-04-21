function printGreeting(name) {
    return "Hello there, " + name + "!";
}

console.log(printGreeting("Double D"));



function printCool(name) {
    console.log(name + " is cool");
}

printCool("Desmond D");

// ======== More Functions =======



function calculateCube(sideLength) {
    return sideLength * sideLength * sideLength;
}

console.log(calculateCube(4));

function isVowel(character) {
    // Convert the character to lowercase to handle both upper and lower case vowels
    character = character.toLowerCase();
    
    // Array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    // Check if the character is a vowel
    return vowels.includes(character);
}

console.log(isVowel("a")); // true
console.log(isVowel("e")); // true
console.log(isVowel("i")); // true
console.log(isVowel("o")); // true
console.log(isVowel("u")); // true
console.log(isVowel("A")); // true
console.log(isVowel("E")); // true
console.log(isVowel("I")); // true
console.log(isVowel("O")); // true
console.log(isVowel("U")); // true
console.log(isVowel("b")); // false
console.log(isVowel("z")); // false


function getTwoLengths(str1, str2) {
    // Create an array to store the lengths of the strings
    var lengths = [];
    
    // Push the lengths of the strings into the array
    lengths.push(str1.length);
    lengths.push(str2.length);
    
    return lengths;
}

console.log(getTwoLengths("Hank", "Hippopopalous")); // Output: [4, 13]



function getMultipleLengths(arr) {
    // Create an empty array to store the lengths of the strings
    var lengths = [];
    
    // Iterate over each string in the array
    for (var i = 0; i < arr.length; i++) {
        // Push the length of the current string into the lengths array
        lengths.push(arr[i].length);
    }
    
    return lengths;
}

console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); // Output: [5, 4, 2, 2, 4]

