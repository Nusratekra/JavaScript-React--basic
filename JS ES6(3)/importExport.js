/* package.json open korte hobe,
then {
    "type": "module"
} korte hobe[react e lage na]
 then*/
 //(named export/import)
//import {pi, g} from './external.js'; //in react we don't need to write '.js'
//console.log(pi,g);
/* import * as test  from './external.js';
console.log(test);//everything will came as a object*/


//defult export/import
/*const g = 9.8;
export default g;*/
/*
import external,{pi}  from './external.js';
console.log(external,pi);
*/
//function export/import
/*
import external,{pi,myFunction}  from './external.js';
console.log(external,pi);
myFunction();//named
*/
//we can use default one time
import external,{pi,g}  from './external.js';
console.log(g,pi);
external();