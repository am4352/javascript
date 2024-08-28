const array = [1, 2, 3, 5,6,8, "anuj"]
// console.log(array);
// console.log(array[1])
// array.unshift(9)
// console.log(array);
const newarray = array.join()// join converts array into string 
console.log(array);
console.log(newarray);// 
console.log("A ", array);
const myn1 = array.slice(1, 3)
console.log("b", myn1);
const myn2 = array.splice(1, 3)// it modify the complete array and remove the entered index 
console.log(array);
console.log(myn2);









