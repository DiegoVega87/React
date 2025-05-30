// Array traversing
const technologies = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "TypeScript",
];

// Forloop
/* for (let i = 0; i < technologies.length; i++) {
  console.log(technologies.at(i));
}
 */
// Foreach
technologies.forEach(function (tech) {
  console.log(tech);
});

//.Map => iterates over the array but returns a new one based on the function´s specifications.
const arrayMap = technologies.map(function (tech) {
  return tech;
});

console.log(arrayMap);

// for ...of
for (let tech of technologies) {
  console.log(tech);
}
