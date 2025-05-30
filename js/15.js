const sum = function (num1 = 0, num2 = 0) {
  console.log(num1 + num2);
};

sum(10, 20);
sum(300, 1);
sum(100);

//Arrow Function
const sum2 = (num1 = 0, num2 = 0) => console.log(num1 + num2);

sum2(10, 20);
sum2(300, 1);
sum2(100);
