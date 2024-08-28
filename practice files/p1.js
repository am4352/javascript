
const mysym = Symbol("key1")

const object = {
    name: "anuj",
    fullname: "anujmishra",
    email: "anuj@google.com",
    [mysym] : "key2",
    age : 18
}
console.log(object.name);
console.log(object[mysym]);

object.greeting = function ()
{
    console.log("hello js user");
    
}
object.twogreeting = function ()
{
    console.log(`hello is am anujmishra ${this.name}`);
    
}
    
console.log(object.greeting());
console.log(object.twogreeting());






