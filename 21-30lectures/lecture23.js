const user = {
    username: "anuj",
    price: 999,
    
    welcomemessage: function ()
    {
        console.log(`${this.username}, welcome to website`);
        
        }

}

// user.welcomemessage()
// user.username = "sam"
// console.log(user.username);
// user.welcomemessage()
console.log(this);  //this refer an empty object

/*function anuj() {

    let username = "anuj"
    console.log(this.username);    
}
anuj()*/

const chai = () =>
{
  let username = "anuj"
    console.log(this.username);  
}
// chai()

const addtwo = (num1, num2) => num1 + num2;
const add = (num1, num2) => ({username : "anuj"}) ;

console.log(addtwo(6, 5));
console.log(add(5,3));






