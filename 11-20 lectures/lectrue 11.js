const name = "anuj"
const repocount = 50
console.log(`hello my name is ${name} and my repo count is ${repocount}`);

// console.log(name  + repocount);
const gamename = new String('anuj mishra')
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2))
console.log(gamename.indexOf('n'));
const newstring = gamename.substring(0,4)//last value 4 is not included // we cant give negative value here
console.log(newstring);
const anotherstring = gamename.slice(-8, 4)
console.log(anotherstring);
const newStringone = "    hitesh   "
console.log(newStringone);
console.log(newStringone.trim());
const url = "www.anujmishra.com"
console.log(url.replace('uj', 'uj-'))// used to replace the word of a string 
console.log(url.includes('anuj'));
console.log(gamename.split(' '))











