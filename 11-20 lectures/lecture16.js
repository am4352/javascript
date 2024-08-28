//singleton
//object literals
// Object.create   ->used constructor method
const mysym = Symbol("key1")//symbol created, we have to define it here to use in 

const jsuser = {
    name: "anuj",
    "fullname":"anuj mishra",
    age: 40,
    [mysym]: "mykey1",// square bracket 
    location: "noide",
    isloggedin: false,
    lastlogindays: ["monday", "saturday"],
    email:"anuj@gmail.com"

} //object created
// console.log(jsuser.name);
// console.log(jsuser.age);
// console.log(jsuser["name"]);
// console.log(jsuser[mysym]); //[] -> symbol is used in symbols
// console.log(typeof (jsuser[mysym]));
jsuser.email = "am4352@srmist.edu.in"//changing the value of email
console.log(jsuser.email);
// Object.freeze(jsuser)//we freezed the value of objects 
console.log(jsuser);

jsuser.greeting = function ()//functions
{
    console.log("hello js user");
}
jsuser.greetingtwo = function () {
    console.log(`hello js users, ${this.name}`);//string interpolation
}
console.log(jsuser.greeting()); // () -> is used to invoke function 
console.log(jsuser.greetingtwo());//calling function



    












