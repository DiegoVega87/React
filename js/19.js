/**
 *
 * == (Non-strict comparator) => Checks the value
 * === Strictly equal (Strict comparator) => Chcsk the value and the datatype. ====> ALways recomended!
 * !== Not equal
 */

const num1 = 20;
const num2 = "20";

console.log(typeof num1);
console.log(typeof num2);
if (num1 == num2) {
  console.log("Yes, they are equal");
} else {
  console.log("No, they are different");
}

const num3 = 20;
const num4 = 20;
console.log(typeof num3);
console.log(typeof num4);
if (num3 === num4) {
  console.log("Yes, they are equal");
} else {
  console.log("No, they are different");
}
