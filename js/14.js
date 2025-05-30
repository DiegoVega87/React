// Function expressions
/* function sum(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
} */

const sum = function (num1 = 0, num2 = 0) {
  console.log(num1 + num2);
};

sum(10, 20);
sum(300, 1);
sum(100);
/* Junior Question */
/*
What is the difference between 
function sum(num1 = 0, num2 = 0) {
  console.log(num1 + num2);
}

and

const sum = function (num1 = 0, num2 = 0) {
  console.log(num1 + num2);
};

If you try to call the function expression before declaring it, you will get an error saying that you are trying to access a variable that has not been declared. 
On the other hand, this does not happen when declaring a function after using it. JavaScript first reads the functions and then runs the calls, making it possible to write the calls before declaring the functions.

*/
