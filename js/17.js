const technologies = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];
const numbers = [10, 20, 30];

// Filter -> get an element out of the array or keep one
const newArray = technologies.filter((tech) => tech !== "HTML");
console.log(newArray);

const result = numbers.filter((number) => number !== 15);
console.log(result);

// Includes
const result2 = technologies.includes("CSS");
console.log(result2);

// Some - Returns if at least one meets the condition
const resutl3 = numbers.some((number) => number > 15);
console.log(resutl3);

// Find -> returns the first element that meets the condition
const result4 = numbers.find((number) => number > 15);
console.log(result4);

// Every -> returns true if all elements meet the condition
const result5 = numbers.every((number) => number > 5);
console.log(result5);

// Reduce -> Returns an accumulated of the total
const result6 = numbers.reduce((total, number) => total + number, 0);

console.log(result6);
