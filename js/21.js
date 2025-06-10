// Ternary operator
const auth = false;

const balance = 1000;
const pay = 1200;
const ccard = true;

/* auth
  ? console.log("User authenticated")
  : console.log("Not authenticated, Go to login"); */

balance > pay || ccard
  ? console.log("You can pay")
  : console.log("You cannot pay");
