/*
    Console.log the values of each property of "kitten"
*/

let kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown"
};

// YOUR CODE HERE
const json=JSON.stringify(kitten, null, 2)
console.log(json);
