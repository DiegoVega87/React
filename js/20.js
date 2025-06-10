const balance = 1000;
const pay = 5000;
const card = true;

/**
 * Logicar Or and Logical And
 * || Or - At least one meets the condition
 * && And - True when met all the conditions
 */
if (balance > pay || card) {
  console.log("You can pay");
} else {
  console.log("Insuficient funds");
}
