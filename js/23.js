// Short circut evaluation
const auth = true;

const user = {}; // Empty object results in true

user && console.log("Authenticated user"); // Short circuit evaluation

user ? console.log("Authenticated") : console.log("Not authenticated");
