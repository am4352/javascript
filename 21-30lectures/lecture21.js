var c = 300
if (true) { // block scope 
let a = 10;
const b = 20;
var c = 30;
    console.log("inner :" , a);
    
}
//outside is global scope
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
// console.log(a);
// console.log(b);
console.log(c);// c is accesible outside scope bacause we are using var 





