// ECMAScript
/**
 * Steps: add type = "module" after name of the file in the script contianed in the html file.
 * i.e:  <script src="js/24.js" type="module"></script>
 * add export keyword to function declarations
 * add import keywords to the file that will use the imported functions
 * i.e import {sum} from "./functions.js"
 */

import { sum as sumFunction, substract } from "./functions.js";

const result = sumFunction(20, 10);

console.log(result);
