// const tinderuser = newobject()
const tinderuser = {}
tinderuser.id = "123abc"
tinderuser.name = "sammy"
tinderuser.isloggedin = false

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {//nested objects
            firstname: "anuj",
            lastname:"mishra"
        }
        
     }
}
console.log(regularuser.fullname.userfullname.lastname);// use dots to access full name
const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }
const obj3 = {5:"a" , 6:"b"}
// const obj3 = { obj1, obj2 }
const obj4 = Object.assign({},obj1, obj2, obj3)
console.log(obj4);
const obj5 = { ...obj1, ...obj2 }
console.log(obj5);
const user = {
    id: 1,
    email:"anuj@yahoo.com"
}


console.log(tinderuser);
console.log(Object.values(tinderuser));//output data type is array
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin'));//check if it is present or not












