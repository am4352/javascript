const promiseone = new Promise(function (resolve, reject) {
    //do an async task
    //db calls , cryptographyy , network
    setTimeout(function () {
        console.log('async task is complete');
        resolve()        
    }, 1000)

})
promiseone.then(function () {
    console.log("promise consumed");
    
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("async task 2");
        resolve()
        
    }, 1000);

})

.then(function () {
    console.log("async 2 resolved");
})
const promisethree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username: "hello" , email :"anuj@gmail.com"})
    }, 1000);
})

promisethree.then((user) => {
    console.log(user)//parameter we are passing in resolve is printed here 
})


const promicefour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({username: "hitesh" , password:"123"})
        }
        else {
            reject('ERROR: something went wrong')
        }
    }, 1000);
})

promicefour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
})
.finally()




