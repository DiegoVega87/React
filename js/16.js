/* function sum(num1 = 0, num2 = 0) {
  return num1 + num2;
}
 */
/* const sum = function (num1 = 0, num2 = 0) {
  return num1 + num2;
};
 */

const sum2 = (num1 = 0, num2 = 0) => num1 + num2; // Does not need return keyword.

const result = sum2(10, 20);

console.log(result);
