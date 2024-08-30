// function saymyname() {
//     console.log("a");
//     console.log("n");
//     console.log("u");
//     console.log("j");
// } 
     
// saymyname() //function executed

// function addtwonumber(number1, number2)
// {
//     console.log(number1+number2)
// }

function addtwonumber(number1, number2)
{
    let result = number1 + number2
    return result
}
addtwonumber(3, "4")  //4 is treated as string
addtwonumber(3, "a")
addtwonumber(3, null)

const result = addtwonumber(3, 5)
console.log(result);
function loginusermessage(username)
{
    if (!username) {
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`//string interpolation
}
// console.log(loginusermessage("anuj"))
console.log(loginusermessage("anujmishra"));


