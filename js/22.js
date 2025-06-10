// Optional Chaining (?)
const student = {
  name: "Juan",
  class: "Programming 1",
  pass: true,
  exams: {
    exam1: 90,
  },
};

console.log(student.exams?.exam1); // Does exam exist? if so, print exam1!
console.log("After STUDENT");
// Nullish coalescing operator (??)
const page = null ?? 1; // Returns 1 when null or undefined

console.log(page);
