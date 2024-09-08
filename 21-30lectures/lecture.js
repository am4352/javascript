const myobject = {
   js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
   swift:"swift by apple",

}//key is js, cpp
// in each loop, myobject[key] retrieves the value associated with that key.

for (const key in myobject) {   
 console.log(`${key} shortcut is for ${myobject[key]}`);
 
}

const programming = ["js", "rb", "py"]
for (const key in programming) {
//    console.log(`${key} hello ${programming[key]}  `);
   
}
const map = new Map()  //You can't use a for...in loop to iterate over a Map because for...in is designed to iterate over the enumerable properties of objects, not for data structures like Map that store key-value pairs.



map.set(`IN`, "INDIA") //holds unique value 

map.set(`IN`, "INDIA")
map.set(`USA`, "united states of america")
map.set(`USA`, "united states of america")
for (const key in map) { // map is not iteratable 
    console.log(key);
    
}











