"use strict";
const technologies = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];
/* console.table(technologies);
technologies[10] = "Nest.js";
console.table(technologies);

// Add something to the end of the Array using built in methods
technologies.push("Java"); // Mutates the array

// When using react, it not recommended to use mutating methods
// Alternativa
const newArray = [...technologies, "Nest.js"];
console.log(technologies);

console.table(newArray); */

// Remove the first element
//technologies.shift();
//console.table(technologies);

/* const technologies2 = technologies.filter(function (tech) {
  if (tech !== "HTML") {
    return tech;
  }
}); */

/* console.log(technologies2); */

const technologies2 = technologies.map(function (tech) {
  if (tech === "Node.js") {
    return "Nest.js";
  } else {
    return tech;
  }
});

console.log(technologies2);
