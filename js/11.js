// Desturcturing Arrays
const technologies = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];
const react = technologies[3];

// Destructuring --> Asigns according to the position. ie. nodejs will contain JavaScript
const [html, css, nodejs] = technologies;
// better not to create unnecessary variables
const [, , , reactjs] = technologies;

console.log(reactjs);
