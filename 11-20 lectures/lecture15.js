const marvel_heroes = ["thor", "ironman", "spiderman"];
const dcheroes = ["superman", "flash", "batman"];
// marvel_heroes.push(dcheroes)
// console.log(marvel_heroes); 
// const allheroes = marvel_heroes.concat(dcheroes)//used to join array (concat)
// console.log(allheroes);
const all_new_heroes = [...marvel_heroes, ...dcheroes ]
console.log(all_new_heroes);
const anotherarray = [1, 2, 3, [4, 5, 6], 7, [5, 6]];
console.log(anotherarray);
const realarray  = anotherarray.flat(Infinity)
console.log(realarray);
console.log(Array.isArray("ANUJ"));//check if its an array 
console.log(Array.from("anuj"));//converts into array
console.log(Array.from({name:"anuj"}))//interestig case (gives[])

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));// convert arrays from values;







